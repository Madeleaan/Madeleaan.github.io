---
title: Bezpečnost
editUrl: false
head:
  - tag: link
    attrs:
      rel: stylesheet
      href: https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css
---

Bezpečná práce s počítačem. Vlastnosti bezpečného hesla a pravidla pro nakládání s ním. Škodlivé programy a jejich šíření. Základy šifrování, jeho praktické využití.

* Jaké jsou charakteristiky bezpečného hesla a jaké jsou důsledky prolomení hesla?
* Jaké jsou způsoby šíření virů. Jaké mohou být důsledky zavirování zařízení?
* Proč je důležité šifrovat komunikaci na síti? Jaký je rozdíl mezi HTTP a HTTPS?
* Vysvětlete princip fungování asymetrických šifer.
* V čem spočívá efektivita sociálního inženýrství?

***

# Bezpečné heslo

Aby bylo **heslo bezpečné**, mělo by obsahovat více než 8 znaků, kombinaci malých a velkých písmen, čísel, speciálních znaků (!?#@-\_). Zároveň bychom neměli používat běžně opakovaná hesla (12345, qwerty, asdf, ...), bydliště, jména či příjmení. Pokud chceme extra ochrannou vrstvu, můžeme použít dvoufázovou verifikaci (2FA - 2 Factor Authentication) přes e-mail nebo autentizační aplikaci. Další možnost jsou například fyzické klíče, které se zapojují do USB portů či komunikují přes NFC.

## Důsledky prolomení

Při **proniknutí** do našeho účtu se za nás může útočník vydávat, vydírat nás, ukrást cenné informace či přímo peníze. Pokud máme propojeno více účtů, může se dotyčný dostat i na ně a způsobit větší neplechu.

# Šíření virů

**Viry se šíří** buď přes programy (stáhneme si soubor, hru ze špatné stránky), přílohy v emailu (obvykle využívající falešné koncovky souborů), webové stránky (pochybné reklamy na nich) či přes USB disky.

## Důsledky zavirování

Při **zavirování** může dojít k zašifrování dat (útočník potom chce zaplatit, aby je zpět odšifroval), úniku citlivých informací (hesla, bankovní údaje), zpomalení zařízení (těžba kryptoměn v pozadí), zobrazování velkého počtu nevyžádaných reklam či poškození systému a jeho kritických souborů.

# Šifrování komunikace na síti

Je důležité zejména proto, aby cizí osoby s nekalými úmysly nemohly přečíst data, která si se serverem posíláme. Pro to jsou důležité pojmy HTTP a HTTPS (viz. [Internet, e-mail, www stránky#Internetové protokoly](/notes/informatika/hotovo/internet-e-mail-www-stránky#internetové-protokoly)), které běží na portech 80, respektive 443

# Asymetrické šifrování

**Asymetrické šifrování** funguje na principu dvou klíčů - veřejného (bezpečný pro předání dalším lidem) a soukromého (nikdy bychom neměli posílat a dávat na internet). Pokud chceme *někomu poslat* zašifrovanou zprávu, použijeme *jeho veřejný* klíč pro zašifrování a danou zašifrovanou zprávu pošleme. Odšifrovat se poté dá pouze soukromým klíčem příjemce. A pokud *odesílatel* vytvoří podpis *zašifrováním* zprávy *svým soukromým* klíčem a pošle ji spolu se zprávou, pak lze pomocí jeho veřejného klíče znovu zašifrovat a zkontrolovat že podpisy sedí - tím se ověřuje autenticita a identita odesílatele. Při spojeních na internetu toto probíhá automaticky, takže se uživatel nemusí o nic starat a ani my to nemusíme k maturitě umět do detailu.

* Jmenuje se asymetrické, protože se využívají dva různé klíče
* Využívají se operace, které jsou velmi složité na prolomení. Příklad je vynásobení dvou velmi velkých čísel ($2^{1024}$). Rozklad na prvočinitele, který by musel útočník provádět je tedy tak složitý, že je v dnešní době nemožné ho provést
* V praxi se využívá algoritmus jménem RSA. Ten využívá klíč dlouhý 1024 bitů, ale přechází se na klíče dlouhé 4096 bitů kvůli vývoji kvantových počítačů (ty by je mohly prolomit stejně jako zašifrovaná hesla)

# Sociální inženýrství

**Sociální inženýrství** spočívá ve schopnosti ovlivnit psychiku oběti do stavu, ve kterém uvěří útočníkovi a vydá mu citlivé údaje. Přímý cíl útoku tedy není počítač, ale osoba ho používající. Jedná se například o falešné bankéře, výhodné nabídky, nigerijské prince odkazující obrovský majetek ale i stránky napodobující systémové chyby, kde musí člověk zavolat do (většinou indického) centra pro další pomoc. Ovlivňuje převážně internetu neznalé uživatele (důchodci). Velmi dobře fungují intenzivní emoce a dostávání oběti do stresu (časového, ...)
