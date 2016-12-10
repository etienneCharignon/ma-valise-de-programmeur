+++
id = 100
title = "Intégration Continue"
soustitre = ""
date = "2010-04-06T16:19:11+01:00"
rubrique = 10
descriptif = "Mais pourquoi fait-on de l'intégration continue ? Parce que c'est plus efficace et parce que c'est la seule façon de s'en sortir."
+++

<h2></h2>
En voyant ce titre, je suis sûr que certains vont s'attendre à ce que j'explique lequel d'Hudson ou d'un autre outil est le meilleur ! je vous le dis tout de suite, ces personnes peuvent passer à autre chose et augmenter le taux de rebond dans mes statistiques google analytics.

Ce que je voudrais expliquer ici, c'est pourquoi il faut faire de l'intégration continue. A noter que l'intégration continue dont je parle ici n'est pas simplement une question informatique. C'est une notion qui s'applique à tout projet complexe où plusieurs sous-parties sont réalisés séparément puis assemblées pour former un tout.
La réalisation d'un logiciel rentre dans cette catégorie, mais c'est aussi le cas d'une pièce de théâtre par exemple.

-----
{{{ {{La phase d'intégration n'est pas sous controle}} }}}

En effet, première constatation, nous n'avons aucun contrôle direct sur la phase d'intégration. En effet, une fois que celle-ci est démarrée, il faut aller jusqu'au bout avant d'avoir quelque chose. Il n'est pas possible de s'arrêter à mi-chemin et espérer avoir un tout cohérent.

Voici le schéma que propose l'intégration continue :
 
<img34|center>

L'argument que l'on entend parfois est : "on n'a pas le temps". L'idée est simple, pour optimiser le travail d'intégration, on propose alors de le reporter à la fin. En faisant une phase spécialisée, on peut optimiser cette phase.

<img36|center>

Mais justement, c'est ce que je viens de dire, c'est une illusion. Cette phase n'est pas sous contrôle. Une fois le travail d'intégration commencé, il faudra aller jusqu'au bout. Ce qui donne en pratique le schéma suivant : 

<img35|center>

La seule façon de réduire la durée de la phase d'intégration est de réduire la quantité de travail à intégrer et donc de réduire la taille de la phase de réalisation. Mais comment savoir à l'avance quelle est la bonne longueur de cette phase de réalisation ? Je vous le donne Émile : il faut faire de l'intégration continue (voir premier schéma).
Plus la fréquence d'intégration est élevée moins la quantité de développement non intégrée sera faible le jour de l'échéance.

<img37|center>

-----
{{{ {{Les diagrammes d'effet[[voir le volume 1 de la série d'ouvrage de Gerald Weinberg: [Quality Software Management:Systems Thinking](../article_51)]]}} }}}

Un peu de théorie de modélisation. Les diagrammes d'effet permettent de représenter dans un système, la dynamique de variation d'une grandeur par rapport à une autre.

Soit par exemple un système à deux variable, X et Y. 

On représente X et Y dans des nuages si ce sont des grandeurs non mesurables, ou dans un ovale si elles sont mesurables: 
<img31|center>

Si on veut représenter que Y augmente quand X augmente, on le fait tout simple avec une flèche:
<img28|center>

Si par contre Y diminue quand X augmente, on ajoute un rond sur la flèche:
<img29|center>

-----
{{{ {{Un cercle vicieux : l'intégration}} }}}

<img30|center>

Les diagrammes d'effet sont très pratiques pour modéliser les cercles vicieux. Ils permettent aussi de modéliser la solution.

Il existe deux types de relation entre X et Y. 
- Des relations dictées par la nature. Par exemple, dans le schéma ci-dessus. Quand le temps entre deux intégrations augmente, la complexité du travail d'intégration augmente de manière inexorable. Le monde est comme ça. Personne n'y peut rien. C'est une loi de la nature. 
- Des relations non dictées par la nature. Ces dernières sont représentés par un carré. Il est possible de choisir si Y va augmenter ou diminuer quand on va augmenter X. C'est à nous de prendre la décision.
<img32|center>

Et voilà ce que devient le schéma de notre système:
<img33|center>

Si vous décidez d'espacer encore plus les intégrations, vous alimentez le cercle vicieux. Si vous décidez de les rapprocher... vous cassez le cercle infernal. 

La conclusion : Si vous avez des difficultés à faire quelque chose, faite le plus souvent ! Faites de l'intégration continue. 

J'ai rencontré des entreprises qui mettent plus de 6 mois entre la livraison des composants logiciel et la mise en production. Je ne dis pas que prendre la décision de rapprocher les intégrations est facile. Mais c'est la seule issue. C'est le problème avec les cercles vicieux. C'est très difficile d'en sortir quand on est très engagé dedans. C'est beaucoup plus facile au début. Il vaut mieux agir au début et par petit changement que trop tard et par grands à-coups.