// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    { nome: "Sassuolo", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 }
];

const newSquadre = [];

function numeriRandom() {
    return Math.floor(Math.random() * 1000);
}

for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti= numeriRandom();
    squadre[i].falliSubiti = numeriRandom();
    newSquadre.push({
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti
    });
}


console.log(squadre,newSquadre);
