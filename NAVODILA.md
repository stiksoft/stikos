# STIK Prodaja – navodila

**STIK Prodaja** je program za ponudbe, naročila, pošiljanje, stranke, cenike, opravila, marketing in poročila. Je spletna aplikacija (PWA): en program, ki deluje na računalniku (Windows, Mac), tablici in telefonu (Android, iPhone). Namestiš jo kot aplikacijo z ikono in deluje tudi brez interneta (razen pobiranja s spletnih strani, tečajev, prevodov in Google Drive).

> **Pomembno o podatkih:** podatki se shranjujejo v napravi, na kateri delaš (v brskalniku). Za varnost in delo na več napravah nastavi varnostno kopijo – glej poglavje 14. Brez tega se ob brisanju podatkov brskalnika ali izgubi naprave podatki izgubijo.

## Datoteke

| Datoteka | Namen |
|---|---|
| `index.html` | celoten program |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | omogočajo namestitev kot aplikacija in delo brez interneta |
| `worker.js` | neobvezen lasten posrednik (Cloudflare): branje spletnih strani, prevodi DeepL, AI (Claude) in e-pošta prek Brevo |
| `NAVODILA.md`, `NAVODILA.pdf` | ta navodila |

---

## 1. Objava na spletu (GitHub Pages – brezplačno, enkrat)

Program mora biti objavljen na naslovu **https**, da ga lahko namestiš na vse naprave. GitHub Pages je brezplačen.

1. Prijavi se na **github.com** z računom `stiksoft`.
2. Zgoraj desno **+ → New repository**. Ime: `ponudbe` (ali `prodaja`). Izberi **Public** in klikni **Create repository**.
3. Na strani repozitorija klikni **uploading an existing file** (ali **Add file → Upload files**).
4. Odpri ZIP s programom, izberi **vse datoteke** (`index.html`, `manifest.webmanifest`, `sw.js`, ikone, `worker.js`, navodila) in jih povleci v okno. Spodaj klikni **Commit changes**.
5. **Settings → Pages** → *Source:* **Deploy from a branch** → *Branch:* **main**, mapa **/ (root)** → **Save**.
6. Počakaj 1–2 minuti. Program je na `https://stiksoft.github.io/ponudbe/` (oziroma `/prodaja/`).

**Posodobitev programa:** v repozitoriju **Add file → Upload files** in naloži novo `index.html` in `sw.js` (prepišeta stari). Nameščene aplikacije se posodobijo same ob naslednjem zagonu (lahko jih zapreš in znova odpreš).

> Če repozitorij preimenuješ iz `ponudbe` v `prodaja`, podatki ostanejo (vezani so na `stiksoft.github.io`), aplikacijo pa moraš na napravah namestiti znova z novega naslova.

## 2. Namestitev na naprave – korak za korakom

Na vsaki napravi naredi dve stvari: **(A) namesti aplikacijo** in **(B) nastavi shranjevanje podatkov**. V programu je gumb **Nastavitve → Namestitev aplikacije → Kako namestim**, ki pokaže korake za napravo, na kateri si.

### Windows (Chrome ali Edge)

A – namestitev:

1. Odpri Chrome ali Edge in pojdi na `https://stiksoft.github.io/ponudbe/`.
2. V naslovni vrstici desno klikni ikono **Namesti** (monitor s puščico). Če je ni: meni **⋮ → Namesti STIK Prodaja** (Edge: **⋯ → Aplikacije → Namesti to spletno mesto kot aplikacijo**).
3. Potrdi **Namesti**. Program se odpre v svojem oknu, v meniju Start dobi ikono. Z desnim klikom na ikono v opravilni vrstici izberi **Pripni v opravilno vrstico**.

B – shranjevanje:

1. Namesti **Google Drive za namizje** (drive.google.com/download) in se prijavi z `stikdoo@gmail.com`. Pojavi se pogon `G:` (Moj disk).
2. V Raziskovalcu ustvari mapo, npr. `G:\Moj disk\STIK Prodaja`.
3. V programu **Nastavitve → Shranjevanje → 1. Samodejna kopija na disk → Izberi mapo** in izberi to mapo → **Dovoli / Ogled datotek → Shrani spremembe**.
4. Od zdaj se po vsaki spremembi zapiše `STIK-Prodaja-podatki.json`, enkrat dnevno še datirana kopija – in Drive ju sam prenese v oblak.
5. Ob naslednjem zagonu brskalnik včasih zahteva ponovno potrditev: na seznamu ponudb se pojavi rumeno obvestilo – klikni **Nadaljuj**.

### Mac (Chrome, Edge ali Safari)

A – namestitev:

1. **Chrome / Edge:** odpri naslov → ikona **Namesti** v naslovni vrstici → **Namesti**. Program je v mapi *Aplikacije* in ga povlečeš v Dock.
2. **Safari (macOS 14+):** odpri naslov → **Datoteka → Dodaj v Dock**.

B – shranjevanje:

1. **Chrome / Edge:** namesti Google Drive za namizje, ustvari mapo `Google Drive/Moj disk/STIK Prodaja` in jo izberi v **Nastavitve → Shranjevanje → Izberi mapo** (enako kot pri Windows). Deluje tudi mapa iCloud Drive.
2. **Safari** samodejnega zapisa v mapo ne omogoča – uporabi **2. Google Drive** (spodaj) ali **Shrani kopijo** (datoteka gre v Prenose).

### Android (Chrome)

A – namestitev:

1. Odpri **Chrome** in pojdi na naslov programa.
2. Meni **⋮** zgoraj desno → **Namesti aplikacijo** (ali **Dodaj na začetni zaslon → Namesti**).
3. Ikona **STIK Prodaja** je med aplikacijami. Bonus: na strani izdelka v Chromu tapni **Deli → STIK Prodaja** in izdelek se uvozi v ponudbo.

B – shranjevanje: telefon ne omogoča samodejnega zapisa v mapo, zato uporabi **Google Drive** (način 2 v poglavju 14): **Pošlji podatke v Drive** po delu, **Prenesi iz Drive** pred delom. Druga možnost je **Shrani kopijo** (datoteka v Prenose → deli jo v Drive).

**Pravi APK (neobvezno):** na **pwabuilder.com** vpiši naslov programa → **Start → Package For Stores → Android → Generate Package**. Iz ZIP-a namesti `.apk` na telefon (dovoli nameščanje iz neznanih virov). Da se ne vidi naslovna vrstica brskalnika, objavi datoteko `assetlinks.json` iz ZIP-a na `https://stiksoft.github.io/.well-known/assetlinks.json` (repozitorij `stiksoft.github.io`, mapa `.well-known`). Datoteko `.aab` lahko objaviš v Google Play (enkratna pristojbina za razvijalski račun).

### iPhone in iPad (Safari)

A – namestitev:

1. Odpri naslov programa v **Safariju** (v Chromu na iPhonu namestitev ni mogoča).
2. Tapni **Deli** (kvadrat s puščico gor) → pomakni navzdol → **Dodaj na začetni zaslon** → **Dodaj**.
3. Program odpiraj z ikono **STIK Prodaja** – deluje kot aplikacija.

B – shranjevanje: enako kot Android – **Google Drive** ali **Shrani kopijo** (shrani v *Datoteke*, od tam v iCloud/Drive).

> iPhone lahko podatke spletnih aplikacij izbriše, če aplikacije več tednov ne odpreš. Zato na iPhonu vedno uporabljaj Drive ali redno kopijo. Aplikacija v App Store je možna (pwabuilder.com → iOS), a zahteva Mac, Xcode in Apple Developer račun (99 USD/leto), zato je namestitev prek Safarija praktičnejša.

### Delo na več napravah

Podatki se ne sinhronizirajo sami v realnem času. Priporočen postopek:

- **En računalnik kot glavni** s samodejno kopijo v mapo Google Drive (Windows/Mac).
- **Na telefonu** pred delom **Nastavitve → Shranjevanje → Prenesi iz Drive**, po delu **Pošlji podatke v Drive**.
- **Na računalniku** potem **Prenesi iz Drive**, da dobiš spremembe s telefona.

Vedno delaj na eni napravi naenkrat, sicer novejša kopija prepiše starejšo.

## 3. Pobiranje vsebine s spletnih strani

Brskalniki iz varnostnih razlogov ne dovolijo, da stran bere druge strani. Program zato uporablja posrednika. Brez nastavitve uporabi javne brezplačne posrednike (delujejo, a so včasih počasni ali nedosegljivi). Priporočam lasten posrednik – je brezplačen (100.000 zahtev na dan):

1. Registracija na **dash.cloudflare.com** (že uporabljaš Cloudflare).
2. **Workers & Pages → Create → Create Worker**, ime npr. `stik-proxy`, **Deploy**.
3. **Edit code**, izbriši vsebino, prilepi celoten `worker.js`, **Deploy**.
4. Kopiraj naslov (npr. `https://stik-proxy.tvoj-racun.workers.dev`).
5. V programu: **Nastavitve → Pobiranje s spletnih strani** → prilepi naslov → **Preizkusi** (mora pisati »Deluje.«).

V `worker.js` je seznam `ALLOWED` – tam je že `https://stiksoft.github.io`. Če program objaviš drugje, dodaj tisti naslov.

**Kaj program prebere:** naziv, opis, vse slike, cene in videe (YouTube, Vimeo, mp4). Pri Shopify trgovinah (npr. pickupoprema.si) prebere tudi vse slike, ceno izbrane različice in videe iz galerije. Deluje na katerikoli strani – če na njej ni cene ali besedila, ju vpišeš sam.

**Če stran ne dovoli branja** (nekatere velike trgovine to blokirajo): na strani označi vsebino (Ctrl+A ali z miško), kopiraj (Ctrl+C) in prilepi v polje v programu – prebere besedilo in slike iz odložišča. Lahko pa narediš posnetek zaslona in ga prilepiš.

## 4. Jezik in prevajanje

**Zaznavanje jezika.** Ko pobereš vsebino, program sam ugotovi, v katerem jeziku je (slovenščina, angleščina, nemščina, hrvaščina, italijanščina in drugi). Jezik se izpiše na vrhu okna izdelka. Če je drugačen od jezika ponudbe, se vrstica obarva rumeno in predlagani gumb za prevod je poudarjen.

