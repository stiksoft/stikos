# STIK OS — postopek namestitve

Od nič do delujočega sistema. Nobenega programiranja. Računaj približno **eno uro**.

Ko končaš, boš imel:
- aplikacijo na naslovu, ki ga odpreš na katerikoli napravi,
- vse podatke na svojem Google Drive,
- dnevne varnostne kopije,
- **0 € mesečnih stroškov** poleg Google Workspace, ki ga že plačuješ.

---

## Kaj potrebuješ

- Google račun (tisti z 2 TB prostora)
- GitHub račun — brezplačen, registracija na https://github.com
- datoteko `index.html` iz tega paketa
- Cloudflare račun — **samo če bo potreben**, glej korak 5

---

# Korak 1 · Google: dovoljenje za dostop do Drive

Aplikacija mora imeti dovoljenje, da piše v tvoj Drive. Google to imenuje "Client ID".

1. Odpri https://console.cloud.google.com in se prijavi s svojim Google računom.
2. Na vrhu klikni izbirnik projektov → **New project**.
   Ime: `STIK OS` → **Create**. Počakaj nekaj sekund in ga izberi.
3. V levem meniju **APIs & Services → Library**.
   V iskalnik vpiši `Google Drive API` → klikni rezultat → **Enable**.
4. V levem meniju **APIs & Services → OAuth consent screen**.
   - Če te vpraša za tip: izberi **Internal** (na voljo, ker imaš Workspace — pomeni, da
     lahko aplikacijo uporabljajo samo računi tvojega podjetja). Če možnosti ni, izberi **External**.
   - App name: `STIK OS`
   - User support email: tvoj naslov
   - Developer contact: tvoj naslov
   - **Save and continue** do konca.
5. V levem meniju **APIs & Services → Credentials**
   → **Create credentials** → **OAuth client ID**.
   - Application type: **Web application**
   - Name: `STIK OS`
   - Pri **Authorized JavaScript origins** klikni *Add URI* in vpiši:
     ```
     https://TVOJE-IME.github.io
     ```
     (`TVOJE-IME` zamenjaj s svojim GitHub uporabniškim imenom — dobiš ga v koraku 2.
      Če ga še nimaš, se vrni sem po koraku 2.)
     Dodaj še `http://localhost:8000`, če boš kdaj preizkušal na računalniku.
   - **Create**
6. Prikaže se okno s **Client ID** — dolg niz, ki se konča na
   `.apps.googleusercontent.com`. **Kopiraj ga in shrani** (npr. v beležko).
   Potreboval ga boš v koraku 4.

> Client ID ni geslo. Ni nevarno, če ga kdo vidi — brez tvoje prijave z njim ne more nič.

---

# Korak 2 · GitHub: objava aplikacije

1. Odpri https://github.com in se registriraj (ali prijavi).
   Zapomni si svoje **uporabniško ime** — je del naslova aplikacije.
2. Zgoraj desno **+** → **New repository**.
   - Repository name: `stik-os`
   - **Public** (mora biti javen, da deluje brezplačna objava; tvoji podatki v njem niso!)
   - Obkljukaj **Add a README file**
   - **Create repository**
3. V repozitoriju klikni **Add file → Upload files**.
   Povleci vanj datoteko **`index.html`** iz tega paketa.
   Spodaj klikni **Commit changes**.
4. Zavihek **Settings** (zgoraj v repozitoriju) → v levem meniju **Pages**.
   - Pod *Source* izberi **Deploy from a branch**
   - Branch: **main**, mapa: **/ (root)** → **Save**
5. Počakaj 1–2 minuti in osveži stran. Zgoraj se izpiše naslov:
   ```
   https://TVOJE-IME.github.io/stik-os/
   ```
   **To je naslov tvoje aplikacije.** Shrani ga med zaznamke.
6. Vrni se v korak 1.5 in preveri, da si pri *Authorized JavaScript origins* vpisal
   `https://TVOJE-IME.github.io` (samo to, brez `/stik-os/`). Če nisi, ga dodaj zdaj in shrani.

