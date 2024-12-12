// nested scope

// function one(){
//     const userName = "Sachin";
//     function two(){
//         const email = "sachin@gmail.com";
//         console.log(userName);
//     }
//     // console.log(email) 
//     two();
// }

// one();

if(true){
    const userName = "Sachin Kumar ";
    if(userName === "Sachin Kumar "){
        const website = "http://google.com";
        console.log(userName + website); 
    } 
    // console.log(website);
}
// console.log(userName);



// example hoisting 


console.log(addOne(5));
function addOne(number){
    return number + 1;
}


console.log(addTwo(5));

 function addTwo(number){
    return number + 2;
}


