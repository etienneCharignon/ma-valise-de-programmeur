+++
id = 69
title = "Databases overkill !"
soustitre = ""
date = "2008-12-01T23:29:48+01:00"
rubrique = 10
description = "Est-il absolument indispensable de baser toute architecture logiciel systématiquement sur une base de données ?"
slug = "Beaucoup d'applications développées de nos jours souffrent d'avoir été basées à priori sur une architecture avec une base de données. Cette décision systématique est la cause de grand maux."
+++

<div class="chapo">Beaucoup d'applications développées de nos jours souffrent d'avoir été basées à priori sur une architecture avec une base de données. Cette décision systématique est la cause de grand maux.</div>
Cela faisait un moment que cette réflexion me démangeait, mais je n'arrivais pas à en sortir quelque chose. C'est parfois comme ça quand l'émotion occupe trop le champ. Comme cela m'énerve que les bases de données aient une telle "légitimité". 

Et voila que je viens de lire le dernier poste de [Martin Fowler](../article_56). Quel plaisir et quel soulagement de voir, si bien exposé, ce sujet qui me travaille tant !

[DatabaseThaw](http://martinfowler.com/bliki/DatabaseThaw.html)

En résumé, les bases de données relationnelles sont utilisées parce qu'elles permettent de mettre en place le motif d'"intégration par le partage de la bases de données". Ce qui sous-entend que l'hégémonie des bases de données relationnelles est due au langage SQL.

Comme le fait remarquer Martin Fowler, cela pose un grave problème d'encapsulation des données.

Pour Martin Fowler l'espoir est dans l'"intégration par le web", avec comme langage : HTML.

Bien que le message de Martin Fowler traite en particulier des bases de données {{relationnelles}}, je m'intéresse plus particulièrement à l'usage des base de données en général.

A votre avis, quelle est la relation entre un wiki, un blog et Outlook ? Ce sont toutes des applications qui n'ont absolument pas besoin d'une base de données ! 

L'usage des bases de données est beaucoup trop systématique. Quand elles sont utilisées à mauvais escient, elles ralentissent considérablement l'exécution de l'application et rallongent de la même manière le temps de développement.

Je me rappelle encore de l'époque de Java 1.2 où les débats entre Java et C++ tournaient toujours en faveur du C++ pour des raisons de performance : "Java ne prendra jamais, c'est un langage interprété, il aura toujours des problèmes de lenteur insoluble". Et ces mêmes personnes de se lancer dans un développement n-tiers en C++ avec une bonne vielle base relationnelle et son langage SQL (interprété) ! Je vous laisse deviner... Ils avaient des problèmes de performance. Je me souviens d'un retour du type : "Nous avons eu des soucis de performance lors de la validation. Cela nous a coûté sacrément cher de corriger ces problèmes, mais nous sommes fiers de toutes les optimisations que nous avons pu mettre en place."

Et de nos jours avec les architectures J2EE multicouches d'une complexité sans pareil, fruits de nombreuses années de standardisation ! N'allez pas parler à une cellule d'architecture d'une solution sans base de données ! Ils ne comprendront même pas les mots. 

Questions:
- A-t-on vraiment besoin de persistance ?
- A-t-on une problématique d'accès concurrents aux données ?
- Est-on dans un environnement multi-utilisateurs concurrents ?
- La performance est-elle prépondérante ?

Il est parfois plus judicieux de s'orienter vers une solution à base de fichiers avec un chargement des données en mémoire. Surtout que de nos jours la mémoire est disponible à foison. Avez vous souvent plus de 1Go de données "vivantes" dans votre base ?

Qu'en pensez vous ?

Pour partager nos réflexions sur ce sujet, je vous propose une carte euristique sur [mindmeister](http://www.mindmeister.com/11844280)
(Vous pouvez éditer, mot de passe : {{overkill}})