---
title: Metoda nejmenších čtverců
editUrl: false
head:
  - tag: link
    attrs:
      rel: stylesheet
      href: https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css
---

Charakteristika úlohy. Nahrazení množiny bodů lineární funkcí a obecným polynomem.

* Jak funguje metoda nejmenších čtverců?
* Demonstrujte použití metody při nahrazení m bodů polynomem stupně 2.

***

# Princip metody

* Metoda nejmenších čtverců se používá k nalezení křivky, která *aproximuje průběh danými body*. Snažíme se minimalizovat vertikální vzdálenost těchto bodů od hledané křivky (a protože nechceme počítat s odmocninami, používáme druhé mocniny (tzv. čtverce) -> nejmenší čtverce). Vzdálenost získáme *odečtením funkční hodnoty v bodě* (u lineárních funkcí polynom prvního stupně $ax_i+b$, u kvadratických funkcí polynom druhého stupně $ax_i^2+bx_i+c$ a podobně, čím větší stupeň, tím přesnější aproximace) od zadaného bodu $y_i$. U prvního stupně bude tedy vzdálenost $y_i-(ax_i+b)=y_i-ax_i-b$ a čtverec $(y_i-ax_i-b)^2=(ax_i+b-y_i)^2$ (použijeme vlastnosti druhých mocnin $x^2=(-x)^2$).
* Pokud tedy máme nějaké body $[x_i;y_i]$, hledáme $\sum_{i=1}^{n}(ax_i+b-y_i)^2$ tak, aby byl součet co nejmenší. Na nalezení bodu podezřelého z extrému použijeme 1. derivaci funkce. A protože těch proměnných máme víc, musíme parciálně derivovat (derivujeme n-krát podle počtu proměnných a všechny ostatní bereme jako konstanty) a položit obě derivace nule.

$\begin{gathered}(1)&\sum_{i=1}^n2\cdot(ax_i+b-y_i)\cdot x_i=0\\(2)&\sum_{i=1}^n2\cdot(ax_i+b-y_i)\cdot{1}=0\end{gathered}$

Konstantu (2) můžeme se součtu vytknout a poté z obou rovnic vyškrtnout. A protože suma součtu je součet sum, můžeme soustavu rozepsat takto:

$\begin{gathered}(1)&\boxed{a}\cdot\sum{x_i^2}&+&\boxed{b}\cdot\sum{x_i}&=&\sum{x_iy_i}\\(2)&\boxed{a}\cdot\sum{x_i}&+&\boxed{b}\cdot{n}&=&\sum{y_i}\end{gathered}$

Nyní máme soustavu dvou rovnic o dvou neznámých a,b a můžeme řešit jakýmkoliv způsobem po dopočítání sum z výchozích dat pomocí [Řešení soustavy rovnic](/notes/informatika/hotovo/řešení-soustavy-rovnic)

# Příklad na polynomu stupně 2

Suma čtverců

$\sum(ax_i^2+bx_i+c-y_i)^2$

Parciální derivace

$\begin{gathered}(1)&\sum2\cdot(ax_i^2+bx_i+c-y_i)\cdot{x_i^2}=0\\(2)&\sum2\cdot(ax_i^2+bx_i+c-y_i)\cdot{x_i}=0\\(3)&\sum2\cdot(ax_i^2+bx_i+c-y_i)\cdot1=0\end{gathered}$

Rovnice

$\begin{gathered}(1)&\boxed{a}\cdot\sum{x_i^4}&+&\boxed{b}\cdot\sum{x_i^3}&+&\boxed{c}\cdot\sum{x_i^2}&=&\sum{x_i^2y_i}\\(2)&\boxed{a}\cdot\sum{x_i^3}&+&\boxed{b}\cdot\sum{x_i^2}&+&\boxed{c}\cdot\sum{x_i}&=&\sum{x_iy_i}\\(3)&\boxed{a}\cdot\sum{x_i^2}&+&\boxed{b}\cdot\sum{x_i}&+&\boxed{c}\cdot{n}&=&\sum{x_i^2y_i}\\\end{gathered}$

Matice a dopočítání jako by se stalo...
