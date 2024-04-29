Charakteristika a význam. Deklarace a vyvolání v jazyce C#. Rekurze.

- Vysvětlete rozdíly mezi parametry předávanými hodnotou a odkazem.
- Napište deklaraci metody, která rekurzí vypočítá faktoriál přirozeného čísla.
- Vysvětlete pojem lokální proměnná metody.
- Co je to přetížená metoda?
---
# Možnosti předání parametru
Obvykle se metodě předává **hodnota parametru**, pouze nějaká *kopie* té proměnné, kterou tam vložíme. Pokud chceme přímo např. upravit parametr, pak musíme metodě předat **jeho odkaz**. Toto jsme již používali v příkazu [[Datové typy#TryParse()]], kde tato metoda uloží do *námi zvolené proměnné* výsledek přetypování. My odkaz předáme tak, že vložíme *klíčové slovo* `ref` / `out` do definice parametrů metody před datový typ parametru. Zároveň musíme `ref` / `out` napsat před parametr pokaždé, když metodu voláme. 
### Příklad
```cs
void PrictiPet(ref int x) 
{
	x += 5;
}
int cislo = 2;
PrictiPet(ref cislo);
Console.WriteLine(cislo); // Vypise 7
```
# Rekurze
Nastává, pokud z metody voláme tu *samou metodu znova*, aniž by se její předchozí *chod ukončil* - obvykle se poté ukončuje vlnově, po splnění určité podmínky. Má uplatnění pokud chceme *matematicky elegantní řešení*, může ale vypadat *složitě*. Není také vždy řešení nejoptimálnější či nejefektivnější, program si může sežrat až moc systémových zdrojů. Rekurzi můžeme dělat na *přímou* (volá sama sebe) a *nepřímou* (A -> B -> A, vzniká tak jakýsi *kruh volání*)
##  Příklad
Program, který využívá rekurze pro výpočet faktoriálu (šel by udělat i přes iterace):
```cs
int Faktorial(int x) 
{
    if (x < 0) throw new ArgumentOutOfRangeException();
    if (x == 0 || x == 1) return 1;
    return x * Faktorial(x - 1);
}
```
# Speciální funkce metod
## Lokální proměnná
Pokud v metodě *deklarujeme proměnnou*, stává se **proměnná lokální**. To znamená, že k ní jde přistupovat *pouze v této metodě*, a po ukončení se *vymaže* z paměti -> při dalším volání metody se proměnná *vytvoří nanovo*
- Toto platí i pokud deklarujeme metodu *v cyklech*
## Přetížení metody
Pokud chceme mít metodu, které se **jmenuje stejně**, ale přijímá **různé argumenty, nebo vrací jiný typ**, můžeme použít tzv. **přetížení metody (overloading)**. To umožňuje vytvořit kód, který je *mnohem lépe čitelný*, a kde si nemusíme pamatovat milion názvů metod. Jednoduše to uděláme tak, že tyto variace metody *pojmenujeme stejným názvem*. Program si potom vybere tu, která odpovídá použití.
### Příklad
```cs
int Secti(int a, int b) { return a + b; }
double Secti(double a, double b) { return a + b; }
```