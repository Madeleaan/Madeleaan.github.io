Reprezentace 3D scény. GPU. Pojem shader. Virtuální realita.

- Jaké hlavní části tvoří 3D scénu a jakým způsobem lze popsat 3D objekty?
- Vysvětlete účel a princip fungování grafického akcelerátoru.
- Co je to shader? V čem spočívá přínos využití shaderů na grafických kartách?
- Vysvětlete princip fungování VR headsetu.
---
# 3D Scéna
## Kamera
Reprezentuje v prostoru *pozici uživatele*, ten pomocí ní *vnímá svět* kolem sebe, protože z jejího pohledu se vykresluje scéna
## Světla 
Díky nim můžeme vidět *barvu objektů* a rozlišit je od pozadí, jako když nám svítí sluníčko (v noci taky vidíme méně)
## 3D objekty 
Reprezentují jednotlivé věci v naší scéně. Jsou vymodelovány buď *manuálně* uživatelem, *naskenováním* nějaké věci z reálného světa nebo na základě *počítačové simulace*. Popisují se pomocí *vrcholů (vertexů)*, které dávají dohromady *polygonovou síť (mesh)*. Obvykle se skládá z mnoha trojúhelníků (podle nich se určuje složitost, propracovanost modelu)
# GPU
K vykreslování nám pomáhá **GPU (Graphics Processing Unit)** - *grafická karta*, kterou máme v počítačích buď *integrovanou* (součástí procesoru) nebo *dedikovanou* (samostatný celek). Samotné GPU je velmi podobné *procesoru*, je ale speciálně přizpůsobené pro *grafické výpočty (paralelní výpočty / multitasking)*. Mají mnohem, MNOHEM více jader, než procesory (u výkonných až 4 000, procesory obvykle mívají 4-8 fyzických), ale zase zvládají jenom jednoduché operace. Celý proces funguje tak, že *procesor předá instrukce* pro *výpočet* GPU, to ho optimalizovaně spočítá a vrátí výsledek, který se potom zobrazí uživateli. Dedikované se obvykle připojují pomocí portu *PCI Express (PCI-E)* a mají vlastní RAM (tzv. *VRAM* - *Video RAM*, výkonné klidně 16 GB)
# Shadery
*Samostatné kusy kódu*, které nějak *manipulují* se 3D objekty. Jsou psány ve *specializovaných jazycích* (GLSL, HLSL). Obvykle běží na grafické kartě, aby mohly výpočty běžet *paralelně*. Dělí se na několik typů:
## Vertex shadery 
Pomocí transformačních matic pohybují / otáčejí s jednotlivými vrcholy objektu. Používá se k vytvoření *více fluidních* a *realistických efektů* (pohyb trávy při chůzi v ní, pohyb vln na vodní hladině)
# Geometry shadery 
Na rozdíl od vertex shaderů umí i *přidávat a mazat vrcholy* (vertex shader je může jenom upravovat). Slouží obvykle k *procedurálnímu generování detailů* (např. trávy na kamenu)
# Pixel/Fragment shadery 
Provádí se pro *každý pixel* a jejich barevné hodnoty nějak je pomocí *matematických operací* upravují. Používají se obvykle na *aplikaci textur* a procedurálně generované *vizuální efekty*
# VR Headset
Zařízení, které umožňuje zobrazit obraz ve *virtuální realitě.* Funguje na principu *dvou obrazovek* (jedna pro každé oko), které zobrazují z *trochu jiných úhlů* (stejně jako naše oči). Mívá několik *senzorů* pro *ovládání* (gyroskop, akcelerometr, optické senzory), to ale může být ovládáno i *externě* - infračervené kamery, lasery. Data ze senzorů jdou do *řídící jednotky* ("mozku headsetu"), ta je *zpracuje*, *aktualizuje obraz* a ten pošle do obrazovek. Tento proces by měl trvat *co nejkratší* dobu, aby nedocházelo k příliš vysoké *odezvě*. Příliš velká *latence* totiž může způsobovat *nemoc z pohybu*, také zvaná *Kinetóza*. Headsety se používají například v lékařství, armádě, k edukativním účelům nebo hraní her. Mezi příklady patří *Apple Vision Pro, HTC Vive, Meta Quest, Oculus Rift*, nebo také *Google Cardboard*, kde řídící jednotku, senzory i obrazovky nahrazuje *mobilní telefon*
![[3d_visionpro.png]]![[3d_cardboard.png]]
Je také dobré rozlišovat mezi **virtuální realitou** a **augmentovanou realitou**. Zatímco virtuální realita vytváří *kompletně nový svět*, augmentovaná realita využívá *obraz z kamery* a přidává do něj *dodatečné věci*
