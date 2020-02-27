function suma(n, m) {
    if(n > m) {
        return 0;
    }
    let s = 0;
    for(let i = n; i <= m; i++) {
        s += i;
    }
    return s;
}
console.log(suma(7, 2));
let p = suma(6, 12);
console.log(p);
p = suma(1, 9);
console.log(p);
console.log(suma(5, 18));

function mnozi(n, m) {
    let p = 1;
    for(let i = n; i <= m; i++) {
        p *= i; // p = p * i;
    }
    return p;
}

console.log(mnozi(3, 6));

function arsr(n, m) {
    let zbir = 0;
    let broj = 0;
    for(let i = n; i <= m; i++) {
        zbir = zbir + i; // zbir += i;
        broj = broj + 1; // broj++; ili broj += 1;
    }
    return zbir / broj;
}

console.log(arsr(5, 88));

function arsr3(n, m) {
    let zbir = 0;
    let broj = 0;
    for(let i = n; i <= m; i++) {
        if(i % 10 == 3) {
            zbir += i;
            broj++;
        }
    }
    if(broj > 0) {
        return zbir / broj;
    }
    return 0;
    // k / 0 => Infinity
    // 0 / 0 => NaN
}

console.log(arsr3(1, 10));
console.log(arsr3(6, 9));

function deljivSaTri(n, m) {
    let broj = 0;
    for(let i = n; i <= m; i++) {
        if(i % 3 == 0) {
            //console.log(i);
            broj++;
        }
    }
    return broj;
}

console.log("Broj brojeva deljivih sa tri je: " 
                + deljivSaTri(5, 14));

let rez = deljivSaTri(5, 14);
console.log(`Broj brojeva deljivih sa tri je: ${rez}`);
let a = 5;
let b = 14;
console.log(`Broj brojeva deljivih sa tri je: ${deljivSaTri(a, b)}`);

function slika(putanja) {
    // return "<img src='" + putanja + "' alt = 'Blabla'>";
    return `<img src='${putanja}' alt='Blabla'>`;
}

let elem = document.getElementById('blabla');
//console.log(elem.innerHTML);
elem.innerHTML = slika('images/oliveoil.jpg');
//console.log(elem.innerHTML);
elem.innerHTML += slika('images/pasta.jpg');


function paragraf(boja) {
    return `<p style='color: ${boja}'>Tekst tekst...</p>`;
}

elem.innerHTML += paragraf('red');
elem.innerHTML += paragraf('blue');

function paragraf2(boja, tekst) {
    return `<p style='color: ${boja}'>${tekst}</p>`;
}

elem.innerHTML += paragraf2('green', 'Lorem ipsum...');
elem.innerHTML += paragraf2('yellow', 'Pera Peric');

function paragraf3(velicina, tekst) {
    return `<p style='font-size: ${velicina}px'>${tekst}</p>`;
}

elem.innerHTML += paragraf3(24, "Neki tekst");
elem.innerHTML += paragraf3(46, "Neki drugi tekst");


function pisiPetParagrafa() {
    let res = "";
    for(let i = 1; i <= 5; i++) {
        let j = i * 10;
        res = res + 
          `<p style='font-size: ${j}px'>Neki tekst</p>`;
    }
    return res;
}

elem.innerHTML += pisiPetParagrafa();




