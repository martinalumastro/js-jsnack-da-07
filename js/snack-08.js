console.log('snack 8')

// snack 08
// Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
// A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC :faccia_leggermente_sorridente:

let numPc = Math.floor(Math.random() * 11)
console.log(numPc)

let numUtente = parseInt(prompt('Prova a indovinare il numero generato dal computer! Scrivi un numero da 0 a 10'))
console.log(numUtente)

while (numPc !== numUtente) {
    console.log('Non hai indovinato. Ritenta!')
    numUtente = parseInt(prompt('Prova a indovinare il numero generato dal computer! Scrivi un numero da 0 a 10'))
}
//for(null; numPc !== numUtente; null){
    // console.log('Non hai indovinato. Ritenta!')
    // numUtente = parseInt(prompt('Prova a indovinare il numero generato dal computer! Scrivi un numero da 0 a 10'))
// }
console.log('Complimenti! Hai vinto')

// if(numPc === numUtente) {
//     console.log('Complimenti, il numero generato dal computer è ' + numPc + '. Hai vinto!')
// } else {
//     console.log('Mi dispiace, il numero ' + numUtente + ' è sbagliato. Prova di nuovo!')
// }
