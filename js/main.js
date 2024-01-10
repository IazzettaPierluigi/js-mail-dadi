//calcolo il dado per il computer

let dadoComputer =  Math.floor(Math.random() * 6) + 1;


//calcolo il dado per il giocatore
let dadoGiocatore =  Math.floor(Math.random() * 6) + 1;


//faccio apparire il risultato in console
console.log (`il risultato è ${dadoComputer} per il pc e ${dadoGiocatore} per il giocatore`)

//if per scoprire chi ha vinto

if (dadoComputer > dadoGiocatore){
    console.log("ha vinto il computer")
} else if (dadoComputer < dadoGiocatore){
    console.log("ha vinto il giocatore")
} else {
    console.log("è un pareggio!")
}