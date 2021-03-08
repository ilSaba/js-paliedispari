// Chiedo la parola all'utente 
var parola = prompt("Dimmi una parola. Ti dirò se è palindroma");

// Creo la funzione
function palindrome(str) {
// Trasformo trutte le lettere in lowerCase per evitare problemi di valenza
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
// Utilizzo split per trasformare la stringa in array
// Utilizzo reverse per invertire ua matrice (array). Il primo elemento di matrice diventa l'ultima, e l'ultimo elemento di matrice diventa il primo
// Utilizzo il Join per unire nuovamente tutti gli elementi derll'array in una stringa.
    return str === str.split("").reverse().join("")
 }
 
 //stampo se true o false
 alert(palindrome(parola));