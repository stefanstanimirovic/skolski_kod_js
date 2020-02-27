let a = 5;
let b = 8;
if(a > b) {
    console.log(`${a} je vece od ${b}`);
}
console.log("Komanda posle if");

a = 6;
b = '6';
if(a == b) {
    console.log(`${a} je jednako ${b}`);
}
if(a === b) {
    console.log(
        `${a} je jednako ${b} po t. i v.`);
}
if(a != b) {
    console.log(`${a} nije jednako ${b}`);
}
if(a !== b) {
    console.log(
        `${a} nije jednako ${b} po t. i v.`);
}

a = 5;
b = 12;

if(a > b) {
    console.log(`${a} je vece od ${b}`);
}
else {
    console.log(`${a} nije vece od ${b}`);
}


if(a == b) {
    console.log(`${a} je jednako ${b}`);
}
else {
    console.log(`${a} nije jednako ${b}`);
}
if(a === b) {
    console.log(
        `${a} je jednako ${b} po t. i v.`);
}
else {
    console.log(
        `${a} nije jednako ${b} po t. i v.`);
}

let temperatura = -3;
if(temperatura >= 0) {
    console.log("Temperatura je u plusu");
}
else {
    console.log("Temperatura je u minusu");
}

let pol = "Z";
let div = document.getElementById('blabla');
if(pol == "M") {
    console.log("Pol je muski");
    div.innerHTML = "<img src='male.png' alt='Muski'>";
} 
else {
    console.log("Pol je zenski");
    div.innerHTML = "<img src='female.png' alt='Zenski'>";
}

let datum = new Date();
let sati = datum.getHours();
if(sati >= 12) {
    console.log("Popodne");
}
else {
    console.log("Pre podne");
}

let trenGodina = datum.getFullYear(); 
let godiste = 2000;
if(trenGodina - godiste >= 18) {
    console.log("Osoba je punoletna");
}
else {
    console.log("Osoba je maloletna");
}

let x = 9;
let y = -3;
let z = 15;
let max = x; 
if(y > max) {
    max = y;
}
if(z > max) {
    max = z;
}
console.log(max);

















