 Základy tvorby webových stránek. Tagy. Styly. Publikování na serveru.

- Vysvětlete pojmy HTML, CSS, `<title>`, `<body>`
- Jaké jsou základní párové tagy při formátování textu v HTML?
- Jak se pracuje s tabulkou v HTML?
- Jaké jsou výhody CSS?
---
K publikování na server se obvykle používá *FTP připojení* a k tomu určené programy (*WinSCP, FileZilla, Transmit...*). V něm můžeme přímo prohlížet souborovou strukturu na serveru, přesouvat, měnit soubory atd - k tomuto připojení nám *poskytovatel hostingu* musí poskytnout *přihlašovací údaje*
# Pojmy
## HTML 
(= *H*yper*T*ext *M*arkdown) *L*anguage) se programuje pomocí značek *v závorkách <>*, udává základní strukturu stránky. Každý element má *otevírací* (`<h1>`) a *uzavírací* (`</h1>`) část, až na pár výjimek (`<img>`), kde nepíšeme obsah elementu. Má základní strukturu:	
- `<html>` je element, ve kterém je celý kód
	- `<head>` obsahuje metadata stránky, obvykle se v ní stahují a načítají styly a skripty
		-  `<title>` určuje název stránky
	- `<body>` je tělo stránky, kde už píšeme vlastní kód
## CSS
(= *C*ascading *S*tyle *S*heets) udávají *vzhled a rozložení* stránky pomocí vlastností elementů (id, třída)
## JavaScript 
Umožňuje různou funkcionalitu stránek, obecně *skriptování*, dynamičnost
# HTML
## Základní párové tagy
HTML umožňuje zvýrazňování textu stejně jako např. v programu *MS Word*
- `<b>text</b>` udělá **text tučný** (b jako *bold*)
- `<i>text</i>` udělá *text s kurzívou* (i jako *italics)
- `<u>text</u>` udělá <u>podtržený text</u> (u jako *underline*)
## Tabulka
Nejdříve musíme určit, že děláme *tabulku* pomocí tagů `<table>` 
Poté musíme udělat `<tr>` pro každý *řádek*
Následně vytvoříme buď *hlavičkovou buňku* (`<th>`) nebo *klasickou buňku* (`<td>`), do které napíšeme nějaký text
### Příklad
```html
<table>
	<tr>, 
		<th>Hlavička 1</th>
		<th>Hlavička 2</th>
	</tr>
	<tr>
		<td>Buňka 1</td>
		<td>Buňka 2</td>
		<td>Buňka 3</td>
	</tr>
</table>
```
![[html_tabulka.png]]
# CSS
- Pokud chceme použít externí styl nebo skript na stránce, musíme do našeho HTML přidat speciální kód pro načtení, kde napíšeme jeho adresu (lokální či internetovou)
- Dnes už se místo klasického CSS používají různé *CSS Frameworky* - například *TailwindCSS* - zde se používají předdefinované CSS třídy pro jednodušší a rychlejší vývoj webových stránek (chceme výšku a šířku obrázku 24? Přidáme *w-24 h-24* do tříd instance obrázku a máme hotovo)
- CSS má spoustu výhod:
	- Jde udělat *konzistentní* a *globální* styly, které se aplikují buď pro každý element stejně, pro každou třídu stejně, ...
	- Dělá HTML kód *čitelnější*, protože lze styl dát do samostatných souborů
	- Umožňuje *responsivní design* na různá zařízení
	- Má ale také nějaké **nevýhody**, například kompatibilita některých elementů a funkcí mezi prohlížeči

