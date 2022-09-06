const functionObj = (obj) =>{
    const {b, ...rest} = obj;
    return rest
}

console.log(functionObj({ e: 6, f: 4, b: 5, a: 3 }))