Charakteristika úlohy. Eliminační a iterační výpočetní metody.

- Jakými způsoby lze vyřešit soustavu lineárních rovnic?
- Jaké jsou podmínky nalezení řešení? Jak poznáme, zda má soustava jedno, žádné či více řešení?
---
# Způsoby řešení soustavy rovnic
## Eliminační metody
Snažíme se proměnné osamostatnit, abychom pak se znalostí jejich hodnot mohli dopočítat zbylé. To se obvykle provádí přes matice a jejich úpravy. U *Gaussovy eliminační metody* se snažíme matici dostat na trojúhelníkový tvar, čímž zjistíme hodnotu samostatné proměnné, potom té nad ní, a tak dále.

$$\begin{gathered}(1)&2x_1&+&x_2&-&x_3&=&8\\(2)&-3x_1&-&x_2&+&2x_3&=&-11\\(3)&-2x_1&+&x_2&+&2x_3&=&-3\end{gathered}$$

Tuto soustavu si převedeme na rozšířenou matici soustavy a potom upravujeme na trojúhelníkový tvar. Řádky můžeme prohazovat, nebo násobit a přičítat k ostatním.

$$\left(\begin{array}{ccc|c}2&1&-1&8\\-3&-1&2&-11\\-2&1&2&-3\end{array}\right)\sim\left(\begin{array}{ccc|c}2&1&-1&8\\0&\frac{1}{2}&\frac{1}{2}&1\\0&2&1&5\end{array}\right)\sim\left(\begin{array}{ccc|c}2&1&-1&8\\0&\frac{1}{2}&\frac{1}{2}&1\\0&0&-1&1\end{array}\right)$$

Z toho již jdou zezdola nahoru hodnoty pro každou z hledaných proměnných.

$$\begin{gathered}(1)&2x_1&+&x_2&-&x_3&=&8\\(2)&&&\frac{1}{2}x_2&+&\frac{1}{2}x_3&=&1\\(3)&&&&&-x_3&=&1\end{gathered}$$

Kdybychom upravili i na horní trojúhelníkovou matici, pak máme hodnoty hned v hlavní diagonále a použijeme tzv. *Gaussovu-Jordanovu eliminaci*. Dalším postupem je tzv. *LU rozklad*, ve kterém se matice rozloží na součin dolní trojúhelníkové (L) a horní trojúhelníkové (U) a postupně se také dostáváme k hledaným hodnotám.
## Přes determinanty
Využívá [Cramerovo pravidlo](https://cs.wikipedia.org/wiki/Cramerovo_pravidlo). Nejdříve si vypočteme determinant matice složené z koeficientů u neznámých. Poté si vezmeme vektor řešení a postupně ho dosazujeme místo sloupců v původní matici. Pro hodnotu každé proměnné potom platí, že se rovná podílu determinantu upravené matice a determinantu matice původní.

$$\begin{gathered}(1)&x_1&+&2x_2&=&3\\(2)&4x_1&+&5x_2&=&6\end{gathered}$$

Determinant původní matice vypočteme podle hlavních a vedlejších diagonál, takže $1\cdot5-2\cdot4=-3$. Poté už jenom dosazujeme místo sloupců, takže bude platit:

$$\begin{gathered}x_1=\frac{detA_1}{detA} = \frac{\begin{vmatrix}3&2\\6&5\end{vmatrix}}{-3}=\frac{3\cdot5-2\cdot6}{-3}=\frac{3}{-3}=-1\\x_2=\frac{detA_2}{detA}=\frac{\begin{vmatrix}1&3\\4&6\end{vmatrix}}{-3}=\frac{1\cdot6-3\cdot4}{-3}=\frac{-6}{-3}=2\end{gathered}$$

Tento postup se stává nepraktickým při velkých maticích, protože je poté náročné spočítat jejich determinant.
# Určení počtu řešení
Determinanty se nám také hodí k určení **počtu řešení soustavy rovnic**. Pokud je determinant *nulový*, pak má soustava buď nekonečně mnoho řešení, nebo není žádné. Pokud je *nenulový*, pak bude mít soustava právě 1 řešení.
Pro přesnější určení počtu řešení můžeme využít *hodnost matice*. Porovnáváme hodnost *matice soustavy* (A), *rozšířené matice soustavy* (A|b), kde b reprezentuje sloupec výsledků a *počet řádků* (n). Hodnost přitom získáme převodem na trojúhelníkový tvar a následným vyškrtáním nulových a duplicitních řádků (zbylé řádky nesmí být lineárně nezávislé)
- Pokud jsou všechny tři hodnoty *stejné* (A = A|b = n), pak má soustava *jedno řešení*
- Pokud je hodnost A menší než hodnost A|b, pak soustava *řešení nemá*
- Pokud se hodnosti obou matic rovnají, ale jsou obě menší než n, pak má soustava *nekonečně mnoho řešení* a musíme použít *parametry*