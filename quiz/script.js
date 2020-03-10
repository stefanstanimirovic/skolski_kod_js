let form = document.querySelector('form');
let tacniOdgovori = ["B", "A", "B", "B"];

let div = document.createElement('div');
div.classList.add('intro');
let text = document.createElement('div');
text.classList.add('text');
let h2 = document.createElement('h2');
text.appendChild(h2);
div.appendChild(text);

let whereChild = document.body.children[1];
//console.log(whereChild);
document.body.insertBefore(div, whereChild);
div.style.display = "none";

form.addEventListener('submit', event => {
    event.preventDefault();

    // Potrebno je odrediti koji radio je selektovan
    // Generalni nacin:
    /*
    let radios = document.querySelectorAll('.q1');
    radios.forEach(radio => {
        if(radio.checked) {
            console.log(radio.value);
        }
    });
    */
    // Za forme:
    // 1) U JS kodu - objekat forme (promenljiva form)
    // 2) Svi elementi forme u HTML-u moraju da imaju name atribut
    let odg1 = form.q1.value; // value cekiranog radio butona
    let odg2 = form.q2.value;
    let odg3 = form.q3.value;
    let odg4 = form.q4.value;
    console.log(odg1, odg2, odg3, odg4);
    let odgovori = [odg1, odg2, odg3, odg4];
    let score = 0;
    odgovori.forEach((odgovor, index) => {
        if(odgovor == tacniOdgovori[index]) {
            score += 25;
        }
    });
    console.log(score);
    div.style.display = "block";
    scrollTo(0, 0);
    //h2.textContent = `Vaš odgovor je: ${score}%`;
    let broj = 0;
    let clock = setInterval(() => {
        h2.textContent = `Vaš odgovor je: ${broj}%`;
        if(broj < score) {
            broj++;
        }
        else {
            clearInterval(clock);
        }
    }, 10);
});