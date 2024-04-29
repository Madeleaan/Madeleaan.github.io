Charakteristika hromadného a statistického zpracování dat. Tabulka s daty, výpočty pomocí funkcí, grafická interpretace dat. Typy grafů. Praktická ukázka použití na počítači.

- Vysvětlete pojmy buňka, sloupec, řádek, list, sešit.
- Co je to odkaz? Jaký je rozdíl mezi relativním a absolutním odkazem?
- Co je to kontingenční tabulka?
- Popište práci s filtrem a souhrny.
---
# Pojmy
## Buňka
Základní *pole*, jednotka, *logický celek* v tabulce. Ukládá se do ní jedna *instance dat*. Každá buňka má svoje souřadnice podle toho, v jakém sloupci a řádku leží (např. A1, F24).
## Sloupec
*Vertikální* skupina buněk, v Excelu označen písmenem. Obvykle to jsou různé kategorie, typ dat (např. jméno, datum narození).
## Řádek
*Horizontální* skupina buněk, v Excelu označen číslem. Obvykle to jsou jednotlivé zápisy, jeden objekt v tabulce.
## List
V souboru samostatná skupina buněk pro lepší organizaci. Můžeme tím pádem mít ve dvou listech na souřadnicích A1 různá data (například pro dva různé měsíce).
## Sešit 
Celý soubor, který obsahuje listy, které obsahují buňky...
# Odkaz
Adresa jedné buňky či jejich skupiny. Vytvoříme ho kliknutím na příslušnou buňku při zadávání hodnoty jiné tabulky. Můžeme odkazovat i do jiných listů. Odkazy jsou velmi přínosné, protože pokud aktualizujeme data v odkazovaných buňkách, vypočte se nově i buňka odkazující. Můžeme je rozdělit na **relativní** a **absolutní**. Rozdíl spočívá v tom, že pokud bychom měli například v jedné buňce procenta a poté sloupec s hodnotami, při vytvoření vzorce s odkazem na příslušná procenta a následném nakopírování se posune i odkaz na procenta -> museli bychom mít procenta také ve sloupci. Zatímco v *relativních* odkazech se souřadnice systematicky změní, v *absolutních* (před sloupec či řádek napíšeme znak dolaru - např. $A$1, ale i A$1 či $A1) se souřadnice odkazu při nakopírování nemění. Mezi typy lze také přepínat pomocí klávesy F4.
# Kontingenční tabulka
Způsob, jak snadno vizualizovat vztah mezi statistickými znaky. Řádky zde obvykle odpovídají jednotlivým zápisům, hodnotám zatímco sloupce požadovanou vlastnost. Může to být například závislost pohlaví na praváctví a leváctví. V každém poli lze tedy dobře vidět, co zrovna porovnáváme. Zároveň v můžeme v kontingenční tabulce jednoduše filtrovat a řadit.
 ![](https://www.youtube.com/watch?v=kUYlh68HXuA)
# Speciální funkce
## Filtrování
Pokud chceme zobrazit pouze některá data nebo například seřadit řádky abecedně podle určitého sloupce, můžeme v Excelu použít *filtrování*. To data nesmaže, ale pouze skryje. Je mnoho extra způsobů jak filtrovat podle formátu buňky. U textu můžeme filtrovat podle počátečního či koncového písmena, u kalendářního data podle týdnů, měsíců, roků... a u čísla podle velikosti (větší, menší, mezi hodnotami, ...). Zároveň lze filtrovat podle barvy textu či pozadí.
## Souhrny
Zároveň můžeme pomocí předinstalovaných funkcí vytvořit **souhrn dat**. Jedná se například o funkce suma, součin a jejich podmíněné varianty (přidá se po výpočtu pouze po splnění podmínky), průměr, modus, medián a mnoho dalších. Tyto funkce lze také vkládat do sebe a vytvářet vložené funkce.
## Funkce
Excel má internetovou dokumentaci **funkcí**, ale nápověda jde zobrazit i přímo v programu. Je možné je psát v rámci jazyka, ve kterém sešit vytváříme (=SUM x =SUMA). Parametry píšeme do kulatých závorek jako při programování, *ale* oddělujeme je středníkem.
## Grafy
- *Histogram* 
![[excel_histogram.png]]
- *Spojnicový graf*
![[excel_spojnicovy.png]]
- *Kruhový (koláčový) diagram*
![[excel_kolacovy.png]]