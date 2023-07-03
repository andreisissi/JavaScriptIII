// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  if (n == 1){
    return 1;
  } else {
    return n + somaNumeros(n - 1);
  }
}
console.log(somaNumeros(5));
console.log(somaNumeros(10))

// Verifica se um número é par
function ehPar(number) {
if (number % 2 === 0) {
  return true;
  } else {
    return false;
  }
}
console.log(ehPar(4))
console.log(ehPar(7))


function fibonacci(n) {
   if (n === 1 || n === 2) {
    return 1;
   } else {
    var numeroAnterior1 = 1;
    var numeroAnterior2 = 1;
    var resultado = 0;

    for (var i = 3; i <= n; i++) {
      resultado = numeroAnterior1 + numeroAnterior2;
      numeroAnterior1 = numeroAnterior2;
      numeroAnterior2 = resultado;
    }
    return resultado;
   }
  }
  console.log(fibonacci(6))
  console.log(fibonacci(9))


module.exports = { somaNumeros, ehPar, fibonacci };