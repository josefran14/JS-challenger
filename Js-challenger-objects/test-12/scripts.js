const functionObj = (x,y) => {
    y["d"] = y["b"]
    delete y.b
    const result = { ...x, ...y }
    return result
    
}

console.log(functionObj({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))