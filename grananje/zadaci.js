let brojPoena = 67;
if(brojPoena > 90) {
    console.log("Desetka");
}
else if(brojPoena > 80) {
    console.log("Devetka");
}
else if(brojPoena > 70) {
    console.log("Osmica");
}
else if(brojPoena > 60) {
    console.log("Sedmica");
}
else if(brojPoena > 50) {
    console.log("Sestica");
}
else {
    console.log("pao ispit");
}

let datum = new Date();
let dan = datum.getDay(); 
    // 0-Sunday, 1-Monday, ..., 6 - Saturday
if(dan == 0) {
    console.log("Vikend");
}
else if(dan == 6) {
    console.log("Vikend");
}
else {
    console.log("Radni dan");
}

let vreme = datum.getHours();
if(vreme >= 18) {
    console.log("Dobro vece");
}
else if(vreme >= 12) {
    console.log("Dobar dan");
}
else {
    console.log("Dobro jutro");
}

let dan1 = 7;
let mesec1 = 2;
let godina1 = 2020;
let dan2 = 5;
let mesec2 = 4;
let godina2 = 2020;
if(godina1 < godina2) {
    console.log("Prvi datum se prvi desio");
}
else if(godina1 > godina2) {
    console.log("Drugi datum se prvi desio");
}
else if(mesec1 < mesec2) {
    console.log("Prvi datum se prvi desio");
}
else if(mesec1 > mesec2) {
    console.log("Drugi datum se prvi desio");
}
else if(dan1 < dan2) {
    console.log("Prvi datum se prvi desio");
}
else if(dan1 > dan2) {
    console.log("Drugi datum se prvi desio");
}
else {
    console.log("Datumi su isti");
}

let p1 = 9;
let k1 = 17;
let p2 = 12;
let k2 = 21;
/*
if((p1 <= p2) && (p2 <= k1)) {
    console.log("Preklapaju se");
}
else if((p2 <= p1) && (p1 <= k2)) {
    console.log("Preklapaju se");
}
else {
    console.log("Ne preklapaju se");
}
*/
if ((p1 <= p2 && p2 <= k1) || (p2 <= p1 && p1 <= k2)) 
{
    console.log("Smene se preklapaju");
}
else {
    console.log("Smene se ne preklapaju");
}

let g;
console.log(g);

let broj = 7;
let paran;
if(broj % 2 == 0) {
    paran = true;
}
else {
    paran = false;
}
console.log(paran);
























