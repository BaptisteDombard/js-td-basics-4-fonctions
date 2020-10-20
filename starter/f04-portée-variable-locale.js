/*****************************
* 020 - Fonctions - Pr�alable
*/

// 3. PORTEE D'UNE VARIABLE : VARIABLE LOCALE - VARIABLE GLOBALE

// 3. - 1�) Variable locale

/* 
Variable locale = variable d�clar�e dans le corps d'une fonction
Une variable locale n'est accessible qu'� l'int�rieur de la fonction. 
*/

/* EXERCICE 1 : fonction sans return
1. D�clarer une fonction direBonjour qui 
	- stocke dans une variable message la cha�ne de caract�res "Bonjour !"
	- donne l'ordre d'afficher dans la console le contenu de la variable message
2. � la racine du programme, en dehors du corps de la fonction, 
donner l'ordre d'afficher dans la console le contenu de la variable message
*/









/* 
Ma variable message est une variable locale, je l'ai d�clar�e dans ma fonction direBonjour
=> si j'essaie d'acc�der � message en dehors de ma fonction, j'ai une erreur
*/


/* EXERCICE 2 : fonction avec return
1. D�clarer une fonction direBonjour qui 
	- stocke dans une variable message la cha�ne de caract�res "Bonjour !"
	- retourne la variable message
2. � la racine du programme, en dehors du corps de la fonction, 
	- donner l'ordre d'afficher dans la console le contenu de la variable message
	- trouver le bon moyen pour afficher dans la console le contenu de la variable message
*/






/* 
Ma variable message est une variable locale, je l'ai d�clar�e dans ma fonction direBonjour
=> si j'essaie d'acc�der � message en dehors de ma fonction, j'ai une erreur
Par contre, je peux utiliser le return pour faire sortir sa valeur de ma fonction�
Si ma fonction retourne message, lorsque j'appelle ma fonction, sa valeur de retour est le contenu de la variable message
*/
