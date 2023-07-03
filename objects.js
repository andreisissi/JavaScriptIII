// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {

    let perimetro = 2 * (retangulo.largura) + 2 * (retangulo.altura);
    let area = (retangulo.largura) * (retangulo.altura);

    return {
        perimetro: perimetro,
        area: area,
    };
};

let retangulo = {

    largura: 5,
    altura: 8,
};
console.log(calcularRetangulo(retangulo));

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {

    const maior = 18;

    if (pessoa.idade >= maior) {
        return true;
    } else {
        return false;
    };
};

let pessoa = {

    nome: 'John',
    idade: 25,
    cidade: 'NeW York',
};
console.log(ehAdulto(pessoa));

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {

    return obj.nome + " " + obj.idade + " " + obj.cidade;
}

let obj = {
    nome: 'Bob',
    idade: 35,
    cidade: 'London',
};
console.log(concatenaValores(obj));

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
