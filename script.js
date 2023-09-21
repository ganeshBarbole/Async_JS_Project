
let color = function(){
    const value = "0123456789ABCDEF";
    let hex = "#";
    for(let i = 0; i < 6 ; i++){
     hex += value[Math.floor(Math.random() * 10)];
    }
    return hex;
}
let interval
let startChangingColor = function(){
    if(!interval)
    {interval= setInterval(changecolor,1000);}
    
    function changecolor(){
    document.body.style.backgroundColor = color();}
}
let stopChangingColor = function(){
    clearInterval(interval)
    interval = null;
}

let start = document.getElementById("Start");
start.addEventListener("click",startChangingColor)

let div = document.querySelector(".container")
let stop = document.createElement("button");
stop.innerHTML = "Stop";
stop.className ="button";
stop.setAttribute("id","stop")
div.appendChild(stop);

stop.addEventListener("click",stopChangingColor)