Charakteristika a vlastnosti algoritmu. Způsob zápisu algoritmu. Vztah algoritmus – program. Optimalizace z hlediska časové a paměťové složitosti. Rozdělení programovacích jazyků a zástupci jednotlivých skupin.

- Co je to algoritmus a jaké by měl mít vlastnosti?
- Co je to časová složitost algoritmu?
- Co to je vyšší programovací jazyk?
- Jaký rozdíl je mezi kompilovanými a interpretovanými jazyky? Uveďte konkrétní programovací jazyky z obou skupin.
---
# Algoritmus
Seznam operací, které počítač provádí aby vyřešil danou úlohu či problém. Teoreticky je tedy algoritmus i recept či návod na sestavení nábytku zakoupeného v obchodním domě Ikea. V informatice jsou to spíš algoritmy pro vyhledávání, šifrování, řazení dat a další.
## Vlastnosti algoritmu
Měl by mít *konečný počet kroků*, které budou co *nejjednodušší*. Zároveň by měl *obecný*, aby se s ním dal vyřešit co největší soubor problémů (Nejen jak sečíst 1+1, ale jak sečíst dvě libovolná reálná čísla). V neposlední řadě by neměl pro *stejné vstupní hodnoty* dvakrát ukázat *jinou hodnotu* a neměla by rozhodovat náhoda (pokud k tomu není algoritmus přímo určen - algoritmus "hoď kostkou"). Nakonec by měl algoritmus vždy *vrátit* nějakou *hodnotu*, která bude sloužit jako odpověď na daný problém.
# Časová složitost
Vyjadřuje jak dlouho bude trvat výpočet podle velikosti a rozsahu vstupních dat. Zapisuje se pomocí *notace velkého O* (Big O notation). Ve skutečnosti se neměří čas (nepřesné kvůli velké rychlosti moderních procesorů), ale počet provedených operací.
## Nejběžnější typy
Nejčastěji se objevují časové náročnosti *konstantní* ($\mathcal{O}(1)$ - čas je pořád stejný a nemění se; nalezení mediánu v poli čísel), *lineární* ($\mathcal{O}(n)$ - čas se mění s počtem prvků; for-loop), *kvadratické* ($\mathcal{O}(n^2)$ - čas se mění s druhou mocninou počtu prvků; vnořené for-loopy) a *logaritmické* ($\mathcal{O}(\log n)$ - čas se mění s logaritmem počtu prvků)
## Optimalizace
Pokud bychom chtěli snížit počet operací a tím i časovou náročnost, můžeme používat chytřejší algoritmy. Je zbytečné sčítat N přirozených čísel přes cyklus for, který má lineární složitost ($\mathcal{O}(n)$) pokud známe součet aritmetické posloupnosti $s_n = \dfrac{n \cdot (a_1 + a_n)}{2}$ a snížíme jím počet operací na konstantní ($\mathcal{O}(1)$).

## Vyšší programovací jazyky
Byly vytvořeny tak, aby vytváření programů bylo pro vývojáře co nejbližší ke způsobu myšlení člověka. Umožňují přes abstraktní vrstvu ovládat hardware. Tento zápis je kratší a zároveň srozumitelnější. Zároveň by jazyk měl být přenositelný, aby měly programy být schopny běžet na různých platformách. V minulosti se používaly COBOL a Fortran, v dnešní době jsou příklady C#, Java či Python a v podstatě všechny programovací jazyky
![[algoritmus_highlevel.png]]
# Kompilace a interpretace
Jazyky se rozdělují na **kompilované a interpretované** podle toho, jak probíhá jejich spuštění
## Kompilované jazyky
Nejdříve projedou celý kód a pomocí kompilátoru (překladače) z něj sestaví spustitelný soubor, který se dá poté spouštět. To poskytuje větší rychlost a lépe psaný kód. Mezi **příklady** patří například C, C++, C# či Rust
## Interpretované jazyky
Potřebují ke svému běhu zdrojový kód a interpreter, který postupně každou řádku interpretuje a provádí dané instrukce za běhu. Tím pádem jsou pomalejší, ale zároveň se snadněji programují. Mezi **příklady** patří Python, Javascript či Ruby