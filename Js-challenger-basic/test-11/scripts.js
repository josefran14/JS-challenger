const Myfunction = (a,b,c,d,e,f) =>{
    let sumRest = a + b - c
    let multiplication = sumRest * d
    let division = multiplication / e
    let potencia = Math.pow(division,f)
    
    return potencia
}

console.log(Myfunction(10,20,6,4,3,5))