// Modul pacijent.js

export default class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
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