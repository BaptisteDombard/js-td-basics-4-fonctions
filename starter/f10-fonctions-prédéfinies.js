/*****************************
* 020 - Fonctions - Pr�alable
*/

// 7. Utiliser les fonctions pr�d�finies en JavaScript

// 1�) Quelques exemples

// La fonction Math.min() renvoie le minimum des nombres pass�s en param�tres

/* EXERCICE 1 : 
Utiliser la fonction Math.min pour afficher dans la console
- le minimum de 4.5 et 5
- le minimum de 19 et 9
- le minimum de 1 et 1
*/

console.log(Math.min(4.5, 5)); // 4.5
console.log(Math.min(19, 9));  // 9
console.log(Math.min(1, 1));   // 1

// La fonction Math.random() g�n�re un nombre al�atoire entre 0 et 1

/* EXERCICE 2 : 
Utiliser la fonction Math.random pour afficher dans la console
- un nombre al�atoire compris entre 0 (inclus) et 1 (exclu)
- un nombre al�atoire compris entre 0 (inclus) et 10 (exclu)
- un nombre al�atoire compris entre 5 (inclus) et 15 (exclu)
*/

console.log(Math.random()); // Un nombre al�atoire entre 0 et 1

// Nous d�couvrirons plein d'autres fonctions pr�d�finies dans la suite de ce cours.

// 2�) Consulter la documentation !!

/* La documentation renseigne comment utiliser les fonctions existantes :
    + les param�tres attendus
    + les valeurs de retour
*/

// La fonction Math.min()
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/min

// La fonction Math.random()
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random

// N.B. console.log() est elle aussi une fonction�
/*
Nous verrons plus tard que log est une fonction associ�e � l'objet console,
on dit que log est une M�THODE de l'objet console
*/