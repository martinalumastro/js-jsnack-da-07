console.log('snack 09')

// snack 09
// Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
// Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.


// let numeroPrecedente //undefined
// let numeroCorrente = parseInt( prompt('Inserisci un numero')) //number
// console.log(numeroPrecedente,numeroCorrente)

// while(numeroCorrente !== numeroPrecedente) {
//     numeroPrecedente = numeroCorrente //number
//     numeroCorrente = parseInt(prompt('Inserisci un numero')) //number
//     console.log(numeroPrecedente,numeroCorrente)
// }

//il ciclo continua finchè numeroCorrente è diverso da numeroPrecedente

//con array
const numeri = []

let numeroCorrente = parseInt(prompt('Inserisci un numero'))
console.log(numeroCorrente)

while(numeroCorrente !== numeri[ numeri.length - 1]) {
    numeri.push(numeroCorrente)
    numeroCorrente = parseInt(prompt('Inserisci un numero'))
    console.log(numeroCorrente,numeri)
}