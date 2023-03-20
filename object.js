var person={
    firstName:"upender",
    secondName:"uppi",
    age:25,
    ownscar:false
}
// console.log(person)

// dot notation 
// console.log(person.age)

// bracket notation 
// console.log(person["firstName"])
var cap={
    firstNam:"upender",
    lastName:"uppi",
    age:26,
    friends:["venkat","shiva","nirnay","jagadeshi"],
    isAvenger:true,
    address:{
        state:"ts",
        city:{
            name:"khammam",
            pincode:507002
        }
    }
}
// console.log(cap.friends[1])
// console.log(cap.address.city.name)
cap.isAvenger=false
// console.log(cap)
cap.movies=["rrr","project-k","dhruva"]
// console.log(cap)
delete cap.age
console.log(cap)
