Charakteristika základních programových produktů a jejich využití v praxi.

- Jaký je rozdíl mezi adware, freeware, shareware a open source?
- Co je to malware, spyware a Trojský kůň?
- Co je to firmware?
- Uveďte nejčastější kategorie modelů licencování dat, komerčního a svobodného softwaru a vysvětlete hlavní rozdíly.
---
# Kategorie bezplatného software
## Adware
Sice si stáhneme zdarma, otravují nás ale častokrát *reklamy* (z nich má potom autor *peníze* na *financování* projektu). Může se projevit menšími *bannery*, ale i *pop-up okny* či změnou *výchozího vyhledávače* v našem prohlížeči (je proto dobré *neproklikávat* při *instalaci* pofidérních programů)
## Freeware 
Autor nám poskytuje *zdarma* (ale přijímá finanční dary), přičemž si *ponechává autorská práva*. Je obvykle proprietární (obsahuje *vlastní podmínky použití* - EULA, zároveň má *uzavřený kód*). Lze použít i pro komerční účely, ale u každého programu záleží
## Shareware
Lze volně distribuovat, i *mimo oficiální stránky* autora (často klíče, CD, DVD v časopisech, ale i *na internetu*). Mají zpravidla zabudovaná *omezení* (reklamy, funkce jen v prémiových verzích, časová)
## Open source
Dostupný s *otevřeným zdrojovým kódem*. To znamená, že si jeho kód můžeme libovolně *zobrazit* a *upravovat*. Je k němu obvykle připojena také *licence* (MIT, GPL, LGPL), která úže specifikuje, *jaká práva* má *stahující*, a jaká ne. Nejvíce se s ním setkáme na platformách *GitHub, GitLab*
# Virus
Pokud se nám podaří si na počítač dostat *počítačový virus* (škodlivý kus kódu, který má za úkol ublížit uživateli), můžeme ho také podle jeho *chování* rozdělit do několika kategorií:
## Malware
Přímo odvozen ze spojení *malicious software*, a je tedy obecným označením pro nějaký *škodlivý, nežádoucí software*. Může doházet ke *krádeži dat, zobrazování reklam, šifrování souborů* a další aktivity. které nám škodí.
## Spyware
Takový virus, který *odesílá naše data* přes internet. Může jít od *snímání klávesnice*, *krádeže hesel* a kreditních karet přes dokumenty až třeba po IP adresu. Mezi příznaky nakažení mohou být *pomalejší rychlost načítání*, podivné domovské stránky v prohlížeči či vyšší výskyt reklam. Jako prevence se doporučuje používat *firewall* (systém, který monitoruje pohyb po internetu a dokáže zablokovat dotazy s nekalými účely) a nelézt na pofidérní stránky, např. s pornografií či prémiovými programy a hrami zadarmo (tzv. *warez*)
## Trojský kůň 
Představuje program, který se tváří *užitečně* (hra, antivirus, program na podvádění), ale obsahuje *zadní vrátka*, díky nimž může útočník provádět na našem počítači operace *bez našeho souhlasu*. Neumí se sám od sebe šířit na další počítače (oproti tzv. *počítačovým červům*). Tento virus slouží obvykle k *těžbě kryptoměn na pozadí* nebo ke kooperaci při *DDoS útocích* (mnoho počítačů rychle posílá dotazy na server, ten to nezvládne a *zhroutí se*)
# Firmware
Software, který *ovládá, řídí* nějaké *zařízení*. Ať už to jsou *počítačové díly, mobilní telefon*, ale třeba i *kalkulačka* nebo *semafory*. Od operačního systému se liší tak, že je uložen na *ROM* (Read-only Memory), zatímco operační systém běží na nějakém disku a může být upravován v rámci aktualizací atd. U *jednodušších zařízení* (Arduino, Raspberry Pi, ...) firmware *nahrazuje* operační systém.
# Licence
Každý software má nějakou **licenci**, která přesně určuje, co s ním *můžeme* a *nesmíme dělat*. Jedná se o *ochranu* proti lidem, který by např. mohli zkopírovat celý náš program a vydávat ho za svůj. Existuje jich mnoho, zde je pár příkladů:
- *GPL* (GNU Public Licence) dovoluje *distribuovat a upravovat*, ale každý další Vydaný upravený kód musí také být *pod GPL* (udržování open-source kultury)
- *MIT* dovoluje to samé jako GPL, ale i pro *komerční* účely. Není zde nutnost redistribuce pod stejnou hlavičkou
- *Freeware/Shareware* licence nedovoluje upravovat a vydávat upravené verze, jinak v podstatě vše ano
- *Proprietární licence* obvykle vyžadují digitální podpis *smlouvy* (EULA, stačí klepnutí na tlačítko). Bývá u *placených programů* a uživateli dovoluje prakticky jenom *používat*