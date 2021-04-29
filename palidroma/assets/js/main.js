//Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Inserisci Parola:").toLowerCase();
//Creare una funzione per capire se la parola inserita è palindroma

function parolaDaInvertire(parola) {
    var parolaInversa = parola.split("").reverse().join("");
    return parolaInversa;
}

var parolaInversa = parolaDaInvertire(parolaUtente)
console.log(parolaInversa);

var message;
if(parolaUtente == parolaInversa) {
    message = "Parola palidroma"
} else {
    message = "Parola non palidroma"
}

console.log(message);