/*
FONCTIONS - PRÉPA 3 : Une première calculatrice
1. Déclarez la fonction calculer()
	pour qu'elle gère les 4 opérations mathématiques de base :
	addition, soustraction, multiplication et division.
	Conseil : utilisez un switch pour basculer entre les différentes opérations.
2. Utilisez ensuite votre fonction pour calculer
	- 4 + 6 (qui doit évidemment donner 10)
	- 4 - 6 (qui doit évidemment donner -2)
	- 2 * 0 (qui doit évidemment donner 0)
	- 12 / 0 (qui doit donner Infinity)
Aide : votre fonction s'exécute avec le pattern suivant : calculer(nb1, "+", nb2)
*/


function calculer(nb1,signe,nb2){
    switch (signe) {
        case `+`:
            calcul = nb1 + nb2;
            break;
        case `-`:
            calcul = nb1 - nb2;
            break;
        case `*`:
            calcul = nb1 * nb2;
            break;
        default:
            calcul = nb1 / nb2;
    }
    return calcul;
}
console.log(calculer(parseInt(prompt(`entrer un nombre`)),prompt(`entrer + - * ou /`),parseInt(prompt(`entrer un nombre`))));






