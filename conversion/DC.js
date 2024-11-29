// let score = 33;
// console.log("current Score is  :-", score , typeof score)



// how to convert string to number

// let score = "33";

// let convertedScore = Number(score);

// console.log("current Score is  :-", convertedScore, typeof convertedScore)

// conversion


// "33" => 33;

// "33abc" => NaN;

//NaN = Not a Number;
// true => 1;

// 1 => true ; 0 => false;
//"" => false;;
// "hxdush" => true;


// ********************** Operation ******************* //

// data type summary topics;

// there are two types of data type  
// 1.) Primitive data type;
// 2.) Non-Primitive data type (Reference type);

//1.} primitive data types;
// primitive data types are the most basic types of  data provide by a programming language;
// They are predefined (built-in) types and are the simplest forms of data. These types directly hold the value.
// for example => STring, Number, Boolean, String,null, Undefined ,BigInt, Symbole.


//2.} non-Primitive data types (Reference types);

// Reference types are objects. They are created dynamically and are stored on the heap. They are reference types and hold the reference to the actual data.

// for example => Array, Object, Function.


// Array
// const heros = ['Saktiman', 'Naagraj', 'Dogan'];

// console.log(typeof heros)


// // Object
// let myObj = {
//     name: 'Sachin',
//     age: 25
// }

// console.log(typeof myObj)

// // Function
// let myFunc = function() {
//     console.log('Hello, World!')
// }
// myFunc();

// console.log(typeof myFunc);


// more learn in depth 
// https://262.ecma-international.org

//=====================================
// JavaScript is what type of language ?
//JavaScript is dynamically typed, allowing more flexibility but also requiring developers to handle type-related bugs carefully.


// ++++++ Stack Memory & Heap Memory  ++++++++ //;


// Stack Memory & Heap Memory knha use hoti hai ?
// stack Memory(Primitive type);
// jab bi stack memory milti hai to jo bhi variable declare kiya hai to hame uski copy milti hai na ki hame original value milti hai ;

// Heap Memory(Non primitive type);
// jab bhi hum Heap memory usage krte hai to hame original value milti hai  na ki copy value.

//======example  stack 
// let myYouTubeName = 'SachinYoutube';

// let anotherName = myYouTubeName ;
// anotherName = 'Sachin Kumar AnotherName'

// console.log(myYouTubeName);

// console.log(anotherName);


// =======example Heap

let userOne = {
  email : 'user@google.com', 
  name : 'John Doe'
}


let userTwo = userOne;

userTwo.email = 'user2000@google.com';

console.log(userOne);
console.log(userTwo);