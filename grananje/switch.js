
let boja = "plava";
switch(boja) {
    case "plava":
        console.log("Odabrali ste plavu boju");
        break;
    case "zelena":
    case "tirkizna":
        console.log("Odabrali ste nijansu zelene boje");
        break;
    case "crvena":
        console.log("Odabrali ste crvenu boju");
        break;
    default:
        console.log("Nije dobra boja");
}
