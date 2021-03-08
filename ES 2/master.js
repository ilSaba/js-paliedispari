// Faccio segliere all'utente se pari o dispari
var pariDispari = prompt("Scegli tra Pari o Dispari");
console.log(pariDispari);


var soldatino = false

while (!soldatino){
    // Faccio scegliere all'utente un numero da 1 a 5
    var numeroUtente = parseInt(prompt("Dammi un numero da 1 a 5"));
    if (numeroUtente > 5 || numeroUtente < 1){
        alert("Ti ho chiesto un numero da 1 a 5");
    } else {
    // Genero numero Random
        var numRandom = random (1,5);
        console.log(numRandom);
    // Addizione
        var somma = add (numeroUtente,numRandom);
        console.log(somma);
    // Pari
        var pari = pari(somma);
        console.log(pari);
    // Stampo il risultato
        soldatino = true;
        if (pari) {
        console.log("Vince PARI!");
        } else {
        console.log("Vince DISPARI");
        }
    }
}

// Funzioni

function random(min, max){
    return Math.random() * (max - min) + min;
}
function add(num1,num2){
    return parseInt(num1 + num2);
}
  
function pari(num1){
    return (num1%2 == 0);
}



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.