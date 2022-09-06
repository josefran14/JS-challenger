const objFunction = (a,b) =>{
    return Boolean(a[b]);
}

console.log(objFunction({x:'a',b:'b',z:undefined},'z'))


 