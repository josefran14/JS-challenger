const informationPersonal = (obj) => {
  let obj2 = {};
  for (let key in obj) {
     if(key === "size"){
        obj2[key] = obj[key].toString()+"cm"
     }else if(key === "weight"){
        obj2[key] = obj[key].toString()+"kg"
    }else if(key === "fn"){
        obj2[key] = obj[key]
    }else if (key === "ln"){
         obj2[key] = obj[key]
     }
 }
 return obj2
};

console.log(
  informationPersonal({
    fn: "Lisa",
    ln: "Müller",
    age: 17,
    size: 175,
    weight: 67,
  })
);
