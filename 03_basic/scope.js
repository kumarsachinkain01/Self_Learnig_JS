// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a,b,c)

// scope -> {}


// =====Var======

//Scope: Works within a function or globally (not block-scoped).

//Example: It doesn’t care about {} (curly brackets) outside of functions.]

//Re-declaration: You can declare the same variable name again in the same scope.

//Use: It's older and less preferred now because it can lead to confusing bugs.
var x = 10;
if (true) {
    var x = 20; // Same variable as above
    console.log(x); // 20
}
console.log(x); // 20 (Oops, it changed!)

// =====Let======

//Scope: Works within a block (curly brackets) {}.
//Re-declaration: You can't declare the same variable name again in the same block.

//Use: Preferred when you need a variable that can change its value.

let x = 10;
if (true) {
    let x = 20; // A new variable inside the block
    console.log(x); // 20
}
console.log(x); // 10 (Original value outside the block)

// =====Const======
//Scope: Works within a block (curly brackets) {}.
//Re-declaration: You can't declare the same variable name again in the same block.
//Use: Preferred when you need a variable that can't change its value. or Best for values that should not change (constants).

const x = 10;
console.log(x); // 10
x = 20; // Error! You can't re-assign a `const`.


//==== BEST PRACTICE =====
//Use let for variables that might change.
//Use const for values that won’t change.
//Avoid var unless you're working with older code.

