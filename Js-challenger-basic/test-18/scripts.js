// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b


const Word = (a,b) =>{
    return b.split("").filter((item)=> item == a).length
}

console.log(Word('m', 'how many times does the character occur in this sentence?'))



// const Word = (a,b) =>{
//     return b.split(a).length - 1
// }

// console.log(Word("m", "how many times does the character occur in this sentence?"))