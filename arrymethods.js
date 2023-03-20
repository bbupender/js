  // var arr=["venkat","shiva", "sathish", "jagadesh"];
// uppi=arr.pop()
// console.log("after pop" +arr);
// console.log("pop uppi" +uppi);

//  var uppiPush=arr.push("subbrao")
// console.log("after push" +arr);
// console.log("push uppi");

////Data types:
//Primitive DataTypes(Value Types) : Fixed memory => stack memory
//Int  //
//Boolean //
//Float //6.46 
//string // name
//Null  //
//Undefined  

//Non Primitive DataTypes(Reference Types): Not fixed => Heap memory
//Object  //
//Array

// push

// const arr=["upender","ninayan","venkat","shive","jagedeshi"];
// let a=arr.push("venu");
// console.log(arr);

// Pop

// const arr=["upender","nirnay","venkat","shiva"];
// let a=arr.pop();
// console.log(arr);

// shift

// const arr=["upender","nirnay","venkat","shive"];
// let a=arr.shift();
// console.log(arr);

// unshift

// const arr=["upender","nirnay","venkat","shive"];
// let a=arr.unshift("venu");
// console.log(arr);

// concat

// let arry1=["Hello","world"];
// let arry2=["javascript","programmin"];
// let result=arry1.concat(arry2);
// console.log(result);

// slice

// const arr=["Hello","world","javascript","programing"];
// const newArr=arr.slice(2,4);
// console.log(newArr);
// remove and added Element

// Splice

// const arr=["heloo","world","java","script"];
// arr.splice(0,2,"programize");
// console.log(arr);

// include(true/flase)

// const arr=["heloo","world","java","script"];
//  const result=arr.includes("heloo")
// console.log(result);

//find

// const numbers=[2,4,7,9,12];
// const result=numbers.find(function(element){
    // return element > 5
// });
// console.log(result); 

// Map

// let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
// function square(number) {
//   return number * number;
// }

// apply square() function to each item of the numbers list
// let square_numbers = numbers.map(square);
// console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]

// Foreach 

// let students = ['John', 'Sara', 'Jack'];
// using forEach
// students.forEach(myFunction);
// function myFunction(item) {
    // console.log(item);
// }

// arry destructuring

// let arr =[10,20,30];
// let[, x]=arr;
// console.log(x)

// slice

// let arr=[10,20,30,40]
// console.log(arr.slice())
// console.log(arr.slice(0))
// console.log(arr.slice(-3))

// spread operator


// let arr1=["c","s","e","f"]
// let obj1={
  // name:"uppi",
  // age:25,
  // state:"TS"
// }
// console.log({...arr1})
// console.log([...obj1])

// let arr=[10,20,30];
// arr.splice(0,0,40);
// console.log(arr);
// arr.splice(1,1,40);
// console.log(arr)

// var a=["uppi","venkat","jagedish","nirnay"];
// var output = a.map(
// function(element){
//   return element+"ans";
// }
// )
// console.log(output)

// filter

// var a=[1,2,3,4,5,6,7];
// var output = a.filter(
//   function(element){
//     return element>2;
//   }
// )
// console.log(output)

// every

// var a=[1,2,3,4,5,6,7,8]
// var output=a.every(
  // function(element){
    // return element<0//// true/false
  // }
// )
// console.log(output)

// some

// var a=[1,2,3,4,5,6,7,8]
// var output=a.some(
//   function(element){
//     return element>0//// true/false
//   }
// )
// console.log(output)

// JSON(stringify)

// var data={
  // name:"upender",
  // age:25,
// }
// var json=JSON.stringify(data);
// console.log(json);

// var date=new Date();
// console.log(date)

// classes

// class test{
//   constructor(number1,number2){
//     this.number1=number1;
//     this.number2=number2;
//   }
//   addition(){
//     console.log(this.number1+this.number2)
//   }
// }
// let ref=new test(10,20);
// ref.addition();

// class User{
//   constructor(msg){
//     this.msg=msg;
//   }
//   admin(){
//     console.log(this.msg)
//   }
// }
// let obj = new User('hi');
// let obj2 = new User('hello');
// obj.admin();

// for of

// const arr = ["a","b","c","d","e"];//numbers/letters
// for(const a of arr){
//   console.log(a);
// }

// Default parameter

// function user(name,age=20){
  // console.log(name+" "+age)
// }
// user('John',25)

// Rest operator

// function user(name,...uppi){
//   console.log(name+" : "+uppi)
// }
// user('venkat',25,"gamil@.com",1234566)
// //rest=rest of values

// spread operator

// let arr1 =[1,2,3,4,5];
// let arr2=[6,7,8,9,10]
// let arr3=[...arr1,...arr2]
// console.log(arr3)

//  Destructuring

// let person={
//   name:"uppi",
//   age:25,
//   email:'mail@gmail.com',
// }
// const{name,age,mail}=person;
// console.log(name)
// let person=[1,2,3,4]
// const[a,b,c,d]=person
// console.log(a)

