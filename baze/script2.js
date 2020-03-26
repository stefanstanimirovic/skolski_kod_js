let task = db.collection('tasks').doc('task-03'); // objekat dokumenta
//console.log(task);

/*
task.get()
.then(doc => {
    if(doc.exists) {
        let temp = doc.data();
        console.log(doc.id, temp);
    }
    else {
        console.log("No such document");
    }
})
.catch(error => {
    console.error("Cannot get document: ", error);
});
*/

/*
let document = db.collection('...').doc('...');
Kod dokumenta imate sledece metode:
    // CRUD - Create, Read, Update, Delete
    document.set(...) => postavlja polja (Create)
    document.update(...) => menja postojeca polja (Update)
    document.delete() => brise dokument (Delete)
    document.get() => dohvata vrednosti polja dokumenta (Read)
Nakon bilo koje od ovih metoda pozivaju se potom metode
    .then() i .catch()
*/



// Dohvatamo sve dokumente iz kolekcije

let tasks = db.collection('tasks');

// Prikaz svih dokumenata iz kolekcije
/*
tasks.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    });
})
.catch(error => {
    console.error("Cannot get documents from collection: ", error);
});
*/

// Prikaz svih dokumenata iz kolekcije, sortirane po odredjenom polju
// Jedan orderBy radi, zato sto, po defaultu, FireStore kreira indexe za sva polja
// Vise orderBy ne radi, nego mora prvo da se kreira kompozitni index za ta polja
// Ogranicenje broja dokumenata koji prikazujete => .limit()

/*
tasks
.orderBy('title', 'desc') // orderBy - drugi parametar('asc'/'desc')
.orderBy('start_date')
.limit(2)
.get()
//.limit(3)
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    });
})
.catch(error => {
    console.error("Cannot get documents from collection: ", error);
});
*/

// Filtriranje dokumenata:
tasks
.where('priority', '==', true)
.limit(2)
.get()
//.limit(3)
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    });
})
.catch(error => {
    console.error("Cannot get documents from collection: ", error);
});
