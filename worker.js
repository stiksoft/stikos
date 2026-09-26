/**
 * STIK Ponudbe – posrednik za branje spletnih strani (Cloudflare Worker, brezplačno)
 * Uporaba:  https://<ime>.<racun>.workers.dev/?url=https://stran.si/izdelek
 *           POST https://<ime>.<racun>.workers.dev/deepl   (prevodi DeepL)
 *           POST https://<ime>.<racun>.workers.dev/ai      (kratki opisi s Claude AI)
 *           POST https://<ime>.<racun>.workers.dev/brevo   (e-poštne kampanje prek Brevo)
 *
 * Brevo (neobvezno): API ključ (Brevo → SMTP & API → API keys) shrani kot skrivnost BREVO_KEY.
 *
 * Claude AI (neobvezno): Anthropic API ključ shrani kot skrivnost ANTHROPIC_KEY.
 *
 * DeepL (neobvezno): API ključ shrani v Worker kot skrivnost
 *   Settings → Variables and Secrets → Add → Secret, ime DEEPL_KEY
 * ali ga vpiši v aplikaciji (Nastavitve → Jezik in prevajanje).
 *
 * Varnost: v ALLOWED vpiši naslove, s katerih teče aplikacija, da posrednika
 * ne more zlorabiti kdorkoli. Prazen seznam = dovoli vse.
 */
const ALLOWED = [
  'https://stiksoft.github.io',
  'http://localhost',
  'null' // aplikacija odprta neposredno z diska (file://)
];

export default {
  async fetch(request, env = {}) {
    const origin = request.headers.get('Origin') || '';
    const ok = !ALLOWED.length || !origin || ALLOWED.some(a => origin === a || origin.startsWith(a + ':'));
    const cors = {
      'Access-Control-Allow-Origin': ok ? (origin || '*') : 'null',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Expose-Headers': 'X-Final-URL',
      'Vary': 'Origin'
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (!ok) return new Response('Dostop ni dovoljen', { status: 403, headers: cors });

    const reqUrl = new URL(request.url);
    if (reqUrl.pathname.replace(/\/+$/, '') === '/deepl') return deepl(request, env, cors);
    if (reqUrl.pathname.replace(/\/+$/, '') === '/ai') return ai(request, env, cors);
    if (reqUrl.pathname.replace(/\/+$/, '') === '/brevo') return brevo(request, env, cors);

    const target = reqUrl.searchParams.get('url');
    if (!target || !/^https?:\/\//i.test(target)) {
      return new Response('Manjka parameter ?url=', { status: 400, headers: cors });
    }
    try {
      const res = await fetch(target, {
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/json,image/avif,image/webp,image/*,*/*;q=0.8',
          'Accept-Language': 'sl-SI,sl;q=0.9,en;q=0.8'
        },
        cf: { cacheTtl: 600, cacheEverything: true }
      });
      const h = new Headers();
      const ct = res.headers.get('Content-Type');
      if (ct) h.set('Content-Type', ct);
      h.set('Cache-Control', 'public, max-age=600');
      h.set('X-Final-URL', res.url || target);
      for (const [k, v] of Object.entries(cors)) h.set(k, v);
      return new Response(res.body, { status: res.status, headers: h });
    } catch (e) {
      return new Response('Napaka pri branju: ' + e.message, { status: 502, headers: cors });
    }
  }
};

/* ---------- DeepL prevodi ---------- */
async function deepl(request, env, cors) {
  const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
  if (request.method !== 'POST') return json({ message: 'Uporabi POST' }, 405);
  let b;
  try { b = await request.json(); } catch { return json({ message: 'Neveljaven JSON' }, 400); }
  const key = (env.DEEPL_KEY || b.key || '').trim();
  if (!key) return json({ message: 'Manjka DeepL API ključ' }, 400);
  const text = Array.isArray(b.text) ? b.text.slice(0, 50).map(String) : [String(b.text || '')];
  const body = { text, target_lang: b.target_lang || 'SL', preserve_formatting: true, split_sentences: 'nonewlines' };
  if (b.source_lang) body.source_lang = b.source_lang;
  const host = key.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com';
  const r = await fetch(host + '/v2/translate', {
    method: 'POST',
    headers: { 'Authorization': 'DeepL-Auth-Key ' + key, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const out = await r.text();
  if (!r.ok) return json({ message: 'DeepL HTTP ' + r.status + (r.status === 403 ? ' (napačen ključ)' : r.status === 456 ? ' (porabljena mesečna kvota)' : '') + ': ' + out.slice(0, 200) }, r.status);
  return new Response(out, { headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
}

/* ---------- Claude AI (kratki opisi izdelkov) ---------- */
async function ai(request, env, cors) {
  const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
  if (request.method !== 'POST') return json({ message: 'Uporabi POST' }, 405);
  if (!env.ANTHROPIC_KEY) return json({ message: 'V Workerju manjka skrivnost ANTHROPIC_KEY' }, 400);
  let b;
  try { b = await request.json(); } catch { return json({ message: 'Neveljaven JSON' }, 400); }
  const body = { model: String(b.model || 'claude-haiku-4-5-20251001'), max_tokens: Math.min(+b.max_tokens || 600, 1500), messages: Array.isArray(b.messages) ? b.messages.slice(0, 4) : [] };
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': env.ANTHROPIC_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify(body)
  });
  return new Response(await r.text(), { status: r.status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
}

/* ---------- Brevo (e-poštni marketing) ---------- */
async function brevo(request, env, cors) {
  const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
  if (request.method !== 'POST') return json({ message: 'Uporabi POST' }, 405);
  if (!env.BREVO_KEY) return json({ message: 'V Workerju manjka skrivnost BREVO_KEY' }, 400);
  let b;
  try { b = await request.json(); } catch { return json({ message: 'Neveljaven JSON' }, 400); }
  const path = String(b.path || '').replace(/^\/+/, '');
  if (!/^(account|contacts(\/lists)?|emailCampaigns(\/\d+\/(sendNow|sendTest))?)$/.test(path)) return json({ message: 'Nedovoljena pot' }, 400);
  const method = ['GET', 'POST', 'PUT'].includes(b.method) ? b.method : 'GET';
  const r = await fetch('https://api.brevo.com/v3/' + path, {
    method,
    headers: { 'api-key': env.BREVO_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: method === 'GET' ? undefined : JSON.stringify(b.body || {})
  });
  const t = await r.text();
  return new Response(t || '{}', { status: r.status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
}
