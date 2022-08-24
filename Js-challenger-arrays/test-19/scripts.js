const arrayMax = (min,max) =>{
    let arr = []
    for(let i = min; i <= max ; i++){
         arr.push(i)
    }
    return arr
}

console.log(arrayMax(-5,5))