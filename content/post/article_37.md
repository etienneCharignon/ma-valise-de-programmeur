+++
id = 37
title = "Boucle \"for\" ou Boucle \"while\", laquelle est la plus rapide ?"
soustitre = ""
date = "2005-11-04T23:00:39+01:00"
categories = [ "Essais" ]
description = "Pas de polémique... Ex aequo !... S'en suis quelques remarques sur la lisibilité du code et l'utilisation des boucles \"for\"."
comments = true
+++

<div class="chapo"></div>

Aujourd'hui, on m'a affirmé que les boucles While étaient plus rapides que les boucles For&nbsp;! Cette affirmation m'a paru pour le moins étrange, et j'ai décidé de vérifier rapidement ce qu'il en était.

J'ai fait ma petite expérience en Java.

## Expérience
Voici le code source de l'expérience:
```
public class LoopSpeedTest extends TestCase {
    private static final int VERY_BIG_NUMBER = 10000000;
    private static final int NOMBRE_ITERATION_EXPERIENCE = 1000;

    public void testForLoopSpeed() throws Exception {
        mesureTempsExperience("for", new Experience() {
            public void run() {
                for (int i = 0; i < VERY_BIG_NUMBER; i++) {
                }
            }
        });
    }

    public void testWhileLoopSpeed() throws Exception {
        mesureTempsExperience("while", new Experience() {
            public void run() {
                int i = 0;
                while (i < VERY_BIG_NUMBER) {
                    i++;
                }
            }
        });
    }

    private void mesureTempsExperience(String nom, Experience experience) {
        List<Integer> resultats = new ArrayList<Integer>(NOMBRE_ITERATION_EXPERIENCE);
        int somme = 0;
        for (int indexExperience = 0; indexExperience < NOMBRE_ITERATION_EXPERIENCE; indexExperience++) {
            Chronometer.start();
            experience.run();
            Chronometer.stop();

            int temps = Chronometer.time();
            resultats.add(temps);
            somme += temps;
        }
        System.out.println("résultats pour " + nom + "&nbsp;: " + resultats);
        System.out.println("Moyenne&nbsp;: " + somme / NOMBRE_ITERATION_EXPERIENCE);
    }
}
```

Et le résultat&nbsp;:

résultats pour for&nbsp;: **Moyenne&nbsp;: 16**[^1]

[^1]: [31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 0, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 0, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 0, 15, 16, 16, 31, 0, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 31, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 32, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 32, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 32, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 32, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 32, 15]


résultats pour while&nbsp;: **Moyenne&nbsp;: 16**[^2]

[^2]: [16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 31, 16, 16, 15, 16, 31, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 32, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 31, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 0, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 32, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 0, 16, 15, 16, 31, 0, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 32, 15, 31, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 32, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 32, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 32, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 31, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 31, 0, 32, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 31, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 32, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15, 16, 16, 15, 16, 31, 16, 15, 16, 16, 15, 16, 16, 15, 16, 15]

## Conclusion&nbsp;: 
Pas de polémique, ces deux structures sont exactement identiques en terme de performance... En tout cas, en Java. Mais si c'est le cas dans un langage, pourquoi en serait-il autrement dans un autre&nbsp;?

Du coup, je ne vois vraiment aucune raison d'utiliser la boucle While.

Dans le but d'améliorer la lisibilité d'un code, dans le cas d'une équipe pratiquant la "propriété collective du code" par exemple, il sera judicieux de limiter les structures itératives à une seule forme&nbsp;: le for (et à la rigueur le foreach en Java 1.5[[ exemple de foreach sur une liste d'entier:```List<Integer> resultats = new ArrayList<Integer>();
for (Integer integer&nbsp;: resultats) {}```]])

Cette structure est plus lisible car elle regroupe sur une seule ligne l'initialisation, la condition et la modification de l'élément variable de la boucle. De plus, si cet élément variable est déclaré dans le for, comme par exemple "i" dans l'exemple ci dessous,
```
for (int i = 0; i < VERY_BIG_NUMBER; i++) {
}
```
la portée de cet élément, est limité à la boucle, ce qui est plus propre. On est sûr que cet élément ne sert qu'à ça et n'est pas réutilisé ensuite pour d'autres manipulations douteuses.

A supposer que le programme nécessite malgré tout de boucler de manière infinie, il est toujours possible d'écrire la chose suivante&nbsp;:
```
for (;true;) {
}
```
Ce qui indique clairement une boucle infinie.

Si l'initialisation ou la modification de l'élément variable est inutile, la boucle for l'indiquera clairement par un espace vide à l'endroit réservé comme dans l'exemple suivant&nbsp;:
```
for (;estFinBoucle();) {
}
```

Toutes ces remarques apportent de la lisibilité au code. Le code est moins surprenant. il ne risque pas d'y avoir un comportement astucieux caché derrière une utilisation inhabituel du langage. Cela importe beaucoup quand on doit revenir quelques temps plus tard sur le code pour le modifier, comme c'est le cas lorsqu'on doit corriger un bug ou plus généralement quand on ajoute une nouvelle fonctionnalité.
