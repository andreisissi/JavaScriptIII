// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {

  return numeros.map((numero) => numero * 2);
 
};
console.log(dobrarNumeros([1, 2, 3]));
console.log(dobrarNumeros([-1, 0, 5]));
console.log(dobrarNumeros([]));

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {

  return numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
console.log(somarValores([1, 2, 3]));
console.log(somarValores([-1, 0, 5]));
console.log(somarValores([]));

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {

  return numeros.filter((numero) => numero % 2 === 0);
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));
console.log(filtrarPares([0, 1, 2, 3, 4, 5]));
console.log(filtrarPares([]));
module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};

