function ObjecMultiply(a, b) {
  let obj = {}
  for (let key of Object.keys(a)) {
    obj[key] = a[key] * b
  }
  return obj
}

console.log(ObjecMultiply({w:15,x:22,y:13},6));
