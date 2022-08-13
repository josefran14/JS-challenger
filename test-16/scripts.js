// Escribir una función que tome un número (a) como argumento
// Redondea a al segundo dígito después de la coma
// Devuelve el número redondeado

//  const Number = (a) =>{
//      return a.toFixed(2)
//  }

// console.log(Number(3.136))

const Number = (a) =>{
    return Math.round(a * 100) / 100;
}

console.log(Number(3.1456))