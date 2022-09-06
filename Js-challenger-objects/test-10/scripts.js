const objFunction = (a) =>{
   return Object.values(a).reduce((a, b) => a + b);
}
console.log(objFunction({w:15,x:22,y:13}))