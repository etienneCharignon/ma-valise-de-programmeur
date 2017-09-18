+++
id = 32
title = "Pourquoi faut-il faire des tests de recette automatiques ?"
soustitre = ""
date = "2005-01-10T14:57:00+01:00"
categories = [ "Dossiers" ]
description = "Les documents de spécifications détaillés gagnent à être remplacés par des tests de recette automatisé."
comments = true
+++

<div class="chapo"></div>

## 1. Quel est l'objectif de la documentation&nbsp;?
Quand on travaille dans un labo de R&D, on ne côtoie que des cervelles en ébullition. Notre métier est de penser. Comme le dit Tom Demarco[^1] nous sommes des « Knowledge Worker ». A ce titre, nous pouvons prendre l'habitude de réfléchir sur la forme et l'utilité des différentes pratiques qui constituent notre « process » de travail.

[^1]: Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency, by Tom Demarco

Pourquoi faisons-nous de la documentation&nbsp;? Pour échanger des informations évidemment. Tout est une histoire de communication. Il peut être par exemple question pour la Moa de faire passer les informations suivantes à l'équipe de développement&nbsp;:

-La logique métier.
-Les besoins du client.

Dans la définition que je viens de donner, on remarquera que j'ai parlé d'échange&nbsp;! En effet, la communication doit passer dans les deux sens. L'équipe de développement a besoin de retourner des informations vers la Moa&nbsp;:

-Des questions quant au travail à réaliser (« feedback » sur la communication venant de la Moa).
-L'avancement du travail en cours (quels sont les besoins déjà réalisés).

On remarquera tout de suite que le mode de documentation actuel utilisant un logiciel de traitement de texte ne permet pas un retour aisé de l'information depuis l'équipe de développement vers la Moa.

## 2. Quel est le contenu d'une documentation de spécification&nbsp;?
L'information à transmettre est de deux types&nbsp;:

-la vue d'ensemble
-les détails

On ne peut pas se passer de ces deux parties et il n'est pas judicieux de les grouper sous une seule forme car ces deux types d'information ne répondent pas aux mêmes exigences.

En particulier, documenter les détails est un travail difficile très propice aux erreurs et nécessite une phase de mise au point alors que la documentation de la vue d'ensemble peut rester un document approximatif (une liste de besoins fonctionnels pourrait par exemple suffire).

Pour documenter la vue d'ensemble, la méthode courante, à l'aide d'un traitement de texte ou d'un logiciel tel que Power-Point, me parait tout à fait adaptée et ne réclame pas beaucoup plus de discussion. Voyons plutôt, ce que l'on peut dire des spécifications détaillées.

## 3. Quelles sont les qualités d'une bonne spécification détaillée&nbsp;?
**Lisible**

Une documentation détaillée doit être facilement lisible pour éviter les erreurs d'inattention. Il faut qu'elle soit rapide à lire.

**Évolutive/révisable**

Les détails sont par définition des informations difficiles à capturer. Le rédacteur sera amené à hésiter beaucoup, à se tromper, à changer d'avis. Il faut que le document soit facile à modifier et à corriger. C'est une des raisons qui nous font traquer la duplication jusque dans ses plus secrets retranchements.

**Vérifiable**

-Il faut qu'il soit facile de vérifier que les détails spécifiés sont pertinents (on rejoint ici le besoin de lisibilité).
-Il faut un moyen de vérifier facilement que le développement réalisé est conforme au détails spécifiés.

L'idéal est que cette vérification de conformitée soit automatique (de type « presse-bouton »).

**Complète**

Une bonne documentation détaillée doit couvrir tous les détails. Il n'y a pas de demi-mesure possible. Dans le cas contraire, comment pourrions-nous identifier les régressions&nbsp;? Une fonctionnalité de l'application qui ne serait pas spécifiée n'existe pas&nbsp;: elle peut être amenée à disparaître à tout moment.

## 4. Pourquoi Word est-il mal adapté pour documenter les détails&nbsp;?
On remarque qu'un document Word, s'il rend une assez bonne lisibilité[^2] et permet de couvrir tous les détails, ne remplit pas correctement les points deux et trois (évolutions et vérifications).

[^2]: Nous avons déjà identifié un certain nombre de limitations à la lisibilité, notamment le fait qu'il ne soit pas facile de naviguer dans le document, ou encore, que la largeur des pages ne soit jamais suffisante pour pouvoir mettre en forme correctement des extraits d'algorithme.

Les évolutions sont difficiles à introduire et à exploiter car facilement noyées dans la masse. Il faut parfois reprendre une grande quantité de texte.

