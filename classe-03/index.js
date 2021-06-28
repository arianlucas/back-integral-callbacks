const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasFrescas = frutas.map((x, i) => {
    let mudanca = x[0].toUpperCase() + x.slice(1).toLowerCase();
    return `${i} - ${mudanca}`
});

console.log(frutasFrescas)