**Prevod izdelka.** V oknu izdelka klikni **SL**, **EN** ali **DE** – prevedeta se naziv in opis. Prevod lahko nato poljubno popraviš. Gumb **Izvirnik** vedno povrne prvotno besedilo s spletne strani (ohrani se tudi po shranjevanju).

**Jezik celotne ponudbe.** V razdelku *Ponudba* izberi **Jezik ponudbe**: slovenščina, angleščina ali nemščina.

- Takoj se prevedejo vse oznake dokumenta (Ponudba / Quotation / Angebot, DDV / VAT / MwSt., Skupaj za plačilo …), enote (kos → pc / Stk.), zapis datumov in zneskov ter privzeti pogoji. Enako velja za naziv PDF datoteke in besedilo e-pošte.
- Gumb **Prevedi vsebino** prevede vse izdelke, ki so v drugem jeziku, ter naslov, rok dobave, uvod, opombo in lastne pogoje. Samodejna polja (`{avans_pct}` …) ostanejo nedotaknjena.
- Pri seznamu izdelkov rumena oznaka (npr. `EN`) pokaže izdelke, ki še niso v jeziku ponudbe.

Tako lahko isto ponudbo podvojiš (**Podvoji**) in iz nje z dvema klikoma narediš angleško ali nemško različico.

**Nastavitve → Jezik in prevajanje:**

- **Privzeti jezik novih ponudb.**
- **Ko je uvožena vsebina v drugem jeziku:** *Ponudi prevod* (privzeto, en klik), *Prevedi samodejno* (prevede takoj ob uvozu v jezik ponudbe) ali *Ne opozarjaj*.
- **Prevajalnik:**
    - *Google Prevajalnik* – brezplačen, deluje brez nastavitev. Priporočen za začetek.
    - *DeepL* – najbolj naravni prevodi, zlasti v nemščino. Brezplačni paket DeepL API Free omogoča 500.000 znakov na mesec.
    - *MyMemory* – brezplačna rezerva za krajša besedila.
- **Preizkusi prevod** pokaže, ali izbrani prevajalnik deluje.

**Nastavitev DeepL (neobvezno):**

1. Na **deepl.com/pro-api** izberi *DeepL API Free* in ustvari račun (ob registraciji običajno zahteva plačilno kartico za preverjanje; brezplačni paket se ne zaračuna).
2. V *Account → API Keys* kopiraj ključ (konča se s `:fx`).
3. DeepL deluje samo prek tvojega posrednika – najprej postavi Cloudflare Worker iz poglavja 3 (novi `worker.js` že vsebuje podporo za DeepL; če si Worker postavil prej, vanj znova prilepi novo različico in klikni **Deploy**).
4. Ključ vpiši v **Nastavitve → Jezik in prevajanje → DeepL API ključ**. Varnejša možnost: v Cloudflare odpri Worker → **Settings → Variables and Secrets → Add**, tip *Secret*, ime `DEEPL_KEY`, vrednost ključ → **Deploy**; polje v programu pusti prazno.
5. Izberi prevajalnik *DeepL* in klikni **Preizkusi prevod**.

Če DeepL kdaj ne odgovori (npr. porabljena mesečna kvota), program samodejno uporabi Google.

**Pomembno:** strojni prevod je dober, ni pa brezhiben. Tehnične izraze in nazive izdelkov pred pošiljanjem na hitro preveri. Prevajalniku se pošljejo samo naziv, opis in besedila ponudbe – podatki kupca ne.

## 5. Valute in tečaji

**Prepoznavanje valute.** Ko pobereš izdelek s tuje strani, program sam ugotovi valuto (USD, GBP, CHF, PLN, CZK, HUF, SEK, JPY, CNY in druge). Pomaga si s podatki strani, oznakami ($, £, CHF …) in domeno (.co.uk, .ch …). Valuto lahko v oknu izdelka vedno ročno zamenjaš.

**Preračun v EUR.** Ceno vpišeš ali izbereš v izvirni valuti, program pa jo preračuna v EUR po tečaju **na dan ponudbe**. Pod ceno vidiš uporabljeni tečaj, npr. *1 EUR = 1,1734 USD · Banka Slovenije, 21. 9. 2026*. V ponudbi so vsi zneski v EUR.

- Pri ameriških, kanadskih, avstralskih, japonskih in kitajskih straneh je privzeto nastavljeno **brez DDV**, ker tam cene ne vključujejo evropskega DDV. Preveri in po potrebi preklopi.
- Ko spremeniš **datum ponudbe**, se tečaji vseh izdelkov v tuji valuti samodejno preračunajo na novi datum.
- Izdelki v tuji valuti imajo na seznamu zeleno oznako valute (npr. `USD`).
- Gumb **Ročno** omogoča vpis lastnega tečaja (npr. dogovorjenega z banko). Ročni tečaj se ob spremembi datuma ne spreminja.
- V *Izgled ponudbe* lahko vklopiš izpis izvirne cene in tečaja pri izdelku (privzeto izklopljeno, da kupec ne vidi nabavne cene).

**Vir tečaja** (Nastavitve → Valute in tečaji ali pri vsakem izdelku):

- **Banka Slovenije** (privzeto) – dnevna tečajnica Banke Slovenije, ki objavlja referenčne tečaje ECB. Deluje za vsak datum. Za soboto, nedeljo in praznik velja tečaj zadnjega delovnega dne. Današnji tečaj je objavljen okoli 16. ure, do takrat velja včerajšnji.
- **OTP banka** – podjetniška tečajnica (prodajni ali srednji tečaj). OTP banka tečajnice ne objavlja kot odprte podatke, zato jo program prebere z njene spletne strani. To deluje samo za **današnji** dan in je odvisno od oblike strani. Za zanesljivo delovanje priporočam lasten posrednik (poglavje 3). Če branje ne uspe, program samodejno uporabi tečaj Banke Slovenije in te na to opozori.

Z gumbom **Preizkusi tečaj USD** v Nastavitvah preveriš, ali izbrani vir deluje.

## 6. Izgled, tisk in logotip

**Tisk z malo tonerja.** Vse tri predloge so prilagojene tiskanju: bele strani, tanke črte, brez barvnih ploskev. Barva podjetja se uporablja le za naslove, tanek pas na vrhu strani in končni znesek. Največ tonerja porabijo fotografije, zato:

- naslovnica je privzeto **svetla** (logotip, naslov, fotografija v okvirju),
- slog *Slika čez stran* je še na voljo, a ga za tiskanje ne priporočam,
- vodnega žiga (ozadje strani) za tiskanje raje ne uporabljaj,
- pri daljših ponudbah izberi *Slike ob besedilu* ali *Brez slik*.

**Prelomi strani.** Predogled prikazuje prave strani A4 – natisnjena ponudba in PDF sta enaka predogledu. Program sam skrbi, da:

- naslov izdelka nikoli ne ostane sam na dnu strani,
- slika ni prerezana,
- cena ostane skupaj z zadnjo vrstico opisa,
- se pri tabeli povzetka na novi strani ponovi glava.

Od druge strani naprej je na vrhu manjši logotip s številko ponudbe in kupcem, spodaj pa številka strani.

**Logotip.** V razdelku *Podjetje* naloži logotip (najlepši je PNG ali SVG s prozornim ozadjem).

- Program samodejno obreže prazne robove, zato je logotip na ponudbi čim večji.
- Z drsnikom **Velikost logotipa** ga dodatno povečaš (do 170 %).
- Če je logotip svetel (npr. bel), program to zazna in ga na ponudbi postavi na temno podlago, da so črke dobro berljive. Stikalo lahko tudi ročno vklopiš ali izklopiš.

**Izvozi.**

- **PDF** – vsaka stran se izriše točno tako kot v predogledu, povezave do videov so klikljive.
- **Natisni** – najostrejši rezultat. V oknu za tiskanje izberi *Shrani kot PDF*, če želiš PDF z izbirljivim besedilom.
- **Word** – dokument z enako vsebino za nadaljnje urejanje.
- **Spletna ponudba (HTML)** – prilagodi se tudi telefonu, videi se predvajajo.

**Tiskanje povsod:** gumb **Natisni** imajo ponudbe, naročila (delovni nalog), seznam naročil, pošiljke in nalepke, stranke, ceniki (s sličicami), opravila, naročilnice dobaviteljem, garancije, reklamacijski zapisniki, poročila, koledar objav, načrt oglaševanja in marketinški načrt. V oknu za tisk lahko izbereš tudi **Shrani kot PDF**.

## 7. Podjetje, stranke, ceniki in opravila

Program ima na levi (na telefonu spodaj) glavni meni, razdeljen v skupine **Prodaja, Nabava in logistika, Marketing, Finance, Dokumenti, Organizacija in Sistem** – enako kot v STIK OS. Do sedaj opisane rubrike: **Ponudbe · Naročila · Pošiljanje · Nabava · Garancije · Stranke · Ceniki · Opravila (To-Do) · Marketing · Poročila · Podjetje · Nastavitve**. Na telefonu so spodaj Ponudbe, Naročila, Stranke in To-Do, ostalo je pod gumbom **Več**. Med urejanjem ponudbe se meni skrči v ozek pas z ikonami, da je več prostora.

**Ponudbe.** Na vrhu so štirje povzetki: odprte ponudbe z vrednostjo, sprejete ponudbe ta mesec, naročila v teku in opravila za danes. Pod njimi je seznam ponudb z iskanjem in filtri po statusu.

**Podjetje** – podatki podjetja, ki izdaja ponudbe:

1. **Podatki podjetja:** naziv, naslov, ID za DDV, matična številka, TRR, SWIFT, banka, telefona, e-pošta, splet in kontaktna oseba (izpiše se pri podpisu »Pripravil«).
2. **Logotip:** nalaganje, velikost in svetel/temen prikaz.
3. **Glava ponudbe:** *Samodejno* izpiše vse vpisane podatke podjetja, s kljukicami izbereš, katere. *Lastno besedilo* je poljubno besedilo glave; gumb ga izpolni iz podatkov podjetja, da ga le popraviš.
4. **Noga ponudbe:** besedilo levo in desno na dnu vsake strani. Oznake, kot so `{podjetje}`, `{naslov}`, `{ddv}`, `{trr}`, `{telefon}`, `{ponudba}` in `{stran}`, vstaviš s klikom in se samodejno zamenjajo.

