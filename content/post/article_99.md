+++
id = 99
title = "Le code est la documentation"
soustitre = ""
date = "2010-02-18T22:53:25+01:00"
catégories = [ "Essais" ]
description = "En informatique, une bonne documentation, c'est avant tout \"des exemples qui marchent\".Le code d'une application qui marche est une très bonne documentation."
comments = true
+++

<div class="chapo"></div>

Encore hier, j'ai passé un temps fou pour trouver la solution à un problème de configuration du mapping de ma base de données avec Hibernate&nbsp;!

Dans les forums on trouve des tas de solutions toutes plus erronées ou inutiles les unes que les autres.

Voici un petit exemple pour illuster&nbsp;:
{```
You could make the OneToMany-side the owning side by removing the "mappedBy" element and setting the @JoinColumn on the ManyToOne-side as "insertable=false" and "updateable=false". You must also add the @JoinColumn on the OneToMany-side. 

This way you don't have to handle the index or the collection by hand and it is equivalent to setting ManyToOne-side to "inverse=false" in .hbm.xml 
```}

Et je me faisais la réflexion que, en informatique, une bonne documentation, c'est avant tout "des exemples qui marchent".

Mon code est un très bon exemple de "code qui marche". Il faut évidement s'être prouvé à soi-même qu'il marche, par des tests automatisés par exemple, mais une fois que c'est fait. C'est bon&nbsp;! Notre code est un bon exemple de code qui marche. 

Ce que je suis en train de dire c'est que le code d'une application qui marche est une très bonne documentation.