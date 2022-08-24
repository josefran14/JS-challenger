// const array = (arr,num) =>{
//     if(num >= 6){
//       arr.unshift(num)
//       return arr
//     }else{
//      arr.unshift(0)
//      return arr
//     }
    
// }

// console.log(array([1,2,3], 6)


const array = (arr,num) =>{
     num >= 6 ? arr.unshift(num) : arr.unshift(0)
     return arr
}

console.log(array([1,2,3], 4))