Desno je sprotni predogled prve strani ponudbe.

**Stranke** – kupec, ki ga vpišeš v ponudbo, se **samodejno shrani med stranke** (ko naslednjič vpišeš isto ime, se podatki izpolnijo sami). Seznam ima iskanje, telefon in e-pošto (klik pokliče ali odpre e-pošto) ter število in vrednost ponudb.

- Stranko dodaš ročno, jo shraniš iz ponudbe (gumb ✓ ob imenu kupca) ali uvoziš seznam iz Excela: *Datoteka → Shrani kot → CSV*, v prvi vrstici naslovi stolpcev (Naziv, Naslov, Pošta, Kraj, Telefon, E-pošta, ID za DDV).
- Gumb **Ponudba** pri stranki odpre novo ponudbo z že vpisanim kupcem.
- V ponudbi gumb z ikono oseb odpre izbiro stranke.

**Ceniki** – artikli in storitve, ki jih pogosto ponujaš (montaža, homologacija, oprema).

- Vsak artikel ima šifro, cenik (skupino), enoto, ceno brez in z DDV, opis in sliko.
- Dodaš jih ročno, **s povezave** (program pobere naziv, opis, ceno in sliko) ali z **uvozom datoteke dobavitelja**: Excel (.xlsx, .xls), PDF ali CSV.
- Pri uvozu program pokaže predogled in sam predlaga, kateri stolpec je naziv, šifra, cena brez/z DDV, DDV, enota, opis, slika ali povezava. Po potrebi popraviš izbiro. Pri PDF cenikih brez jasne tabele klikni **Prepoznaj z AI** (če je AI vklopljen).
- Vsak artikel ima na seznamu sličico (76 px), da takoj prepoznaš izdelek. Artikle brez slike, ki imajo povezavo, dopolniš z gumbom **Slike iz povezav**.
- **Natisni** natisne cenik s sličicami (izbrani cenik ali vse).
- V ponudbi klikni **Iz cenika**, označi artikle in jih dodaj z enim klikom.
- Izdelek iz ponudbe shraniš v cenik z ikono etikete pri izdelku.

**Opravila (To-Do list)** – seznam opravkov z rokom in pomembnostjo, razvrščen na *Zamujeno, Danes, Prihodnje, Brez roka*.

- Število zamujenih in današnjih opravil je prikazano kot rdeča značka v meniju.
- Iz ponudbe dodaš opravilo v meniju ⋯ → **Dodaj opravilo**; opravilo je povezano s ponudbo.
- Ko ponudbo pošlješ, ti program ponudi opomnik za klic čez 3 dni.

**Transport in montaža.** V ponudbi je korak **3 Transport in montaža** z dodatnimi postavkami na koncu ponudbe. Obe se prišteta v povzetek in skupni znesek.

- **Uvozni transport:** naziv, cena brez DDV in neobvezen opis.
- **Montaža z materialom:** na vrhu je **končni znesek** (brez in z DDV), pod njim pa podrobnosti:
    - **urne postavke:** opis dela, število ur in cena ure (privzeto ceno ure nastaviš v *Nastavitve → Privzete vrednosti*), dodaš jih poljubno;
    - **material:** naziv, količina, enota in cena za vsak material, z gumbom **Dodaj material** ali **Iz cenika**;
    - pri vsaki vrstici je sproti izračunan znesek.
- **Vpišem končni znesek ročno:** v ponudbi velja tvoj znesek, delo in material pa se izpišeta kot specifikacija brez posameznih cen.
- V ponudbi se montaža izpiše s končnim zneskom na vrhu, nato tabeli *Delo* in *Material*.

**Prva stran.** Ponudba se začne z glavo podjetja, številko ponudbe, datumom, veljavnostjo, rokom dobave in kupcem, nato sledijo izdelki. Naslovnica s sliko je izklopljena. Če jo kdaj želiš, jo vklopiš v *Izgled ponudbe → Prikaži naslovno stran*. Naslov ponudbe se ne izpolni več sam iz imena izdelka.

**Kratek ali celoten opis.** Nad opisom izdelka izbereš **Celoten** (opis s strani) ali **Kratek** (samo bistvo: kaj je, za katero vozilo, material, mere, ključne lastnosti). Z ↻ ustvariš kratek opis znova. Privzeto izbiro pri uvozu nastaviš v *Nastavitve → Opisi izdelkov in AI*.

Kratek opis lahko nastane na tri načine:

- **Samodejni izvleček** – brez AI, brezplačno; izbere alineje in stavke s podatki.
- **Claude AI prek Workerja** (priporočeno) – v Cloudflare Workerju dodaj skrivnost `ANTHROPIC_KEY` z API ključem s console.anthropic.com (Settings → Variables and Secrets → Add → Secret) in v Worker prilepi novi `worker.js`.
- **Claude AI z API ključem v brskalniku** – ključ vpišeš v Nastavitvah; shranjen je samo v tem brskalniku.

Uporablja se hiter in poceni model Claude Haiku. Strošek je običajno manj kot cent na opis (odvisno od dolžine besedila); porabo vidiš na console.anthropic.com.

**Preostanek plačila v pogojih.** Pogoji imajo samodejno polje `{preostanek}` (znesek za plačilo po avansu), npr. »Plačilo: 40 % avansa (1.064,00 €) ob naročilu, preostanek (1.596,00 €) ob prevzemu.« Obstoječe ponudbe s privzetimi pogoji so posodobljene samodejno.

**Odvečno besedilo trgovine v opisih.** Nekatere trgovine (tudi pickupoprema.si) k vsakemu izdelku dodajo pogosta vprašanja, plačilne pogoje, TRR in dostavo. Program tak del samodejno odreže.

- V *Nastavitve → Pobiranje s spletnih strani* je seznam vrstic, od katerih naprej se opis odreže (privzeto npr. »Pogosta vprašanja«, »Sprejemamo samo plačila«). Seznam lahko dopolniš.
- Gumb **Počisti opise v vseh ponudbah in cenikih** počisti tudi že uvožene izdelke.
- V oknu izdelka klikni v opis tja, kjer se začne odvečno besedilo, in izberi **Odreži od kazalca naprej**. Program ponudi, da si to mejo zapomni za vse prihodnje uvoze.

## 8. Naročila

**Stanje ponudbe.** Na vrhu vsake ponudbe je vrstica s stanjem:

- status z enim klikom: *Osnutek, Poslano, Sprejeto, Zavrnjeno*;
- **Avans plačan** – ko ga označiš, vpišeš znesek (privzeto izračunani avans) in datum plačila;
- **Pretvori v naročilo** – ko kupec potrdi ponudbo. Ponudba dobi status *Sprejeto*, na seznamu ponudb pa oznaki »Naročilo 2026-001« in »Avans plačan«.

**Naročila** (v glavnem meniju) – pregled vsega, kar je naročeno:

- **Povzetek:** naročila v teku, montaže ta teden, število postavk, ki jih moraš še naročiti pri dobaviteljih, in neplačani ostanki.
- **V teku:** naročila, razvrščena po predvidenem datumu izvedbe (*Zamujeno, Ta teden, Kasneje, Brez datuma*). Pri vsakem vidiš kupca, izdelke, stanje postavk, znesek, ali je avans plačan in koliko ostane za plačilo.
- **Za naročiti pri dobavitelju:** seznam vseh izdelkov iz vseh naročil, ki še niso naročeni. Z gumbom **Naročeno** jih odkljukaš.
- **Garancije:** vsi izdelki s serijskimi številkami, kupcem, datumom montaže in datumom poteka garancije. V iskalnik vpiši del serijske številke, izdelek ali kupca – najdeni podatek je označen.
- **Zaključena** in **Preklicana** naročila.

**Vrsta naročila:** *Montaža, Pošiljanje, Servis* ali *Ostalo* (poljuben opis). Vrsta določa oznake (npr. »Predviden datum odpreme«), na seznamu naročil je barvna oznaka vrste, naročila pa lahko filtriraš po vrsti. Privzeto vrsto nastaviš v *Nastavitve*.

**Naročilo** – odpreš ga s klikom:

- **Izvedba / montaža:** predviden datum (in ura) izvedbe. Ko je delo končano, odkljukaj **Izvedeno / montirano** in vpiši datum (privzeto današnji). Program ponudi, da vse postavke označi kot montirane. Gumb **Dodaj v opravila** doda montažo med opravila na predviden datum.
- **Postavke:** za vsak izdelek stanje *Za naročiti → Naročeno → Prispelo → Montirano*, dobavitelj ali številka naročila pri dobavitelju, **serijske številke** (vsaka v svoji vrstici) in **garancija v mesecih** (privzeto 12, nastaviš v *Nastavitve*). Garancija velja od datuma izvedbe; program izpiše, do kdaj velja.
- **Način plačila in računi** (panel *Plačila*; način plačila lahko izbereš že v ponudbi pod *Plačilo in pogoji* – izpiše se tudi na ponudbi):
    - način plačila: TRR (nakazilo), kartica, leasing (vpišeš leasing hišo), obroki (ponudnik obrokov, npr. Leanpay, in število obrokov) ali gotovina;
    - pri gotovini označiš **Gotovina položena na banko (polog)** z datumom in zneskom;
    - **Dodaj račun**: vrsta *Račun*, *Račun – davčna blagajna* (neobvezno EOR) ali *Avansni račun*, s številko, datumom in zneskom;
    - če je prejet avans, program predlaga avansni račun in opozarja, dokler ga ne vpišeš (ob prejemu predplačila nastane obveznost obračuna DDV); ko je naročilo izvedeno, opozori, da je treba izdati račun;
    - na seznamu naročil sta vidna način plačila in stanje računa, v poročilih pa naročila brez računa.
- **Plačila:** skupaj, avans (znesek in datum), **Plačano v celoti** z datumom in znesek, ki še ostane za plačilo. Avans je povezan s ponudbo – kar spremeniš na enem mestu, velja tudi na drugem.
- **Opombe** in gumb **Natisni** – *Delovni nalog in garancija* s postavkami, serijskimi številkami, datumi garancije, plačili in podpisoma.
- Gumb **Ponudba** odpre izvirno ponudbo.

## 9. Pošiljanje

