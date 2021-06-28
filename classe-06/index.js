const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const rodada = 10000;
let i = 0
const intervalID = setInterval(() => {

    if (i < jogadores.length - 1) {
        console.log(jogadores[i])
        i++
    } else {
        console.log("A rodada terminou!")
        clearInterval(intervalID)
    }

}, rodada / jogadores.length);