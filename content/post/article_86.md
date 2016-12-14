+++
id = 86
title = "Elle booste ma suite de tests ?"
soustitre = ""
date = "2009-06-24T22:55:34+01:00"
rubrique = 10
description = ""
comments = true
+++

<div class="chapo"></div>
Il m'est souvent arrivé de parler sur ce blog d'automatisation des tests. Ces tests qui finissent par se rassembler par centaines constituent ce que l'on appelle la "suite de test".

Au fur et à mesure que le projet grandit, cette suite devient de plus en plus longue à exécuter... En fait si on n'y prend pas garde, elle dépassera même rapidement les 10 minutes puis... 20... Mais en fait, des choses bien plus embêtantes seront apparues avant d'en arriver là. 

La suite de test est exécutée dans son intégralité plusieurs fois par jours. Il est par exemple absolument indispensable de l'exécuter avant chaque commit (action de soumission de notre travail au reste de l'équipe) et nous faisons plusieurs commit par jour. 
Tous les membres de l'équipe respectent cette règle... personne ne voudrait être le manchot qui a fait casser la suite de test et dérangé tous les autres dans leur travail.

C'est la pression sociale qui est à l'oeuvre.

Si la suite de test devient trop longue à s'exécuter, elle devient pénible. Le seuil se situe généralement autour de 6 ou 7 minutes. Une équipe innocente décide en général de prendre alors une mesure qui agrave son problème et diminue la qualité : extraire dans une suite distincte les quelques tests qui posent de gros problèmes de performance et lancer cette dernière seulement de temps en temps sur une machine dédiée.

**Quel malheur !**

Cette suite va rapidement cesser de marcher. En effet, lorsqu'elle va planter la première fois, on va s'en rendre compte tard (puisque la suite n'est plus lancée aussi souvent). Il est alors difficile de trouver la cause de cette rupture. Sans compter que personne ne veut travailler sur ce problème : "Oh non, c'est trop ch!@nt, la suite est interminable !".

La solution à ce problème de performance est la solution générale pour les problème de performance : optimisation. Il faut faire ce travail sur la suite de test. Il faut trouver les quelques points de lenteur et trouver une astuce pour accélérer. Avec un peu de chance, cette astuce sera aussi profitable pour l'application, mais dans la plupart des cas, cela n'aura aucun effet. Il s'agira par exemple de faire moins de choses au niveau du "setup" des tests comme d'instancier moins d'objet par défaut en base ou alors rendre les tests plus unitaires par l'utilisation d'une librairie de mock.