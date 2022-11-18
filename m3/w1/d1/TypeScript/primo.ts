var estratto:number;
verifica();

function verifica():void {
    let giocatore1:number=Math.floor((Math.random() * 100) + 1);
    let giocatore2:number=Math.floor((Math.random() * 100) + 1);
    estratto= Math.floor((Math.random() * 100) + 1);
   
    if(giocatore1 == giocatore2){

        return verifica();
    }
    else{
        console.log(`Numero giocatore 1: ${giocatore1}`);
        console.log(`Numero giocatore 2: ${giocatore2}`);
        console.log(`Numero estratto: ${estratto}`);
    }
    confronto(giocatore1, giocatore2);
}

function confronto(valore1:number, valore2:number) {
    if (valore1 == estratto) {
        console.log('Il Giocatore 1 ha indovinato');
    } else if (valore2 == estratto) {
        console.log('Il Giocatore 2 ha indovinato');
    } else if ((Math.abs(estratto - valore1)) < (Math.abs(estratto - valore2))) {
        console.log('Nessuno ha indovinato, ma il Giocatore 1 si è avvicinato di più');
    } else {
        console.log('Nessuno ha indovinato, ma il Giocatore 2 si è avvicinato di più');
    }
}