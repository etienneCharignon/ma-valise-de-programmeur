+++
id = 68
title = "La programmation defensive n'est pas agile"
soustitre = ""
date = "2008-06-29T17:24:19+01:00"
catégories = [ "Essais" ]
description = "La programmation défensive n'est pas agile, elle suppose que le code écrit est terminé et immuable."
comments = true
+++

<div class="chapo"></div>
A votre avis, qui est le plus agile ? Le chevalier avec ses 90 kg d'armure ou le paladin en tunique avec sa hache ?

Supposons qu'au cours de l'écriture de mon programme je rencontre soudainement le besoin d'une fonction d'affichage.

def affiche (a, b)

Supposons, dans un premier temps, que je sois sûr que cette fonction n'est jamais appelée avec des paramètres nuls.

Deux tactiques sont possibles ici:

-* Programmation défensive:
-** J'écris un test unitaire pour vérifier que ma méthode affiche bien a et b dans le cas où ils sont tous les deux non nuls
-** J'ajoute immédiatement dans le corps de ma fonction, au début, quelques lignes de code pour retourner une exception si l'un des deux paramètres est nul[[voir aussi mon poste précédent sur la programmation par [coïncidence](../article_36) ]].

-* Programmation délibérée:

-** J'écris un test unitaire pour vérifier que ma méthode affiche bien a et b dans le cas où ils sont tous les deux non nuls.
-** rien d'autre. Je laisse le cas où les paramètres sont nuls comme indéterminé (il n'y a pas de test).

J'entends déjà les critiques : "il est pas propre ton code !", "il faut se blinder contre toute utilisation imprévue de ta fonction".

Bon, je pourrais toujours argumenter que ce n'est pas parce qu'on est dans une culture du blâme qu'il faut se construire une armure, mais là n'est pas mon propos.

Maintenant, imaginons qu'un peu de temps passe et que finalement, je rencontre un cas où j'ai besoin d'appeler ma fonction "affiche" avec b nul et que dans ce cas, je veux qu'elle affiche la chaine "nul" à la place de b.

Dans le premier cas, j'ai fait du travail inutile, pire, je ne peux pas réutiliser ma fonction ! En effet, peut-être que quelqu'un utilise ma fonction et s'attend à recevoir une exception en cas de paramètre nul. Je ne peux pas retirer mon exception sans risquer de casser son code. Je suis obligé de faire une autre fonction !

Dans le deuxième cas, pas de problème. J'étends le comportement de la fonction maintenant que j'ai un besoin précis pour le cas des paramètres nuls.

En tant que développeur, j'ai décidé de ne plus jamais faire de programmation défensive et je sais pourquoi.