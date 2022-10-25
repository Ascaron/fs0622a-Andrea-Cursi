document.getElementById('avviaSpese').addEventListener('click', function () {
    let risparmi = document.getElementById('ammontare').value;
    document.getElementById('capitaleIniziale').innerHTML = `Il tuo capitale è ${risparmi}&euro;`;

    let spesa = Math.floor(Math.random() * (document.getElementById('maxSpesa').value)) + 1;
    let rimanenze = risparmi - spesa;
    let arraySpese = [risparmi, spesa, rimanenze];
    var counter = 0;

    while (arraySpese[0] > (risparmi / 10)) {
        if (spesa > risparmi) {
            document.getElementById('nuovaSpesa').innerHTML += '<li><h2>NON HAI TUTTI QUEI SOLDI!!!</h2></li>'
            break;
        }
        let valore1 = arraySpese[1];
        let valore2 = arraySpese[0] - arraySpese[1];
        document.getElementById('nuovaSpesa').innerHTML += `<li>Hai speso ${valore1}, ti rimane ${valore2}</li>`;
        arraySpese.splice(0, 2, valore2, Math.floor(Math.random() * (document.getElementById('maxSpesa').value)) + 1);
        if (arraySpese[0] <= (risparmi / 2) && counter == 0) {
            document.getElementById('nuovaSpesa').innerHTML += '<li><h2>HAI SPESO MEZZO BUDGET!!!</h2></li>';
            counter += 1;
        }
        if (arraySpese[0] <= (risparmi / 10)) {
            document.getElementById('nuovaSpesa').innerHTML += '<li><h2>ORA BASTA, HAI SPESO TROPPO!!!</h2></li>';
        }
    }
})