Razdelek **Pošiljanje** je evidenca vseh pošiljk, povezana z naročili.

- **Nova pošiljka:** ustvariš jo tukaj ali v naročilu (panel *Pošiljke* → **Nova pošiljka**). Prejemnik in izdelki se prenesejo iz naročila.
- **Odprema:** stanje (*V pripravi → Poslano → V dostavi → Dostavljeno*, ali *Vrnjeno*), datum odpreme, prevoznik (Pošta Slovenije, GLS, DPD, DHL, Express One, UPS, Hitra pošta, naročen prevoz, lastni prevoz, osebni prevzem), storitev in **sledilna številka**. Vpišeš še število paketov, težo, strošek pošiljanja, odkupnino in zavarovano vrednost.
- **Sledi pošiljki** odpre sledenje, **Kopiraj številko** jo kopira, **Obvesti kupca** pa pripravi e-pošto s sledilno številko in povezavo.
- **Naročen prevoz (špediter):** dodatna polja za prevoznika, številko naročila prevoza, datum prevzema, ceno in kontakt voznika.
- **Nalepka:** natisne naslovnico s pošiljateljem, prejemnikom, številko pošiljke in odkupnino.
- **Povezava z naročilom:**
    - ko pošiljko označiš kot *Poslano*, se izdelki v naročilu označijo kot *Prispelo*;
    - ko je *Dostavljeno*, program pri naročilu vrste *Pošiljanje* ponudi, da ga zaključi.
- **Seznam pošiljk:** pošiljke v pripravi, na poti in dostavljene ter stroški pošiljanja ta mesec. Išče se tudi po sledilni številki.
- **Povezave za sledenje:** nastaviš jih v *Nastavitve → Pošiljanje in follow-up*. Privzeto se uporablja univerzalno sledenje parcelsapp.com, ki pozna večino prevoznikov. Za posameznega prevoznika lahko vpišeš uradno stran z oznako `{st}`.

## 10. Nabava – dobavitelji in naročila dobaviteljem

Razdelek **Nabava** pokaže, kaj si naročil pri dobaviteljih, kdaj pričakuješ dobavo in kdaj je blago dejansko prispelo.

**Dobavitelji:**

- naziv, kontakt, e-pošta za naročila, telefon, spletni portal;
- običajni dobavni rok v dneh (iz njega se izračuna pričakovana dobava);
- jezik dopisov (slovenščina, angleščina, nemščina).

**Naročilo dobavitelju** ustvariš na tri načine:

1. V **Naročila → Za naročiti pri dobavitelju → Naroči pri dobavitelju**: izbereš dobavitelja in označiš izdelke kupcev.
2. V naročilu kupca pri posamezni postavki **Naroči pri dobavitelju**.
3. V **Nabava → Naročilo dobavitelju** (tudi za zalogo); postavke dodaš ročno, iz cenika ali iz naročil kupcev.

V naročilu dobavitelju:

- **Pošlji** pripravi e-pošto dobavitelju v njegovem jeziku (seznam izdelkov, količine, tvoja številka naročila) in zabeleži datum naročila. Izdelki pri kupčevem naročilu dobijo stanje *Naročeno*.
- **Dokumenti dobavitelja:** naloži potrditev naročila, predračun, dobavnico ali račun (PDF, slike, Excel …). Datoteke ostanejo shranjene ob naročilu in jih kadarkoli odpreš. Ko naložiš potrditev, se naročilo označi kot potrjeno.
- **Roki:** naročeno dne, potrditev (datum in številka pri dobavitelju), pričakovana dobava, prispelo dne.
- **Prispelo:** odkljukaj posamezne postavke ali klikni **Vse prispelo**. Izdelki pri naročilih kupcev se samodejno označijo kot *Prispelo*.
- **Naročilnica:** natisni ali shrani kot PDF.

**Pregled:**

- naročila za poslati, naročila, ki čakajo potrditev, in naročila na poti, razvrščena po pričakovani dobavi (zamude so rdeče);
- prispela naročila;
- pri vsakem izdelku v naročilu kupca vidiš dobavitelja, številko potrditve, pričakovani in dejanski datum prispetja.

## 11. Garancije in reklamacije

**Garancije** – seznam vseh izdelkov z garancijo iz naročil:

- izdelek, serijske številke, kupec, dobavitelj;
- datum začetka (izvedba/montaža) in datum poteka;
- filtri: *Veljavne*, *Potečejo v 60 dneh*, *Potekle*, *Vse*;
- iskanje po serijski številki, izdelku ali kupcu;
- natis in izvoz CSV.

**Reklamacijski zapisnik** – univerzalen obrazec za kupca in dobavitelja:

1. Pri garanciji izdelka klikni **Reklamacija** (ali **Nova reklamacija**). Podatki o izdelku, serijski številki, kupcu, datumih, računu in dobavitelju se izpolnijo sami.
2. Vpiši opis napake, kdaj je bila opažena, pogoje uporabe (npr. kilometre), zahtevek kupca (popravilo, zamenjava, vračilo kupnine, znižanje kupnine) in svoje ugotovitve.
3. Dodaj fotografije in dokumente.
4. **Natisni** – kupec in prodajalec podpišeta zapisnik; fotografije so na drugi strani.
5. **Pošlji dobavitelju** – zapisnik se odpre za tisk (izberi *Shrani kot PDF*), nato se pripravi e-pošta dobavitelju. Jezik zapisnika in e-pošte izbereš (slovenščina, angleščina, nemščina). PDF in fotografije pripneš k sporočilu.
6. Spremljaj stanje: *Odprta → Poslano dobavitelju → V reševanju → Odobreno / Zavrnjeno → Zaključeno* in vpiši odgovor dobavitelja.

## 12. Marketing

Marketing je razdeljen v štiri skupine: **Načrtovanje, Oglaševanje, Stranke in Merjenje**. Vse je na enem mestu, od načrta do rezultatov.

### Načrtovanje

**Pregled:**

- objave ta mesec, aktivni oglasi s porabo, povpraševanja in naročila glede na cilj;
- objave v naslednjih 7 dneh;
- seznam **Za narediti** (manjkajoči koraki, npr. Meta Pixel, Google profil, domena za e-pošto).

**Načrt:**

- cilji, ciljne skupine, prednosti podjetja in ton komunikacije;
- sezonski koledar, mesečni proračun po kanalih in mesečni cilji (povpraševanja, naročila, prihodek);
- **Izpolni predlogo za STIK** pripravi izhodišče za prodajo in montažo opreme za pickupe, ki ga prilagodiš;
- AI studio uporablja načrt pri pisanju besedil.

**Koledar objav** – mesečni koledar ali seznam objav za Facebook, Instagram, TikTok, LinkedIn, YouTube in Google profil podjetja. Vsaka objava ima:

- kanale, datum in uro, obliko (slika, karusel, reel/kratek video, zgodba, video, članek);
- besedilo, ključnike in povezavo (UTM se doda sama);
- izdelek iz cenika, slike in videe iz knjižnice;
- stanje: *Ideja → V pripravi → Pripravljeno → Objavljeno*;
- števce znakov za vsako omrežje (opozorilo, če je besedilo predolgo ali ima preveč ključnikov) in predogled;
- gumb **Napiši z AI**.

Objavljanje:

1. **Kopiraj besedilo** (s povezavo UTM) in **Prenesi slike**.
2. **Odpri Meta Business Suite / TikTok Studio / LinkedIn / YouTube Studio** in objavo tam načrtuj.
3. V programu objavo označi kot *Objavljeno* in kasneje vpiši doseg, všečke, komentarje in klike.

Neposredno samodejno objavljanje iz programa ni mogoče, ker omrežja zanj zahtevajo odobrene razvijalske aplikacije in strežnik. Za samodejno objavo uporabi načrtovanje v Meta Business Suite, TikTok Studio in LinkedIn, ki je brezplačno. **CSV** izvozi mesečni načrt za Excel ali sodelavce, **Natisni** natisne mesečni plan.

### Oglaševanje

**Oglasi** – načrt kampanj za **Meta (Facebook + Instagram), Google Ads, TikTok, LinkedIn in YouTube**:

- cilj (npr. povpraševanja, promet, prodaja iz kataloga Shopify, ogledi videa);
- začetek, konec, dnevni proračun (skupni se izračuna sam), stanje;
- ciljna skupina: lokacija z radijem, starost, interesi;
- ciljna stran z UTM;
- besedila v pravih dolžinah za vsako platformo s števci znakov. Google: 15 naslovov po 30 znakov, 4 opisi po 90 znakov, poti, ključne besede, izključene besede. Meta: primarno besedilo, naslov, opis, gumb;
- **Napiši variante z AI** pripravi več različic (korist, dokaz, nujnost, cena);
- **CSV za Google Ads Editor** izvozi oglas in ključne besede za uvoz v Google Ads Editor (pred objavo preveri);
- kreative iz knjižnice in povezava na upravitelja oglasov;
- **Rezultati:** prikazi, kliki, poraba, konverzije in prihodek. Program izračuna **CTR, CPC, strošek na konverzijo (CPA) in ROAS**.

**Video** – video od ideje do objave, prikazan kot tabla s fazami: *Ideja → Scenarij → Snemanje → Montaža videa → Pripravljeno → Objavljeno*. Za vsak video:

- scenarij s časovnimi oznakami in seznam kadrov za snemanje s telefonom;
- opis za Reels, TikTok in Facebook ter ključniki;
- **YouTube paket**: naslov, opis, poglavja, oznake in besedilo za sličico;
- gumb **AI: scenarij in YouTube paket** pripravi vse naenkrat;
- **Kopiraj za YouTube** in **Kopiraj za TikTok/IG**, povezave na YouTube Studio, TikTok Studio in Meta;
- nalaganje videa v knjižnico;
- kontrolni seznam pred objavo (kavelj v prvih sekundah, podnapisi, poziv k dejanju, glasba brez avtorskih težav, zakrite tablice …);
- tabela priporočenih formatov in dolžin za TikTok, Reels, Shorts, YouTube, Facebook in LinkedIn.

Video se prikaže tudi v koledarju objav.

**AI studio** – Claude pripravi:

- objavo za izbrano omrežje;
- **scenarij za kratek video** (prve 3 sekunde, prizori, napisi, glasba, opis);
- oglas za izbrano platformo;
- **mesečni načrt 12 objav**, ki ga z enim klikom dodaš v koledar;
- ideje za akcije, newsletter ali odgovor na komentar/oceno.

