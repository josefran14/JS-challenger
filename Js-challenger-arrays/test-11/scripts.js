const array = (arr) =>{
    return arr.filter((item) => item < 0).length
}

console.log(array([1,-2,2,-4]))