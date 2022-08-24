const array = (arr) =>{
    return arr.reduce((pre, act) => pre + act, 0) / arr.length
}

console.log(array([10,100,1000]))