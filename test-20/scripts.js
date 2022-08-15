const divisible = (x, y) => {
    let validation = Number.isInteger(x / y)
    if (validation === true) {
        return x
    } 
    else {
    
    while (validation === false) {
        x++
        validation = Number.isInteger(x / y)
    }
    return x
}
}


console.log(divisible(1,23))


// function divisible(x, y) {
//     while (x % y !== 0) x++;
//     return x;
//   }