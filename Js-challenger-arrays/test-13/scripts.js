const arraystring = (arr) =>{
   let arraylongitud = arr.map((item) => item.length)
   let max = Math.max(...arraylongitud)
   let ind = arraylongitud.indexOf(max)
   return arr[ind]
}

console.log(arraystring(['I', 'need', 'candy']))