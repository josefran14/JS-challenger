//Escriba una función que tome dos cadenas (a y b) como argumentos
// Si a contiene b, agrega b al principio de a
// Si no, añádelo al final
// Devuelve la concatenación

const ValidateString = (a, b) =>{
    if(a.includes(b)){
       return b + a 
     }else{
      return a + b
     }
       
}

console.log(ValidateString("Hola", "Word"))