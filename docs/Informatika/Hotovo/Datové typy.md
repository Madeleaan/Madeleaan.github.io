Charakteristika jednotlivých typů v jazyce C#, vhodnost jejich použití v konkrétních příkladech, deklarace. Konverze mezi jednotlivými typy v programu.

- Jmenujte základní datové typy pro číselná data.
- Jaký je obor platnosti proměnných?
- Jakým způsobem lze ověřovat platnost dat zadávaných uživatelem?
- Jaká je hodnota proměnné z po skončení následujících příkazů?  
	```cs
	int x = 10;  
	int y = 3;  
	double z = x / y;
	```
---
# Základní datové typy
## Číselné
Datových typů pro ukládání čísel je hodně, liší se podle rozsahu (kolik místa si zaberou v paměti)
*Celočíselná*: byte (8 bitů) -> short (16 bitů) -> *int (32 bitů)* -> *long* (64 bitů)
	- Nejčastěji se používá *int* (rozsah cca +- 2,147 mld - celkový asi 4.3 miliard čísel), protože nám bohatě postačí. Druhý nejčastější je *long*, pokud pracujeme s většími čísly
*S desetinnou čárkou:* float* -> *double* -> decimal
	- Nejčastěji *float* a *double*, podle toho, na kolik desetinných míst potřebujeme přesnost (float má 6-9, double 15-17)
## Ostatní
Kromě čísel ale můžeme ukládat i jiné typy
- Char ukládá vždy jeden znak - 'a'
- String ukládá [[Řetězce]] - "ahoj"
- Bool ukládá logickou hodnotu 1 nebo 0 - *true/false* 
- Další speciální, např. ConsoleColor, DateTime, ...
# Obor platnosti proměnných
Obor platnosti = kde všude můžeme k proměnným přistupovat, číst jejich data a ukládat do nich. Pokud nějakou proměnnou deklarujeme ve třídě, metodě, cyklu atd., můžeme k ní přistupovat jenom v nich a jejich podčástech, ne mimo
# Ověřování typu dat
## TryParse()
Uloží přetypovanou metodu, a zároveň bool výsledek, jestli bylo přetypování úspěšné
```cs
bool jeCislo = int.TryParse(Console.ReadLine(), out int cislo);
Console.WriteLine(jeCislo + ", " + cislo);
```
Vypíše `True, 123` když zadáme 123 a `False, 0` když zadáme text
## Try..catch
Zkusí provést kód v bloku `try{}`, v případě chyby se provedou příkazy v bloku `catch(Exception e){}`. Není vhodné obecně chytat každou chybu, ale provádět jiné akce podle jiných chyb. 
# Změna typu proměnné
Důležité je, jak konvertujeme mezi různými typy proměnných. Tyto převody se dají rozdělit do několika kategorií:
- *Implicitní převody* jsou z menších čísel na větší (int -> long), bezztrátové
- *Explicitní převody* jsou obvykle z vyšších přesností na menší (double -> int), dojde ke ztrátě dat (např. desetinných míst), používá se speciální syntaxe pro přetypování - `int pi_cele = (int)3.14` se uloží 3
- *Převody pomocí metod*, např. výše zmíněný `TryParse()`, používá se u nekompatibilních typů (např. string a int)
## Ukázka konvertování typů proměnných
```cs
int x = 10;  
int y = 3;  
double z = x / y;
```
Hodnota proměnné *z* po těchto operacích bude *3.0*. Nejdříve se totiž celočíselně vydělí 10/3 (výsledek $3.\overline{3}$ -> *3*), a teprve poté se uloží už bez desetinných míst do proměnné z. Kdybychom chtěli přesný výsledek, musela by být alespoň jedna z proměnných *x* a *y* definována, nebo přetypována jako *double*