const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];
const semRepetir = []

notas.forEach((x) => {

    const repeticao = semRepetir.find(a => a == x);

    if (!repeticao) {
        semRepetir.push(x)
    }

});

console.log(semRepetir)