const arrObj = (arr) =>{
    let arrKey = [...new Set(arr.map((item) => item[0].toLowerCase()))]
    let obj = {}
    for(props of arrKey){
        obj[props] = arr.filter((item) => item[0].toLowerCase() === props)
    }
    return obj
}


console.log(arrObj(['Berlin', 'Paris', 'Prague']))