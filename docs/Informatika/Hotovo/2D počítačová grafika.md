Charakteristika a využití. Grafická periferní zařízení. Rastrový a vektorový obrázek. Grafický software.

- Vysvětlete princip fungování a důležité parametry digitálních fotoaparátů.
- Jmenujte základní typy grafických souborů pro rastrové a vektorové obrázky a vysvětlete rozdíly mezi nimi.
- Vysvětlete pojmy ztrátová a bezztrátová komprese, barevná hloubka, rozlišení.
---
# Digitální fotoaparáty
Digitální fotoaparáty fungují na principu dopadu světla přes soustavu čoček v objektivu na citlivý sensor. Každý bod na sensoru, na který dopadne světlo, vyšle elektrický signál, který je poté uložen v náboji. Čím máme delší expozici, tím déle zůstává závěrka otevřená a na sensor se zachytí se více světla. Náboj je poté odváděn do převodníků, kde se mění na binární data a je uložen do paměti (buď přímo jako obrázek - JPG, nebo jako ta data, ze kterých se obrázek tvoří - RAW, používáno spíše profesionály). Paměti mohou být buď Flash, nebo klasické paměťové karty.
# Parametry
Pokud si chceme vybrat fotoaparát, je dobré se podívat na jeho parametry. Mezi ty patří například *rozlišení* (počet pixelů na sensoru, dnes se udává v Mpx - mobilní telefony mívají v desítkách), *citlivost* (ISO, jak moc reaguje sensor na světlo, umožňuje za cenu digitálního šumu dosáhnout stejného počtu světla za menší čas), *clona* (ovládá kolik světla dopadne na snímač. Tím se ovlivňuje i hloubka ostrosti - rozmazané pozadí) či *závěrka* (určuje dobu expozice).
# Obrázek jako soubor
Grafické soubory se dají obecně dělit do dvou kategorií.
## Rastrové obrázky
Obsahují data pro každý pixel (čtvereček) obrázku. Tím ale nastává problém při škálování - nemáme z čeho dokreslit dodatečná data. Každý pixel má hodnoty pro červenou, zelenou a modrou barvu (RGB) a průhlednost, pokud to daný formát souboru podporuje (alpha, transparency). Používá se na fotografie či pixel art. Má oproti vektorovým obrázkům větší velikost (musí ukládat data pro každý bod). Mezi programy patří Adobe Photoshop, malování, GIMP či paint.net a soubory se ukládají jako PNG, JPG, GIF apod.
## Vektorové obrázky
Obsahují data pro křivky, body, geometrické útvary. Tím pádem lze obrázek nekonečně zvětšovat i zmenšovat a bude pořád ostrý (vždy se akorát přepočte). Využívá se primárně pro design, loga, ikony. Soubory jsou podstatně menší než u rastru. Teoreticky lze takový obrázek napsat "na koleni", zatímco binární data rastru bychom asi nezvládli. Mezi programy patří Adobe Illustrator, Inkscape, CorelDraw a soubory se ukládají většinou jako SVG nebo AI.
	![[2d_rozdil.png]]
# Periferní zařízení
Lze rozdělit na *vstupní* (grafické tablety, scannery, webcamery) a *výstupní* (monitory, obecně displeje, projektory, tiskárny)
# Pojmy
## Komprese 
Může buď **ztrátová** nebo **bezztrátová**. Při *ztrátové* kompresi při zmenšení a opětovném zvětšení nedostaneme původní obrázek. Při zvětšování se musí pomocí dostupných dat extrapolovat dodatečná (metody bilineární - pro fotky, nejbližší soused - pro pixel art). Při *bezztrátové* kompresi jsou data jen zapsaná jiným způsobem (viz. [[Disk, soubor, složka]]), takže je lze opět rekonstruovat do původní formy.
## Barevná hloubka
Určuje, kolik bitů bude mít každý barevný kanál v RGB modelu. Obvykle to bývá 8 bitů (0-255), ale lze i 10 (0-1023) či 12 (0-4095)![[2d_hloubka.png]]
## Rozlišení 
Určuje poměr stran a počet pixelů na nich. V dnešní době jsou monitory obvykle FullHD (1920x1080), QHD (2560x1440) nebo 4K (3840x2160). HD = "High-definition"![[2d_rozliseni.png]]