const array = (a,b) =>{
    let result = a.concat(b)
    let result1 = [...new Set(result)]
    return result1.sort((a,b) => a - b)
}

console.log(array([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))