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

//faccio apparire dadoGiocatore nell'html

document.getElementById('risult-giocatore').innerHTML = `questo è il tuo numero: ${dadoGiocatore}`

//faccio apparire dadoComputer nell'html
document.getElementById('risult-computer').innerHTML = `questo è il numero del computer: ${dadoComputer}`


//faccio comparire a pagina il vincitore
if (dadoComputer > dadoGiocatore){
    document.getElementById('vincitore').innerHTML = 'ha vinto il computer!'
} else if (dadoComputer < dadoGiocatore){
    document.getElementById('vincitore').innerHTML = 'ha vinto il giocatore!'
} else {
    document.getElementById('vincitore').innerHTML = 'è un pareggio!'
}

//INIZIO CODICE PER RICHIESTA EMAIL E CONTROLLO IN ARRAY

let emailAutorizzate = ["giovanni@gmail.com", "piero@gmail.com", "alessandro@gmail.com", "anto@gmail.com"]

console.log(emailAutorizzate)