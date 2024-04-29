Jednotky informace. Číselné soustavy. ASCII kód. Reprezentace a zobrazení celých a desetinných čísel.

- Vysvětlete pojmy: data, informace, poziční a nepoziční číselná soustava. 
- Převeďte z desítkové do dvojkové soustavy číslo 38 a ve dvojkové soustavě spočítejte jeho druhou mocninu.
- Popište základní datové typy pro celá čísla. Vysvětlete pojem přetečení (overflow).
- Co je to ASCII tabulka?
- Vysvětlete pojem plovoucí desetinná čárka.
---
# Pojmy
## Data
Jednotlivé *údaje, čísla*, zpracovávaná počítačem. Ukládají se jako série jedniček a nul
## Informace 
*Data* + nějaký *kontext* co ta data vlastně *označují, znamenají* - např. když řekneme 100˚C, tak to jsou pouze nějaká *data*, ale "Varná teplota vody: 100˚C" už je *informace*
## Poziční soustava
Popisuje takovou soustavu, ve které hodnota číslice *záleží na jejím umístění v sekvenci*. Je to tedy například ta naše, se kterou počítáme
## Nepoziční soustava
*Nerozlišuje hodnotu* číslic *podle* jejich *umístění*, takže pokud např. 🔴 = 1 a 🔵 = 5, pak 🔵🔵🔴= 11, ale zároveň  🔵🔴🔵 = 11
# Dvojková soustava
## Převádění z desítkové do dvojkové
Provádíme tak, že postupně číslo *dělíme 2* a *píšeme si zbytky* (buď 1 nebo 0). Jakmile se dostaneme k *nule*, zapíšeme *poslední zbytek* (bude 1). Jakmile zapíšeme zbytky v *opačném pořadí*, než jsme je psali původně, dostaneme původní číslo ve dvojkové soustavě. Video: ![https://youtu.be/QAHyFa3gKKc](https://youtu.be/QAHyFa3gKKc)
## Násobení
**Při násobení násobíme tzv. "pod sebou"** neboli vynásobíme celé číslo *postupně číslicemi odzadu* (pokud 1 *opíšeme*, pokud 0 *zaplníme nulami*) a *posouváme se doleva*. Potom *binárně sčítáme* pod sebou. Dobře ukázané ve videu: ![https://youtu.be/hK1OYxYpwEc](https://youtu.be/hK1OYxYpwEc)
## Přetečení
Základní datové typy pro celá čísla jsou už vysvětleny v [[Datové typy]]. Zde si akorát vysvětlíme pojem **přetečení (overflow)**. To nastává, pokud se snažíme *počítat* v rozsahu *mimo obor hodnot* daného typu proměnné. Výsledkem je, že se začne počítat znovu od *první hodnoty* (u int se dostaneme z *plusu* do *mínusu*). Příklad v reálném životě jsou například *staré tachometry v autech*. Ty se po překročení hodnoty 999999 přetočí zpět na 000000. Opakem je **podtečení (underflow)**
# ASCII tabulka
*Znaky* v počítači ukládáme pomocí tzv. **ASCII tabulky**. Ta jednotlivé znaky vyjadřuje jako *čísla*. Obsahuje na začátku také *řídící znaky*, které se původně používaly pro *periferní zařízení*. K *lokaci* v tabulce se obvykle používá buď *desítková*, nebo *šestnáctková* soustava. Na Windows můžeme ASCII znaky psát tak, že podržíme *alt* a napíšeme kód znaku v desítkové soustavě. ![[zobrazinf_ascii.png]]
# Desetinná čárka
*Desetinná čísla* může počítač zapisovat buď s **pevnou řádovou čárkou** (12,3; používá se např. v *účetnictví*), nebo s **plovoucí řádovou / desetinnou čárkou**. Ta vyjadřuje pomocí *vědeckého zápisu čísel* - tedy 12,3 zapíšeme jako $1,23\cdot10^1$. Prvnímu číslu se říká *mantisa*. *Nevýhodou* tohoto zápisu jsou *menší rychlost* a *přesnost*. Umí ale např. efektivněji ukládat velmi malá čísla. Za *základ* u exponentu si můžeme zvolit jakékoliv číslo chceme, obvykle se ale používá *desítková*, *šestnáctková* a *dvojková* soustava.
![[zobrazinf_carka.png]]