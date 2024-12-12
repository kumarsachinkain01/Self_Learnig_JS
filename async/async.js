setTimeout(function(){
    console.log('Hello World Sachin ...!')
},2000)

const saySachin = function(){
    console.log('Hello World Sachin...!')
}

setTimeout(saySachin,2000)

// const h1 = document.querySelector('h1');
// // console.log(h1);

// h1.innerHTML = "Best JS Series";
// console.log(h1);

const changeText = function(){
    const h1 = document.querySelector('h1');
    h1.innerHTML = "Best JS Series";
    console.log(h1);
}
const changeMe = setTimeout(changeText,2000);


const stopBtn = document.querySelector('#stop')

stopBtn.addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("Stopped")
})

setInterval(function(){
    console.log('Hello World Sachin ...!')
},2000)

