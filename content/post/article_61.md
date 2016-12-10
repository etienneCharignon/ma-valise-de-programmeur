+++
id = 61
title = "Faut-il commenter son code ?"
soustitre = ""
date = "2008-02-14T21:54:34+01:00"
rubrique = 10
descriptif = "La réponse est \"Oui\"... le moins possible !"
+++

<h2>Voici quelques remarques générales sur les commentaires de programme. Cet essai a été écrit suite à la lecture du poste de Christian Faure sur la [litterature de code->http://www.christian-faure.net/2008/01/07/litterature-de-code/].

Comme le fait remarquer Christian Faure dans une réponse à ce message, il s'agit ici du point de vue d'un développeur professionnel.</h2>
D’une manière générale, je réduis les commentaires au minimum car ils constituent une forme de duplication d’avec le code écrit juste à coté. Et l’on sait pour l’avoir vu très souvent que quand le code devient plus gros, cette duplication dérive beaucoup (quand j’arrive sur un projet, je commence par enlever les commentaires faux et il n’en reste souvent plus beaucoup après).

Les commentaires sont parfois utilisés pour aider à la compréhension du code. Cette pratique est pour moi héritée de l’enseignement. En effet, dans les livres et les cours de programmation, les commentaires sont très pratiques pour expliquer justement le code. Mais dans un code professionnel, les développeurs sont sensés connaitre un minimum. Ils peuvent apprendre évidement, mais cela ne justifie pas pour moi l’usage des commentaires. D’une manière générale, je préfère essayer d’écrire du code directement lisible. Demander au développeur d’écrire des commentaires, c’est faire passer le message “le code n’est pas lisible par un humain, ajoutez des explications” alors que le message devrait être “faites du code lisible”. Comme vous le dites, on a tord de penser que le code est écrit pour une machine. Pour ce qui est d’introduire un langage parlé, je comprends l’argument, mais je ressens ce discours parlé comme du bruit. Les langages structurés sont un relativement (ça dépend des langages) bon moyen d’exprimer les concepts et abstractions que l’on essaie de capturer.

Par ailleurs, les commentaires sont parfois utilisés pour faire de la qualité au sens : “je dis ce que je veux faire et je fais ce que j’ai dit que je voulais faire”. Mais cela est avantageusement remplacé par les tests unitaires. Ce type de commentaires peut être remplacé dans un premier temps par des assertions exécutables. Dans un deuxième temps, on se rend compte qu’il est plus pratique de déplacer ces assertions à l’extérieur de l’application, dans une application dédiée aux tests.

Remarque à propos du niveau contextuel:
La présence du message contextuel dans le code est une nuisance pour la recherche des erreurs. En effet, en lisant le commentaire, le lecteur se place dans le même état d’esprit que le celui qui a écrit ce code. Du coup, il ne voit pas l’erreur. C’est une remarque que j’ai lu dans [“The Psychology of Computer Programming”](../breve_6) par Gerald Weinberg. Il ne faut pas minimiser ce phénomène. Tout d’abord, dans les milieux professionnels, le code est essentiellement lu lors de la recherche d’erreur. Mais même si le code est beaucoup lu par des pairs pour d’autres raisons, comme c’est le cas lors qu’on programme en binôme ou que l’on pratique la propriété collective du code, il serait dommage de se priver de cette opportunité de détecter des erreurs.

Bref, à cause de toutes ces remarques, les commentaires sont une pratique qui nuit à la qualité du code. Il faut en écrire, mais le moins possible.