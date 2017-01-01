+++
id = 56
title = "Refactoring, Improving the Design of Existing Code"
soustitre = ""
date = "2004-03-04T00:00:00+01:00"
catégories = [ "Bibliothèque" ]
description = ""
comments = true
thumbnail = "/images/arton56.png"
+++

<div class="chapo">par Martin Fowler, Kent Beck, John Brant, William Opdyke and Don Roberts, Edtion Addison-Wesley</div>

Voici la description exacte de la technique du Refactoring[[en francais, on dit Remaniement]] indispensable à la pratique tu développement piloté par les tests (TDD) et à l'extreme programming.

Le titre semble indiquer que ce livre va vous permettre d'améliorer le design d'une application existante de manière continue sans en dégrader le comportement. Mais ce n'est pas l'usage principale que j'en fait. Cette technique prend toute sa valeur dans le cycle TDD [[voir aussi l'illustration à cette [adresse](http://www.agileprogrammer.com/dotnetguy/archive/2006/08/01/17795.aspx) ]]:

{{% img src="images/png/red-green-refactor.png" class="center" %}}

Ensuite, la véritable innovation de cette technique est d'avoir donnée naissance à des outils concrets dans les environnements de développement java tel que IntelliJ permettant d'automatiser ces Refactorings (renommer une class, une variables, extraire une méthode, la remettre en ligne toutes ces actions ne prennent qu'une fraction de secondes...)

C'est dans ce livre qu'on trouve la définition de ce qu'est un "code smell", ou, comment identifier des motifs de design pouvant probablement bénéficier d'une remaniement... Je vous laisse lire !