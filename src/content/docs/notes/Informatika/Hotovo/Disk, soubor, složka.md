---
title: Disk, soubor, složka
editUrl: false
---

Charakteristika disku, souboru, složky. Typy disků. Jméno souboru a standardní koncovky. Atributy souborů. Univerzální (zastupující) znaky. Pojem složka a jejich struktura. Cesta. Komprimace a dekomprimace souborů.

* Jakým způsobem jsou uložena data na disku, vysvětlete rozdíl mezi SSD a rotačními disky.
* Co je to souborový systém? Jmenujte několik běžně používaných souborových systémů v různých operačních systémech.
* Jaké jsou hlavní atributy souborů?
* Co je to komprese dat? Jmenujte alespoň dva běžně užívané programy pro kompresi.

***

# Typy disků podle způsobu uložení

## HDD

(= hard disk drive) jsou *rotační disky*, data jsou uložena na kruhové *desce magneticky* a čtou se přes *hlavici* (vibrování při užívání) -> pomalejší a náchylnější k fyzickému poškození, ale větší a levnější -> využití např. pro uložení většího počtu obrázků, videí

## SSD

(= solid-state drive) *neobsahují pohyblivé části!*, data se ukládají čistě *elektronicky* pomocí *paměťových buněk*, není tak náchylná na vnější jevy (např. tlak - důležité pro letectví), dělí se podle rychlosti *SATA* (starší, pomalejší) -> *M.2* (velmi rychlé, používají se pro uložení *systému*, aby běhal co *nejrychleji*)

# Souborový systém

Hierarchicky organizuje data na disku či médiu a zároveň přechovává jejich *informace, metadata* (autoři, přístupová práva, poslední datum úpravy, datum vytvoření, ... - to co vidíme, když v průzkumníku otevřeme *vlastnosti souboru*), je jich několik různých, liší se i podle použití na různých *operačních systémech* - *NTFS* (Windows), *exFAT* (Flash disky), *ext4* (Linux), *APFS* (MacOS), FAT32, btrfs

## Atributy

Každý soubor či složka mají v souborovém systému nějaké **atributy**, ty určují jak se má systém k souboru *chovat*, jak s ním má *pracovat*. Mezi ně patří:

* *Hidden* - soubor se neukazuje v průzkumníku ani příkazech
* *System* - indikuje, že soubor je důležitý pro správné fungování systému; skrytý
* *Read-only* - systém otevíracímu programu neposkytne práva na ukládání, pokud o explicitně nevyžádá
* *Encrypted* - windows zašifrují soubor, aby se k němu nedalo jednoduše dostat
* *Archive* - indikuje, že se soubor změnil před poslední zálohou

# Komprese dat

Data souboru *upravíme* tak, abychom *zmenšili* jeho *velikost na disku*, například místo ❌❌❌❌ uložíme pouze *4❌*, nebo ve videu *neopakujeme* na dalším snímku *části*, které se *překrývají* se snímkem aktuálním.
Dělí se na:

* *Bezztrátovou* - data jsou po dekompresi *identická* s těmi před kompresí, používá se na *archivy, obrázky* s vysokou kvalitou, text
* *Ztrátovou* - dojde ke *ztrátě kvality*, používá se na video, zvuk, obrázky s nižší kvalitou

## Programy

* *Průzkumník Windows* umí .zip, moderní verze i .rar a .7z
* *WinRAR* je trialware, nativní koncovka je *.rar* (ale umí o mnoho víc)
* *7-Zip* je zdarma a open source, nativní koncovka je *.7z* (ale umí o mnoho víc)

# Pojmy

## Jméno souboru

Dělí se na samotné **Jméno** (nemůžeme některé znaky, nebo celá slova) a **Koncovku** - ta udává systému jaký typ souboru to je, v jakém programu se má otevřít. Zatímco ve Windows nemůžeme mít dva soubory se stejným jménem a jinou kapitalizací písmen, v Linuxu to možné je

## Univerzální znaky

Používají se k *efektivnímu vyhledávání* a existují dva:

* *\** hledá libovolný počet znaků, často se označuje jako tzv. *wildcard*
* *?* hledá libovolný jeden znak

## Cesta k souboru

Adresa, skládá se ze složek oddělených *zpětnými lomítky* (Windows) či *klasickými lomítky* (Linux), v Linuxu se dá na *domovský adresář* uživatele odkázat pomocí znaku vlnky - *\~*
