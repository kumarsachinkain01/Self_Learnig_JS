// singleton
// literal k through object bnta hai to singleton nahi bnta hai.

// constructor k through singleton object bnta hai.
//Object.create = {}

// object literal;

// const mySym = Symbol("Key-1");
// const jsUser = {
//       name : "Sachin",
//      "full-Name": "Sachin Kumar",
//      [mySym] : "myKey-1",
//       age : 25,
//       location : "Agra",
//       email : "sachin@gmail.com",
//       isLoggedIn : false,
//       lastLogInDays : ["Monday", "Tuesday", "Wednesday", "Thursday"],
//       printDetails() {
//             console.log(`Name : ${this.name}, Age : ${this.age}, Email : ${this.email}`);
//       }
// }

// jsUser.email = "KumarSachinkain@gmial.com";
// Object.freeze(jsUser);

// jsUser.email = "RahulKainKumar@gmial.com";

// console.log(jsUser.email);
// console.log(jsUser["full-Name"]);
// console.log(jsUser["lastLogInDays"]);
// jsUser.printDetails();

// ------- Part-2 ------


// const tinderUser = new Object();

// console.log(tinderUser);
// const tinderUser = {
  
// }
// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;



// console.log(tinderUser);

const regularUser = {
      email : "some@example.com",
      fullName : {
         userFullName :{
              firstName : "Sachin",
              lastName : "Kumar"
         }
}
}
// console.log(regularUser.fullName.userFullName.firstName);

// optional chainning :- 

// how to combine multiple objects like an Array ?

const obj1 = { 1: "A", 2 : "B" }
const obj2 = { 3: "C", 4 : "D" }
const obj3 = { 4: " E", 5: " F" };
const obj4 = { 5: " G", 6: " H" };


// const obj3 = {obj1 , obj2}; // object k ander objects
// console.log(obj3);

// const obj = { ...obj1, ...obj2, ...obj3 , ...obj4}; 
// console.log(obj);
// output -> { '1': 'A', '2': 'B', '3': 'C', '4': ' E', '5': ' G', '6': ' H' }

// const object3 = Object.assign({}, obj1, obj2, obj3, obj4 );
// console.log(object3)
//output -> { '1': 'A', '2': 'B', '3': 'C', '4': ' E', '5': ' G', '6': ' H' }


// const tinderUser = {
  
// }
// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;


// console.log("This is Keys :-", Object.keys(tinderUser));
// console.log("This is Values :-", Object.values(tinderUser));
// console.log("This is Values :-", Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// true 


