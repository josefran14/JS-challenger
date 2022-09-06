const objFunction = (obj) =>{
    return obj['prop-2']
}


console.log(objFunction({  'prop-2': 'two',  prop: 'test'}))