Il est très lourd de réviser ces documents. Il faut se réunir plusieurs fois pour discuter et valider les révisions. C'est un procédé lent et au rendement très faible. Beaucoup de temps est passé dans ces réunions, avec un taux de détection des erreurs bas.

Les informations contenues dans ces documents ne peuvent pas être vérifiées automatiquement car le format de fichier de Word est fermé. Il est très difficile de développer des programmes pour manipuler automatiquement le contenu de tels fichiers.
Ces remarques concernent les traitements de texte en général. Il faut ajouter qu'en plus, Word contient de nombreux bugs et imperfections dans la gestion des références et liens internes qui ne permettent pas une navigation satisfaisante et qui parfois rendent l'impression du document impossible&nbsp;!

## 5. Pourquoi la description formelle est mal adaptée pour documenter les détails&nbsp;?
On peut identifier deux façons de spécifier les détails d'une application logiciel&nbsp;:

-Une description formelle
-Une description par l'exemple (méthode que l'on pourrait qualifier d'empirique)

La description formelle consiste à expliquer de manière logique, en donnant des expressions mathématiques ou des séquences d'opérations à effectuer, alors que la description par l'exemple consiste à donner un ensemble d'états représentant le système avant et après certaines opérations.

Il est étonnant de voir que la culture française des milieux ingénieur semble pratiquement ignorer l'existence de cette deuxième possibilité qui n'est pas considérée comme "noble" alors que les anglo-saxons, qui ont un système scolaire plus pragmatique sont justement plus enclins à la choisir.

Les français croient souvent à tort qu'il n'est pas possible de décrire de manière exhaustive un problème en utilisant cette deuxième méthode. Nous verrons plus loin comment il faut s'y prendre.

J'aime à ajouter que nous écrivons des tests exhaustifs pour notre application (96% des lignes de codes sont couvertes) depuis maintenant plus de deux ans et que cela a donné des résultats époustouflants. De plus, l'écriture de ces tests n'a été ressentie comme un coût par personne (même les développeurs y trouvent leur compte).

Mais revenons à notre question. Pourquoi cette méthode formelle, tant appréciée, n'est-elle pas efficace pour décrire les détails d'une application informatique&nbsp;?
En tant que développeur, un de mes objectifs est de produire un programme qui marche (avec le moins de bugs possible). Comment faire pour y arriver&nbsp;?

Tout d'abord, une petite définition sur le vocabulaire que je vais utiliser pour la fin de ce chapitre.

**spécification**&nbsp;: description "continue" d'une fonctionnalité de l'application. (méthode formelle)

**test de recette**&nbsp;: description "discrète" d'une fonctionnalité de l'application. (la méthode empirique)

A supposer que ma fonctionnalité soit une fonction mathématique. La spécifier reviendrait par exemple à donner la formule mathématique (f(x) = x*x), alors que les tests se contenteraient de donner tous les points caractéristiques (f(../article_0) = 0, f(../article_2) = 4...) et un nom explicite à f, ici, ça pourrait être "carré"&nbsp;;-).

A la question, est-ce que je préfère avoir un document de spécifications ou un document de tests, le développeur répond&nbsp;: les tests me suffisent amplement.

Très souvent, la maîtrise d'ouvrage pense que le développeur fera un meilleur travail avec des spécifications. Elle pense qu'une suite de cas de fonctionnement ne peut pas garantir qu'elle aura bien la fonction qu'elle désire au bout du compte (sans bugs).

La spécification de façon "continue" n'est pour le développeur qu'une duplication, une traduction en français de son code, alors que les tests, qui abordent le problème sous un autre axe, apportent une réelle plus-value à son travail.

Au vu de cette remarque, si l'on désire améliorer le rendement du développement, il est très astucieux de cantonner la spécification "continue" à des discussions orales, et d'écrire les tests.

Et pour répondre à la remarque&nbsp;:

_>Mais je pense que je ne sais en général pas donner tous les points caractéristiques._

En tout cas sur notre projet, c'est faisable, puisque c'est le cas depuis plus de deux ans.

## 6. Les avantages des tests de recette automatiques pour la question de la mise au point.
Une spécification détaillée nécessite une phase de mise au point pour s'assurer qu'elle est complète et qu'elle ne contient pas d'erreur. Cette phase est incontournable, il faut l'affronter de face, en utilisant toutes les ressources disponibles.

Avec les documents formels, la mise au point passe par des réunions de revue, qui sont lentes et coûteuses (peu rentables). Il est obligatoire de figer une version avant le début du développement et de traquer les évolutions par des process compliqués (Par exemple, le suivit des fiches d'erreurs par un logiciel dédié, avec des personnes affecté à temps plein au suivit de ces fiches d'erreurs). Nous avons passé parfois une semaine entière à ne faire que relire des specs pour s'assurer que nos développements étaient en phase.

