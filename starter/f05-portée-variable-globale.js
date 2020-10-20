/*****************************
* 020 - Fonctions - Pr�alable
*/

// 3. PORTEE D'UNE VARIABLE : VARIABLE LOCALE - VARIABLE GLOBALE

// 3. - 2�) Variable globale 

/* 
Variable gobale = variable d�clar�e en dehors d'une fonction
Une variable globale est accessible de partout 
=> On peut voir une variable globale comme un
   2e MOYEN DE COMMUNCIATION entre les fonctions :
   VARIABLE GLOBALE = MOYEN DE PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
   (rendre une info disponible partout)
 */

/* EXERCICE 1 : Variable locale
1. D�clarer une fonction affiche1 qui
	- stocke a valeur 2 dans une variable nbre1
2. D�clarer une fonction affiche2 qui
	- stocke a valeur 3 dans une variable nbre2
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 = �"  
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 = �"
3. Appeler affiche2
4. Expliquer ce qui se passe
*/












/*
Une variable d�clar�e � l'int�rieur d'une fonction est dite "locale"
et elle n'est disponible qu'� l'int�rieur de cette fonction
*/

/* EXERCICE 2 : Variable globale
				(on sort la variable nbre1 de la fonction affiche1)
1. Initialiser une variable nbre1 � la valeur 2
2. D�clarer une fonction affiche1 qui
	- donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 = �"
3. D�clarer une fonction affiche2 qui
	- stocke a valeur 3 dans une variable nbre2
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 = �"  
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 = �"
4. Appeler affiche1 et affiche2
5. Expliquer ce qui se passe
*/













/*
Pour qu'une variable soit disponible partout
(y compris � l'int�rieur d'autres fonctions),
il faut la d�clarer en dehors de toute fonction.
On dit alors que c'est une variable "globale"
*/


/* EXERCICE 3 : Variable globale - variante
				(on d�clare la variable nbre1 hors de la fonction affiche1
				et on l'affecte � l'int�rieur de la fonction affiche1)
1. D�clarer une variable nbre1 sans lui affecter de valeur
2. D�clarer une fonction affiche1 qui
	- stocke a valeur 2 dans une variable nbre1
	- donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 = �"
3. D�clarer une fonction affiche2 qui
	- stocke a valeur 3 dans une variable nbre2
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 = �"  
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 = �"
4. Appeler affiche1 et affiche2
5. Expliquer ce qui se passe
*/








/*
Pour qu'une variable ait une port�e globale,
ce qui est important, c'est de la D�CLARER en dehors de toute fonction,
on n'est pas oblig� de l'affecter � cet endroit-l�,
on peut l'affecter n'importe o�, elle sera quand m�me globale,
c.-�-d. accessible partout
*/

/*
RESUME :
- Port�e d'une variable = ensemble des endroits o� elle est accessible
- Variable locale : accesssible que dans le corps de la fonction o� elle se trouve
- Variable gloable : accessible partout
*/