Izbereš lahko izdelek iz cenika, temo, kanal in ton. AI vklopiš v *Nastavitve → Opisi izdelkov in AI*.

**Knjižnica** – vse slike, videi in dizajni na enem mestu:

- povleci datoteke iz Canve, Figme, Photoshopa ali telefona (PNG, JPG, SVG, MP4, MOV, PDF …);
- lahko dodaš tudi samo povezavo (Canva, Figma, YouTube, Drive);
- oznake za iskanje;
- datoteke uporabiš v objavah, oglasih in reklamacijah.

Videi ostanejo v napravi in se zaradi velikosti ne shranjujejo v samodejne kopije. Izvirnike hrani tudi na Drive ali YouTube.

### Stranke

**E-pošta** – newsletterji, promocije in akcije:

- predloge in ciljne skupine, izdelki iz cenika;
- **bloki**: slika, besedilo, gumb, video (sličica s povezavo), črta;
- samodejno ime prejemnika in UTM oznake;
- merjenje naročil 30 dni po pošiljanju.

Pošiljanje:

- **Pošlji prek Brevo** (priporočeno za dostavo v nabiralnik in ne v spam) in **Brevo test** (testno sporočilo sebi);
- ali **Kopiraj za Gmail**, **BCC** ali **HTML** za Brevo/Mailchimp.

Slike v e-pošti morajo imeti javno povezavo (npr. slika iz spletne trgovine). Video v e-pošti se prikaže kot sličica s povezavo.

**Priložnosti, Follow-up, Prejemniki (soglasja)** – kot doslej.

### Merjenje

**Statistika:**

- **Od kod prihajajo stranke:** za vsak vir povpraševanja, naročila, prihodek, stroški oglasov, strošek na naročilo in ROAS. Vir stranke vpišeš pri ponudbi (*Podatki ponudbe → Vir stranke*): Facebook, Instagram, TikTok, Google, priporočilo …
- **Kanali po mesecih:** sledilci, doseg, interakcije, kliki, poraba, povpraševanja. Vpišeš jih ročno ali uvoziš CSV/Excel iz Meta Business Suite, TikTok, LinkedIn, YouTube Studio. Graf dosega.
- Pregled vseh oglasov s CTR, CPA in ROAS.

**Kanali in nastavitve:**

- povezave do vseh profilov;
- **kontrolni seznami** za merjenje (Meta Pixel in Conversions API, Google Analytics 4 in Google Ads konverzije, Merchant Center, TikTok Pixel – vse prek aplikacij v Shopify), za profile (Google profil podjetja, Meta Business Suite, TikTok Business, LinkedIn, YouTube) in za **e-pošto brez spama**;
- nastavitve Brevo.

### E-pošta, ki pride v nabiralnik (Brevo) – nastavitev

1. Ustvari račun na **brevo.com** (brezplačni paket ima dnevno omejitev števila sporočil – preveri aktualne pogoje).
2. v nastavitvah Brevo odpri **Pošiljatelji in domene → Domene → Dodaj domeno** (npr. `pickupoprema.si`) in pri ponudniku domene dodaj zapise **SPF, DKIM in DMARC**, ki jih pokaže Brevo. Počakaj na potrditev.
3. Dodaj pošiljatelja na tej domeni, npr. `info@pickupoprema.si`. **Ne pošiljaj z naslova @gmail.com** – tak naslov ne prestane preverjanja in sporočila gredo v spam.
4. **Kontakti → Seznami**: ustvari seznam in si zapiši njegov ID (ali ID mape, če želiš, da program za vsako kampanjo ustvari svoj seznam).
5. V nastavitvah Brevo **SMTP & API → API ključi → Ustvari ključ**. V Cloudflare Workerju dodaj skrivnost `BREVO_KEY` s tem ključem in prilepi novi `worker.js` → **Deploy**.
6. V programu: **Marketing → Kanali in nastavitve → Brevo** vpiši ime in e-pošto pošiljatelja ter ID seznama → **Preizkusi povezavo**.
7. Pri kampanji najprej **Brevo test**. Preveri sporočilo v nabiralniku in na **mail-tester.com** (cilj 9/10 ali več), nato **Pošlji prek Brevo**. Brevo sam doda povezavo za odjavo.

Pravila, da sporočila ne gredo v spam:

- pošiljaj samo strankam s soglasjem;
- vedno imej odjavo;
- ne pošiljaj prepogosto (1–2 × na mesec);
- začni z manjšimi seznami;
- izogibaj se besedilom samo s sliko in besedam, kot so »ZASTONJ!!!«.

## 13. Poročila

Izbereš obdobje (ta mesec, prejšnji mesec, letos, lani, zadnjih 12 mesecev, vse).

Program prikaže:

- **ponudbe:** število in vrednost, sprejete, uspešnost (sprejete proti zavrnjenim), povprečna vrednost;
- **naročila in plačila:** število naročil, izvedena naročila, prejeti avansi, neplačani ostanki;
- povprečni čas od ponudbe do naročila, pošiljke s stroški, število strank z naročilom, odprta in zamujena opravila;
- **graf** ponudb in naročil po mesecih;
- **najbolj prodajani izdelki**, najboljše stranke, ponudbe po statusu, naročila po vrsti in pošiljke po prevozniku.

**Izvozi CSV** shrani poročilo za Excel.

## 14. Shranjevanje in varnostne kopije

Vsi podatki se sproti shranjujejo **v napravi** (v brskalniku). V **Nastavitve → Shranjevanje in varnostne kopije** so tri možnosti – vklopi vsaj eno. Na seznamu ponudb te rumeno obvestilo opozori, če kopije ni bilo več kot 7 dni.

### 1. Samodejna kopija na disk (Windows in Mac, Chrome/Edge)

- **Izberi mapo** – najbolje mapo Google Drive za namizje, OneDrive ali iCloud Drive, da je kopija hkrati v oblaku.
- Po vsaki spremembi se zapiše `STIK-Prodaja-podatki.json`, vsak dan še `STIK-Prodaja-kopija-LLLL-MM-DD.json`.
- V isto mapo se shranjujejo tudi PDF-ji (meni ⋯ → **Shrani v mapo**).
- Če brskalnik zahteva ponovno dovoljenje, klikni **Nadaljuj** v rumenem obvestilu.

### 2. Google Drive in Google koledar – neposredno iz programa (vse naprave, tudi telefon)

Enkratna nastavitev Google Client ID (10 minut, na računalniku):

1. Odpri **console.cloud.google.com** in se prijavi z `stikdoo@gmail.com`.
2. Zgoraj **Select project → New project**, ime `STIK Prodaja` → **Create**.
3. **APIs & Services → Library** → poišči **Google Drive API** → **Enable**. Nato poišči še **Google Calendar API** → **Enable**.
4. **APIs & Services → OAuth consent screen** (Google Auth Platform) → **Get started** → ime aplikacije `STIK Prodaja`, e-pošta → *Audience:* **External** → shrani. Pri **Test users** dodaj `stikdoo@gmail.com` (in račune sodelavcev). Pri **Data access** (Scopes) dodaj `…/auth/drive.file` in `…/auth/calendar.events`.
5. **Credentials (Clients) → Create client → OAuth client ID** → *Application type:* **Web application** → pri **Authorized JavaScript origins** dodaj `https://stiksoft.github.io` → **Create**.
6. Kopiraj **Client ID** (konča se z `.apps.googleusercontent.com`).
7. V programu na **vsaki napravi**: **Nastavitve → Shranjevanje → Google Client ID** → prilepi. Po želji vpiši **Google koledar** (privzeto `primary` = tvoj glavni koledar) in vklopi **Montaže vpiši v Google koledar**.
8. Ob prvi uporabi se odpre okno Google za prijavo. Potrdi dostop do Drive (samo datoteke programa) in do dogodkov koledarja. Če Google opozori, da aplikacija ni preverjena, klikni **Nadaljuj** – to je tvoja aplikacija v testnem načinu.

Uporaba:

- **Pošlji podatke v Drive** – vse podatke shrani v datoteko `STIK-Prodaja-podatki.json` v mapi programa na tvojem Drive (ob prvem kliku se prijaviš z Google računom).
- **Prenesi iz Drive** – na drugi napravi zamenja podatke s tistimi iz Drive (pred tem pokaže datum in število ponudb).
- Meni ⋯ → **Shrani na Google Drive** shrani PDF posamezne ponudbe.
- Program ima dostop samo do datotek, ki jih je ustvaril sam.

### 3. Ročna kopija (vse naprave)

- **Shrani kopijo** – ena datoteka z vsemi podatki (Prenosi / Datoteke).
- **Uvozi (dodaj)** – doda ponudbe, stranke … iz kopije; obstoječih ne podvoji.
- **Obnovi (zamenjaj vse)** – podatke v napravi zamenja s kopijo (npr. nov računalnik ali telefon).

### PDF in posamezne ponudbe

- **Računalnik:** gumb **PDF** shrani v izbrano mapo ali odpre okno *Shrani kot*.
- **Android:** PDF → meni **Deli** (Drive, Gmail, WhatsApp, Viber …).
- **iPhone:** PDF → **Deli → Shrani v Datoteke** ali pošlji po e-pošti.
- Meni ⋯ → **Shrani projekt (.json)** omogoča, da ponudbo kasneje odpreš in urejaš (**Odpri datoteko**).

## 15. Uporaba v praksi

1. **Nova ponudba** (ali gumb **Ponudba** pri stranki) → korak **1 Kupec**: izberi stranko ali vpiši novo – samodejno se shrani med stranke.
2. Korak **2 Izdelki**: v temno polje **prilepi povezavo** do izdelka (ali več povezav, vsako v svojo vrstico) → **Poberi vsebino**.
   Hitreje: kjerkoli v programu pritisni **Ctrl+V** / **Cmd+V** – povezava, slika ali besedilo se uvozi samo.

