Charakteristika příkazů jazyka C#. Aritmetické, relační a logické operátory.

- Jaké jsou metody větvení programu?
- Jaké jsou logické operátory pro logické výrazy?
- Jmenujte základní matematické operace a jejich operátory.
- Vysvětlete příkazy `i++; ++i; i+=x`.
---
# Metody větvení programu
## If
Nejzákladnější podmínka ze všech, přirovnali bychom k českému *když*. Do závorky napíšeme *podmínku*, která pokud je *pravdivá*, *provede* nějaký *kód*. Ten může být napsán ve *složených závorkách* `{}`, nebo *bez závorek*. Poté se však provede pouze *první příkaz* a ostatní se provedou nezávisle na pravdivosti podmínky. Na konci příkladu bude hodnota *a=1* a *b=2* :
```cs
int a = 1;
int b = 1;
if (0 > 1) a = 2; b = 2
```
## If-else
Pokročilejší *if*, kde ale nyní můžeme provést kód, pokud podmínka *není splněna*. Přirovnali bychom k českému *když, jinak*
```cs
int cislo = int.Parse(Console.ReadLine());
if (cislo > 0)
{
	Console.WriteLine("Cislo je kladne!");
} else if (cislo < 0)
{
	Console.WriteLine("Cislo je zaporne!");
} else
{
	Console.WriteLine("Cislo je nula!");
}
```
## Ternární operátor
Jednořádkový *if-else*, používaný obvykle pro nastavení hodnoty proměnné na jednu ze dvou možností, podle výsledku podmínky. Není ve všech jazycích (ale v C# ano). Existuje poučka pro syntax - `is this condition true ? yes : no` 
```cs
int cislo = int.Parse(Console.ReadLine());
string zprava = cislo > 0 ? "Cislo je prirozene!" : "Cislo je cele!";
Console.WriteLine(zprava);
```
## Switch
Používáme, pokud *známe více možností*, které mohou nastat - je to lepší než několikrát *if-else*. Má vždy možnost výsledku *case*, která může, nebo nemusí být ukončena příkazem *break*. Pokud break není, vykonávají se *další příkazy*, dokud se nenajde (klidně i v jiném *case*). Pokud žádná z *case* není splněna, provede se kód v části *default*. Příklad:
```cs
Console.Write("Uhodněte číslo 1-10: ");
switch(int.Parse(Console.ReadLine()))
{
	case < 1:
	case > 10:
		Console.WriteLine("Číslo je mimo rozsah!");
		break;
	case 4: 
		Console.WriteLine("Uhodli jste správně!");
		break;
	default:
		Console.WriteLine("Toto není správné číslo...");
		break;
```
# Logické operátory
V podmínkách můžeme používat **logické operátory** **&&** (*AND* - obě strany musí platit), **||** (*OR* - jedna ze stran musí platit) a **!** (*NOT* - obrací pravdivost výroku)
- *x > 2 && x < 5*; *x < 2 || x > 5*; *!BoolMetoda()*
- Dají se používat i **bitové logické operátory & AND, | OR, ^ XOR**. Ty pokud je první podmínka nesplněna, stále vykonají druhou část a tu poté porovnají, na rozdíl od výše zmíněných
# Matematické operace
Pokud chceme dělat nějaké **matematické operace**, můžeme použít klasicky *+, -, \*, /*. Je zde také zavedena operace *zbytek po celočíselném dělení*, která se značí znaménkem *%*. Dále jsou pro porovnání **relační operátory**  *<, >, <= (menší nebo rovno), >= (větší nebo rovno)* a na zjištění rovnosti *!= (nerovná se)*, *\=\= (rovná se)* a *\=\=\=* (jen v některých jazycích, v c# ne, obě strany se musí mít stejný typ - například v JavaScriptu by rovnost `"2"==2` vrátila true, ale rovnost `"2"===2` vrátí false) Všechny tyto operátory píšeme *mezi dva výrazy*, např. `int a = 5 % 2 // vrátí hodnotu 1`
# Úprava hodnoty proměnné
*i++ a ++i* *přičte* k číslu *1*. Pokud je na řádce samo, není mezi nimi rozdíl. Pokud ale například napíšeme `int a = i++;`, tak se nejdříve číslo *a* nastaví na *původní hodnotu čísla i*, a *až potom* se *hodnota čísla i změní o 1*. Příklad:
```cs
int i = 1;
int b = i++;
Console.WriteLine(i + " " + b)
```
Vypíše "2 1"
- *i-- a --i* funguje na stejném principu, akorát se místo přičítání *odečítá 1*
- *i += b* *přičte* k číslu *i* hodnotu čísla *b* a součet nastaví jako hodnotu *i*