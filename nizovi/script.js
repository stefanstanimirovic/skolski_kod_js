let cars = ["Toyota", "BMW", "Opel"];
console.log(cars);
console.log(cars[0]);
console.log(cars[2]);

// Niz od n elemenata
// Indeksi su: 0, 1, 2, ..., n - 1

cars[1] = "Ford";
console.log(cars);

let test = [6.07, "Sreda", -9, false];
console.log(test);

// Ispis svih elemenata niza
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Ispis svih elemenata niza
for(let i = 0; i <= cars.length - 1; i++) { 
    // i = 0, 1, 2
    console.log(cars[i]);
}

// Ispis svih elemenata u obrnutnom redosledu
for(let i = cars.length - 1; i >= 0; i--) { 
    // i = 2, 1, 0
    console.log(cars[i]);
}

let niz = [1, 2, 3, 4, 5];

// Odrediti sumu elemenata celobrojnog niza

let suma = 0;
for(let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
}
console.log(suma);

// Odrediti proizvod elemenata celobrojnog niza

let proizvod = 1;
for(let i = 0; i < niz.length; i++) {
    proizvod = proizvod * niz[i];
}
console.log(proizvod);

// Odrediti srednju vrednost elemenata celobrojnog niza
suma = 0;
for(let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
}
let srvr;
if(niz.length == 0) {
    srvr = 0;
}
else {
    srvr = suma / niz.length;
}
console.log(srvr);

// Odrediti maksimalnu vrednost u celobrojnom nizu.

niz = [5, -9, 6, -4, -5, 5, 9, 9, 8, 0, -2];
let max = niz[0]; // GRESKA: max = 0 !
for(let i = 1; i < niz.length; i++) {
    if(niz[i] > max) {
        max = niz[i];
    }
}
console.log(max);

// Odrediti minimalnu vrednost celobrojnog niza
let min = niz[0];
for(let i = 1; i < niz.length; i++) {
    if(niz[i] < min) {
        min = niz[i];
    }
}
console.log(min);

// Napisati arrow funkciju koja vraca
// minimalni element niza
let minArrow = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

console.log(minArrow(niz));
console.log(minArrow([1, -9, 3, 8, 11, 44, -66]));

// Odrediti indeks maksimalnog elementa cel. niza

let maxIndex = niz => {
    let max = niz[0]; // vrednost maksimalnog elementa niza
    let index = 0; // indeks maksimalnog elementa niza
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(maxIndex(niz));
console.log(maxIndex([1, 8, 7, 8, 4]));

// Napisati arrow funkciju koja vraca broj elemenata
// celobrojnog niza koji su veci od sr. vr.
let arSr = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma / niz.length;
}

let brojSrVr = niz => {
    let srvr = arSr(niz);
    let broj = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > srvr) {
            broj++;
        }
    }
    return broj;
}
console.log(brojSrVr(niz));

// Izracunati zbir pozitivnih elemenata celobrojnog niza
let zbirPoz = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(zbirPoz(niz));

// Odrediti broj parnih elemenata u cel. nizu
let brPar = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            broj++;
        }
    }
    return broj;
}
console.log(brPar(niz));

// Odrediti broj parnih elemenata sa neparnim indeksima
let brParNepInd = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && i % 2 != 0) {
            broj++;
        }
    }
    return broj;
}
console.log(brParNepInd(niz));

// Promeniti znak svakom elementu celobrojnog niza  
let promeniZnak = niz => {
    for(let i = 0; i < niz.length; i++) {
        niz[i] *= -1;
    }
}
promeniZnak(niz);
console.log(niz);

// Formirati ul listu

let lista = niz => {
    // Elementi niza su stringovi
    let result = "";
    result += "<ul>";
    for(let i = 0; i < niz.length; i++) {
        result += `<li>${niz[i]}</li>`;
    }
    result += "</ul>";
    return result;
}
let div = document.getElementById('blabla');
div.innerHTML = lista(['Jaja', 'Mleko', 'Jogurt']);

let noviNiz = niz => {
    let result = [];
    for(let i = 0; i < niz.length / 2; i++) {
        console.log(i, i + niz.length / 2);
        result.push
            ((niz[i] + niz[i + niz.length / 2]) / 2);
    }
    console.log(result);
    return niz;
}

let a = [9, 4, 5, 8, 9, 1];
noviNiz(a);