3. V oknu izdelka:
   - klikaj slike v vrstnem redu, kot jih želiš – številka pove vrstni red, prva je glavna,
   - izberi video (ali dodaj svojega iz telefona / YouTube povezavo),
   - popravi naziv in opis (vrstice z `-` postanejo alineje, `**besedilo**` je krepko),
   - če je besedilo v tujem jeziku, ga z gumbom **SL / EN / DE** prevedi (glej poglavje 4),
   - izberi najdeno ceno ali vpiši svojo, določi, ali je vpisana **z DDV ali brez**, dodaj **popust**, količino in enoto,
   - če je cena v tuji valuti, preveri valuto in tečaj (glej poglavje 5).
4. **Iz cenika** doda shranjene artikle in storitve. **Iz naprave** doda slike in videe z diska, iz galerije ali s fotoaparata telefona. **Ročno** doda storitev ali izdelek brez povezave (npr. montaža).
5. **Izgled ponudbe:** predloga (moderna, klasična, minimalna), barva, pisava, svetla naslovnica s fotografijo (samodejno vzame sliko prvega izdelka), velike slike ali slike ob besedilu, cene z ali brez DDV, vsak izdelek na svoji strani, ozadje strani (vodni žig). **Uporabi kot privzeti izgled** velja za vse nove ponudbe.
6. **Podjetje:** podatki podjetja, logotip, glava in noga ponudbe. **Nastavitve:** privzeti DDV, avans, rok dobave, pogoji, številka ponudbe, prevajanje, tečaji in shranjevanje.
7. **PDF**, **Natisni** ali **Pošlji** (predogled je enak natisnjeni ponudbi) (na telefonu pošlje PDF neposredno v e-pošto ali aplikacijo; na računalniku prenese PDF in odpre e-pošto z vpisanim kupcem).
   **Spletna ponudba (HTML)** je ena datoteka, v kateri se videi predvajajo – pošlješ jo kupcu ali objaviš. V PDF-ju je pri videu QR koda, ki jo kupec skenira s telefonom.

### Samodejna polja v pogojih

`{avans_pct}` · `{avans_eur}` · `{rok_dobave}` · `{veljavnost}` (datum) · `{skupaj}` · `{kupec}`

## 16. Nadzorna plošča in Koledar (z Google koledarjem)

**Nadzorna plošča** je začetna stran. Kaže:

- odprte ponudbe, naročila v teku, montaže ta teden in prodajo meseca;
- vse dogodke in roke v naslednjih 7 dneh;
- seznam **Pozornost**: zamujena opravila, zamude dobav, prejeti računi, ki zapadejo, zapadli izdani računi, nizka zaloga, certifikati in dokumenti, ki potečejo, varnostna kopija;
- stanje nabave in marketinga.

Začetno stran lahko zamenjaš v *Nastavitve → Začetna stran*.

**Koledar in roki** v enem koledarju (mesec ali seznam 45 dni) združi:

- tvoje dogodke in dogodke iz Google koledarja;
- montaže in druge izvedbe iz naročil;
- opravila, odpreme pošiljk, pričakovane dobave;
- zapadlosti prejetih in izdanih računov, naročnine, roke za DDV;
- objave v marketingu;
- sejme, sestanke, službene poti, potek certifikatov in dokumentov.

Vsaka vrsta ima svojo barvo in jo lahko skriješ. Klik na vnos odpre naročilo, dogodek ali zapis.

**Dogodki in Google koledar – sinhronizacija na vseh napravah:**

1. Nastavi Google Client ID z omogočenim Google Calendar API (poglavje 14, točka 2).
2. **Koledar → Sinhroniziraj** – prvič se prijaviš z Google računom.
3. **Nov dogodek** (ali klik na dan): naslov, začetek in konec (ali ves dan), kraj, opis, opomnik. Ob shranjevanju se dogodek zapiše v Google koledar.
4. Dogodki, ki jih dodaš v Google koledar na telefonu, računalniku ali kjerkoli drugje, se ob sinhronizaciji prikažejo v programu.
5. Spremembe in brisanja delujejo v obe smeri. Dogodek, izbrisan v programu, se izbriše tudi v Google koledarju, in obratno.
6. **Montaže vpiši v Google koledar** (Nastavitve): ko v naročilu nastaviš termin montaže, se samodejno ustvari dogodek z imenom kupca, izdelki, telefonom in opomnikom dan prej. Ob spremembi termina se posodobi.

Google koledar je tako skupna točka – dogodki so vidni v Google koledarju na vseh tvojih napravah in v programu na vsaki napravi po sinhronizaciji. Prijava pri Googlu velja približno 1 uro; nato ob kliku **Sinhroniziraj** Google morda znova odpre okno za potrditev. Program sinhronizira samodejno ob odprtju koledarja, če je prijava še veljavna.

## 17. Ostale rubrike

Vse rubrike spodaj imajo enak način dela:

- seznam z iskanjem, filtri po stanju in razvrščanjem;
- **nov vnos** v obrazcu, priloge (PDF, slike, dokumenti);
- **Natisni** (seznam ali posamezen vnos s prilogami) in izvoz **CSV**;
- datumi (roki, veljavnosti, zapadlosti) se samodejno prikažejo v koledarju in na nadzorni plošči.

**Prodaja**

- **Kupci veleprodaja (B2B)** – podjetje, rabat, cenik, plačilni rok (upošteva se pri zapadlosti računov), kreditni limit, kontakt nabave, pogodbe.
- **Montažni termini** – vse odprte montaže po tednih, z opozorilom, ali je material že prispel. Termin nastaviš v naročilu.
- **Ideje** – ideje za izdelke, izboljšave in marketing s prioriteto in stanjem.
- **Lastni proizvodi** – izdelki lastne izdelave: sestavnica, strošek materiala in dela, prodajna cena, program izračuna lastno ceno in maržo.

**Nabava in logistika**

- **Prihodi blaga** – prevzemi z dobavnico in stanjem pošiljke (v redu, poškodovano, manjka). Na vrhu so pričakovani prihodi iz Nabave; **Prevzemi** označi naročilo dobavitelju kot prispelo, posodobi naročila kupcev in zalogo ter ustvari zapis prevzema.
- **Zaloga** – artikli z lokacijo, količino, minimalno zalogo in nabavno ceno; premiki (+ prevzem / − izdaja). Artikle dodaš tudi **Iz cenika**. Ko v Nabavi označiš prispelo blago, se zaloga poveča samodejno (po šifri artikla). Artikli pod minimalno zalogo so označeni in prikazani na nadzorni plošči.
- **Uvozi** – uvozne pošiljke: stanje, datumi, špediter, carinska deklaracija (MRN), vrednost, prevoz, carina, uvozni DDV. Program izračuna skupni strošek blaga.
- **Transport izvajalci** – kurirji, špediterji, prevozniki s kontakti, pogodbami in ceniki.
- **Certifikati** – homologacije, ECE, CE, TÜV … s številko, izdajateljem in datumom veljavnosti (opozorilo 60 dni prej).
- **Montaže (postopki)** – navodila za montažo po izdelkih in vozilih: koraki, orodje, material, čas, opozorila, video in priloge.

**Finance**

- **DFA plačila** – prejeti računi dobaviteljev z zapadlostjo, plačilom, sklicem in TRR. Filtri *Odprto / Zapadlo / Plačano*, vsota neplačanega in zapadlega.
- **IFA plačila** – vsi računi, izdani pri naročilih, z zapadlostjo (plačilni rok iz Nastavitev ali B2B kupca) in datumom plačila. Datum plačila vpišeš kar na seznamu.
- **Naročnine** – programska oprema, domene, zavarovanja, članarine z zneskom, obdobjem in naslednjim plačilom; letni strošek vseh naročnin.
- **Telefoni** – številke, uporabniki, operater, paket, strošek, naprava in konec vezave.
- **Službena potovanja** – potni nalogi s kilometrino, dnevnicami, nočitvami in stroški; program izračuna skupni strošek.
- **Računovodstvo** – mesečni paket za računovodjo (stanje, datum pošiljanja, rok za DDV, dokumenti). **Mesečni paket (CSV)** izvozi izdane in prejete račune izbranega meseca.

**Dokumenti**

- **Dokumentacijski sistem** – pogodbe, zavarovanja, licence, pravilniki … s kategorijo, oznakami in datumom veljavnosti.
- **Tehnična poročila** – poročila o pregledih, predelavah in homologaciji vozil (kupec, vozilo/VIN, vsebina, priloge).
- **Logo in EPP tisk** – logotipi in grafična podoba ter naročila tiska (vizitke, nalepke, oblačila, katalogi).
- **Sejmi** – prijava, stojnica, stroški, priprava in rezultati.
- **Sestanki** – dnevni red, zapisnik in sklepi; **Sklepe dodaj med opravila** vsak sklep spremeni v opravilo.
- **Tutoriali** – video in pisna navodila za sodelavce in stranke.

**Oglasi** so v rubriki **Marketing in oglasi**, zato niso podvojeni.

**Organizacija in Podjetje**

- **To-Do list** – opravila (poglavje 7).
- **Dejavnosti** in **Izpis iz registra** sta zdaj v rubriki **Podjetje** (poglavje 18).
- **Podjetje** – podatki podjetja, glava in noga dokumentov.

## 18. Meni, programi (dejavnosti) in mape

### Meni

Meni na levi ima **dva stolpca** in skupine:

- na vrhu **Nadzorna plošča, Koledar in roki in To-Do list**;
- nato skupine **Prodaja, Nabava in logistika, Marketing, Finance, Dokumenti in Sistem**.

Klik na ime skupine jo **skrije ali prikaže** (»−« / »+«). Tako imaš na zaslonu samo tisto, kar uporabljaš, brez pomikanja. Med urejanjem ponudbe se meni skrči na ikone. Na telefonu so spodaj Plošča, Koledar, Ponudbe, Naročila in To-Do, vse ostalo je pod **Več**.

### Programi (dejavnosti podjetja)

**Podjetje → Dejavnosti in programi:**

1. **Dodaj PICKUPOPREMA, ELEKTROMATERIAL, MULTIMEDIA** (ali **Nov program**) – vsak program ima barvo, šifro SKD in oznako **registrirano**.
2. Pod vsakim programom dodaj **podejavnosti** (npr. PICKUPOPREMA → Strešni šotori, Trde strehe, 12 V sistemi), prav tako s šifro SKD in oznako registrirano. Program opozori, če katera dejavnost še ni registrirana.
3. Spodaj je seznam registriranih dejavnosti (šifre SKD), na zavihku **Izpis iz registra** pa izpisi AJPES/FURS s povezavo na Poslovni register.

