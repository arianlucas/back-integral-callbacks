const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const programa = pessoas.filter(x => {
    if (x.profissao == "Programador") {
        return x.idade > 20;
    }
});

const jornalista = pessoas.filter(x => {
    if (x.profissao == "Jornalista") {
        return x.idade > 30;
    }
});

const jovem = pessoas.filter(x => x.idade < 30)

console.log(programa);
console.log(jornalista);
console.log(jovem);