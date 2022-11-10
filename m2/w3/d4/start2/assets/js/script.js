var elenco1 = [];
var elenco2 = [];
var elenco3 = [];

    fetch('http://localhost:3000/persone').then((response1) => {
        return response1.json();
    }).then((data) => {
        elenco1 = data;
        elenco1.map(function (element) {
            document.getElementById('persona').innerHTML += `<tr><td>${element.nome}</td><td>${element.cognome}</td><td>${element.eta}</td></tr>`;
        });
    });


    fetch('http://localhost:3000/canzoni').then((response2) => {
        return response2.json();
    }).then((data) => {
        elenco2 = data;
        elenco2.map(function (element) {
            document.getElementById('canzoni').innerHTML += `<tr><td>${element.titolo}</td><td>${element.artista}</td><td>${element.disco}</td></tr>`
        });
    });


    fetch('http://localhost:3000/animali').then((response3) => {
        return response3.json();
    }).then((data) => {
        elenco3 = data;
        elenco3.map(function (element) {
            document.getElementById('animali').innerHTML += `<tr><td>${element.razza}</td><td>${element.tipo}</td><td>${element.zampe}</td></tr>`
        });
    });