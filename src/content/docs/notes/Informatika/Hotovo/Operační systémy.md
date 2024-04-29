---
title: Operační systémy
editUrl: false
---

Charakteristika operačního systému. Uživatelé, grafické rozhraní (plocha, rozlišení, ikona, okno, přenos dat, schránka), paměť.

* Jmenujte alespoň tři různé operační systémy.
* Jaká je role operačního systému vzhledem k uživateli a vzhledem k aplikacím?
* Jak může systém sdílet více uživatelů? Jaké jsou základní typy uživatelských účtů?
* Jaký je rozdíl mezi virtuální a fyzickou pamětí?

***

# Druhy operačních systémů

Operačních systémů je několik: Windows, Linux, MacOS, Android, iOS, OpenBSD, Unix, ...

* U osobních počítačů nejvíce zastoupeny **Windows** (75%), poté **MacOS** (15%) a následně **Linux** (3%). Ten je sice zde zastoupen nejméně, ale zato je zdaleka dominantní v odvětví serverů a superpočítačů (nepotřebuje tak kvalitní hardware a je stabilnější - uživatel si může rozhodnout kdy restartovat, instalovat aktualizace, ...), mobilních operačních systémů (Android) a tzv. *embedded systémů* - např. chytré hodinky a náramky.

# Operační systém jako prostředník

OS je mezikrok u dvojice *uživatel - hardware*. Běží díky němu programy a umožňuje přes ně používat komponenty počítače, kreslit na obrazovku nebo prohlížet a zapisovat soubory. Programům umožňuje pomocí *abstraktních vrstev* přistupovat k hardwaru s jednoduchými metodami - tzv. *API*. Zároveň spravuje prostředky, spouští automatické akce a procesy, ...
![os\_hierarchie.png](../../../../../assets/notes/informatika/obrázky/os_hierarchie.png)

# Uživatelské účty

Na jednom systému může být více uživatelských účtů. Každý má svoje hesla, domovskou složku, uživatelské preference (obrázek plochy, barva motivu, ...), programy, nastavení, ...

* Například externí disky ale mají uživatelé společné
* Některé programy mají na výběr, jestli se nainstalují jenom *pro jednoho uživatele*, nebo *pro všechny*
* Mezi typy účtů patří **standardní uživatel** a tzv. **administrátor** (hojně využíván v centrálně řízených systémech, např. školách), některá nastavení či práva se dají nastavit pouze pro administrátora, aby např. musel zadat heslo při instalaci nových aplikací

# Druhy paměti

V **paměti** se obecně ukládají **data**.

## Operační paměť

*(RAM = Random Access Memory)* ukládá data potřebná ke správnému chodu procesoru. Jsou velmi rychle přístupná, ale jejich data se ztratí po vypnutí počítače

* Dělí se na **fyzickou** (to co máme vložené v základní desce) a **virtuální** (část disku je nepřístupná uživateli a rozšiřuje fyzickou, pokud přeteče), které se občas také říká *swap*

## Disková paměť

Ukládá data na disk, HDD nebo SSD. Tato data *zůstávají i po vypnutí počítače*, jsou zde uložena trvalá data, konfigurace, soubory pro správné fungování systému. Systém nám tato data umožňuje *upravovat, přidávat a mazat soubory, ...*

# Pojmy

## Uživatelské rozhraní

Umožňuje uživateli ovládat počítač pomocí *grafického rozhraní a prvků* (monitor)

## Plocha

je *hlavní obrazovka* systému, vidíme na ní ikony aplikací, naše vybrané pozadí, okna spuštěných aplikací

## Rozlišení

Určuje *počet pixelů na obrazovce*, udává se jako počet sloupců x počet řádků. Mezi nejčastější patří HD (1280x720), *FullHD (1920x1080)*, 4K (3840x2160)

## Okno

Obdélníkové uživatelské rozhraní aplikace; grafický výstup aplikace. Na Linuxu tzv. *Tiling Window Managers* - obrazovka rozdělená na co největší okna, která se nepřekrývají (dobré pro efektivitu, ale složitější na naučení)

## Přenos dat

V operačním systému je spousta typů a protokolů, *Wi-Fi* pro bezdrátový internet, *Bluetooth* pro bezdrátové připojení zařízení, *USB* pro drátové připojení zařízení

## Schránka

*Dočasná paměť* počítače, do které se vždy uloží to, co *zkopírujeme*, a z ní se také data *vkládají* někam jinam. Ve Windows i jiných lze zapnout i *historie schránky*, kde lze vidět nedávnou (např. 10 posledních) historii.
