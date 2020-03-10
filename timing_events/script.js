let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let timer;

btn1.addEventListener('click', () => {
    timer = window.setTimeout(() => {
        console.log("Zdravo!");
    }, 1000 * 2);
    /*
    setTimeout(() => {
        console.log("Zdravo ranije!");
    }, 500);
    */
});

btn2.addEventListener('click', () => {
    clearTimeout(timer);
});

let div = document.querySelector("#result");
let btn3 = document.querySelector("#btn3");
let brojac = 0;
let clock;
let clockIsSet = false;

btn3.addEventListener('click', () => {
    if(!clockIsSet) {
        clockIsSet = true;
        clock = setInterval(() => {
            brojac++;
            div.innerHTML = brojac;
        }, 1000);
    }
});

let btn4 = document.querySelector("#btn4");
btn4.addEventListener('click', () => {
    clearInterval(clock);
    clockIsSet = false;
});

let sat = document.querySelector('#sat');
setInterval(function() {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(sati < 10) {
        sati = "0" + sati;
    }
    if(minuti < 10) {
        minuti = "0" + minuti;
    }
    if(sekunde < 10) {
        sekunde = "0" + sekunde;
    }
    sat.innerHTML = `${sati}:${minuti}:${sekunde}`;
}, 1000);


