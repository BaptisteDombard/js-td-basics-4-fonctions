/*****************************
* 020 - Fonctions - Pr�alable
*/

// 3. PORTEE D'UNE VARIABLE : VARIABLE LOCALE - VARIABLE GLOBALE

// 3. - 1�) Variable locale

/* 
Variable locale = variable d�clar�e dans le corps d'une fonction
Une variable locale n'est accessible qu'� l'int�rieur de la fonction. 
*/



/* 
Ma variable message est une variable locale, je l'ai d�clar�e dans ma fonction direBonjour
=> si j'essaie d'acc�der � message en dehors de ma fonction, j'ai une erreur
Par contre, je peux utiliser le return pour faire sortir sa valeur de ma fonciton�
*/



// 3. - 2�) Variable globale 

/* 
Variable gobale = variable d�clar�e en dehors d'une fonction
Une variable globale est accessible de partout 
=> On peut voir une variable globale comme un 2e MOYEN DE COMMUNCIATION entre les fonctions :
VARIABLE GLOBALE = MOYEN DE PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS (rendre une info disponible partout
 */



/*
Une varible d�clar�e � l'int�rieur d'une fonction est dite "variable locale"
et elle n'est disponible qu'� l'in�trieur de cette fonction
*/



/*
Pour qu'elle soit disponible partout (y compris � l'int�rieur d'autres fonctions),
il faut la d�clarer en dehors de toute fonction. On dit alors que c'est une variable globale
*/




/*
Ce qui est important, c'est de la D�CLARER en dehors de toute fonction, on n'est pas oblig�
de l'affecter � cet endroit-l�, on peut l'affecter n'importe o�, elle sera quand m�me globale,
c.-�-d. accessible partout
*/





/*
N.B. On nomme port�e d'une variable l'ensemble des endroits o� elle est accessible.
La port�e d'une variable locale se limite au corps de la fonction dans laquelle elle est d�clar�e.
*/
