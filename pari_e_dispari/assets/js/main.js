//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var sceltaUtente = prompt("Pari o Dispari?").toLowerCase();
console.log(sceltaUtente);
var numeroUtente = Number(prompt("Inserire un numero da 1 a 5"));
console.log(numeroUtente);
var numeroPc = Math.ceil(Math.random()*5);
console.log(numeroPc);
//alert
if (numeroUtente < 1 || numeroUtente > 5) {
    alert("numero non valido")
}
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sommaDiDueNumeri(numero_1,numero_2) {
    var risultato = numero_1 + numero_2;
    return risultato;
}
var risultato = sommaDiDueNumeri(numeroUtente,numeroPc);
console.log(risultato);

var verifica;
if (risultato % 2 == 0) {
    verifica = "pari";
} else {
    verifica = "dispari";
}
console.log(verifica);

//Dichiariamo chi ha vinto.
var message;
if(sceltaUtente === verifica) {
    message = "HA VINTO L'UTENTE"
} else {
    message = "HA VINTO IL PC"
}
console.log(message);

