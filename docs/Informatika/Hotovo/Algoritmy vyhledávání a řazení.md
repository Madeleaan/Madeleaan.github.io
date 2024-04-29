Charakteristika úlohy. Řazení vzestupné a sestupné. Základní algoritmy a porovnání jejich složitosti.

- Uveďte nejznámější algoritmy pro řazení prvků. Na jakém principu fungují, jaké jsou jejich výhody a nevýhody?
- Napište programový kód pro seřazení 10 celých čísel v poli pomocí bubble sortu.
- Jak se dá seřadit číselná kolekce?
- Jakým způsobem se řadí řetězce?
---
# Řadící algoritmy
Řadit prvky můžeme **různými algoritmy**, jejich použití se mění podle počtu prvků (protože každý má jiné časové složitosti $\mathcal{O}$). Mezi ty **nejznámější** patří:
## Bubble sort 
Opakovaně prochází pole a kontroluje, zda jsou dva sousedící prvky ve správném pořadí. Pokud ne, prohodí a upozorní program, že proběhla alespoň jedna změna. Pokud po projetí pole nebyla ani jedna změna, pak je seřazené v pořádku. *Výhodou* je jednoduchost a malá spotřeba paměti, *nevýhodou* je časová složitost $\mathcal{O}(n^2)$.
![[razeni_bubble.png]]
## Selection sort
Opakovaně projíždí pole, vezme buď nejmenší nebo největší prvek a umisťuje ho postupně odpředu či odzadu. Hodí se hlavně na menší pole, na větších má problém.
![[razeni_selection.png]]
## Insertion sort
Postupně porovnává prvek se všemi, které jsou na jedné straně od něj. Poté je zařazen za menší a před větší prvek a posuzovaný index se posunuje v předem definovaném směru.
![[razeni_insertion.png]]
## Quick sort 
Funguje na principu volby jednoho prvku, tzv. pivotu, který pole rozdělí na dvě části. To probíhá rekurzivně, než je celé pole seřazené. Hlavní výhodou je logicky podle názvu rychlost a malá časová složitost ($\mathcal{O}(n\cdot\log{n}$), ale to pouze při dobrém výběru pivotu, jinak může být až kvadratická. Zároveň protože používáme rekurzi musíme dávat pozor na chybu při přetečení zásobníku (moc rekurzí). Speciální verze je *Merge sort*, která využívá pivoty dva pro ještě větší rychlost
# Řazení kolekce
Pokud chceme **seřadit kolekci (list)**, v C# můžeme použít vestavěnou metodu `List<>.Sort();`. Ta podle velikosti pole zvolí nejefektivnější algoritmus seřadí a výsledek uloží do původního pole.
- Pole se řadí pomocí `Array.Sort(NerazenePole);`
- Při normálním použití se seřazuje **vzestupně** (od nejmenšího po největší). Pokud bychom chtěli řadit **sestupně** (od největšího po nejmenší), můžeme po seřazení zavolat metodu `.Reverse()`, která list či pole obrátí.
## Jak se řadí řetězce?
**Řazení řetězců** funguje na principu ASCII tabulky (viz. [[Zobrazení informace v počítači]]). Odečtou se od sebe číselné kódy dvou písmen a snažíme se vždy, aby byl rozdíl dvou řetězců vedle sebe na určitém indexu co nejmenší. Pokud jsou písmena stejná (rozdíl je 0), posuneme se prostě o další písmeno doprava (zvýšíme index hledaných písmen) a opakujeme. Zároveň bychom ale mohli například nejdřív rozdělit na List listů podle délky slov, seřadit je a poté máme i postupně podle délky.
# Bubble sort program v C# 
```cs
int[] pole = { 5, 4, 1, 3, 2, 9, 8 };
bool swapped;
int offset = 1;
do
{
    swapped = false;
    for (int i = 0; i < pole.Length - offset; i++)
    {
        if (pole[i] > pole[i + 1])
        {
            int temp = pole[i];
            pole[i] = pole[i + 1];
            pole[i + 1] = temp;
            swapped = true;
        }
    }
    offset++;
} while(swapped);

Console.WriteLine(string.Join(" ", pole));
```
Tento kód je přímo optimalizován, takže složitost vždy kvadratická a zastaví se, pokud v poli již není co řadit (detekce pomocí proměnné *swapped*). Zároveň se nemusí kontrolovat poslední prvky, protože ty jsou již "probublané" a seřazené správně, takže se zvyšuje proměnná *offset*.