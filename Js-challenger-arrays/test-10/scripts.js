const array = (a,b) =>{
    return a.filter((item) => item !== b)
}

console.log(array([1,2,'2',1], 1))