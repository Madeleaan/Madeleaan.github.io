Charakteristika evidence, kartotéky. Struktura věty, typy položek. Vstupní formulář, dotaz, výstupní sestava. Praktická ukázka použití na počítači.

- Vysvětlete pojmy tabulka, relace, dotaz, sestava.
- Jaké jsou základní datové typy polí?
- Jaký je rozdíl mezi výběrovým a aktualizačním dotazem?
- Co je to SQL?
---
# Pojmy na začátek
## Tabulka
Základní databázový objekt a slouží k ukládání dat. Uvedené vlastnosti jsou definovány jako sloupce s danými formáty a řádky jsou jednotlivé zápisy.
## Relace
Vztahy mezi tabulkami a jejich prvky. Můžeme mít buď relaci *1:1* (jednomu záznamu v první tabulce odpovídá právě jeden záznam v tabulce druhé, nepoužívá se tak často, protože je praktičtější sloupce prostě umístit do jedné tabulky), *1:N* (přiřazuje záznamu v první tabulce více záznamu z druhé tabulky, používá se nejčastěji. Jako příklad si můžeme představit autobus a všechny pasažéry v něm) nebo *M:N* (přiřazuje každému záznamu z první tabulky libovolný počet záznamů z tabulky druhé, přičemž se hned "nevyčerpají", takže jdou zase přiřadit k libovolnému počtu z první tabulky. V praxi se kvůli praktičnosti používá kombinace dvou relací 1:N. Reálným příkladem je výrobek a jeho vlastnosti - "vysoká kvalita" přece není jenom na ten specifický jogurt apod.).
## Dotaz
Nějaký příkaz v dotazovacím jazyce (zpravidla SQL), který slouží k získání informací pomocí filtrů.
## Sestava
Výstup dat v uživatelsky příjemném formátu - tabulky, grafy
# Datové typy polí
**Pole** mohou mít stejně jako proměnné v programování různé **datové typy**. Mezi ty se v MS Access řadí *Text* (do 255 znaků), *Integer* (čísla, nižší rozsah než int v C#), *AutoNumber* (odpočítává automaticky od 1 nahoru), *Date/Time* (na uložení časových údajů) a jiné.
# Typy dotazu
## Výběrový 
Vrátí se nám data z tabulky podle námi zvolených filtrů. V SQL se používá operace SELECT
## Aktualizační
V tabulce změníme data. Zvolená operace v SQL se liší podle toho co chceme udělat. *INSERT* na vytvoření nového záznamu, *UPDATE* pro aktualizaci již existujícího nebo *DELETE* pro vymazání záznamu
# SQL
Standardizovaný jazyk pro práci s databázemi. Umí vytvářet tabulky, měnit je, vkládat do nich data a naopak vše mazat. Zároveň přes něj jdou nastavit práva uživatelů. Existuje sice sám o sobě jako základní syntaxe, ale poté jsou je mnoho variací a typů databází (PostgreSQL, MySQL, MS Access, Oracle Database), které si přidávají svoje vlastní věci (například operace UPSERT - provede buď INSERT nebo UPDATE podle možné duplicity primárního klíče). Je zvykem příkazy v SQL psát samými velkými písmeny.
## Syntaxe 
```sql
SELECT Jmeno, Prijmeni, Trida FROM Studenti WHERE Trida ="8.E" ORDER BY Prijmeni;
```
Program nejdříve otevře pro práci tabulku *Studenti* pomocí *FROM*. Poté vezme všechny záznamy a vybere z nich pouze sloupce *Jmeno, Prijmeni, Trida* pomocí *SELECT* (pokud bychom chtěli vypsat všechny, můžeme použít hvězdičku \*). Následně se provede podmínka v *WHERE*, že hodnota ve sloupci *Trida* se rovná hodnotě *8.E* a vrátí se pouze ty záznamy, které podmínku splňují. Nakonec se všechny záznamy seřadí podle hodnot ve sloupci *Prijmeni* pomocí *ORDER BY* a výsledek je vrácen uživateli. 
# Vstupní formuláře
Programy jako MS Access nám umožňují vytvořit i tzv. **Vstupní formuláře**. Ty slouží k uživatelsky komfortnímu grafickému rozhraní na zapisování dat do databáze.	![[databaze_formular.png]]