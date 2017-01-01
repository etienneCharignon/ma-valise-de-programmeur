+++
id = 117
title = "Vers une gestion de projet distribuée ?"
soustitre = ""
date = "2013-08-25T23:00:53+01:00"
catégories = [ "Essais" ]
description = ""
comments = true
+++

<div class="chapo"></div>

Quel est le mode d'organisation le plus efficace ? Centralisation ou distribution ? Face a la complexité du monde dans lequel nous vivons deux comportements sont possibles, quand il s'agit de choisir un mode d'organisation. Que ce soit pour classer des documents, concevoir une architecture logicielle, organiser une grande quantité de données, organiser un travail collectif, organiser une entreprise, ou que sais-je, on peut choisir de mettre en place un point de référence centrale ou pas.

Supposez que vous deviez organiser la gestion documentaire d'une entreprise. Vous pouvez tout naturellement décider de mettre en place dans votre système d'information un serveur central sur lequel tous les documents devront être déposés et où ils pourront facilement être retrouvés. Ainsi vous êtes sûr qu'il y a bien une version de référence permettant de s'y retrouver parmi les innombrables versions qui ne manqueront pas de se multiplier sur les ordinateurs des différents collaborateurs. 
Une autre solution consiste à garder les documents sur les ordinateurs des collaborateurs, de manière distribuée, et à  mettre en place un système de synchronisation de répertoires entre les différentes machines. Aujourd'hui de nombreuses solutions techniques existent pour faire cela comme par exemple le très connu et inventeur du concept DropBox, mais aussi plus récemment Google Drive, Skydrive,... ou encore plus distribué : BtSync.

A part le dernier, tous ces outils sont basés sur "le Cloud" et justement, c'est intéressant, est-ce que le cloud n'est pas une forme moderne de centralisation qui contredirait ma démonstration que la tendance actuelle est à la distribution ?
Pourquoi les entreprises sont-elles si réticentes à utiliser les services de Google documents ? C'est qu'elles ont l'impression de centraliser leur documents "chez google" !

Mais ne nous y trompons pas. Le Cloud n'existerait pas sans la distribution. C'est l'émergence des bases de données distribuées (le fameux "noSql") qui a rendu possible le Cloud et qui le distingue d'une simple architecture client-serveur.

Le Cloud ne permet pas de savoir exactement où se trouve l'information. Elle est répartie (distribuée) en différents points du réseau, elle est recopiée, modifiée, synchronisée… Et pourtant ça fonctionne et les utilisateurs ont une perception très cohérente et fiable.

Un autre monde, plus proche des développeurs, a connu ces dernières années sa révolution vers la distribution. Il s'agit de la gestion de version, les VCS (version control system en anglais). N'y a-t-il pas un contexte où la centralisation semblait régner en maître incontesté ? C'est déjà assez compliqué d'avoir à gérer la multitude des versions des fichiers sources de nos programmes sans qu'on puisse se permettre de tolérer de voir toutes ses versions se répartir en plus sur une multitude de machines. Non, la seule solution est d'avoir un dépôt de référence central. Certains d'entre vous utilisent-ils encore clear-case ? l'outil d'IBM initialement développé par Rational. Avec clear case, la centralisation est poussée à son paroxysme, l'outil ne laissant le développeur ne garder en local qu'uniquement les modifications qu'il est en train d'apporter. Le mode de fonctionnement par défaut est le mode par verrou pessimiste (c'est à dire que l'information qu'une personne est en train de créer une nouvelle version d'un fichier est aussi centralisée). Aujourd'hui, Git (un "DVCS" pour distributed version control system) est à la mode et le passage sur ce nouveau système, s'il n'est pas déjà fait, fait partir des plans à court ou moyen terme. Si ce n'est pas Git, c'est un des ses équivalent. 
Le système, plutôt que de chercher la centralisation, offre une grande facilité pour créer de multiples versions locales et une encore plus grande facilité pour s'échanger ses versions. Le Cloud qui ne se laisse pas oublier, nous a apporté  GitHub.com, ce réseau social d'échange de version de code source communautaire et social, une révolution pour le monde du logiciel libre. Vous l'aurez compris GitHub est basé sur Git.

Bref, la technologie s'est emparé des principes de distribution. D'ailleurs, je ne l'ai pas mentionné, mais on constate aussi cette évolution au niveau de la technologie des micro-processeurs. Aujourd'hui, ce n'est plus la course à un coeur central le plus puissant possible, comme on a pu le voir dans les années 90, mais la multiplication des coeurs 4, 8, 16 coeurs, et encore bien plus à venir… sur de simples machines de bureau ou encore plus incroyable, sur les téléphones. Je me souviens de mon impression à l'arrivée des premières machines à multiple coeurs. Je me demandais ce qu'on allait bien pouvoir faire du deuxième coeur pendant que le premier "ferait le travail" ! 

Tiens !… Mais ça me fait penser aux critiques communes à propos du travail de programmation en binôme…

En fait, pour être tout à fait honnête nous sommes là où je voulais en venir. Cette "folie" des systèmes distribués à bien évidement atteint aussi l'organisation des projets. L'évolution actuelle vers l'agilité est-elle autre chose ? L'auto-organisation des équipes Scrum c'est ça. Pour monter à l'échelle des équipes de programmeurs, il faut éliminer le centre de direction, le fameux "Chef de projet" pour distribuer cette responsabilité et ainsi gagner en performance. Bien évidement, ça ne se fait pas sans difficulté. Il y a toujours un coût de synchronisation à payer, comme pour les coeurs d'un micro-processeur. Si on s'y prend mal, ce coût peut même devenir fatal au projet.

Mais les bienfaits de la distribution ne s'arrêtent pas à la frontière des projets. Des entreprises se lancent aussi dans l'aventure. Il y a l'exemple de la société de jeux vidéo Valve [dont parle mon collègue Jean-Claude sur son blog](http://www.qualitystreet.fr/2013/07/02/culture-dentreprise-et-management-agile-lintegration-chez-zappos-valve/) qui est entièrement auto-organisé depuis 1996 ! J'ai bon espoir que cette pratique se répande encore bien plus avec la démocratisation de l'agilité.

Je voudrais aussi mentionner cette initiative française de l'entreprise /ut7 qui nous a fait un retour de leur expérience aux [Scrum days en avril dernier](http://agenda2013.scrumday.fr/event/85), expérience qui dure déjà depuis 5 ans.