//Escribe una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en una matriz
// Consejo: es posible que desee cambiar el tipo de número para la división

const Matriz = (a) =>{
    return [...a+''].map(n=>+n) 

    }


console.log(Matriz(12345678)) 

// const Matriz = (a) =>{
//     const string = a + '';
//     const strings = string.split('');
//     return strings.map(digit => Number(digit))
// }

// console.log(Matriz(12345678))
