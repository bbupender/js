// we will be given a number and we have to check that if the square of that number is even or not 

// Imperative way of writing code 
// const a=4
// const asquared = a*a
// let isEven;
// if(asquared % 2==0){
//     isEven = true
// }
// else{
//     isEven = false
// }
// console.log(isEven)

// Declarative way of writing code 
const checkForsqayre = (x)=>(x*x%2===0 ? true :false)
console.log(checkForsqayre(4))