**Ločeno vodenje po programih:**

- Na vrhu menija je izbira **Vsi programi / PICKUPOPREMA / …**. Ko izbereš program, ponudbe, naročila, stranke, ceniki, montažni termini, poročila in statistika prikazujejo samo ta program.
- Program nastaviš pri **stranki**, **ponudbi** (*Podatki ponudbe → Program*), **naročilu** (prenese se iz ponudbe), **artiklu v ceniku** ali za cel cenik (*Mape cenikov*) in pri **spletni strani**.
- Nova ponudba in stranka dobita izbrani program samodejno. Na seznamih je program prikazan kot barvna oznaka.

### Mape in datoteke (povsod)

**Dokumentacijski sistem, Tehnična poročila, Certifikati, Katalogi in Logo in EPP tisk** se odprejo kot mape (kot v Raziskovalcu):

- privzete mape, npr. Banka dokumenti, DFA prejeti računi, Leasing dokumenti, Najemne pogodbe, Zavarovanja …;
- **Nova mapa** (tudi podmape), **Naloži datoteke** (PDF, JPG, PNG, AI, SVG, Excel, Word, video …) ali povleci datoteke v okvir;
- **Povezava** (Drive, Canva …) in **Beležka** (besedilo);
- **Išči v vseh mapah**;
- pri datoteki: **Poglej** (PDF, slike in video se odprejo v programu), **Natisni**, **Prenesi**, **⋯** (preimenuj, premakni v drugo mapo, izbriši);
- ⋯ pri mapi: preimenuj ali izbriši (samo prazno mapo);
- **PDF** natisne ali shrani seznam datotek.

Tudi vse ostale rubrike (DFA, naročnine, uvozi, sejmi …) imajo zavihek **Mape in datoteke** poleg **Evidence**. **Katalogi** so namenjeni originalnim katalogom dobaviteljev: naložiš PDF, ga pregledaš v programu in natisneš.

Pri vseh evidencah so na voljo tudi **Uvoz Excel** (izbereš, kateri stolpec je kaj), **Excel** in **CSV** izvoz ter **Natisni**.

## 19. Ceniki, montažni termini, finance in potovanja

### Ceniki

- **Artikli / Mape in PDF ceniki:** na zavihku *Mape in PDF ceniki* hraniš originalne ali slikovne cenike (PDF, Excel) za ogled. Gumb **V tabelo** takšen cenik pretvori v artikle; izbereš, kateri stolpec je kaj.
- **Mape cenikov:** vsak cenik (npr. RHS, Rhino-Rack, Elektro) uvrstiš v mapo (npr. *Dobavitelji*, *Lastni ceniki*, *Akcije*) in v program. Ceniki so na vrhu razvrščeni po mapah.
- **Brisanje:**
    - **✕** na koncu vrstice izbriše artikel takoj; z gumbom **Razveljavi** ga vrneš;
    - s kljukicami (ali **Izberi vse**) izbereš več artiklov → **Izbriši izbrane**, **Premakni v cenik**, **V cenik builder**, **Shopify CSV**.
- **Slike:** **Majhne** ali **Velike**. Z velikimi slikami je izdelek prepoznaven.
- **Cenik builder:**
    - izberi cenike ali označene artikle in program;
    - slike (brez, majhne, velike), postavitev (**Tabela** ali **Kartice**), stolpce (šifra, kratek opis, enota, cene z ali brez DDV) in razvrščanje po cenikih;
    - popust za akcijski cenik (prečrtana redna cena), naslov, podnaslov in opombo;
    - **Natisni / PDF** natisne ali shrani cenik za stranke, **Shrani** pa ga shrani za kasnejše urejanje (*Shranjeni ceniki*).
- **Podatki za spletno trgovino** (pri artiklu, razdelek *Podatki za spletno trgovino*): proizvajalec, vrsta izdelka, oznake, EAN, primerjalna cena, teža, zaloga, URL ime (handle) in stanje (objavljen/osnutek).
- **Shopify CSV:** izvoz v obliki uradne predloge Shopify, s cenami z DDV (ali brez, izbereš), opisom v HTML, slikami (javne povezave), zalogo in oznakami. V Shopify: **Izdelki → Uvozi → izberi datoteko**. Pred objavo preveri nekaj izdelkov.
- **Excel:** celoten cenik z vsemi polji, primeren tudi za druge trgovine (WooCommerce ipd.).

### Montažni termini

- Tabela kot v STIK OS s stolpci Stranka, Vozilo, Št. ponudbe, Datum montaže, Montažer, Status, Avans plačan, Blago je prispelo. Klik na naslov stolpca razvrsti tabelo.
- **Termini iz naročil** se prikažejo samodejno. Vozilo in montažerja vpišeš v naročilu (*Izvedba*), status in »blago je prispelo« se izračunata iz postavk.
- **Nov termin** doda ročno montažo (stranka, vozilo, št. ponudbe, datum, ura, montažer, status, avans, blago, telefon, kraj, opombe, priloge).
- **Filtri:** iskanje, *Vse: Status*, *Vse: Montažer*. Prikaz kot **seznam** ali **tabla** po statusih.
- **Uvoz iz Excela**, izvoz **Excel / CSV**, **PDF** in tisk. Termini so tudi v koledarju (in v Google koledarju, če je vklopljeno).

### DFA in IFA plačila

- **DFA:** zavihek *Evidenca* → **Uvoz Excel** (izbereš stolpce: dobavitelj, št. računa, datum, zapadlost, znesek …), izvoz **Excel / CSV**. Datumi v obliki `1.9.2026` ali `2026-09-01` se pretvorijo sami.
- **IFA:** **Uvoz iz Excela** (npr. iz računovodskega programa), **Ročni račun** in **Izvoz v Excel**. Uvoženi in ročni računi so prikazani skupaj z računi iz naročil; datum plačila vpišeš na seznamu.

### Službena potovanja

- **Vozilo:** *službeno vozilo (podjetje)* – km se beležijo brez kilometrine, stroški goriva in cestnin posebej – ali *osebno vozilo (kilometrina)* – km × kilometrina.
- **Relacija:** vsak kraj vpiši v svojo vrstico (npr. Oplotnica, Ljubljana, Celje) in po potrebi označi **Povratna pot**.
- **Izračunaj kilometre** izračuna razdaljo po cestah (brezplačni OpenStreetMap). **Odpri v Google Maps** odpre isto relacijo v Google Maps za preverjanje.
- Kilometrino (€/km) vpišeš v *Nastavitve → Kilometrina*. Veljavni znesek preveri pri računovodji, ker se spreminja z uredbo.

### Spletne strani

Rubrika **Marketing → Spletne strani** vsebuje za vsako spletno stran in trgovino:

- platformo, program, stanje;
- registrarja in potek domene, gostovanje (ponudnik, paket, strošek, potek);
- DNS, SSL, e-pošto, admin povezavo, analitiko, varnostne kopije in priloge.

Potek domene in gostovanja je v koledarju in opozorilih.

**Gesel ne vpisuj v program** – uporabi upravitelja gesel (npr. Bitwarden, 1Password, Google Password Manager).

## 20. AI asistent

**AI asistent** (Sistem → AI asistent) je pogovor s Claude, ki vidi povzetek tvojih podatkov:

- odprte ponudbe, naročila in termine;
- koledar, opravila in nabavo;
- neplačane račune, nizko zalogo in prodajo po mesecih.

Primeri vprašanj:

- *»Kaj moram danes in ta teden narediti?«*
- *»Katere montaže so ta teden in ali je material prispel?«*
- *»Kateri računi so zapadli?«*
- *»Napiši e-pošto kupcu, da je oprema prispela.«*
- *»Predlagaj ukrepe za več prodaje.«*

AI vklopiš v *Nastavitve → Opisi izdelkov in AI* (Worker s ključem `ANTHROPIC_KEY` ali lasten API ključ). Odgovore vedno preveri.

## 21. Slike, ceniki, plačila in izpiski (novosti)

### Slike v ponudbah in cenikih

- V polje **Izdelki** v ponudbi lahko **povlečeš** ali **prilepiš** (Ctrl+V) sliko, besedilo ali povezavo.
- Na vsaki sliki izdelka (in pri sliki artikla v ceniku) je gumb **✎ Uredi sliko**:
    - **obreži** (povleci pravokotnik čez sliko) in obrni ali zrcali;
    - nastavi svetlost, kontrast in nasičenost;
    - **Kvadrat z belo podlago** in velikost 2048 px pripravi sliko za spletno trgovino (Shopify priporoča kvadratne slike);
    - **Uredi z AI** (npr. »odstrani ozadje, bela podlaga«) uporablja model Google Gemini za slike. Potrebuješ Google Gemini API ključ (*Nastavitve → AI → AI urejanje slik*). Urejanje brez AI je brezplačno in deluje brez ključa.
- Iz povezav program zdaj vzame **samo ime izdelka**. Izbir s strani (Da/Ne, »Izberite …«, različice) ne dodaja več v naslov.

### Ceniki – tri jasne možnosti

- **Ceniki – tabele:** artikli, razvrščeni po programih in mapah (*Mape in programi cenikov*).
    - **Uvozi Excel / PDF / Word / CSV** prebere celotno datoteko. Pri PDF izpiše, koliko strani je prebral. Word (.docx) tabele se pretvorijo v artikle, slika v vrstici pa postane slika artikla.
    - Stari format .doc najprej shrani kot .docx.
    - **Prepoznaj z AI** bere cenik po delih, zato zajame vse strani.
    - **Stolpci** dodajo lastne stolpce (npr. Pakiranje, Minimalna količina, Dobavni rok, Nabavna cena). Vpišeš jih pri artiklu, uvoziš iz Excela, prikažejo se v cenik builderju in izvozu.
- **Ceniki – PDF:** originalni ceniki (PDF, Word, Excel) za ogled v programu, v mapah po programih (mape za vsak program se ustvarijo same). **V tabelo** jih pretvori v *Ceniki – tabele*.
- **Izdelava cenika:** izberi cenike ali označene artikle in program, slike, postavitev in stolpce (tudi lastne), nato natisni ali shrani kot PDF.

### Zaloga

Zaloga se poveča **samo s potrjenim prispetjem**:

