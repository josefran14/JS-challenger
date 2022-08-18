const number = (a) => {
  let validation = false;
  if (a <= 1) {
    return `Ingrese un numero mayor a uno`;
  }
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      a++;
    }
  }
  return a;
};

console.log(number(14));


// function myFunction(a) {
   
//     for (let i = 2; i <= a - 1; i++){
//       if (a % i == 0){
//       return myFunction(a += 1)
//        }
//     }
    
//     return a
    
//  }