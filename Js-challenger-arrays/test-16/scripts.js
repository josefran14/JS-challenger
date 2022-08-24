const arrayObject = (arr) =>{
   return arr.sort((a,b) => a.b - b.b)
           
}

console.log(arrayObject([{a:2,b:10},{a:5,b:4}]))