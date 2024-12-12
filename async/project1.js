// generate a random color ;

const randomColor = function(){
    const hax = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hax[Math.floor(Math.random() * 16)];
        
    }
    return color;
    

}

let intervalId;
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const button = document.querySelectorAll('button');

button.forEach(btn => {
    btn.style.cursor = 'pointer';
});

const startChangeColor = function (){
    if(!intervalId){
        intervalId = setInterval(changeBackgroundColor, 2000);
    }

    function changeBackgroundColor(){
        document.body.style.backgroundColor = randomColor();
    }
};


startBtn.addEventListener('click',startChangeColor);
const stopChangeColor = function(){

    clearInterval(intervalId);    
    
    intervalId = null;

}
stopBtn.addEventListener('click',stopChangeColor);

