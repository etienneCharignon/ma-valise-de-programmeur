+++
id = 95
title = "Un logiciel se construit par le toit"
soustitre = ""
date = "2009-12-20T23:19:21+01:00"
rubrique = 10
description = ""
comments = true
+++

<div class="chapo"></div>
-- "Allons, un peu de bon sens ! Pour fabriquer une maison, il faut commencer par les fondations, puis faire les murs et ensuite seulement vous pouvez poser le toit. On ne peut pas commencer par le toit !"

En effet, la force d'attraction gravitationnelle nous oblige à commencer par les fondations. Et il faut qu'elles soient bonnes puisque le reste de la maison va ensuite tenir en équilibre dessus.

Le problème, c'est que quand on applique cette métaphore au développement logiciel, il n'y a pas de force d'attraction gravitationnelle !

Un grand nombre de logiciels sont construits en suivant ce qu'on appelle un modèle en couche. C'est le cas en particulier de la majorité des applications web. Pour faire simple, dans un modèle à trois couches, vous avez une couche d'accès à la base de données, aussi appelée couche basse, une couche de service métier -- couche intermédiaire --, puis une couche de présentation -- aussi dite couche haute.

Et voilà, c'est la catastrophe, puisque la couche d'accès à la base de donnée est dite basse, on se sent obligé de commencer par elle !!!

Non, dans ce type d'architecture en couche, il faut commencer par l'interface utilisateur et donc la couche haute. Il faut commencer par le toit.

Commencer par l'interface utilisateur, c'est focaliser sur le service qui doit être rendu. On écrit le code qui répond au besoin à ce niveau là, puis on descend ensuite sur la couche d'en dessous, où l'on ne fait aussi que ce qui est necessaire, pour arriver enfin sur la couche basse avec une définition claire et très simple de ce qu'il y à faire.

Une approche par le bas conduit inévitablement à produire un effort inutile, ce que l'on appelle de la sur-conception. Vous allez être obligé d'anticiper au niveau de la couche basse des besoins qui pourraient vous être demandés par la couche de présentation.

Evidement, je n'ai pas parlé de distribuer le travail de chaque couche à des équipes differentes mais c'est le même problème... En pire.