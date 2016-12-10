+++
id = 36
title = "Programmation délibérée"
soustitre = ""
date = "2005-11-11T17:11:00+01:00"
rubrique = 10
descriptif = "La programmation défensive est-elle une bonne façon de travailler ? Non, et à cette pratique s'oppose celle de la programmation délibérée."
+++

<h2></h2>
Avez-vous déjà vu un code où {{toutes}} les fonctions commenceraient par tester tous les paramètres reçus et qui retourneraient null si l'un des paramètres est null ? Ce type de code existe sûrement (Il est étonnant de constater que tout ce que l'on peut imaginer de plus horrible existe déjà), mais je ne l'ai jamais rencontré. J'ai par contre souvent lu du code où cette intention était présente. Cette pratique s'appelle de la programmation défensive.

J'avoue avoir moi-même tenté de programmer de cette façon à mes débuts. Pourtant à bien y réfléchir, cette pratique n'apporte pas beaucoup de protection et ajoute par contre beaucoup de travail idiot.

Le principe de cette pratique est de vouloir défendre notre code contre les utilisations erronées que pourrait faire d'autres développeurs de notre fonction. On trouve d'autres exemples de programmation défensive. Par exemple, tester systématiquement qu'un pointeur n'est pas null avant d'appeler delete, ou mettre systématiquement le pointeur à null après avoir appelé delete. 

Comme toujours, la défense s'oppose à la collaboration. On espère ainsi qu'en cas de problème, le plantage aura lieu dans la fonction du voisin plutôt que dans la notre !

Par l'intermédiaire de ce type de pratique, on espère aussi réduire l'effort de programmation. "Je fais ceci ou cela systématiquement pour ne plus avoir à y penser".
On espère ainsi que notre programme va «tomber en marche». On pourra vérifier que notre programme fonctionne, mais on ne sera pas capable de dire pourquoi. Potentiellement, il fonctionnera bien qu'on ai appelé une fonction de manière incorrecte mais qui justement ne plantera pas grâce aux mécanismes de défense. On parle ici de programmation par coïncidence[[Voir cet extrait de "[pragmaticProgrammer](http://www.pragmaticprogrammer.com/ppbook/extracts/coincidence.html)"]]. A cette pratique s'oppose la programmation délibérée.

La programmation délibérée renvoie à l'utilisateur d'une fonction la responsabilité de passer des paramètres valides. Cette pratique déclenche un cercle vertueux d'amélioration du code. Les variables qui transitent entre les fonctions sont toujours correctes (si ce n'est pas le cas, l'application se plante et un test unitaire nous prévient). Le code est plus léger, puisque les fonctions ne commencent plus par une succession de contrôles inutiles. L'application est plus performante, puisqu'on ne passe plus notre temps à vérifier que le même paramètre est valide de fonction en fonction. La vérification est faite une seule fois, le plus tôt possible, en général, au moment où le paramètre est créé.

Cela donne aussi plus de sens aux fonctions. Quand le programmeur code, il se concentre sur le comportement à réaliser, sur le rôle de sa fonction : que doit répondre la fonction si elle reçoit telle ou telle valeur ? Les fonctions n'ont plus le double rôle de réaliser leur objectif {et} de vérifier la validité des paramètres. Au besoin, le programmeur pourra écrire une fonction dont le rôle est de vérifier la validité de tel ou tel paramètres (par exemple, est-ce que tel parametre est une adresse IP valide).