- v **Nabavi**, ko pri postavki označiš **Prispelo** (tudi posamezno postavko). Artikel, ki ga na zalogi še ni, se ustvari sam;
- v **Prihodih blaga** z gumbom **Prištej v zalogo**. Postavke vpiši kot `šifra naziv × količina`, vsako v svojo vrstico.

Zalogo iz računovodskega programa uvoziš z **Uvoz Excel** (zavihek Evidenca). Artikle razvrstiš po programu.

### DFA in IFA plačila

- **DFA** (prejeti računi) in **IFA** (izdani računi) sta evidenca računov in plačil, ločena od naročil. Oba uvoziš iz Excela (npr. izvoz iz računovodskega programa) in izvoziš v Excel.
- **Stanje plačila** pri vsaki postavki: *odprto* (rdeče), *v postopku* (modro), *plačano* (zeleno). Zapadle neplačane so rdeče. Na dnu so vsote neplačanega, zapadlega in plačanega.

### Izpiski in plačila

Rubrika **Finance → Izpiski in plačila** ima zavihke **Bančni izpiski, Plačila s kartico, Plačila na obroke in Leasingi**.

**Bančni izpiski:**

1. **Uvozi izpisek** – PDF izpisek banke ali izvoz transakcij iz spletne banke (Excel/CSV; izbereš stolpce datum, partner, namen, sklic, breme, dobro).
    - Pri PDF izpisku z vklopljenim AI izpisek prebere AI, sicer program sam prepozna vrstice z datumom in zneskom. Preveri razvrstitev in jo po potrebi popravi (Prihodek/Odhodek).
2. Program transakcije razvrsti v **Prihodke** (prilivi) in **Odhodke** (odlivi) in jih **samodejno poveže** z odprtimi računi: DFA za odlive, IFA za prilive, po znesku ter številki računa ali imenu partnerja. Povezani računi dobijo stanje *plačano* in se obarvajo zeleno.
3. Nepovezane transakcije ročno povežeš v stolpcu **Povezan račun**. Ob vsakem novem uvozu se stanje posodobi. **Ponovno poveži** poskusi znova za vse.
4. Na vrhu je statistika: prilivi, odlivi, odprto pri kupcih (IFA) in neplačano dobaviteljem (DFA), z zapadlimi zneski.
5. **Opomini:** seznam kupcev z odprtimi IFA računi. Besedilo opomina lahko urediš (polja `{kupec}`, `{seznam}`, `{skupaj}`, `{trr}`, `{podjetje}`) in shraniš. Opomin pošlješ po e-pošti ali ga natisneš.

**Plačila s kartico** (trgovec, znesek, kartica – zadnje 4 številke, kategorija, račun priložen, knjiženo), **Plačila na obroke** (predmet, ponudnik, skupni znesek, obrok, število in plačani obroki, naslednji obrok – izračun preostanka) in **Leasingi** (predmet, leasingodajalec, pogodba, vrsta, vrednost, polog, obrok, trajanje, obrestna mera, ostanek vrednosti, zavarovanje – izračun skupnega stroška). Roki so v koledarju.

### Računovodstvo

- Pri mesecu izbereš **vrsto dokumentov** (npr. DFA prejeti računi, Banka dokumenti, Pologi). Naložene datoteke (tudi skenirani PDF-ji) se **samodejno shranijo tudi v Dokumente** v istoimensko mapo. Datoteke, naložene pri DFA, gredo v mapo *DFA prejeti računi*.
- **Pošlji računovodji:** e-pošto računovodje vpišeš v *Nastavitve* (več naslovov loči z vejico).
    - Na telefonu se dokumenti pošljejo neposredno kot priloge.
    - Na računalniku program prenese ZIP z vsemi dokumenti in odpre e-pošto; ZIP pripneš k sporočilu.
- **Prenesi vse (ZIP)** shrani vse dokumente meseca.

### Mape, povezave in Google Docs

- Imena map so zdaj izpisana v celoti.
- **Sejmi** imajo privzete mape *Obiski sejmov* in *Razstavljanje*, **Tutoriali** mape po temah. Nove mape dodajaš z **Nova mapa**.
- **Povezave z Google Drive ali YouTube** (Povezava) se odprejo za ogled kar v programu. Datoteko na Drive deli kot »Vsak s povezavo«, nato prilepi povezavo.
- **✉ Pošlji po e-pošti** pri vsaki datoteki ali povezavi pošlje povezavo ali opis stranki, npr. tutorial.
    - Na telefonu pošlje datoteko neposredno.
    - Na računalniku datoteko pripneš sam, zato je za velike videe najboljša povezava z Drive.
- **Montaže (postopki)** in ostale evidence: slike, videe in dokumente povlečeš v okvir **Povleci … sem**. Povezave (Drive, YouTube) dodaš z **Dodaj povezavo** in jih pogledaš ali pošlješ po e-pošti.
- **Pregled Word in Excel datotek** je v programu (tehnična poročila, ceniki, dokumenti). **Uredi v Google Docs / Sheets** naloži datoteko v tvoj Google Drive kot Google dokument in ga odpre za urejanje. Ko končaš, klikni **Prenesi spremembe iz Google**, da se posodobljena različica shrani v program. Potrebuješ nastavljen Google Client ID (poglavje 14).

### AI – možnosti in stroški

V *Nastavitve → Opisi izdelkov in AI* izbereš:

- **Samodejni izvleček** – brez AI, brezplačno (samo kratki opisi izdelkov).
- **Claude AI prek Workerja** – priporočeno. Ključ je varno shranjen v Cloudflare:
    1. Na **console.anthropic.com** se registriraj, dodaj plačilno sredstvo z majhnim dobroimetjem (npr. 5 USD) in ustvari **API key**.
    2. V Cloudflare: **Workers & Pages →** tvoj Worker **→ Settings → Variables and Secrets → Add → Secret**, ime `ANTHROPIC_KEY`, vrednost ključ → **Deploy**.
    3. V programu izberi *Claude AI prek mojega Workerja*; naslov Workerja mora biti vpisan v polju Posrednik.
- **Claude AI z API ključem v brskalniku** – enostavneje, a ključ je shranjen v brskalniku.
- **OpenAI (ChatGPT)** – ključ s platform.openai.com → API keys.
- **Google Gemini** – ključ z aistudio.google.com → Get API key. Google ima brezplačno kvoto z omejitvami. Isti ključ lahko uporabiš za AI urejanje slik.

Pomembno: **brezplačnega API dostopa do Claude ni**. Obračuna se po porabi, običajno nekaj centov na dan pri normalni uporabi. Tudi **naročnine** (Claude Pro, ChatGPT Plus, Gemini Advanced) **ne vključujejo API dostopa**; API ključ je ločena storitev z lastnim obračunom. Če tvoje podjetje že ima API dostop pri OpenAI ali Google, izberi tega ponudnika in vpiši ključ. Opis dejavnosti podjetja (za AI besedila) vpišeš v istem razdelku.

**AI studio** v Marketingu sprejme tudi **povezavo** (AI prebere stran) in **slike** (AI jih pogleda, npr. težavo na izdelku ali obstoječ oglas).

### Koledar

- Pogledi **Dan, Teden, Mesec, Seznam**, gumbi **Danes, ‹, ›** kot v Google koledarju.
- Klik na dan v mesecu odpre dnevni pogled, klik na uro v dnevnem ali tedenskem pogledu ustvari dogodek ob tej uri.
- Datumi v koledarju so zapisani kot **dd/mm/llll**.

## 22. Hitri kontrolni seznam za namestitev

1. **GitHub Pages:** naloži vse datoteke iz ZIP v repozitorij (poglavje 1). Pri posodobitvi zamenjaj `index.html`, `sw.js` in `worker.js`.
2. **Cloudflare Worker** (neobvezno, a priporočeno):
    - v Worker prilepi `worker.js` → **Deploy**;
    - dodaj skrivnosti `ANTHROPIC_KEY` (AI), `BREVO_KEY` (e-pošta) in po želji `DEEPL_KEY`;
    - naslov Workerja vpiši v *Nastavitve → Posrednik*.
3. **Google Cloud:** projekt, Google Drive API in Google Calendar API, zaslon za soglasje s testnim uporabnikom, OAuth Client ID za `https://stiksoft.github.io` (poglavje 14).
4. **Vsaka naprava:**
    - namesti aplikacijo (poglavje 2);
    - vpiši Google Client ID;
    - klikni **Koledar → Sinhroniziraj** in **Shranjevanje → Prenesi iz Drive** (če že imaš podatke na drugi napravi).
5. **Glavni računalnik:** *Shranjevanje → Izberi mapo* v Google Drive za namizje (samodejna varnostna kopija).
6. **Podjetje:** logotip, podatki, glava in noga dokumentov; *Nastavitve*: DDV, rok dobave, cena ure montaže, garancija, plačilni rok.
7. **Po posodobitvi:** stran enkrat osveži (Ctrl+F5 na računalniku; na telefonu aplikacijo zapri in znova odpri). Podatki ostanejo.

## 23. Dobro je vedeti

**Program se ne odpre ali ne shranjuje po posodobitvi?** Ob nadgradnji program posodobi shrambo v brskalniku. Če je starejša različica še odprta v drugem zavihku ali v nameščeni aplikaciji, se pokaže okno *Zapri stare zavihke programa*. Zapri vse druge zavihke in okna s programom, nato klikni **Poskusi znova**. Podatki ostanejo. Če se na vrhu pokaže rdeče obvestilo *Shranjevanje v brskalnik ne deluje*, program odpri prek spletnega naslova v Chromu ali Edgeu (ne v zasebnem oknu).

- Slike se ob dodajanju pretvorijo in shranijo v ponudbo, zato ponudba deluje tudi, če trgovina sliko kasneje umakne.
- Lastni videi iz telefona so veliki; za daljše posnetke je bolje naložiti na YouTube (lahko kot »Unlisted«) in prilepiti povezavo.
- Podatki v brskalniku so vezani na napravo in brskalnik. Za prenos na drugo napravo: **Izvozi vse** → na drugi napravi **Uvozi**, ali uporabljaj shranjevanje v Google Drive.
- Brisanje podatkov brskalnika izbriše tudi ponudbe v njem – zato redno varnostno kopiraj.
