// Modul clock.js

let generateScore = (h2, score) => {
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
};

export default generateScore;