Avec une spécification sous forme de tests de recette automatiques, cette phase de mise au point pourrait s'allonger autant qu'il lui est nécessaire (mais pas plus), c'est à dire jusqu'à ce que les tests passent, donc jusqu'à ce que le développement soit fini. Nous serions capable de dire de façon nette, à une date donnée&nbsp;: « Nous avons fini la mise au point, nous pouvons livrer le produit ». Et nous convergerions vers cette date de façon certaine.

Cette phase de mise au point serait dynamique et interactive entre les développeurs et les testeurs/spécifieurs. Il ne serait plus nécessaire d'utiliser le mécanisme des fiches d'erreur, puisque le suivi de l'avancement ne serait qu'une simple pression sur un bouton.

Formulé autrement, ce que je viens d'expliquer revient à dire qu'il vaut mieux des tests avec des erreurs que des spécifications avec des erreurs, car les erreurs des tests seront beaucoup plus faciles à trouver, elles seront confrontées au code. Nous gagnons sur le fait que la même erreur a peu de chance de se trouver à la fois dans les tests et dans le code.

Faire "passer les tests", c'est confronter le code qui est une description continue de la fonctionnalité avec la description discrète que sont les tests.
La phase de mise au point des spécifications détaillées n'est plus un problème isolé, elle est mêlée à la phase de mise au point de l'application, les deux actions se compensant l'une l'autre.

## 7. Les tests de recette sont-il des tests unitaires&nbsp;?
(Traduction du site [www.fitnesse.org](http://www.fitnesse.org/FitNesse.AcceptanceTests))

**Tests unitaires&nbsp;: produire un code bon**
Les tests unitaires automatiques (ou « tests programmeurs », comme on le dit de plus en plus), sont des tests en « boite-blanches » qui décrivent et vérifient les comportement de très bas niveaux. En particulier, quand ils travaillent en « test-first », les programmeurs se reposent beaucoup sur ces tests pour s'assurer que leur conception est pertinente, et qu'il n'y a pas de défaut. De tels tests sont construits et largement utilisés par les programmeurs, et peuvent être indépendants des fonctionnalités.

**Tests de recette&nbsp;: produire le bon code**

Avec les tests de recette il est tout d'abord question de produire le bon code&nbsp;: le code avec le plus de valeur métier. Bien que des programmeurs puissent être impliqués dans l'écriture de ce type de tests, ces derniers ne sont pas seulement pour eux. Les tests automatiques de recette sont surtout destinés aux clients, analyseurs métiers, testeurs professionnels, équipes de support, à la direction et à tout autre investisseur ayant besoin de savoir que le projet est bien en train produire un solide retour sur investissement.

**« Running, Tested Features »**

Ron Jeffries a défini la métrique ultime pour les projets logiciel, celle qui est la plus proche du ROI, le RTF ([RunningTestedFeatures](http://www.xprogramming.com/xpmag/jatRtsMetric.htm)). Combien de RTF ont été livrés lors de la dernière itération, lors du dernier mois ou lors de la dernière livraison&nbsp;? **C'est aux tests de recette automatique de le dire**.

Il m'ai arrivé de travailler pour une société qui mesurait à partir des tests unitaires le nombre de tests par features, mais ce que Ron Jeffries propose plutôt, c'est de mesurer le nombre de features produites qui fonctionnent, par unité de temps. De plus, il est important que cette mesure connaisse une croissance constante et linéaire tout au long du projet (depuis les premières semaines jusqu'à la fin). L'introduction de la pratique des tests de recette automatiques pourrait permettre de mettre en place correctement cette métrique.

## 8. Oui, mais tout ceci est-il vraiment réalisable&nbsp;?

Comme je l'ai dit plus haut, quoi qu'il en soit, la spécification d'un logiciel doit contenir deux documents distincts&nbsp;: un pour la vue d'ensemble au format word par exemple et un autre pour la spécification des détails, que je propose de faire sous la forme de tests de recette.

Il existe deux obstacles à la réalisation d'une telle solution.

- La faisabilité technique.
- La faisabilité humaine.

En ce qui concerne la faisabilité technique, nous avons actuellement quelques pistes, avec l'utilisation du framework de test Fitnesse, qui demandent à être validées.

En ce qui concerne la faisabilité humaine, elle concerne les résistances humaines au changement. La hiérarchie a son rôle à jouer ici, en apportant son soutien, sa compréhension et en imposant la métrique RTF dont j'ai parlé plus haut.
