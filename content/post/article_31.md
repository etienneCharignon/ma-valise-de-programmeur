+++
id = 31
title = "Client sur site"
soustitre = ""
date = "2005-09-05T14:35:04+01:00"
catégories = [ "Essais" ]
description = "\"Une seule équipe pour un seul produit\". Voici la réalité qui se cache derrière la pratique de client sur site d'XP."
comments = true
+++

<div class="chapo">Suite à la lecture du livre "Software Craftsmanship", je me suis fait quelques réflexions sur la pratique de "client sur site" proposé par XP.</div>

Le cycle en V connaît un défaut majeur : l'effet "téléphone arabe". L'idée de diviser le travail de développement logiciel par spécialisation spec/dev/test en donnant la responsabilité de chaque spécialité à des "chefs" distincts produit un effet de téléphone arabe.

En effet la première équipe, chargée des spécification, explore l'"idée" du logiciel et imagine une solution permettant de répondre à tous les besoins du client.

Ensuite, cette "idée" est passée à l'équipe de dev qui va la retravailler pour qu'elle prenne en compte les contraintes techniques d'implémentation. Malheureusement, modifier une "idée", c'est tué cette idée. En effet, le risque de perdre le travail de la première équipe est très fort. L'idée risque de ne plus correspondre aux besoins du client, surtout si on laisse le développement courir sur plusieurs mois.

Enfin, l'idée, maintenant implémenté dans du code logiciel, est transmise à l'équipe de test qui a pour rôle de trouver toutes les modifications involontaires de l'idée initiale. Ce travail est d'autant plus difficile que ce n'est pas cette équipe qui à produit cette idée et qu'elle n'a souvent pas connaissance des besoins client. L'objectif de cette équipe n'est pas orienté client, mais fournisseur. Il s'agit de vérifier que ce qui sera livré au client sera "irréprochable", c'est à dire que le client ne pourra pas s'en plaindre. En d'autre terme, peu importe les besoins client réel, ce qui compte c'est qu'il ne puisse pas critiquer le résultat. A ce titre, cette équipe aussi modifiera l'idée initiale.

Les différents point de vue des différentes équipe ont leur importance, il en résulte que la moindre décision réclame de réunir tout le monde. Les discussions qui s'en suivent se perdent en conflit d'intérêt au détriment du client. La situation n'est pas propice au bon compromis.

Dans une équipe XP, tout le travail est effectué par une seule équipe. Que ce soit la définition des besoins (par le client. Celui-ci étant intégré dans l'équipe suivant le principe de "client sur site"), la réalisation ou les tests. L'équipe doit trouver un consensus pour avancer. Le coach et le manager sont là pour arrondir les angles et faciliter les décisions.