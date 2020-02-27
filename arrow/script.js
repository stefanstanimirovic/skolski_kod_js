let suma = function(a, b) {
    let s = a + b;
    return s;
}

let suma2 = (a, b) => {
	return a + b;
}


console.log(suma(1 ,4));
console.log(suma(9, 4));
console.log(suma2(4, 5));

let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

let echo = (s1, s2) => {
    let s = s1 + ", " + s2;
    console.log(s);
}

echo("Pera", "Peric");
echo("Laza", "Lazic");

// Obicne funkcije
function neparan(n) {
    console.log("Obicna funkcija");
    if(n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(neparan(5));

// Arrow funkcija
let neparan2 = (n) =>  {
    console.log("Arrow funkcija");
    if(n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(neparan2(7));

// Obicna funkcija
function maks2(a, b) {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

// Arrow funkcija
let maksA2 = (a, b) => {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(maksA2(5, 8));
console.log(maksA2(9, 9));

// Obicna funkcija
function maks4(a, b, c, d) {
    let m1 = maks2(a, b);
    let m2 = maks2(c, d);
    let m3 = maks2(m1, m2);
    return m3;
}

// Arrow funkcija
let maksA4 = (a, b, c, d) => {
    /*let m1 = maks2(a, b);
    let m2 = maks2(c, d);
    let m3 = maks2(m1, m2);*/
    let m1 = maks2(a, b);
    let m2 = maks2(m1, c);
    let m3 = maks2(m2, d);
    return m3;
}
console.log(maksA4(5, -1, 9, 4));

//Obicna funkcija
function slika(putanja) {
    return `<img src='${putanja}' alt='Blabla'>`;
} 

// Arrow funkcija
let slika2 = (putanja) => {
    return `<img src='${putanja}' alt='Blabla'>`;
} 

// 1) Telo arrow funkcije se sastoji
//  samo od return naredbe
let slika3 = 
    (putanja) => `<img src='${putanja}' alt='Blabla'>`;

// 2) Arrow funkcija prima JEDAN parametar
let slika4 = 
    putanja => `<img src='${putanja}' alt='Blabla'>`;

let div = document.getElementById('blabla');
div.innerHTML = slika3('images/oliveoil.jpg');
div.innerHTML = slika4('images/pasta.jpg');

let sledbenik = n => n + 1;
console.log(sledbenik(5));




