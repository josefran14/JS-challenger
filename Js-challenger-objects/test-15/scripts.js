const objComplete = (obj) => {
    for(let key in obj)
    if(obj[key] === ""){
       obj[key] = null
    }else if(obj[key] === " "){
        obj[key] = null
    }
    return obj
};

console.log(objComplete({ a: "", b: "b", c: " ", d: "d" }));



//    const newObj = { ...obj };
//   for (key in newObj) {
//      if (newObj[key].trim() === '') newObj[key] = null;
//   }
//    return newObj;
//  }