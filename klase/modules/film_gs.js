// Modul film_gs.js

export class Film {
    constructor(n, r, g) {
        this.fNaslov = n;
        this.fReziser = r;
        this.fGodinaIzdanja = g;
    }
    stampaj() {
        console.log(`Film '${this.naslov}' rezirao ${this.reziser}, ${this.godinaIzdanja}. godine`);
    }
    get fNaslov() {
        return this.naslov;
    }
    set fNaslov(n) {
        this.naslov = n;
    }
    get fReziser() {
        return this.reziser;
    }
    set fReziser(r) {
        this.reziser = r;
    }
    get fGodinaIzdanja() {
        return this.godinaIzdanja;
    }
    set fGodinaIzdanja(g) {
        if(g > 1800) {
            this.godinaIzdanja = g;
        }
        else {
            this.godinaIzdanja = 1800;
        }
    }
}