+++
id = 110
title = "Je suis analyste métier, quelle est ma place dans une équipe de développement agile ?"
soustitre = ""
date = "2012-04-15T23:12:21+01:00"
rubrique = 10
descriptif = ""
+++

<div class="chapo"></div>
J'ai rencontré récement une personne qui m'a posé cette question. En fait ce n'est pas la première fois qu'on me la pose. Mais je n'avais jusque là rien trouvé de très intéressant à répondre.

Pourtant cette fois, j'ai l'impression d'avoir quelque chose à dire.

## Définition
Je ne suis pas moi même très au fait de ce qu'est un analyste métier. On parle de business analyste, AMOA ou Assistance à Maitrise d'ouvrage. Certaine personne se voient comme "responsable des spécifications". D'autre comme "tout sauf le code" (sous entendu, spec et test). Je dois dire que cette dernière définition m'exaspère ! Est-ce que les analystes sont des parasites d'un projet de développement informatique, s'intéressant à tout ce qui concerne un projet, sauf sont objet principal ? Est-ce que des développeurs ne peuvent pas prendre en charge aussi l'analyse métier ? En fait, c'est souvent mon cas... Enfin je crois. Je suis développeur et pour faire mon métier correctement, il me semble indispensable de comprendre le besoin du client. Je prends souvent parts au discussion concernant le métier avec mes clients. Je les aides à définir leur besoins. Je leur donne des idées...

Enfin bref. Ce qui m'intéresse dans ce billet c'est le cas des personnes qui veulent se mellé des affaires d'une équipe de développement informatique, mais sans savoir programmer.

## La théorie des contraintes

Spec ---> Dev ---> Test

Voici la suite d'étape d'un développement classique. 
Avec l'ATDD (ou TDR, ou Spécifications automatisables, ou Spécification par l'exemple) on se retrouve plutôt avec le schéma suivant (mais mon discours reste valable aussi pour le schéma ci-dessus): 

Spec/Test ---> Dev

Ou, autrement dit : 

Analyste métier ---> Développeur

La vitesse globale de cette chaine de production est égale à la vitesse du maillon le plus lent. On a donc deux schémas d'activité possibles : 

100% ---> 80%

ou 

80%  ---> 100%

En effet, du fait de la loie physique sur les enchainement et les aléas, il n'est pas possible que les deux posts de production travaillent à 100% en même temps. Par conséquent, vous aurez forcément un des deux postes qui n'est pas occupé à fond. En général on maximise l'usage des développeurs et on calibre l'équipe pour que les analystes puissent toujours fournir le travail a temps pour que le développement se fasse en continue. C'est un choix logique quand on regarde la proportion commune de 1 analyste pour 3 ou 4 développeurs.

Cela à deux conséquences : 
- Les analystes se sentent sous employés et mal à l'aise devant les développeurs qui eux trime sans ménagement.
- Les développeurs se choque de voire que "certains ici ne semble pas se donner autant de mal que les autres" !

## Les réactions maladroites du management

La situation la pire c'est quand le management prend conscience de la chose et décide "d'y remédier" !

On trouve alors une occupation à 20% pour l'analyse sur une autre activité, sur un autre projet !!

Cette réaction est une catastrophe ! Au lieux d'améliorer la situation, elle va aggraver le problème.

En effet, l'analyste vas se retrouver occuper à 100% de son temps sur le projet, et c'est donc le développement qui va se retrouver en attente. On se retrouve sur le schéma.

100% ---> 80%

Pour éviter ça, le développement vas devoir prendre en charge une partie de l'analyse ce qui va donc alléger la charge de l'analyste métier et on retombe dans la situation d'un analyste qui n'est pas occupé à plein temps.

On finira par trouver que l'analyste ne sert à rien.

## La solution Agile : une équipe cross fonctionnelle auto-organisée

Dans une équipe agile on ne se pose pas toutes ces questions. Nous sommes tous dans le même bateau, avec un objectif commun : satisfaire le client.

D'ailleurs, les "conséquences" que j'ai décrites ci-dessus, sont un bon symptôme d'une équipe agile qui ne fonctionne pas vraiment. Dans une équipe agile, il n'y a pas "eux" et "nous".

En terme de process, personnes n'attends après personne, si nous sommes en manque de spec, on travail dessus, si c'est le dev, ben on fait du dev...
Tous le monde peut travailler sur toutes les activités. Bien sur, certaines personnes on des spécialités, mais la frontière devient floue.
La plus part du temps, l'analyste métier de l'équipe fera avancer le travail d'analyse, mais pendant ses periodes de mou, il pourra travailler sur d'autres taches, et même, et c'est l'idéal à mon sens, participer à auteur de ses compétences à l'activité de développement, en binôme avec un développeur par exemple.

Quand je raconte ça, certaines personnes me dise que le monde de l'entreprise n'est pas un monde de bisounours ! C'est vrai, mais cela n'empêche pas que c'est bien comme ça que ça se passe dans les projets auxquelles je participe. L'idéal agile n'est pas hors de portée !