// closure

// function outer(){
//   var x = 10;

//   function inner(){
//     var y = 100
//     console.log
//   }
//   return
// }
//  var res = outer()

// res()

// string replaceall

// const uppi = "Hello world! Hello universe!";
// const newStr = uppi.replaceAll("o", "Hi");
// console.log(newStr); // "Hi world! Hi universe!" 

// call stack

// function sum(a,b){
//   let sum = a+b
//   console.log(sum);
// }
// function diff(a,b){
//   let diff=a-b;
// }
// function square(num){
//   console.log(num*num)
// }
// sum(4,6);
// diff(4,6);

// Hosting

//following two lines will run successfully due to javascript hoisting
// console.log(a)
// greet()
// function greet(){
  // console.log("Good morning")
// }
// var a=9;//Declaration hoisted to the top but initialization is not
// console.log(a)

// Variable Environment

// var x = 1;
// a();
// b();
// console.log(x);//3-1

// function a(){
//   var x = 10;
// console.log(x)//1-10
// }
// function b(){
//   var x = 100;
//   console.log(x);//2-100
// }

// call back function

// Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);


// Constructor function

// constructor function
// function Person () {
//   this.name = 'John',
//   this.age = 23,

//    this.greet = function () {
//       console.log('hello');
//   }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();

// // access properties
// console.log(person1.name);  // John
// console.log(person2.name);  // John

// Catch, try, finally

// const numerator= 100, denominator = 'a';

// try {
//      console.log(numerator/denominator);
//      console.log(a);
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }
// finally {
//      console.log('Finally will execute every time');
// } 

// classes inheriant 

// // / parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//         this.occupation = "unemployed";
//     }
    
//     greet() {
//         console.log(`Hello ${this.name}.`);
//     }
 
// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {
        
//         // call the super class constructor and pass in the name parameter
//         super(name);
        
//         // Overriding an occupation property
//         this.occupation = 'Student';
//     }
    
//     // overriding Person's method
//     greet() {
//         console.log(`Hello student ${this.name}.`);
//         console.log('occupation: ' + this.occupation);
//     }
// }

// let p = new Student('Jack');
// p.greet();

// settime out

// Display a Text Once After 3 Second

// // program to display a text using setTimeout method
// function greet() {
//   console.log('Hello world');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');

// program to display time every 3 seconds
// function showTime() {

//   // return new date and time
//   let dateTime= new Date();

//   // returns the current local time
//   let time = dateTime.toLocaleTimeString();

//   console.log(time)

//   // display the time after 3 seconds
//    setTimeout(showTime, 3000);
// }

// // calling the function
// showTime();

// // program to display a name
// function greet(name, lastName) {
//   console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// // passing argument to setTimeout
// setTimeout(greet, 1000, 'upender', 'naik');

// call back

// // Callback Function Example
// function greet(name, myFunction) {
//   console.log('Hello world');

//   // callback function
//   // executed only after the greet() is executed
//   myFunction(name);
// }

// // callback function
// function sayName(name) {
//   console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'upender', sayName);

// PROMISE

// // Example 1: Program with a Promise
// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);

// Example 2: Chaining the Promise with then()
// returns a promise

// let countValue = new Promise(function (resolve, reject) {
//   resolve("Promise resolved");
// });

// // executes when promise is resolved successfully

// countValue
//   .then(function successValue(result) {
//     console.log(result);
//   })

//   .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });

// JavaScript catch() method
// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//   reject('Promise rejected'); 
// });

// // executes when promise is resolved successfully
// countValue.then(
//    function successValue(result) {
//        console.log(result);
//    },
// )

// // executes if there is an error
// .catch(
//    function errorValue(result) {
//        console.log(result);
//    }
// );

// JavaScript finally() metho
// //  returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     // could be resolved or rejected   
//     resolve('Promise resolved'); 
// });

// // add other blocks of code
// countValue.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );

// JSON

// // JSON object
// const data = {
//     "name": "John",
//     "age": 22,
//     "hobby": {
// 	"reading" : true,
// 	"gaming" : false,
// 	"sport" : "football"
//     },
//     "class" : ["JavaScript", "HTML", "CSS"]
// }

// // accessing JSON object
// console.log(data.name); // John
// console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

// console.log(data.hobby.sport); // football
// console.log(data.class[1]); // HTML

// // JavaScript object
// const jsonData = { "name": "John", "age": 22 };

// // converting to JSON
// const obj = JSON.stringify(jsonData);

// // accessing the data
// console.log(obj); // "{"name":"John","age":22}"

// function* generatorFunc() {

//     console.log("1. code before the first yield");
//     yield 100;
    
//    console.log("2. code before the second yield");
//     yield 200;
// }

// // returns generator object
// const generator = generatorFunc();

// console.log(generator.next());

// // / generator function
// function* generatorFunc() {
//     yield 100;
//     yield 200;
// }

// // returns generator object
// const generator = generatorFunc();

// console.log(generator.next());












