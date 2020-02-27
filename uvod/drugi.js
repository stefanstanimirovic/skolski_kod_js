// Dohvatamo trenutno vreme
// 1) Kreiramo objekat Date
let datum = new Date();

let sati = datum.getHours(); // trenutno sati
let minuti = datum.getMinutes(); // trenutno minuta
console.log(sati, minuti);

let minutaOdPonoci = sati * 60 + minuti;
console.log(minutaOdPonoci);

let a = 3;
let b = 5;
console.log(a + b); 

a = "3";
b = "5";
console.log(a + b);

a = 3;
b = "5";
console.log(a + b);

let c;
a = "5";
b = 3;
c = 9;
console.log(a + b + c);
console.log(b + c + a);

console.log("Prvi broj je: " + b + ", a drugi je: " + c);

// Template string - `` (backticks)
// Obican string - '' ili ""
console.log(`Prvi broj je: ${b}, a drugi je: ${c}`);
console.log('Prvi broj je: ${b}, a drugi je: ${c}');
console.log(5 / "hello");


