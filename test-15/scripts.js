//Escribe una función que tome dos números (a y b) como argumentos
// Si a es menor que b, dividimos a por b
// De lo contrario, multiplica ambos números
// Devuelve el valor resultante

const MyFunction = (a,b) =>{
    return a < b ? a / b : a * b
}

console.log(MyFunction(90,45))