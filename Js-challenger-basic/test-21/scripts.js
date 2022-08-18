// const words = (a) => {
//   return a
//     .split("")
//     .map((item, index) => String.fromCharCode( (a.charCodeAt(index) + 1))).join("")
    
// };

// console.log(words("bgddrd"));



const words = (a) =>{
  let arrAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]
  let arr2 = a.split("").map((item)=> arrAbc.indexOf(item))
   return arr2.map((item)=> item + 1).map((value) => arrAbc[value]).join("")
}

console.log(words("bgddrd"))