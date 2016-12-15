+++
id = 102
title = "RT @Galilée la terre tourne autour du soleil"
soustitre = ""
date = "2010-09-14T21:50:45+01:00"
rubrique = 10
description = "Ceci est une participation à une conversation récente de la liste de discussion xp-france sur la place de l'architecture orientée composant dans l'agilité."
comments = true
image = "/images/arton102.undefined"
+++

<div class="chapo"></div>
Bonjour la liste[[http://fr.groups.yahoo.com/group/xp-france/message/8909]],

"...{Le découpage en plusieurs équipes me semble avant tout une affaire de
contexte}..."[[Olivier, si tu lis ce message, pardonne moi d'avoir repris ta phrase pour illustrer mon propos. Il ne s'agit pas d'un message personnel. Cette idée de contexte a fait nettement consensus sur la liste]]

Si Galilée avait posté sur cette liste que la terre tourne autour du soleil, nous lui aurions sans doute répondu : "ça dépend du contexte mon cher Galilée" (enfin on aurait parlé italien évidement).

Et ce n'est pas faux, tout est relatif et dans un système composé uniquement d'une terre et d'un soleil, bien malin celui qui pourra dire qui tourne autour de qui.

Mais pourtant, la science nous apporte quelques certitudes. Prenons par exemple Newton, avant d'être un parent éloigné de l'iPhone, c'était un scientifique qui nous a donné la loi de la gravitation universelle.

Cette loi est universelle ?

En effet, aussi surprenant que cela puisse paraître, les milliard d'étoiles qui composent l'univers obéissent à cette simple loi qui peut être expliquée sans difficulté à un lycéen.

Il existe bien dans la nature des lois de ce type. Dans notre métier d'informaticien il est une loi qui nous impacte beaucoup, c'est la loi des enchaînements et des aléas qui sous tend la théorie des contraintes.

## Cette théorie dit que la vitesse d'une chaine de production est égale à la vitesse du maillon le plus faible.

Si on s'autorise la caricature, notre chaine est la suivante:

Spec=>Dev=>Test

En pratique le maillon le plus lent, c'est le dev, c'est pour cette raison qu'en général il y a plus de développeurs que de gens pour spécifier et tester. 

On remarque aussi un goulet d'étranglement à la taille du stock qui se trouve devant.

Dans le cas de l'informatique, ce tas se matérialise par la taille des cahiers de charges ou des documents de spécification.

Pour améliorer la vitesse de la chaine, il y a plusieurs point d'actions[[Merci à Pascal Van Cauwenberghe pour sa présentation sur ce sujet à la conférence XP-Days 2007 dont j'ai pratiquement recopié les mots.]]:

1 - identifier le goulet d'étranglement

les points que j'ai mentionnés ci-dessus :
 - ressources stressées, surmenées
 - travail en cours qui s'empile devant le goulet (stock)
 - ressources derrière le goulet qui attendent du travail.

2 - exploiter le goulet :

 - enlever toutes les tâches non productives
 - alimenter le goulet (pas de rupture en terme d'alimentation du travail à faire)
 - ne pas surcharger le goulet (il doit "tirer" le travail à faire)
 - "prioriser" soigneusement le travail du goulet.

3 - Subordonner le reste du système au goulet

 - soulager le goulet de ce qui peut être fait sans lui
 - travailler au rythme du goulet (cela pourrait entraîner que les autres postes travaillent plus lentement, mais le but n'est pas de garder les gens occupés, le but est d'améliorer la production du système entier).
 - assurer que la qualité du travail en cours donné au goulet est de haute qualité
 - traiter la production du goulet avec prudence pour ne pas gâcher le travail du goulet.

4 - Elevez le goulet (arrive après 3)

 - investir des ressources et du temps pour améliorer la performance du goulet : training, relaxation, bonne ambiance, meilleurs outils, plus de gens (ce qui ralentit au début), ...

5 - Et recommencer en 1 : ne pas laisser l'inertie devenir un goulet

 - Il y a toujours un goulet d'étranglement ! on peut toujours faire mieux. retourner toujours aux étapes 0 et 1 : est-ce que notre but est toujours valable ? Est-ce que le goulet s'est déplacé ? "Quand on élimine le problème 1, le problème 2 reçoit une promotion"

6 - Changer le système

Parfois, il n'y a plus moyen d'améliorer le système. Alors il faut changer la structure du système. C'est beaucoup plus difficile. On rencontre des objections :
 - Des règles cachées : "mais on a toujours fait les choses comme ça !"
 - "Ne touchez pas à ça ! vous allez tout casser !" - Pourquoi ?, Est-ce qu'on peut faire un petit essai ?...
 - "Vous ne comprenez pas!" - Pouvez-vous expliquer ?

## L'influence de la loi des enchaînements et des aléas sur l'architecture orientée composant

La loi des enchaînements et des aléas fait que dans une chaine ou des choses sont produites en série, les aléas individuels ont un gros impact sur le rythme de production de la chaine complète, jusqu'à la rendre complètement chaotique[[Voir l'excelent roman "[Le But](../article_77)" de Eliyahu M. Goldratt sur le sujet]].

C'est cette loi qui rend les architectures orientées composant si difficile à gérer.

Ce type d'architecture suppose qu'on peut faire travailler individuellement des équipes sur différents composants qui seront ensuite assemblés pour former un tout cohérent. Dans ce type d'architecture, nos esprits rationnels s'autorisent toutes les combinaisons à priori. On espère qu'on pourra ajuster tardivement le produit total en assemblant les composants de différentes manières (par exemple, jouer sur les versions, pour assembler A en version v1 avec B en version v2)

Certains composants sont dépendants d'autres composants et si c'est vraiment mal fait, on peut même avoir des cycles !

On rencontre particulièrement ce type d'architecture dans les entreprises qui n'ont pas la culture de l'erreur. C'est à dire des cultures où on suppose à priori que tout le monde est parfait. Ce type de culture ignore les aléas qui sinon rendraient évident l'impossibilité de faire tourner une telle machine.

## La contre-proposition de l'agilité : les "feature teams"

Dans cette configuration, chaque équipe est en charge du développement d'une ou plusieurs exigences fonctionnelles ("features en anglais"). La distinction avec les composants ci-dessus est que ces exigences fonctionnelles sont définies par un client et non un technicien.

Les équipes intègrent **en continu** leur travail dans la solution globale. Chaque équipe peut ainsi gérer indépendamment son rythme de livraison.

Chaque équipe rend compte de son avancement c'est à dire surtout de son rythme auprès du client. Bien sûr les équipes ont des interactions, mais chaque équipe est responsable de ses features vis-à-vis de la personne qui tire de la valeur ajoutée de leurs réalisations.

La coordination opérationnelle des équipes peut être prise en charge par un projet de plus haut niveau appelé meta-scrum ou scrum-de-scrum dans la méthode scrum.

L'exemple type d'une architecture orientée composants est une organisation qui constituerait des équipes par couche technique: une équipe IHM, une équipe "service métier" et une équipe "accès base de donnée".

<doc38|center>

Le même exemple organisé en feature teams:
<doc39|center>