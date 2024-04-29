---
title: Počítačová síť
editUrl: false
---

Charakteristika sítě. Výhody a nevýhody sítí. Přihlašovací jméno a heslo. Práva na síti. Server, printserver, mailserver, webserver. Sdílení hardware a software na síti. Mapování disků. TCP/IP protokol.

* Co znamenají pojmy LAN, Wi-Fi, Bluetooth, NFC, VPN?
* Jaké základní prvky tvoří počítačovou síť, k čemu slouží?
* Jaká média se používají k přenosu informace, jaké jsou jejich výhody a nevýhody?
* Jaká jsou základní práva uživatelů z hlediska k přístupu ke složce (souboru)?
* Jaké jsou typy sítí z hlediska vztahu stanic?

***

# Pojmy

## LAN

(= *Local Area Network*) je nějaká *lokální počítačová síť*, na které se mohou data přenášet i bez přístupu k širšímu internetu (ten musí být do LAN předán přes *routery*). Je rychlá a snadno přizpůsobitelná. Najdeme ji v *domácnostech* nebo ve *škole*

## Wi-Fi

(= *Wireless Fidelity*) je *bezdrátová* technologie pro *přenos dat*, která se používá pro připojení k internetu bez nutnosti kabelu. Má ale *menší rychlost* než kabelové připojení a částečně se blokuje skrz zdi. Obvykle se používají frekvence 2.4 GHz a 5 GHz. Šíří se přes wifi routery (tykadélka)

## Bluetooth

*Bezdrátová* technologie pro *přenos dat*, která se používá k *připojení na krátké vzdálenosti*. Obvykle se jedná o nějaké *periferie* k zařízení (myš, klávesnice, herní ovladač, bezdrátová sluchátka). Ty se nejdříve k zařízení spárují a vytvoří si *bezpečnostní klíče*, pomocí kterých se potom šifrují data. Zároveň až 1600x za sekundu *přeskakují* na menším počtu frekvencí (40), aby bylo zaručeno soukromí

## NFC

(= *Near Field Communication*) je *bezdrátová technologie* a provádí ji NFC čip. Používá se k *bezkontaktním platbám* přes telefon, ale i čipům v jídelnách. Oproti Wi-Fi a Bluetooth má nejmenší rozsah (v řádu cm). Umožňuje zároveň přenášet data pouze po malých kouscích. Dnes se NFC štítky přidávají i do občanských pasů, takže v blízké době můžeme očekávat jejich rychlejší skenování (komunikace zabere jenom asi 100 ms)

## VPN

(= *Virtual Private Network*) je prostředek, kdy se počítačové spojení tuneluje přes externí VPN server. Používá se pro *bezpečnější připojení na veřejných sítích*, odemknutí obsahu s geobloky (jsou dostupné pouze v některých zemích) nebo připojení do firemní sítě z domova

## Servery

Obecně poskytují *odpovědi* a *služby ostatním počítačům*, které o ně zažádají. Někteří zástupci jsou například *printserver* (poskytuje přístup k tiskárnám, skenerům a faxům; spravuje je), *mailserver* (spravuje emailovou komunikaci) a *webserver* (poskytuje webové stránky)

## TCP/IP protokol

*Propojuje* dva *uzly* (počítače) a umožňuje mezi nimi obousměrný *přenos dat*. Tím vytváří síť kterou dnes nazýváme *internet*. Fungují díky němu například protokoly *FTP* (přenos souborů), *POP3* (emaily) či *HTTP* (webové stránky). Existuje i *jednodušší* a *minimalističtější* varianta k protokolu TCP jménem *UDP*. Na rozdíl od TCP se nekontroluje, zda byla všechna data správně doručena, takže se používá na hraní her, video streamování, zatímco TCP je vhodný na webové stránky a další citlivé aplikace.

# Prvky počítačové sítě

Počítačová síť se skládá z **hardwaru** (fyzická zařízení, která *propojují části sítě* dohromady; routery, switche, huby), **softwaru** (*řídí síť*; firewall, programy na správu sítě), **protokolů** (*formální stránka komunikace*, nastavují jak spolu budou zařízení komunikovat) a **přenosových technologií** (mohou být buď bezdrátové, nebo kabelové)

# Média pro přenos informací

## Drátová

*Velmi rychlá*, ale nutnost mít *ethernetovou zdířku*. Zároveň pokud kabelové spojení vypadne, může se narušit celá síť. My používáme obvykle *kroucenou dvojlinku* (podle toho, že v ní jsou 4 páry zakroucených kabelů) s konektorem *RJ-45*. Příkladem jsou ale i např. *optické kabely*

## Bezdrátová

Lepší *dostupnost* a *flexibilita* sítě, ale *pomalejší rychlost* a *blokování* skrz stěny (musí se odrážet z místnosti do místnosti). Řadí se sem Wi-Fi, ale i přenos přes infračervené záření

# Práva pro soubor a složku na síti

* *Úpravy (modify)* povoluje upravit vlastnosti a metadata souboru
* *Čtení (read)* povoluje čtení souborů a listování složek
* *Zápis (write)* povoluje zápis do souborů, vytváření a mazání složek
* *Čtení položek složky (list folder contents)* povoluje pouze vidět jaké soubory ve složce jsou, ale samotné soubory číst nelze
* *Plná kontrola (full control)* povoluje prakticky vše a je kombinací ostatních

# Rozdělení sítí

**Sítě můžeme dělit** podle toho, jak velkou oblast zařízení propojují. Těch je spoustu, my je všechny umět nemusíme.

* *PAN (Personal Area Network)* propojuje v dosahu jednotlivce (mobilní hotspot)
* *LAN (Local Area Network)* propojuje v rámci domácnosti
* *CAN (Campus Area Network)* propojuje v rámci univerzitního nebo firemního prostředí
* *MAN (Metropolitan Area Network)* propojuje v rámci celého měst
* *WAN (Wide Area Network)* propojuje v rámci země, kontinentu nebo i celé planety
