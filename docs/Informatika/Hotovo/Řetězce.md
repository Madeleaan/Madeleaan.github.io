Deklarace proměnné typu řetězec. Důležité metody pro práci s řetězci v jazyce C#.

- Jakým způsobem lze pracovat s jednotlivými znaky řetězce?
- Jakým způsobem lze spočítat počet slov v řetězci? Napište kód programu pro tuto úlohu.
- Jak převedete číslo na řetězec a naopak?
---
# Jak pracovat se znaky v řetězci
Se znaky v řetězci lze pracovat stejně jako v [Polích](Pole) (koneckonců řetězec je pole znaků). Řetězec je totiž brán jako pole znaků. Příklad:
```cs
string slovo = "ahoj";
Console.WriteLine(slovo[1]);
```
Vypíše písmeno *h*
# Metody
Řetězce mají několik metod pro práci s nimi. My opět nemusíme umět všechny.
- `"text".ToUpper()` vrátí text *velkými písmeny*
- `"text".ToLower()` vrátí text *malými písmeny*
- `"Hello World".Split(' ')` vrátí *pole* `["Hello", "World"]`
- `"text".Length` vypíše celkovou *délku řetězce*, v tomto případě *4*
- `string.Join("! ", new int[] {1, 2, 3})` Spojí prvky z pole a vytvoří řetězec `1! 2! 3`. Separující znak `! ` můžeme změnit, *nepřidává* se za poslední člen*
- `"text".IndexOf('x')` vrátí první *pozici začínající nulou*, na které se hledaný řetězec v rodičovském řetězci vyskytuje, v tomto případě *2*. Vrátí *-1* pokud není nalezen
## Jak spočítat slova
*Počet slov* v řetězci lze spočítat pomocí metody `Split()`. Rozdělíme si ho podle mezer, a poté nám stačí zjistit *délku* vytvořeného pole. Příklad:
```cs
string veta = "Ahoj, jak se máš?";
string[] slova = veta.Split(' ');
Console.WriteLine(slova.Length);
```
Vypíše číslo *4*
# Převádění mezi typy
S **převáděním** mezi *řetězcem* a *číslem* je to trochu složitější. Mohlo by se nám totiž stát, že se systém pokusí nastavit číselnou proměnnou na nějaký text
- *Číslo -> řetězec* je obvykle bez problémů, použijeme `42.ToString()`
- *Řetězec -> číslo* už ale musíme dávat pozor, jestli to je možné. Existuje několik funkcí:
	- `int cislo = int.Parse("2a")` vyhodí chybu pokud  převod není možný, jinak převede a uloží. Je možné chybu detekovat a provést dané akce přes blok *try..catch* Dá se použít i pro další typy jako *double, ...*
	- `TryParse()` - viz. [[Datové typy#TryParse()]]
# Spojení řetězců
- Pokud chceme dva řetězce spojit, tak buď můžeme klasicky *přes =* ("Hello" + "World"), nebo také přes *+=*, tak pak lze již k *existujícímu* na jedné řádce *přidat text* (zprava += "Měj se!")
	- V C# a mnoha dalších programovacích jazycích funguje také tzv. *řetězcová interpolace*. To umožňuje jednodušší a čitelnější zápis. Do složených závorek napíšeme proměnnou, případně nějakou metodu, a její výsledek se vloží do výsledného řetězce. Příklad:
	```cs
	string verze = "2.0"
	Console.WriteLine($"Vítej! Tento program je verze {verze}")
	```
# Formátování řetězců
Existuje metoda `String.format()`, ta také umožňuje *interpolaci*, ale hlavně *formátování řetězce*. Zde je uvedena spíše pro zajímavost, zapamatovat si je peklo
- Řetězec při interpolaci *nezačíná znakem $ a proměnné se nepíšou do závorek* - do těch se píšou čísla *začínající od nuly*, a proměnné se tedy píšou jako *argumenty* za řetězec - `String.format("Jmenuji se {0} a je mi {1} let", jmeno, vek)`
- Do závorky lze připsat *typ*, podle kterého se daná data *zformátují* (jako v excelu) - lze zde použít například B/b (binární), C/c (měna) nebo f pro lokalizovaný čas se jménem dne a měsíce. Dá se také použít na zobrazení *určitého počtu číslic* pomocí *vlastních konfigurací* - například pokud do konfigurace `{0:000.00}` vložíme *23.4*, dostaneme *023.40*, To proto, že první nulou před dvojtečkou přečteme 23.4, poté určíme že číslo má mít 3 číslice před a 2 číslice za desetinnou tečkou.
- Dají se dělat jednoduché tabulky - pokud v závorce použijeme čárku, uděláme text delší tak, aby dosahoval potřebné délky, kladná čísla dělají mezery nalevo, záporná čísla napravo - `"{0,-5}a", 1` vypíše `1    a` . V tabulce tedy použijeme nejdelší hodnotu + nějakou konstantu 
- Je to tedy velmi mocná metoda, ve které se mohou výše zmíněné příklady kombinovat. Proto je nejlepší si při práci s ní *najít na internetu dokumentaci*