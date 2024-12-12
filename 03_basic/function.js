// function addTwoNUmbers(number1, number2){
//  console.log(number1 + number2);
// }
// addTwoNUmbers(5,10);


// function addTwoNUmbers(number1, number2){
//     return number1 + number2;
// }
// const result = addTwoNUmbers(5,10);
// console.log(`Result will be :- ${result}`);//Result will be :- 15 


// function addTwoNUmbers(number1, number2){
//     return number1 + number2;
// }
// console.log( "Result will be :- ",addTwoNUmbers(5,10));

// userLogInMessage

// function userLogInMessage(userName = "Random User" ){
//     if(userName === undefined || userName === null || userName === " "){
//         return "Invalid User Name."
//     }
//     return `${userName} just Logged-In.`
// }

// console.log(userLogInMessage("Sachin Kumar")); // Sachin Kumar just logged-In.


// function shoppingCart(...num1){
//    return num1
// }
// // console.log(shoppingCart(200,400,600,890,76832,920));
// // output :- [ 200, 400, 600, 890, 76832, 920 ]

// console.log(shoppingCart(200,400,600,890,76832,920));

// how to calculate price of total shopping 

function shoppingCart(...num1){
   return num1
}

const totalAmount = shoppingCart(200.68,4089.78,600.0,890.093,76832,920);

const result = totalAmount.reduce((acc,currVal) => {
    return acc + currVal;
},0)
console.log(`Total amount is :- ${result} Rs./-`) 
// output Total amount is :- 83532.553 Rs./-


// =======function with object======= ;

// const user = {
//     name: "Sachin",
//     age: 23,
//     address: {
//         street: "221B Baker Street",
//         city: "London"
//     }
// }

// function handleObject(userInfo){
//     console.log(`Name : ${userInfo.name}, Age : ${userInfo.age}, Address : ${userInfo.address.street}, ${userInfo.address.city}`);
// }

// handleObject(user); // Name : Sachin, Age : 23, Address : 221B Baker Street, London


// ======function width Array======= ;


// const arr = ["Apple","Mango", "Grapes", "Papaya", "Pineapple", "Licencia"];

// function fruitList(arrFruits){
//   console.log(`List of Fruits:- ${arrFruits}`)
// }

// fruitList( arr); // List of Fruits: Apple, Mango, Grapes, Papaya, Pineapple, Licencia







