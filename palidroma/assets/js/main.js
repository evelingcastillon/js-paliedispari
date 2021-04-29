//Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Inserisci Parola:").toLowerCase();
//Creare una funzione per capire se la parola inserita è palindroma

function parolaDaInvertire(parola) {
    var arraySeparato = parola.split("");
    var arrayInverso = arraySeparato.reverse();
    var parolaInversa = arrayInverso.join("");
    return parolaInversa;
}

var parolaInversa = parolaDaInvertire(parolaUtente)
console.log(parolaInversa);