---

# Korak 3 · Prvi zagon

1. Odpri naslov svoje aplikacije.
2. Zgoraj desno klikni **Nastavitve**.
3. V polje **Google Client ID** prilepi niz iz koraka 1.6.
4. Klikni **Prijava z Google** zgoraj desno.
   Google te vpraša za dovoljenje → **Dovoli**.
5. Zgoraj se izpiše **"Povezano z Drive"**.

Odpri Google Drive — nastala je mapa **STIK OS** z mapo **_baza** in datoteko
`stikos-podatki.json`. Od tu naprej se vsaka sprememba samodejno shrani vanjo.

> Če piše "Prijava ni uspela", je skoraj vedno kriv naslov v koraku 1.5.
> Mora se ujemati z naslovom v brskalniku, brez poševnice na koncu.

---

# Korak 4 · Vsakodnevna uporaba

- **Vnos podatkov** — klikni v celico tabele in piši. Gumb *Nov vnos* doda vrstico,
  **×** jo izbriše. Shranjevanja ni treba sprožiti: zgodi se samo, nekaj sekund po
  zadnjem tipkanju. Zgoraj desno vidiš stanje.
- **Priloge in zapiski** — vsak modul ima na dnu polje *Zapiski* za prosto besedilo in
  razdelek *Priloge*, kamor naložiš PDF, Word, slike ali videe. Označiš lahko več
  datotek naenkrat. Če je vklopljena kljukica *Word in Excel pretvori v Google dokument*,
  se Wordov dokument naloži kot Google dokument: odpre se s klikom na *Odpri*,
  urejaš ga v brskalniku in popravki se shranjujejo sproti.
- **Uvoz iz Minimaxa** — v tabelaričnih modulih (npr. DFA in IFA plačila) klikni
  *Uvozi / prilepi*. V Minimaxu označi vrstice skupaj z glavo tabele, kopiraj (Ctrl+C)
  in prilepi v okno. Program prevzame samo tiste stolpce, ki obstajajo v modulu.
- **Kilometri** — v modulu 7 vpiši relacijo kot “Ljubljana – Gradec” in klikni gumb
  **km** v vrstici. Razdaljo izračuna po cestnem omrežju. Če kraja ne prepozna,
  odpre Google Zemljevide, da preveriš ročno.
- **Zaslužek** — v modulih 5 in 6 vpišeš nabavno ceno brez DDV in MPC z DDV;
  stolpec *Zaslužek brez DDV* program izračuna sam (MPC deli z 1,22 in odšteje nabavno).
- **Avans** — v ponudbi vpišeš odstotek (npr. 30) in program z rdečo izpiše znesek
  avansa in preostanek za plačilo.
- **Ceniki** — modul 3. Najprej ustvariš **skupino proizvodov** (npr. Rolo pokrovi),
  nato vanjo vpisuješ artikle z gumbom *Nov artikel*. V isti skupini lahko z
  *Naloži PDF cenik* pripneš že narejen cenik za stranke — klik na *Odpri* ga odpre.
- **Datoteke** — v modulih z mapami odpri mapo in klikni *Naloži datoteko*.
  Datoteke gredo na Drive in so vidne tudi v navadni Drive aplikaciji na telefonu.
- **Ponudba** — modul 4. Prilepiš povezave, klikneš *Uvozi iz trgovine*, popraviš
  količine in popuste, vpišeš transport, montažo, avans in rok. Nato:
  - **Kreiraj DOC** — datoteka se prenese in shrani na Drive; odpreš jo v Wordu in ročno popraviš
  - **Natisni / PDF** — v oknu za tiskanje izbereš *Shrani kot PDF*
  - **Shrani ponudbo** — shrani jo v arhiv in odpre novo
- **Na telefonu** — odpri isti naslov, v meniju brskalnika izberi
  *Dodaj na začetni zaslon*. Dobiš ikono kot pri pravi aplikaciji.
