const objSwap = (a) => {
    let obj = {}
    for (let key in a) {
      obj[a[key]] = key
    }
    return obj
  }


console.log(objSwap({a:1,z:24}))