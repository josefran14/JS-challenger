const arrayEnesimo = (a,n) => {
    return a.filter((item,index) => index % n === (n-1))
}

console.log(arrayEnesimo([1,2,3,4,5,6,7,8,9,10], 3))