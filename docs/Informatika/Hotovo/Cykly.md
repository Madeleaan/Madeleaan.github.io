Charakteristika příkazu. Typy cyklů v jazyce C#, vnořené cykly, nejčastější chyby při použití příkazu cyklu.

- Jaké jsou základní typy cyklů? Uveďte rozdíly při jejich použití.
- Napište cyklus, který vypíše násobky tří od zadaného přirozeného čísla sestupně až do nuly.
- Jakými způsoby lze ukončit cyklus?
- Napište deklaraci nekonečného cyklu.
---
# Základní typy cyklů
## For
Používáme, pokud *známe počet opakování* cyklu (buď napíšeme, nebo zjistíme pomocí např. metody - délka pole). Ve cyklu se nejdříve
1. *Deklaruje proměnná* (obvykle se jménem *i*)
2. *Zkontroluje podmínka* (používáme *matematické operátory* viz. [[Přiřazovací, podmíněný výraz; přepínač]])
- Pokud je podmínka *pravdivá*, *provede se kód* a následně se *změní hodnota i* (můžeme o kolik chceme, viz. [[Přiřazovací, podmíněný výraz; přepínač]]). Poté se opět opakuje *krok 2*
- Pokud je podmínka *nepravdivá*, program ukončí cyklus a pokračuje
### Příklad
Vypíše čísla *od 1 do 4*:
```cs
for(int i = 1; i < 5; i++)
{
	Console.WriteLine(i);
}
```
## Foreach
Používáme, pokud chceme *procházet prvky* nějakého *pole*. To se dá udělat i pomocí cyklu *for* (v jazycích, které *nemají foreach*) postupným získáváním na indexu podle zvyšující se proměnné.
### Příklad
```cs
string text = "Maturita";
foreach(char ch in text.ToCharArray())
{
	Console.WriteLine(ch);
}
```
## While 
Skončí až poté, co není splněná podmínka. Používáme tehdy, pokud nevíme, kolikrát by se cyklus měl opakovat. Vždy se nejdříve *Zkontroluje podmínka*.
- Pokud je podmínka *pravdivá*, *provede se kód* a přejde se zpět na krok *1*
- Pokud je podmínka *nepravdivá*, program ukončí cyklus a pokračuje
### Příklad
Vypíše čísla *od 5 do 1*:
```cs
int cislo = 5;
while(cislo > 0)
{
	Console.WriteLine(cislo);
	cislo--;
}
```
## Do-while
Liší se oproti klasickému *while* v tom, že se kód provede vždy alespoň jednou. Cyklus totiž:
1. *Provede kód v závorce*
2. *Zkontroluje podmínku*
- Pokud *pravdivá*, opakuje se od kroku *1*
- Pokud *nepravdivá*, ukončí cyklus
### Příklad
Vypíše pouze jednou číslo 5:
```cs
int cislo = 5;
do
{
	Console.WriteLine(cislo);
	cislo--;
} while (cislo > 5)
```
# Ukončení cyklu
Pokud chceme cyklus **ukončit**, máme pro to několik způsobů. Buď nastavením nějaké proměnné tak, aby podmínka už neplatila, nebo pomocí klíčových slov:
## Break
okamžitě vyhodí z cyklu a kód pokračuje za cyklem. 
### Příklad
Vypíše pouze čísla *1-4*:
```cs
for(int i = 1; i < 10; i++)
{
	if(i == 5) break;
	Console.WriteLine(i);
}
```
## Continue
Přeskočí aktuální iteraci cyklu, tedy kód za příkazem se neprovede, pokud je splněna podmínka.
### Příklad
Vypíše čísla *1, 2* a *4*:
```cs
for(int i = 1; i < 5; i++)
{
	if(i == 3) continue;
	Console.WriteLine(i);
}
```
# Nekonečný cyklus
Cyklus můžeme udělat nekonečný buď *pokud chceme* (není doporučováno), nebo *chybou*. Poté se nám celý program *zacyklí*, obvykle *žere* spoustu *systémových zdrojů* (memory leak - rychle se nám plní RAM) a musíme jej hrubě ukončit - vede k nepředvídatelným věcem, porušeným souborům atd.
- *for* můžeme zacyklit pokud napíšeme *podmínku, která platí vždy* (např.. pokud začínáme na 5, s každou iterací zvětšujeme a podmínka je i > 3), anebo prostě pomocí syntaxe `for(;;)`	
- *while* zacyklíme znovu tak, že napíšeme podmínku, která bude vždy pravdivá, například *2 < 3*, nebo se častěji používá prostě `while(true)`
# Vnořené cykly
**Vnořený cyklus** = *cyklus v cyklu*, to se používá například, pokud potřebujeme iterovat nějaké *2D pole*. Jenom bychom si měli dát pozor na počet iterací, protože s více a více vnořenými cykly přibývají velmi rychle
### Příklad
Kód pro vypsání násobků tří od zadaného čísla až k nule:
```cs
int cislo = int.Parse(Console.ReadLine());
cislo -= cislo % 3; // dostaneme se na nasobek 3
while(cislo > 0) {
	Console.WriteLine(cislo);
	cislo -= 3;
}
```