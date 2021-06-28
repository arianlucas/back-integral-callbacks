const fs = require("fs");
const frase = "Estou aprendendo JavaScript na Cubos Academy";
const frase2 = "Estou aprendendo como escrever textos pelo JS"

fs.writeFile("./meuarquivo2.txt", frase2, () => {
    console.group("Arquivo escrito");
})