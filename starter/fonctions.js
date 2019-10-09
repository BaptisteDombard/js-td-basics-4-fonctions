// 1. FONCTION SANS PARAM�TRE ET SANS RETURN 

// 1. - 1�) D�clarer la fonction



/*
D�CLARER la fonction = CR�ER la fonction :
On cr�e un conteneur qui a un identifiant (le nom de la fonction)
et on y stocke le mode d'emploi (le corps de la fonction, la liste d'instructions qui sont entre les accolades)
=> C'est comme quand on initialise une variable :
	- d�clarer une variable = cr�er un conteneur qui porte un nom pour y stocker une valeur
	- d�clarer une fonction = cr�er un conteneur qui porte un nom et y stocker un mode d'emploi
N.B. Cette instruction, � elle toute seule, ne produit aucun r�sultat visible
	(on a juste enregistr� quelque chose dasn la m�moire de l'ordinateur,
	on a pr�par� le terrain : on a d�fini un mode d'emploi pour pouvoir travailler avec plus tard,
	on a expliqu� comment faire quelque chose mais on n'a pas enocre donn� l'ordre de le faire)
*/

// 1. - 2�) Ex�cuter la fonction = faire un appel de fonction de direct => avec l'op�rateur ()



// 1. - 3�) Valeur de retour de cette fonction

// Un appel de fonction direct est une expression (op�rande OP�RATEUR)
// Cette expression s'�value � une valeur� quelle valeur ?
// UNE FONCTION QUI N'A PAS D'INSTRUCTION RETURN RETOURNE UNDEFINED => son appel s'�value � UNDEFINED



// 2. FONCTION SANS PARAM�TRE MAIS AVEC RETURN 

// 2. - 1�) D�clarer la fonction



// 2. - 2�) Ex�cuter la fonction = faire un appel de fonction de direct => avec l'op�rateur ()



// 2. - 3�) Valeur de retour de cette fonction

// Un appel de fonction direct est une expression (op�rande OP�RATEUR)
// Cette expression s'�value � une valeur� quelle valeur ?
// UNE FONCTION QUI A UNE INSTRUCTION RETURN RETOURNE LA VALEUR DE RETOUR
// (= valeur de l'expression qui se trouve apr�s le return) => son appel s'�value � la valeur de retour



// 2. - 4�) Utilit� du RETURN :
/*
On peut voir le RETRUN comme un MOYEN DE COMMUNCIATION entre la fonction et le reste du programme :
L'INSTRUCTION RETURN EST UN MOYEN DE FAIRE SORTIR UNE DONNEE D'UNE FONCTION
=> cela permet, par exemple, de r�cup�rer le r�sultat d'une fonction pour le r�utiliser dans une autre fonction
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
il faut la d�clarer en dehors de toute fonction. On dit alors que c'est uen variable globale
*/




/*
Ce qui est important, c'est de la D�CLARER en dehors de toute fonction,
on n'est pas oblig� de l'affecter � cet endroit-l�, on peut l'affecter n'importe o�,
elle sera quand m�me globale, c.-�-d. accessible partout
*/




/*
N.B. On nomme port�e d'une variable l'ensemble des endroits o� elle est accessible.
La port�e d'une variable locale se limite au corps de la fonction dans laquelle elle est d�clar�e.
*/

// 4. PASSAGE DE PARAM�TRE : FONCTION AVEC PARAM�TRE (SANS RETURN)

// 4. - 1�) D�claration de la fonction avec param�tre

/*
Un param�tre est une information dont une fonction a besoin pour jouer son r�le.
Les param�tres d'une fonction sont d�finis entre parenth�ses juste apr�s le nom de la fonction
 On peut ensuite utiliser leur valeur dans le corps de la fonction. 
 */



// 4. - 2�) Appel de la fonction avec param�tre

/* 
La valeur d'un param�tre est fournie au moment de l'appel de la fonction :
on dit que cette valeur est pass�e en param�tre.
On appelle argument la valeur donn�e � un param�tre lors d'un appel.
*/



/* 
La valeur d'un param�tre est fournie au moment de l'appel de la fonction :
on dit que cette valeur est pass�e en param�tre.
On appelle argument la valeur donn�e � un param�tre lors d'un appel.
*/

// 4. - 3�) D�claration d'une fonction sans param�tre � nouveau pour comprendre l'utilit� :

/* Imaginons qu'on a besoin de calculer le double d'un nombre� 
On a besoin de d�clarer une fonction pour calculer le double de 3 
et puis de d�clarer une AUTRE fonction pour calculer le double de 10
et puis de d�clarer une AUTRE fonction pour calculer le double de 24
etc. et ainsi de suite � chaque fois qu'on veut calculer le double d'un nouveau nombre�
*/




/*
Si on regarde toutes ces fonctions, elles ont toutes un canevas commun,
il y a une seule chose qui change : le nombre (2, ou 10, ou 24). Tout le reste est identique.
Dans ce cas, vous devez pense � cr�er une seule fonction qui prend un param�tre :
le nombre dont on veut calculer le double
*/

// => 4. - 4�) Une fonction avec param�tre � la place de toutes celles-l� :




/* 
Le param�tre est � nouveau un MOYEN DE COMMUNCIATION  avec la fonction :
C'EST UN MOYEN DE FAIRE ENTRER UNE DONNEE DANS UNE FONCTION.
On peut voir le param�tre comme une variable locale,
et on donne une valeur � cette variable au moment de l'appel
(voir graphique au tableau)
*/

// 5. FONCTION AVEC PARAMETRE ET AVEC RETURN




// RESUME

/* 1er MOYEN DE COMMUNCIATION : L'INSTRUCTION RETURN OU COMMENT FAIRE SORTIR UNE DONNEE D'UNE FONCTION */
/* 2e MOYEN DE COMMUNCIATION : VARIABLE GLOBALE OU COMMENT PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
	(rendre une info disponible partout) */
/* 3e MOYEN DE COMMUNCIATION : LE PASSAGE DE PARAMETRE OU COMMENT FAIRE ENTRER UNE DONNEE DANS UNE FONCTION */