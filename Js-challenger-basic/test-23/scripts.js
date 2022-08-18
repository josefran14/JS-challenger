const string = (a,b) =>{
   let arr = a.split("").reverse()
   for(let i = 0; i < arr.length; i ++ ){
    if( i === 3 ){
         arr.splice(i,0,b)
    }else if(i === 6+1){
        arr.splice(i,0,b)
    }else if(i === 9+2){
        arr.splice(i,0,b)
    }else if (i === 12+3){
        arr.splice(i,0,b)
    }else if (i === 15+4){
        arr.splice(i,0,b)
    }
   }
   return arr.reverse().join("")
}

console.log(string('zxyzxyzxyzxyzxyz','w'))