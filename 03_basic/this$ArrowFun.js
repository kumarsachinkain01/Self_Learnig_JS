 const user = {
    userName : "Sachin",
    price : 100,
    welcomeMessage : function(){
         console.log(` Welcome to our Website ${this.userName} and our Thanks for Register .`)
         console.log(this);
    }
 }
 user.welcomeMessage();
 user.userName = "Rahul";
 user.welcomeMessage();

console.log(this);//

// this is ->here  current content is empty;

// function daru(){
//     let userName = "Sachin";
//     console.log(this.userName);
        //output -> undefined 
// }

// daru();

// const daru = function(){
//     let userName = "Sachin";
//     console.log(this.userName);
// }
// daru();// undefined





// ======= Arrow Functions =====;

// const daru = () => {
//     let userName = "Sachin";
//     console.log(this);
// }
// daru();// undefined


// ======= Pure Arrow Functions =====;

// syntax => ()=>{}

//  const addTwo = (num1, num2) => {
//         return num1 + num2;
// }
// console.log(addTwo(87120 , 182791)); // output -> 269911

// const myArr = [2,5,3,5,6]

// myArr.forEach( (val,idx) => {
//      console.log(val,idx)
// })

