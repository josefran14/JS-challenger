const objFunction = (a,b) =>{
   return a.hasOwnProperty(b)
}

console.log(objFunction({x:'a',y:'b',z:undefined},'z'))