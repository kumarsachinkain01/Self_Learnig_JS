// arrray = 

// let myArr = [1,2,3,4,5,6];

// console.log(myArr);
// const myHeros = ["Saktiman", "Nagraaj", "padnos"];

// // console.log(myHeros);

// const myArr2 = new Array(10,20,30,40,50,60);

// console.log(myArr2);

// Array methods

// myArr.push(7); // Add element at the end
// myArr.push(8); // Add element at the end
// myArr.pop(); // Remove elementat the end
// myArr.unshift(100); // Remove element at the start;
// myArr.shift(); // Remove element at the form start

// let myArr = [1,2,3,4,5,6];
// // console.log(myArr.includes())
// // console.log(myArr.indexOf(3));

//  const newArr = myArr.join(); // join means convert into string;
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice;



// const newArr3 = [10,20,30,40,50 ,60, 70 , 80,90 , 100];

// const myN2 = newArr3.slice(1, 5);
// console.log("myN2 :-" , myN2); //myN2 :- [ 20, 30, 40, 50 ]
// console.log("original :-", newArr3)

// const myN3 = newArr3.splice(1, 5); // splice methods changed / modified original Arrays
// console.log("myN3 :-", myN3);
// console.log("Original :-", newArr3)


// Array part-2 ;

// const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
// const dc_Heros = ["SuperMan", "Flash", "BatMan"];
// const ds_Heros = ["SuperMan", "Flash", "BatMan"];

// marvel_heros.push(dc_Heros);
// console.log(marvel_heros); // [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]
// console.log(marvel_heros[1][3]); output -> n

// const totalHeros = marvel_heros.push(dc_Heros);
// console.log(totalHeros[2,[2]]);



// console.log(marvel_heros.concat(dc_Heros))
// output [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]
// const All_Heros = marvel_heros.concat(dc_Heros);
// console.log(All_Heros)

// spread operator

// const All_Heros = [...marvel_heros,...dc_Heros];

// console.log(All_Heros) //[ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

// const another = [1,2,3,[4,5,6,7],8,[9,10,11,12,13,14,15],16,17,[18,[19,[20,21,[22,23,24],25],26]]];
// // // console.log(another)

// const value = another[8][1][1][2][2];
// console.log(value) // output -> 24;



// const realAnother = another.flat(Infinity);
// console.log(realAnother); 
/* [
    1,  2,  3,  4,  5,  6,  7,  8,
    9, 10, 11, 12, 13, 14, 15, 16,
   17, 18, 19, 20, 21, 22, 23, 24,
   25, 26]*/

// self => .from, .of , .is

// is 

// console.log(Array.isArray(['Sachin', "Kumar","Kain"]));//true
// console.log(Array.isArray("Sachin")) // false

// console.log(Array.from("Sachin")); // output [ 'S', 'a', 'c', 'h', 'i', 'n' ];


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));
// // output [100,200,300];


