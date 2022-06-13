function getTime (time){
    const data = new Date(time * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

let timer = document.querySelector('.watch');
let start = document.querySelector('.start')
let stopp = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let seconds = 0
var time;
function starttimer(){
     time = setInterval(function(){
        seconds ++;
        timer.innerHTML = getTime(seconds);
    }, 1000);
}

start.addEventListener('click',function(event) {
    timer.classList.remove('pausado')
    clearInterval(time);
    starttimer();
})
stopp.addEventListener('click', function(event){
    clearInterval(time);
    timer.classList.add('pausado')
});
reset.addEventListener('click', function(event){
    clearInterval(time);
    timer.classList.remove('pausado')
    timer.innerHTML='00:00:00'
    seconds 
});
