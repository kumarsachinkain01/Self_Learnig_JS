let intervalId;
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const sayDate = function(str){
   console.log(str,Date.now())
}


start.addEventListener('click', () => {
    // only start a new interval if one is not already running

    if(!intervalId){
        intervalId = setInterval(sayDate,1000,"HelloWorld!");
        console.log("Start interval");
    }
});

stop.addEventListener('click', () => {
    // stop the current interval if one is running
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
        console.log( "Stopped interval");
    }
 });





