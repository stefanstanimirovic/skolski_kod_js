import createDiv from "./modules/result_div.js";
import {tacniOdgovori, calculateScore} from "./modules/answers.js";
import generateScore from "./modules/clock.js";

let form = document.querySelector('form');


let [div, h2] = createDiv('intro', document.body, 
                        document.body.children[1]);

form.addEventListener('submit', event => {
    event.preventDefault();
    let odg1 = form.q1.value; 
    let odg2 = form.q2.value;
    let odg3 = form.q3.value;
    let odg4 = form.q4.value;
    let odgovori = [odg1, odg2, odg3, odg4];
    let score = calculateScore(odgovori);
    div.style.display = "block";
    scrollTo(0, 0);
    generateScore(h2, score);
});