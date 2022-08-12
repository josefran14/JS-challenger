//Escribe una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso

const MyFunction = (a) =>{
    if (a % 1 === 0){
        return true
    }else{
        return false
    }

}

console.log(MyFunction(20.345))