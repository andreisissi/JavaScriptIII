// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {

    let mensagem = '';

    switch (number){

        case 1:
            mensagem = 'Domingo';
            break;

        case 2:
            mensagem = 'Segunda-feira';
            break;

        case 3:
            mensagem = 'Terça-feira';
            break;

        case 4:
            mensagem = 'Quarta-feira';
            break;
    
        case 5:
            mensagem = 'Quinta-feira';
            break;

        case 6:
            mensagem = 'Sexta-feira';
            break;
        
        case 7:
            mensagem = 'Sábado';
            break;

        default:
            mensagem = 'Número inválido';
    }

    return mensagem;
}

console.log(retornaDiaSemana(1));
console.log(retornaDiaSemana(4));
console.log(retornaDiaSemana(9));


// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
   
    let mensagem = '';

    switch (code) {

        case 'A':
            mensagem = 10.99;
            break;

        case 'B':
            mensagem = 5.99;
            break;
        
        case 'C':
            mensagem = 7.5;
            break;
        
        default:
            mensagem = "Código inválido";

    }

    return mensagem;
}

console.log(retornaPrecoProduto('A'));
console.log(retornaPrecoProduto('B'));
console.log(retornaPrecoProduto('D'));


// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
   
    let mensagem = '';

    switch (type) {

        case 'Eletrônicos':
            mensagem = 'Tecnologia';
            break;

        case 'Roupas':
            mensagem = 'Moda';
            break;

        case 'Alimentos':
            mensagem = 'Alimentação';
            break;

        default:
            mensagem = 'Categoria desconhecida';

    }
    return mensagem;
}

console.log(retornaCategoriaProduto('Eletrônicos'));

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };