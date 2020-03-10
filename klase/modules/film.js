// Modul film.js

export default class Film {
    constructor(n, r, g) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
    }
    stampaj() {
        console.log(`Film '${this.naslov}' rezirao ${this.reziser}, ${this.godinaIzdanja}. godine`);
    }
}