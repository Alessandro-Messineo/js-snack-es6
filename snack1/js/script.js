// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciclette = [
    { nome: "Bianchi Sprint", peso: 7.8 },
    { nome: "Trek Domane", peso: 8.2 },
    { nome: "Specialized Tarmac", peso: 7.5 },
    { nome: "Cannondale SuperSix", peso: 7.8 },
    { nome: "Pinarello Dogma", peso: 7.4 },
    { nome: "Giant Defy", peso: 8.1 },
    { nome: "Scott Addict", peso: 7.6 }
    
];

let biciLeggera = biciclette[0];

for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];

    }
}

console.log(`La bici più leggera è: ${biciLeggera.nome} con peso di ${biciLeggera.peso}kg`);
