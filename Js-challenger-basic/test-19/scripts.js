const separateString = (a,b) =>{
    const regEx = /[^a-z]/gi
    const word = a.replace(a[0],a[0].toUpperCase())
    const string = word.replace(regEx,"") + b.replace(regEx, "").split("").reverse().join("")
    return string

}

console.log(separateString('down', 'nw%ot'))