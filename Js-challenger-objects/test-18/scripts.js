  const counterElementArray = (a) => {
    const resultado = {}
    a.forEach(el => (resultado[el] = resultado[el] + 1 || 1))
    return resultado
    
}
console.log(counterElementArray([1, 3, 3, 3, 5, 1, 3,100]))