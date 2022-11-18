var estratto;
verifica();
function verifica() {
    var giocatore1 = Math.floor((Math.random() * 100) + 1);
    var giocatore2 = Math.floor((Math.random() * 100) + 1);
    estratto = Math.floor((Math.random() * 100) + 1);
    if (giocatore1 == giocatore2) {
        return verifica();
    }
    else {
        console.log("Numero giocatore 1: ".concat(giocatore1));
        console.log("Numero giocatore 2: ".concat(giocatore2));
        console.log("Numero estratto: ".concat(estratto));
    }
    confronto(giocatore1, giocatore2);
}
function confronto(valore1, valore2) {
    if (valore1 == estratto) {
        console.log('Il Giocatore 1 ha indovinato');
    }
    else if (valore2 == estratto) {
        console.log('Il Giocatore 2 ha indovinato');
    }
    else if ((Math.abs(estratto - valore1)) < (Math.abs(estratto - valore2))) {
        console.log('Nessuno ha indovinato, ma il Giocatore 1 si è avvicinato di più');
    }
    else {
        console.log('Nessuno ha indovinato, ma il Giocatore 2 si è avvicinato di più');
    }
}
