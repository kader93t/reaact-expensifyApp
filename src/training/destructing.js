
// const book = {
//     name: 'Ego is the enemy',
//     author: 'Ryan holiday',
//     publisher: {
//        // name:'Penguine'
//     }
// }

// const { name} = book;
// const { name: publisherName = "self-publisher"} = book.publisher;
// console.log(name, publisherName);

const adresse = ["cite 440 djbarra bencherif", " Freda", "Tiaret", "14001"];
const [, , wilaya = 'tiaret', zip] = adresse;
console.log(wilaya);