/*****************************
* 020 - Fonctions - Pr�alable
*/

// 4. PASSAGE DE PARAM�TRE : FONCTION AVEC PARAM�TRE (SANS RETURN)

// 1�) Fonctions sans param�tre (pour comprendre l'utilit� du param�tre) :

/* EXERCICE 1 : Plusieurs fonctions sans param�tre
1. a) D�clarer une fonction double3 qui affiche dasn la console 'Le double de 3 est �'
   b) Appeler cette fonction
Imaginons � pr�sent qu'on a besoin de calculer le double d'autres nombres� 
On a besoin de d�clarer une fonction pour calculer le double de 10 
et puis de d�clarer une AUTRE fonction pour calculer le double de 24
et puis de d�clarer une AUTRE fonction pour calculer le double de 128
etc. et ainsi de suite � chaque fois qu'on veut calculer le double d'un nouveau nombre�
*/












/*
Si on regarde toutes ces fonctions, elles ont toutes un canevas commun,
il y a une seule chose qui change : le nombre (2, ou 10, ou 24). Tout le reste est identique.
Dans ce cas, vous devez pense � cr�er une seule fonction qui prend un param�tre :
le nombre dont on veut calculer le double
*/


// 2�) Une fonction avec param�tre � la place de toutes celles-l� :

/* EXERCICE 2 : Une seule fonction avec param�tre
1. a) D�clarer une fonction double qui prend un param�tre nombre
      et qui affiche dans la console 'Le double de �[ce param�tre] est �'
   b) Appeler cette fonction en passant diff�rentes valeurs au param�tre
      pour obtenir : - le double de 3 ;
                     - le double de 10 ;
                     - le double de 24 ;
                     - le double de 128
*/











/* 
Le param�tre est � nouveau un MOYEN DE COMMUNCIATION  avec la fonction :
C'EST UN MOYEN DE FAIRE ENTRER UNE DONNEE DANS UNE FONCTION.
On peut voir le param�tre comme une variable locale,
et on donne une valeur � cette variable au moment de l'appel
(voir graphique)
*/

/* R�SUM� :
1. Un PARAM�TRE est une information dont une fonction a besoin pour jouer son r�le.

2. Dans la D�CLARATION de la fonction, 
  - le NOM du param�tre est d�fini entre parenth�ses juste apr�s le nom de la fonction
  - on peut ensuite l'utiliser (comme si c'�tait une variable locale)
    en indiquant son nom � chaque fois qu'on en a besoin dans le corps de la fonction. 
 
 3. Au moment de l'APPEL de la fonction : 
  - on passe la VALEUR du param�tre entre les parent�ses de l'appel de fonction.
  => La valeur d'un param�tre est fournie au moment de l'appel de la fonction :
     on dit que cette valeur est pass�e en param�tre.
     La valeur donn�e � un param�tre lors de l'appel de fonction s'appelle l'ARGUMENT .
*/
