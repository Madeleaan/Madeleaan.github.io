Základní stavební prvky počítače a jejich funkce. Druhy pamětí, hierarchie paměti, periferní zařízení.

- Popište Von Neumannovu koncepci univerzálního počítače.
- Popište následující obrázek
- Jmenujte alespoň tři vstupní a tři výstupní periferní zařízení.
- Vysvětlete pyramidu hierarchie paměti.
---
# Von Neumannova koncepce
Podle přednášek Johna von Neumanna byla vytvořena tzv. **Von Neumannova koncepce univerzálního počítače**. Tento počítač měl nahradit počítače, ve kterých byl program dán *napevno* a tedy jakákoliv změna potřebovala úplnou změnu hardwaru. Tento lepší design se tedy skládá z:
-  *Procesoru*, ten je tvořen *řadičem* (ten *čte instrukce* jednu za druhou, dekóduje je a provádí) a *ALU* (*aritmeticko-logická jednotka*, probíhají v ní *aritmetické výpočty* - sčítání, odčítání, bitový posun, ... a *logické výpočty*)
- *Operační paměti* - *velmi rychlá paměť*, ale *malá kapacita*, používá se na dočasná data na pomoc při výpočtech
- *Vnější paměť* - tam se ukládají data pro další použití
- *Vstupní a výstupní zařízení* - poskytuje a sbírá data z procesoru![[architektura_neumann.png]]
# Popis obrázku základní desky
![[architektura_motherboard.png]]
- *VGA, HDMI, DVI* jsou na výstup grafiky, dnes se používá hlavně *HDMI* a moderní *DisplayPort*
- *USB* zdířky slouží pro připojení periferních zařízení pomocí protokolu USB (*U*niversal *S*erial *B*us), dnes různé verze a typy (MicroUSB, USB-C, ...)
- *Ethernet* slouží pro připojení k internetu pomocí kabelu RJ-45
- *Audio zdířky* slouží k výstupu a vstupu zvuku
- *CMOS baterie* se používá pro napájení BIOSu
- *SSD slot* slouží k zapojení SSD disku, dnes typický *M.2* standard
- *PCI* je slot, do kterého se dává grafická karta, zvukovka, capture card, ...
- *SATA porty* jsou na disky
- *Heatsink* odvádí teplo
- *RAM sloty* slouží k připojení paměti RAM 
- *VRM* dodává a rozděluje napětí
# Periferní zařízení
Dělí se na:
	- *Vstupní* - Dodávají data do počítače, pomocí nich ho ovládáme; myš, klávesnice, herní ovladač, mikrofon, kamera 
	- *Výstupní* - Počítač posílá data ven; tiskárna, monitor, reproduktor, sluchátka
# Pyramida hierarchie paměti
![[architektura_pyramida.png]]
	- Od shora dolů *roste kapacita*, ale *klesá rychlost*
	- *Registry* jsou přímo v procesoru, mají obvykle jenom 16-64 bitů a používají se na *pomoc* při *provádění instrukcí*
	- *Cache* je fyzicky blízko procesoru, používá se pro uložení *často používaných dat*, aby procesor prováděl operace rychleji
	- *Hlavní paměť (RAM)* se používá primárně pro data aplikací a systému, která se po vypnutí počítače vymažou
	- *Druhotné paměti* jsou *HDD* a *SSD*, používají se na data, která zůstanou i po vypnutí