- **Varnostne kopije** — nastanejo same, ob prvem odprtju vsak dan, v
  `STIK OS/_baza/varnostne-kopije/`. V *Nastavitvah* jo lahko narediš tudi ročno
  ali prenesеš vse podatke kot eno datoteko.

---

# Korak 5 · Cloudflare Worker — samo če bo potreben

**Najprej preizkusi brez njega.** V modulu 4 prilepi eno povezavo in klikni
*Uvozi iz trgovine*:

- Če se naziv in cena izpolnita → **Workerja ne potrebuješ. Preskoči ta korak.**
- Če se ne → izberi eno od dveh možnosti.

### Možnost A — popravek na tvoji spletni trgovini (brez Cloudflara)

Ker je pickupoprema.si tvoja stran, lahko brskalniku dovoliš branje. Pokaži to
svojemu skrbniku strani — pri WordPress/WooCommerce gre v `functions.php` teme:

```php
add_action('send_headers', function () {
  header('Access-Control-Allow-Origin: https://TVOJE-IME.github.io');
});
```

Po tem uvoz deluje neposredno.

### Možnost B — Cloudflare Worker

1. Registriraj se na https://dash.cloudflare.com (brezplačno, **brez kartice**).
2. V levem meniju **Workers & Pages** → **Create** → **Create Worker**.
   Ime: `stik-os` → **Deploy**.
3. Klikni **Edit code**. Izbriši vso obstoječo kodo in prilepi vsebino datoteke
   **`worker.js`** iz tega paketa.
4. V prvi vrstici po želji zamenjaj `'*'` s svojim naslovom
   (`'https://TVOJE-IME.github.io'`) — bolj varno, a ni nujno.
5. **Deploy**. Cloudflare izpiše naslov, npr. `https://stik-os.tvoje-ime.workers.dev`.
6. V aplikaciji odpri **Nastavitve** in ta naslov prilepi v polje
   *Naslov Cloudflare Worker*. Poskusi uvoz še enkrat.

Brezplačni paket: 100.000 zahtevkov na dan. Ti jih boš porabil nekaj deset na mesec.

---

# Pogosta vprašanja

**Kaj se zgodi, če prenehaš plačevati Claude?**
Nič. Claude je bil uporabljen samo za izdelavo. Aplikacija teče sama in ni z njim
povezana. Potreboval ga boš le, če boš hotel kaj dodati ali spremeniti.

**Kaj, če GitHub ali Cloudflare nekega dne izgineta?**
Podatki so na tvojem Drive in ostanejo tam. Datoteko `index.html` imaš shranjeno —
objaviš jo lahko kjerkoli drugje, ali jo celo odpreš neposredno z računalnika.

**Ali GitHub vidi moje podatke?**
Ne. V repozitoriju je samo program. Podatki gredo iz brskalnika naravnost na Drive.

**Ali je treba Cloudflare Worker plačati?**
Ne. Brezplačni paket ne zahteva niti kartice.

**Kaj, če po nesreči kaj izbrišem?**
Tri rešitve: dnevna kopija v `_baza/varnostne-kopije/`; zgodovina različic, ki jo
Google Drive hrani 30 dni (desni klik na datoteko → *Upravljanje različic*);
in gumb *Prenesi podatke (JSON)* v Nastavitvah, s katerim narediš kopijo kadarkoli.

**Kaj, če hočem, da sistem uporablja več ljudi?**
Deluje, a če dva hkrati urejata isto tabelo, lahko ena sprememba povozi drugo.
Pri dveh ali treh ljudeh, ki delajo vsak svoj del, to v praksi ni težava.
Če bo kdaj potrebno, se to reši z nadgradnjo na pravi strežnik — podatki ostanejo isti.

**Ali lahko uvozim obstoječe podatke iz Excela?**
Da: v Excelu shrani list kot CSV in vrstice prilepi v tabelo. Obratno gre z gumbom
*Izvozi CSV* v vsakem modulu.
