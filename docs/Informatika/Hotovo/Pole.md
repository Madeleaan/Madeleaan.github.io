Charakteristika jednotlivých typů, deklarace v jazyce C#. Řetězec z pohledu pole. Jednorozměrné a vícerozměrné pole. Operace s maticemi.

- Jak vypadá deklarace pole? 
- Jakým způsobem se pracuje s jednotlivými prvky pole? 
- Napište programový kód pro načtení čísel do matice, jejíž rozměry zadá uživatel.
- Co je to kolekce?
---
# Vytvoření pole
Pole deklarujeme jako `DatovyTyp[] JmenoPole = new DatovyTyp[VelikostPole];`
- Např. `int[] cisla = new int[10];`
- Můžeme také `int[] cisla`  a poté iniciovat podle potřeby velikosti pole
- *Velikost pole nejde po vytvoření změnit*
# Práce s prvky
- Do pole můžeme zapisovat vícero způsoby
- Při vytváření: `int[] cisla = {1, 2, 3};`
	- Tím se nastaví i velikost pole, v tomto případě na 3
- V programu pomocí relativní pozice v poli
	- *Začíná 0*, Poslední prvek má tedy pozici o 1 menší než počet prvků v poli.
	- Pokud se pokusíme dotázat na prvek mimo rozsah pole, vyhodí nám to chybu.
	- Zapisování do pole: `cisla[Pozice] = Cislo`
		- Např. `cisla[1] = 4`, potom pole bude `{1, 4, 3}`
	- Čtení z pole: `int PrecteneCislo = cisla[Pozice]`
		- Např. `int PrecteneCislo = cisla[2]` z pole `{1, 2, 3}` bude 3
- Je dobré si uvědomit, že [[Řetězce]] jdou zapsat jako *pole znaků*
	- K tomu využíváme funkci `ToCharArray()`
	- `char[] znaky = "ahoj".ToCharArray()` udělá pole `['a', 'h', 'o', 'j']`
	- Zpětně získáme řetězec pomocí `string.Join("", znaky)`
# Metody
Pole mají i několik svých metod, dělaných přímo pro práci s nimi. Rozhodně *nemusíme* umět všechny.
- `Array.Reverse(pole)` převrátí `pole` a ihned do něj převrácené hodnoty zapíše
- `Array.Sort(pole)` seřadí `pole` a ihned do něj seřazené hodnoty zapíše
- `pole.Sum()` součet čísel v číselném poli **(Potřebuje System.Linq)**
- `pole.Max()` a `pole.Min()` vrátí největší, respektive nejmenší číslo v poli **(Potřebuje System.Linq)**
- `pole.Length` vrátí počet prvků v poli
# Kolekce
## List
Obsahují objekty daného typu, jsou seřazeny podle pořadí přidání do pole, *Mají dynamickou velikost (automaticky se mění)*
- `List<int> list = new List<int>();`
- `mujList.Add()`, `mujList.Remove()`, `mujList.RemoveAt()`, `mujList.Clear()`, `mujList.Count`
## Slovníky
Obsahují vždy párové hodnoty *Klič - Hodnota*, *Nesmí být duplicitní klíče*
- `Dictionary<string, int> slovnik = new Dictionary<string, int>();`
- Platí stejné metody jako u listů, kromě `RemoveAt()`, protože slovníky nejsou seřazeny podle indexů
## HashSet
Obsahuje hodnoty, které nejsou nijak seřazené a nejsou duplicitní
- `HashSet<int> hashSet = new HashSet<int>();`
- *Ve špičatých závorkách <> se určují typy (string, int, long...) - obecně v C#, mohou být i další pole nebo kolekce*
# Vícerozměrné pole
Pole mohou mít více dimenzí (rozměrů), to se hodí např. pro mapy, nebo *matice*
- `int[,] matice = new int[vyska, sirka];`
- K prvkům přistupujeme pomocí `matice[indexVyska, indexSirka]`
## Příklad
Kód pro vytvoření matice podle rozměrů, které zadá uživatel, a naplnění hodnotami 0-4:  
```cs
Random r = new Random();

int sirka = int.Parse(Console.ReadLine());
int vyska = int.Parse(Console.ReadLine());
int[,] matice = new int[sirka, vyska];

for(int i = 0; i < sirka; i++) { 
	for(int j = 0; j < vyska; j++) {
		matice[i, j] = r.Next(5);
	}
}

for(int i = 0; i < sirka; i++) {
	for(int j = 0; j < vyska; j++) {
		Console.Write(matice[i, j] + " ");
	}
	Console.WriteLine();
}
```