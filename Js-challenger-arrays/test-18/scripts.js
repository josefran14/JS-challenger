const arraySum = (a,b) =>{
    return a.filter((current) => current > b ).reduce((prev,current) => prev + current)
    
}

console.log(arraySum([-10, -11, -3, 1, -4], -3))