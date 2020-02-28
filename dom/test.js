//Query selektor po imenu taga
let paragraf = document.querySelector('p');
console.log(paragraf);
let div = document.querySelector('div');
console.log(div);

//Query selektor po imenu klase
let klasaTest = document.querySelector('.test');
console.log(klasaTest);

//Query selektor po imenu klase
let klasaTestParagraf = document.querySelector('p.test');
console.log(klasaTestParagraf);

//Query selektor po id-u
let idParagraf = document.querySelector('#treci_paragraf');
console.log(idParagraf);

//Query selektor za sve <p> tagove
let sviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi);
console.log(typeof sviParagrafi);

//Pristupanje elementu Node liste
console.log(sviParagrafi[0]);

//Kretanje kroz Node listu
sviParagrafi.forEach(elem => {
    console.log(elem);
});

//getElementsByClassName
let klasaTestDoc = document.getElementsByClassName('test');
console.log(klasaTestDoc);

//Neuspelo kretanje foreach petljom kroz HTML Kolekciju
/*
klasaTestDoc.forEach(elem => {
    console.log(elem);
});
*/
/*Kretanje HTML kolekcijom pomoću for petlje*/ 
console.log(klasaTestDoc[0]);
for(let i=0; i<klasaTestDoc.length; i++){
    console.log(klasaTestDoc[i]);
}

/*InnerText - Dodavanje tekstualnog sadržaja na stranicu*/
paragraf.innerText += ' Zdravo!';

/*innerHTML - Dodavanje html sadržaja*/ 
paragraf.innerHTML += '<span> Kako si? </span>';

/*VEŽBANJE*/
//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“
sviParagrafi.forEach(elem => {
    //elem.innerText += 'VAŽNO!!!';
    elem.innerHTML += '<b> VAŽNO!!! </b>';
});

//Ispisati kvadrate brojeva od 1 do n, svaki u novom paragrafu
sviParagrafi.forEach( (elem, index) => {
    let kv = (index+1)**2;
    elem.innerText += ` ${kv}`;
});

//Napraviti niz od najmanje tri imena Proći nizom i imena ispisati:
//Svako u novom paragrafu
let imena = ['Jovana', 'Miljana', 'Milena'];
sviParagrafi.forEach( (elem, index) => {
    elem.innerText += ` ${imena[index]}` ;
});


//U listi kao stavke liste
let lista = document.querySelector('ul');
imena.forEach( elem => {
    let item = `<li> ${elem} </li>`;
    lista.innerHTML += item;
});

//U jednoj koloni tabele
let tabela = document.querySelector('table');
let sadrzaj = "";
imena.forEach( ime => {
    let item = `<tr><td>${ime}</td></tr>`;
    sadrzaj += item;
});
tabela.innerHTML += sadrzaj;

// Dohvatamo svu decu body taga
let potomci = document.body.children;
console.log(potomci);
// HTML kolekcija - ne moze direktno forEach petlja
// Za forEach petlju, moramo HTML kolekciju
// da konvertujemo u niz.
let niz = Array.from(potomci);
niz.forEach(elem => {
    console.log(elem);
});

// Dohvatimo svu decu ul liste
// let lista = document.querySelector('ul');
let decaListe = lista.children;
let nizDecaListe = Array.from(decaListe);
nizDecaListe.forEach(elem => {
    console.log(elem);
});










