// Modul pacijent_gs.js

export class Pacijent {
    constructor(i, v, t) {
        this.pIme = i;
        this.pVisina = v;
        this.pTezina = t;
    }
    get pIme() {
        return this.ime;
    }
    set pIme(i) {
        this.ime = i;
    }
    get pVisina() {
        return this.visina;
    }
    set pVisina(v) {
        if(v < 0) {
            this.visina = 0;
        }
        else if(v <= 2.5) {
            this.visina = v;
        }
        else {
            this.visina = 2.5;
        }
    }
    get pTezina() {
        return this.tezina;
    }
    set pTezina(t) {
        if(t < 0) {
            this.tezina = 0;
        }
        else if(t <= 550) {
            this.tezina = t;
        }
        else {
            this.tezina = 550;
        }
    }
    stampaj() {
        console.log(`Pacijent: ${this.ime}, visina: ${this.visina}, tezina: ${this.tezina}`);
    }
    bmi() {
        let bmi = this.tezina / this.visina ** 2;
        return bmi;
    }
    kritican() {
        let bmi = this.bmi();
        if(bmi < 15 || bmi > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}