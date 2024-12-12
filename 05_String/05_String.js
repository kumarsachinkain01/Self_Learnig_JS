
// older version to write code  and concatinate string;
// const name = "Sachin";

// const repoCount = 50;

// console.log(name +" " + repoCount);

// ES6 template literals;
// newer versions// mordern ways ;

// console.log(`Hello my Name is ${name} and my RepoCount is ${repoCount}`);


// const gameName = new String("SachinKumar");
// console.log(gameName.split()); // convert string to array;

// let sentence = "Hello World ! Welcome to programming.";
// let newSentence = sentence.split(" ");

// newSentence.forEach((value, i) => {
 
//    console.log(value, i)
// });
// console.log(gameName.substring(2,7)); // chinK
//  console.log(gameName.slice(2,7)) // chinK
// console.log(gameName.endsWith("SachinKumar", 11));//true
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf("n"));
// console.log(gameName.__proto__);
// console.log(typeof gameName);

// let url = "https://example.com?name=Sachin&age=25";
// let queryString = url.split("?")[1];
// let params = queryString.split("&");
// console.log(params); // Output: ['name=Sachin', 'age=25']


let str = "a,b,c,d,e";
let limited = str.split(",", 3);
console.log(limited); // Output: ['a', 'b', 'c']