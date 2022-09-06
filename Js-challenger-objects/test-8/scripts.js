const functionObj = (a,b) =>{
    
    return a.reduce((acc,cur,i) => ({...acc,[cur]: b[i] }), {})
    
    
}

console.log(functionObj(['a','b','c'],[1,2,3]))