+++
id = 43
title = "Laissez la modélisation venir à vous..."
soustitre = "Les forces de la programmation pilotée par les tests"
date = "2006-05-29T22:19:44+01:00"
rubrique = 10
description = "La programmation pilotée par les tests est une manière d'arriver à la modélisation d'une application, sans nécessiter de construire un grand plan en phase amont."
slug = ""
+++

<div class="chapo"></div>
Lors de mes cours d'informatique, j'ai très tôt appris qu'il était indispensable de réfléchir avant de se lancer dans l'écriture d'un programme. Certains ont poussé ce principe à l'extrême et on inventé le MDA (Model Driven Architecture). Cette approche propose d'écrire en UML l'intégralité du modèle de l'application avant de commencer à travailler. Je n'ai personnellement jamais rencontré de projet informatique ayant réussi en appliquant cette méthode.

Le problème de cette approche est qu'elle essaie de manger un mammouth en une seule bouchée. Mais pour manger un mammouth, tout le monde sait qu'il faut d'abord le découper en tranches puis manger chaque tranche par petite bouchée. C'est ce que propose le développement piloté par les tests (DPT).

Quoi qu'on pourrait penser, cette pratique ne remet pas en cause le fait de réfléchir avant d'agir. Elle se contente de repousser à plus tard les tranches de mammouth les moins prioritaires pour se concentrer sur le principal en premier. 

Certains diront qu'il est dangereux de travailler comme ça car on ne pourra pas faire facilement évoluer le code qui aura été écrit au début. 

Alors, aucune méthode n'est-elle efficace ?

Vous l'aurez deviné, je ne crois pas à ce dernier argument. Nous, les développeurs de logiciel savons que le code est une matière malléable que l'on peut modifier à volonté... Mais des années de pratique du cycle en V ont dû obscurcir plus d'un esprit. Ils ont oublié.

Ce qui nous permet de modifier le code facilement, de rester agile, de ne pas avoir une évolution du coût de la modification exponentielle par rapport au temps, c'est la ceinture de sécurité des tests générés. 

Les tests générés ont un double avantage. Ils sont rassurants quant à l'impact des modifications apportées et forcent le design à être découplé.

Le développement piloté par les tests conduit à écrire une application avec un design de qualité, et cela sans avoir été obligé de le penser intégralement en phase amont.

C'est bien la force du DPT de permettre de choisir le modèle de l'application... et d'en changer si nécessaire. Ce que ne permet pas la méthode MDA qui, puisqu'elle base tout sur le choix d'un modèle à priori, ne permet pas ensuite de basculer sur un autre plus approprié.

Car enfin c'est bien le choix d'une architecture qui dicte la qualité de l'application finale. Si l'on s'aperçoit que la concurrence réussit mieux que nous, ne serait-il pas intéressant de pouvoir virer rapidement pour tenter de la rattraper ?