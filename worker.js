// Cloudflare Worker za STIK OS — bere strani spletne trgovine
// Potrebuješ ga SAMO, če branje povezav ne deluje neposredno iz brskalnika.

const DOVOLJENE_STRANI = ['pickupoprema.si'];
const DOVOLJEN_IZVOR = '*'; // po želji zamenjaj s 'https://tvoje-ime.github.io'

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors() });
    }
    const url = new URL(request.url).searchParams.get('url');
    if (!url) return new Response('Manjka parameter ?url=', { status: 400, headers: cors() });

    let target;
    try { target = new URL(url); } catch (e) {
      return new Response('Neveljaven naslov', { status: 400, headers: cors() });
    }
    if (!DOVOLJENE_STRANI.some(d => target.hostname.endsWith(d))) {
      return new Response('Ta stran ni dovoljena', { status: 403, headers: cors() });
    }

    const res = await fetch(target.toString(), {
      headers: { 'User-Agent': 'STIK-OS/1.0' },
      cf: { cacheTtl: 900, cacheEverything: true }
    });
    const body = await res.text();
    return new Response(body, {
      status: res.status,
      headers: Object.assign({ 'Content-Type': 'text/html; charset=utf-8' }, cors())
    });
  }
};

function cors() {
  return {
    'Access-Control-Allow-Origin': DOVOLJEN_IZVOR,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}
