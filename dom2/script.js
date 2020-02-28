// Roditelj element
let par = document.querySelector('p');
console.log(par.parentElement); // div
console.log(par.parentElement.parentElement); // body

console.log(par.parentElement.children); 
  // Kolekcija svih deteta roditelja paragrafa

// Braca/sestre elementi
console.log(par.nextElementSibling); 
console.log(par.previousElementSibling);
console.log(par.parentElement.nextElementSibling.children[1]);
console.log(par.parentElement.parentElement.previousElementSibling);

// par.children - Kolekcija HTML tagova (deca paragrafa)
// par.children[0] - Jedan tag - prvo dete paragrafa
// par.children[1] - Jedan tag - drugo dete paragrafa
// Za kolekciju je moguce koristiti for petlju:
let div = par.parentElement;
let decaDiva = div.children; // Kolekcija
for(let i = 0; i < decaDiva.length; i++) {
    console.log(decaDiva[i]);
}
// Skraceno:
for(let i = 0; i < par.parentElement.children.length; i++) {
    console.log(par.parentElement.children[i]);
}

// HTML kolekcija ne radi forEach petlja!!!
// Sledeci kod ne radi:
/*
par.parentElement.children.forEach(d => {
    console.log(d);
});
*/
// Ukoliko zelimo forEach petlju kod kolekcija,
// moramo kolekciju da konvertujemo u niz:
let niz = Array.from(par.parentElement.children);
niz.forEach(elem => {
    console.log(elem);
});

let link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'http://www.wikipedia.org');
// Ako vrednost atributa vec postoji, ona se menja
link.setAttribute('id', 'link1');
link.innerText = "Wikipedia";
// Ako ne postoji, ona se postavlja 
console.log(link);

// Svim linkovima na stranici postaviti da se otvaraju u novom tabu.
let linkovi = document.querySelectorAll('a');
// querySelectorAll - Lista => Moze forEach petlja
linkovi.forEach(link => {
    link.setAttribute('target', '_blank');
    // <a target = "_blank">
});

// Svim slikama dodati alternativni tekst.
let slike = document.querySelectorAll('img');
slike.forEach(slika => {
    slika.setAttribute('alt', 'Slika');
});

// Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.
let paragrafi = document.querySelectorAll('p');
paragrafi.forEach(par => {
    par.setAttribute('style', 'color: purple');
});

// Sve parne paragrafe na stranici obojiti zelenom bojom, a sve neparne paragrafe obojiti crvenom bojom.
paragrafi.forEach((par, i) => {
    if(i % 2 == 0) {
        //par.setAttribute('style', 'color: green');
        //par.setAttribute('style', 'color: green; background-color: blue;');
        par.style.color = "green";
        par.style.padding = "15px";
        par.style.backgroundColor = "blue";
        console.log(par.style);
    }
    else {
        par.setAttribute('style', 'color: red');
        // par.style = link.style; - ceo stil jednog elementa se primenjuje na drugi
        // par.style.fontSize = link.style.fontSize; - pojedinacni stil jednog elementa se primenjuje na drugi
    }
});

linkovi.forEach((link, i) => {
    link.style.padding = "5px";
    link.style.fontSize = "18px";
    link.style.textDecoration = "none";
    if(i % 2 == 0) {
        link.style.backgroundColor = "green";
        link.style.color = "purple";
    }
    else {
        link.style.backgroundColor = "blue";
        link.style.color = "white";
    }
});

par.classList.add('error'); // Dodavanje klase elementu
console.log(par.classList);
par.classList.remove('error'); // Brisanje klase elementu
par.classList.toggle('error'); // Switch za klase