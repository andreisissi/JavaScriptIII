// Converte uma string para um número inteiro
function convertToInt(string) {

    let converter = parseInt(string);
    return converter;
    
 }
 console.log(convertToInt(42));
 console.log(convertToInt(-10));

// Converte um número inteiro para uma string
function convertToString(number) {
 
    let converter = (number.toString());
    return converter;

}
console.log(convertToString('123'));
console.log(convertToString('-5'));


function convertToBoolean(value) {

    if (value === 0) {
        return !!value;
    } else {
        return true;
    }

}
 console.log(convertToBoolean(0));
 console.log(convertToBoolean());


module.exports = { convertToInt, convertToString, convertToBoolean };