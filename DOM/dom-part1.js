const title = document.getElementById('title');

const span = document.getElementsByTagName('span'); 

console.log(span);
// // // span.style.display = 'none';

title.textContent = 'Hello, World!';

title.getAttribute('id');
console.log(title);



title.setAttribute('title', title);
// console.log(title);

// // how to set styling our element using js ?


title.style.fontSize = '20px';
title.style.fontWeight = 'bold';
title.style.fontFamily ='Arial, sans-serif';
title.style.textAlign = 'center';
title.style.border = '2px solid greenyellow';
title.style.padding = '10px';
title.style.borderRadius = '20px';
title.style.backgroundColor = '#FFFFFF';
title.style.color = 'black';

// // add content ?
console.log(title.textContent);// DOM LEARNIG! Test Text
console.log(title.innerHTML);//  DOM LEARNIG! <span style="display: none;">Test Text</span>
console.log(title.innerText); // DOM LEARNIG!

const hello = document.querySelector('.hello');
console.log(hello);

const input = document.querySelector('input[type="passeord"]')
const inp = document.querySelector('.inp');



console.log(inp);


const myUl = document.querySelector('ul');


console.log(myUl);;

const turnGreen = myUl.querySelector('li');

turnGreen.style.backgroundColor = 'green';
// turnGreen.style.padding = '5px';
// turnGreen.style.margin = '5px';
turnGreen.style.borderRadius = '10px';

const tempLiList = document.querySelectorAll('li');
console.log(tempLiList);


// // wrong way to give styling ;
// // tempLiList[1].style.backgroundColor = 'red';
// // tempLiList[1].style.backgroundColor = 'orangered';
// // tempLiList[1].style.padding = '5px';
// // tempLiList[1].style.margin = '5px';
// // tempLiList[1].style.borderRadius = '10px';

// // correct way to give styling ;
tempLiList.forEach((val) => {
    val.style.backgroundColor = 'greenyellow';
    val.style.padding = '5px';
    val.style.margin = '5px';
    val.style.borderRadius = '10px';
    val.style.color = 'black';
})
const list = document.getElementsByClassName('li-list');
console.log(list);
// // how to convert HTMLCollection to Array ?

const arrList = Array.from(list);
console.log(arrList)


arrList.forEach((li) => {
    li.style.display = 'flex';
    li.style.textAlign = 'center';
    li.style.textContent = 'center';
    li.style.backgroundColor = 'yellow';
    li.style.color = 'black';
    li.style.padding = '5px';
    li.style.margin = '10px';
    li.style.borderRadius = '10px';
    li.style.border = '2px solid white';
    li.style.fontSize = '18px';
    li.style.fontWeight = 'bold';
    li.style.fontFamily ='Arial, sans-serif';
    li.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.5)';
    li.style.cursor = 'pointer';
})

// example of switchcase when i pressed no. from 1 - 7 ; 

// Function to display the day of the week based on user input

// let userInput = new Date().getDate();
// function getDayOfWeek(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invalid number! Please enter a number between 1 and 7.");
//     }
// }

// getDayOfWeek(userInput);















