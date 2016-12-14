+++
id = 52
title = "Modélisation Agile"
soustitre = ""
date = "2011-03-15T22:20:03+01:00"
rubrique = 11
description = "Alors que les Valtech Days 2011 se dérouleront dans deux jours, je viens de retrouver un billet qui m'avait été inspiré par la version 2007 des Valtech Days et que je n'avais jamais publié. J'y présente les pratiques de l'extreme programming qui contribuent au travail de la modélisation."
comments = true
+++

<div class="chapo">En fouillant la page administration de mon blog je viens de tomber sur un brouillon d'article écrit il y a déjà plus de 3 ans. Je me souviens avoir beaucoup hésité à publier cet article, n'étant pas complètement satisfait du contenu. En fin de compte j'ai trouvé ça intéressant. J'espère que vous aurez autant de plaisir que moi à le lire.</div>
Lors des conférences Valtech Days 2007[[Pour rappel, la version 2011 aura lieux dans 2 jours. Inscription gratuite : http://www.valtechdays.fr]], le sujet de la place de la modélisation dans les processus Agiles est revenu plusieurs fois. Je me permets de vous présenter ici quelques principes et pratiques de l'eXtreme Programming à ce sujet.

## You Ain't Gonna Need It
Un des principes XP à ce sujet, connu sous l'acronyme YAGNI (You Ain't Gonna Need It) n'est qu'une façon d'insister sur la pratique de Conception Simple.

Ici, on recherche la simplicité maximum (extrême). Pourquoi faire payer au client des développements inutiles. A chaque fin d'itération, le client reçoit l'application qui aura coûté le moins cher pour les scénarios qu'il a demandé. Aucune anticipation n'est effectuée (non plus au niveau abstraction, bien que malgré tout l'abstraction nécessaire est présente dans la solution... J'y reviens).

- " Mais introduire certaines briques de base comme par exemple un framework de persistance, c'est une question de bon sens".

En fait, non, ce n'est pas le bon sens qui guide ce choix ici, mais une réflexion pragmatique par rapport au résultat du jeux de la planification.
Je m'explique :
Au cours du Planning Game, le client et l'équipe ont établi une liste de scénarios classés en fonction de leur valeur (priorité client) et de leur complexité (priorité développeur). Faire de l'anticipation sur des scénarios à venir, c'est ignorer le résultat du travail du Planning Game. C'est renoncer à faire de l'extreme programming, c'est échouer à faire de l'Agilité. 

Ensuite, le bon sens auquel on fait référence ici trouve ses racines dans le modèle mental des intervenants. Les Agilistes savent que l'ensemble des techniques qu'ils appliquent pour faire du développement logiciel leur permet de {{ne pas}} avoir un coût du changement exponentiel par rapport au temps. Il ne sera pas vraiment beaucoup plus cher d'introduire Hibernate plus tard, quand cela deviendra nécessaire... 

"A bon, mais c'est un peu difficile à croire..."

"Tu te contredis, tu dis que tu ne fais pas d'anticipation, mais que ce ne sera pas plus cher de l'introduire plus tard..."

Je persiste, le bon sens de l'Agiliste le guidera à ne pas faire de YAGNI. 
Mais avant de vous révéler mon secret, je voudrais faire une dernière remarque sur le "coup" du YAGNI.

Cette dernière remarque fait partie de tous les bons manuels d'eXtreme Programming, mais pourtant peine à pénétrer les esprits. L'introduction d'une anticipation conceptuelle dans le design de l'application a un coût d'entretien non négligeable. 
- il faudra écrire les tests unitaires correspondant à ce comportement
- ce comportement ne sera pas clairement défini (il s'agit seulement d'un sentiment du développeur, d'un feeling, mais il n'a pas une vision claire des exigences fonctionnelles puisque ça n'a pas été discuté avec le client)
- ce comportement se retrouvera très probablement en travers du chemin de certains refactorings. Il complexifiera inutilement et surtout au mauvais moment le modèle en train d'émerger.
L'idée ici est une sorte de "just in time feature". Comme on pourrait le lire dans un manuel Toyota : Pas de stock inutile. Le flux d'exigence est tiré, c'est comme ça que le processus de développement trouve son équilibre optimum. On commence par choisir une exigence, puis on développe un test qui va mettre en évidence l'absence de fonctionnement puis on développe le comportement.

## Le Secret
Le secret de la conception simple de l'extreme programming repose sur trois principes :

- une conception juste nécessaire pour les scénarios choisis en début d'itération,
- l'élimination de la duplication : Once and only Once (ou aussi DRY : Don't Repeate Yourself)
- le code le plus expressif possible.


Finalement, la seule chose qu'on s'autorise à prévoir, c'est la capacité à faire des changements. 

Dans l'exemple précédent de la problématique de persistance, on pourrait très bien imaginer que ce ne soit pas le sujet principal des premières itérations et qu'à ce titre, on décide de l'effectuer par un mécanisme simple de sérialisation (en Java c'est relativement trivial à faire). A l'écriture des premières classes de l'application, ce mécanisme va se retrouver en dur dans une classe, puis il va apparaitre dans une autre, et par souci d'élimination de la redondance, les développeurs vont introduire un schéma de conception leur permettant d'isoler la problématique de persistance à un seul endroit.

Plus tard, l'introduction de Hibernate sera possible à un coût raisonnable, du fait de la simplicité de la conception qui a émergé.

Un dernier point dont je n'ai pas encore parlé et que pourtant le bon sens aurait du me faire citer en premier. Respecter le principe YAGNI est particulièrement efficace quand l'anticipation pressentie se révèle finalement inutile.

Dans un projet récent, et bien que cela ai été pressenti par un architecte en phase amont du projet (avant que j'arrive, quoi), nous n'avons pas choisi d'introduire de base de données en début de projet, mais nous avons utilisé la sérialisation justement. Notre système était tout simplement primaire. Nous ré-écrivions toutes les données à chaque fois qu'on devait changer une valeur.
Et bien, cette solution {{est resté jusqu'au bout}}. Nous n'avons jamais eu besoin de plus. Et nous pouvons nous féliciter de ne pas avoir perdu énormément de temps et d'effort à implémenter un module de gestion de base de données. Nous avons fini le projet juste à l'heure. Il est absolument évident que nous aurions été en retard sinon.

## Métaphore

En effet, la conception simple a l'air de faire l'affaire. Mais ne manque-t-on pas d'un outil pour traiter de la question de la "big picture" ? Comment s'assurer que toutes ces petites actions de conception élémentaires puissent donner un ensemble cohérent. Comment faire pour guider la conception sur le long terme. 

En effet, lorsqu'on fait de la conception à longueur de temps, on a tendance à oublier ce qui a été fait jusque là et le risque de prendre des décisions de conception qui viendraient rompre l'intégrité conceptuelle de l'application est important. 

C'est ici qu'intervient la pratique de la métaphore.

la métaphore [[Definition issue du wiki [XP-France->http://xp-france.net/cgi-bin/wiki.pl?TreizePratiques] ]] : Une analogie utilisée comme modèle conceptuel du système en cours de développement

La métaphore à plusieurs objectifs :
- effectuer un travail de modélisation du domaine métier à travers la recherche de cette métaphore,
- donner une {{vision}} de l'architecture tout en restant suffisamment vague au sujet des détails,
- fournir un support de communication sympathique de cette vision, qui soit accessible à tous les membres de l'équipe, clients, développeurs, testeurs...