---
title: Práce se soubory
editUrl: false
---

Otevření souboru v jazyce C#. Čtení a zápis dat. Textový a binární soubor.

* Jaký je rozdíl mezi textovým a binárním souborem?
* Popište princip práce se souborem z hlediska programování.
* Jaké jsou módy otevření souboru?
* Napište kód programu pro přečtení a výpis textového souboru na obrazovku po řádcích a zápisu jednoho řádku na konec souboru.

***

# Binární a textové soubory

## Textové

Používají se pro uložení *textu* v podobě *znaků* (Unicode kódů) a můžeme je otevřít v libovolném *textovém editoru* (Poznámkový blok, Notepad++, Visual Studio Code, Sublime text, ...)

## Binární

Ukládají se *jedničky a nuly*, využívá se např. pro uložení *obrázků*, ale i *Word dokumentů* (kvůli formátování); vyžadují *speciální software* pro čtení a úpravu (hxd, hexedit, ...)

# Práce se souborem z pohledu programu

Při běhu programu můžeme soubor *číst*, nebo do něj data *zapisovat*, popř. číst jeho metadata, vytvářet a mazat, ...

* K tomu musíme nejdřív *říct programu*, že budeme používat built-in *knihovnu pro práci se soubory* - přidáme `using System.IO;` na *začátek programu*
* Poté používáme třídy *StreamReader* a *StreamWriter*
* Nejdříve musíme soubor v programu **otevřít**, poté do něj **zapisovat / číst data** a poté se **musí soubor uzavřít**, protože data pro zápis jsou v bufferu, a píší se až najednou
* Když píšeme cestu k souboru, hodí se před řetězec dát symbol *@*, aby byl text uvnitř interpretován tak, jak je (hlavně kvůli *zpětným lomítkům*)

## Módy otevření souboru

Soubor můžeme otevřít v **několika módech** podle toho, jaká k němu máme zrovna práva:

* *File.AppendText* - zapisuje na *konec souboru*
* *File.WriteText* - zapisuje od *začátku souboru*
* *File.OpenText* - *čte* text v souboru

## V kódu

* Definujeme *StreamWriter* a *StreamReader* v bloku *using*, protože ten po svém ukončení zároveň provede *Dispose()* - tím se soubor uzavře
* Pokud se pokusíme psát do souboru, který ještě neexistuje, sám se vytvoří
* *Pozor!* Každé volání metody *ReadLine()* "sežere" další řádek, takže při nesprávném použití bychom mohli přeskakovat řádky

## Příklad

Kód, který vytvoří soubor, zapíše do něj dvě řádky, ty pak přečte a vypíše je:

```cs
string path = @"C:\users\tomen\a.txt";
// Smazání souboru, pokud již existuje
if (File.Exists(path)) File.Delete(path);

// Zápis do souboru
using (StreamWriter sw = File.AppendText(path))
{
	sw.WriteLine("Hello");
	sw.WriteLine("World!");
}

// Čtení souboru a zápis do console
using (StreamReader sr = File.OpenText(path))
{
// Zkusí přečíst další znak a pokud existuje, vypíše řádku
	while (sr.Peek() > -1) 
	{
		Console.WriteLine(sr.ReadLine());
	}
}
```
