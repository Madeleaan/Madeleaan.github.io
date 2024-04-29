---
title: Řešení rovnic f(x) = 0
editUrl: false
head:
  - tag: link
    attrs:
      rel: stylesheet
      href: https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css
---

Charakteristika úlohy. Vysvětlení pojmu iterační proces. Výpočetní metody.

* Jmenujte metody řešení rovnice f(x) = 0. Popište jejich princip.
* Jaké jsou podmínky pro řešení f(x) = 0?
* Vyberte si jednu metodu a napište programový kód pro řešení obecné funkce f(x) = 0.

***

# Metody řešení f(x) = 0

**Iterační proces** znamená opakované použití funkce s předchozími výsledky, abychom se přiblížili přesnějšímu výsledku (iterace = opakování)

## Metoda bisekce

Využívá opakované *půlení intervalu* a jistou toleranci (není možné se dopracovat k přesnému výsledku). Musíme si určit *začátek* a *konec* intervalu, ve kterém budeme kořen rovnice hledat a najít jejich *střed* na číselné ose. Pokud nám dosazením střední hodnoty vyjde nula, pak máme vyhráno a získali jsme daný kořen. Jinak kontrolujeme, zda mají střed a krajní hodnoty intervalu *různá znaménka* (například pomocí funkce signum) při dosazení do funkce. Pokud ano, pak se kořen bude nacházet v daném podintervalu. Tuto proceduru opakujeme, než se dopracujeme k intervalu, který je *menší* nebo *stejný* jako určená *tolerance* na začátku. Tato metoda ale může být pomalá.
![fx\_bisekce.png](../../../../../assets/notes/informatika/obrázky/fx_bisekce.png)

## Newtonova metoda (tečen)

Využívá speciální *vzoreček* pro postupný výpočet. Musíme kromě hledané funkce znát i její *derivaci*. Zároveň je potřeba zadat nějaký počáteční *odhad* a *maximální počet výpočtů* (opakování, iterací). Tímto postupem dostáváme přesnější a přesnější tečku k bodu, který chceme najít. Pokud máme nějaký bod $x_k$ ($x_0$ je počáteční odhad), pak další bod získáme pomocí $x_{k+1} = x_k - \dfrac{f(x_k)}{f'(x_k)}$. Tento bod by měl ke konečnému výsledku být *blíže*, než předchozí. Ukončovací podmínka zároveň může být i vzdálenost výsledků dvou po sobě jdoucích iterací. Vzorec funguje na principu umístění dalšího bodu vždy do *průsečíku derivace* s osou x.
![fx\_newton.gif](../../../../../assets/notes/informatika/obrázky/fx_newton.gif)

## Metoda sečen

Nevyžaduje znát derivaci, ale musíme si určit dva *počáteční odhady* $x_0$ a $x_1$. Opět zde platí nutnost určení maximálního počtu iterací a tolerance. Tato metoda konverguje rychleji než bisekce, ale zase pomaleji než Newtonova metoda. Používáme vztah $x_{n+1}=x_n-\dfrac{f(x_n)\cdot(x_n-x_{n-1})}{f(x_n)-f(x_n-1)}$  *(nemusíme si pamatovat)*. Ten opakujeme, dokud se nevejdeme do tolerance nebo jsme dosáhli maximálního počtu iterací. Pokud si pamatujeme vzoreček, tak je jednoduchá na naprogramování a zároveň dokáže najít řešení v poměrně nízkém počtu iterací. 	![fx\_secny.png](../../../../../assets/notes/informatika/obrázky/fx_secny.png)

# Podmínky řešení

Všechny tyto metody vyžadují určité **podmínky**, aby uspěly. Funkce hlavně musí být na hledaném intervalu *spojitá*. Zároveň musí na daném intervalu být *právě jeden kořen*

* Pro *bisekční* metodu musíme z definice vytvářet takové podintervaly, aby měly funkční hodnoty v krajních bodech *opačná znaménka*.
* Pro *Newtonovu* metodu musí být derivace funkce *spojitá*. První i druhá derivace by měly být různé od nuly.

# Ukázkový kód

A nakonec **kód** pro aproximaci řešení. Vybral jsem Newtonovu metodu, protože si můžeme zvolit předpis jednoduchý na derivaci - nějakou polynomickou funkci. Chceme spočítat $x = \sqrt{2}$, takže $f(x): y = x^2-2$ a $f'(x): y=2x$

```cs
double f(double x) {return x*x-2;} // fce
double df(double x) {return 2*x;} // derivace
double odhad = 1.5; // pocatecni odhad
int maxIteraci = 3; // pocet opakovani

double x = odhad;
for(int i = 0; i < maxIteraci; i++)
{
    x -= f(x) / df(x); // podle vzorecku
}
Console.WriteLine("sqrt(2) ~= " + x);
```

A pokud bychom chtěli mít metodu, která nám to spočte, tak by vypadala takhle:

```cs
double Newton(Func<double, double> f, Func<double, double> df, double odhad, int maxIteraci)
{
    double x = odhad;
    for(int i = 0; i < maxIteraci; i++)
    {
        x -= f(x) / df(x);
    }
    return x;
}
```

a volali bychom jí jako `Newton(x => x*x-2, x => 2*x, 1.5, 3);`
