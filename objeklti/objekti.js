let prosek = [0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1,
                21.4, 18.5, 11.4, 4.5, 2.4];

let dan = {
    datum: "2020/02/24",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [-2, 3, 7, 12, 12, 6, 2, -1],

    // Metoda koja vraca prosecnu temperaturu za dan
    prosek: function() {
        let temp = this.temperature;
        let suma = 0;
        temp.forEach(t => {
            suma += t;
        });
        let p = suma / temp.length;
        return p;
    },

    // Prebrojava koliko merenja je bilo sa natprosečnom temperaturom.
    brojNatprosek: function() {
        let p = this.prosek();
        let temp = this.temperature;
        let broj = 0;
        temp.forEach(t => {
            if(t > p) {
                broj++;
            }
        });
        return broj;
    },

    // Prebrojava koliko merenja je bilo sa maksimalnom temperaturom.
    brojMaksimalnih: function() {
        let temp = this.temperature;
        let max = temp[0];
        for(let i = 1; i < temp.length; i++) {
            if(temp[i] > max) {
                max = temp[i];
            }
        }
        let broj = 0;
        temp.forEach(t => {
            if(t == max) {
                broj++;
            }
        });
        return broj;
    }, 

    // Prima dva parametra koji predstavljaju dve temperature, 
    // a koja broji koliko merenja je bilo između ove dve temperature.
    brojIzmedju: function(t1, t2) {
        if(t1 > t2) {
            let t = t1;
            t1 = t2;
            t2 = t;
        }
        let broj = 0;
        let temp = this.temperature;
        temp.forEach(t => {
            if(t1 <= t && t <= t2) {
                broj++;
            }
        });
        return broj;
    },

    // Proverava da li je u većini dana temperatura bila iznad proseka ili ne.
    iznadProsek: function() {
        let p = this.prosek();
        let temp = this.temperature;
        let brojIznad = 0;
        let brojIspod = 0;
        temp.forEach(t => {
            if(t >= p) {
                brojIznad++;
            }
            else {
                brojIspod++;
            }
        });
        if(brojIznad > brojIspod) {
            return true;
        }
        else {
            return false;
        }
    },

    // Proverava da li je dan bio leden. 
    // Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni.
    ledeniDan: function() {
        let temp = this.temperature;
        for(let i = 0; i < temp.length; i++) {
            if(temp[i] >= 0) {
                // console.log(temp[i]);
                return false;
            }
        }
        return true;
    },

    // Proverava da li je dan bio tropski. 
    // Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena.
    tropskiDan: function() {
        let temp = this.temperature;
        let tropski = true;
        temp.forEach(t => {
            if(t < 24) {
                tropski = false;
            }
        });
        return tropski;
    },

    // Proverava da li je dan bio nepovoljan za meteropate. 
    // Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni.
    nepovoljan: function() {
        let temp = this.temperature;
        for(let i = 0; i < temp.length - 1; i++) {
            // temp[i] - tekuci element
            // temp[i + 1] - njegov sledbenik
            if(Math.abs(temp[i + 1] - temp[i]) > 8) {
                return true;
            }
        }
        return false;
    },

    // Proverava da li je dan bio neuobičajen. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano.
    neuobicajen: function() {
        let ok = false;
        let temp = this.temperature;
        temp.forEach(t => {
            if(this.kisa == true && t < -5) {
                ok = true;
            }
            if(this.oblacno && t > 25) {
                ok = true;
            }
        });
        if(this.kisa && this.oblacno && this.sunce) {
            ok = true;
        }
        return ok;
    },

    //  napisati metodu koja ispituje da li je prosečna temperatura iznad proseka za taj mesec ili ne.
    iznadProsekZaMesec: function() {
        let mesecString = this.datum.substr(5, 2);
        //console.log(mesecString); // "02"
        let mesecCeoBroj = parseInt(mesecString); 
        //console.log(mesecCeoBroj); // 2
        let p = prosek[mesecCeoBroj - 1];
            // prosecna temperatura za mesec
        let p1 = this.prosek(); 
            // prosecna temperatura za dan
        if(p1 > p) {
            return true;
        }
        else {
            return false;
        }

    }

};

console.log(dan.temperature);
console.log(dan.prosek());
console.log(dan.brojNatprosek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojIzmedju(4, 9));
console.log(dan.brojIzmedju(-3, 5));
console.log(dan.brojIzmedju(12, 5));
console.log(dan.iznadProsek());
console.log(dan.ledeniDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());
console.log(dan.iznadProsekZaMesec());

let dan1 = {
    datum: "2020/02/20",
    kisa: false,
    oblacno: true,
    sunce: true,
    temperature: [-2, 1, 3, 7, 11, 11, 5, 0]
};
let dan2 = {
    datum: "2020/03/20",
    kisa: true,
    oblacno: false,
    sunce: true,
    temperature: [2, 7, 8, 11, 11, 13, 5, 4]
};
let dan3 = {
    datum: "2020/02/22",
    kisa: true,
    oblacno: false,
    sunce: false,
    temperature: [-7, -4, 2, 0, -2, -3]
};

let merenjaDani = [dan1, dan2, dan3];

// Napisati arrow funkciju koja ispisuje datum u kome je naviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati:
// prvi takav,
let prviNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) => {
        // dani[i] = dan
        if(dan.temperature.length > max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
}

// poslednji takav,
let poslednjiNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) => {
        // dani[i] = dan
        if(dan.temperature.length >= max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
}

prviNajviseMerenja(merenjaDani);

console.log("Test poruka");