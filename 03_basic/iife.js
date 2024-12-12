// IIFE => immediately invoked Function Expressions

// (function() {
//     console.log("I run immediately!");
// })();
//=================================
// Q.) why do need IIFE ?

//--> To avaid polluting the global scope ;

// (1.) In JavaScript, variables defined outside functions are added to the global scope, which can lead to conflicts if multiple scripts use the same variable names.

//(2.) An IIFE creates its own private scope, so variables inside it don’t mess up the global variables. that's why we do need IIFE.

// for examplen => 
    // (function() {
    //     let x = 10; // This `x` exists only inside the IIFE
    //     console.log(x); // 10
    // })();
    
    // console.log(x); // Error! `x` is not defined here
    


// syntax of IIFE => (()=>{})();

    // (function daru () {
    //     console.log(`DB CONNECTED`);
    // })();

    // Avoid Variable conflicts in loops
//IIFEs are often used in loops to create separate scopes for variables.

// for example =>

    for(let i = 0 ; i < 5 ; i++){
        (function(index){
            setTimeout(function(){
                console.log(index);
            },5000);
        })(i);
    }

    for(let i = 0 ; i < 5 ; i++){
        (function(index){
            setTimeout(function(){
                console.log(index);
            },5000);
        })(i);

    }

    // When to use IIFE ?

    // (1.) When you want to create a private scope for variables.
    // (2.) When you want to avoid polluting the global scope.
    // (3.) When you need to create a function that runs immediately and doesn't need to be stored in a variable.
    // (4.) When you need to create a function that has no dependencies on other variables.
    // (5.) When you need to create a function that can be called multiple times without overwriting each other.
    // (6.) When you need to create a function that you want to run immediately but don't want to expose it to the global scope.


    // Note : IIFEs are not a replacement for module patterns or closures. They are a way to create a private scope for variables and functions. They are not used to create reusable functions. If you need to create reusable functions, you should use module patterns or closures.

// for more detail visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/IIFE


//===========================================================

// Think of IIFE as a "one-time use" function:

//It does its job, cleans up, and disappears without leaving a mess behind.