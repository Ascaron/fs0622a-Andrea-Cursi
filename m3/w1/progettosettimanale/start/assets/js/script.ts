//COMANDI RELATIVI ALL'INTERFACCIA HTML
var btn1 = document.getElementById('apriSchermata');
var btn2 = document.getElementById('chiudiSchermata');
var primo = document.getElementById('primo');
var secondo = document.getElementById('secondo');
var terzo = document.getElementById('terzo');
var quarto = document.getElementById('quarto');
var lista = <HTMLElement>document.getElementById('lista');

btn1?.addEventListener('click', function () {
    primo?.classList.add('scompari');
    primo?.classList.remove('container', 'd-flex', 'col-12');
    secondo?.classList.add('scompari');
    secondo?.classList.remove('container', 'd-flex', 'col-12');
    terzo?.classList.add('scompari');
    terzo?.classList.remove('container', 'd-flex', 'col-12');
    quarto?.classList.toggle('scompari');
})

btn2?.addEventListener('click', function () {
    primo?.classList.remove('scompari');
    primo?.classList.add('container', 'd-flex', 'col-12');
    secondo?.classList.remove('scompari');
    secondo?.classList.add('container', 'd-flex', 'col-12');
    terzo?.classList.remove('scompari');
    terzo?.classList.add('container', 'd-flex', 'col-12');
    quarto?.classList.toggle('scompari');
})


//INTERFACE E CLASSE
interface Cliente {
    credito: number;
    numChiamate: number;

    ricarica(ammontare: number): void;
    chiamata(durata: number): void;
    numero404(): number;
    getNumChiamate(): number;
    azzeraChiamate(): void;
}

class Utente implements Cliente {
    credito: number;
    numChiamate: number;

    constructor(_credito: number, _numChiamate: number) {
        this.credito = _credito;
        this.numChiamate = _numChiamate;
    }

    ricarica(ammontare: number): void {
        this.credito = this.credito + ammontare;
    }

    chiamata(durata: number): void {
        this.credito = this.credito - (durata * 0.20);
        this.numChiamate++
    }

    numero404(): number {
        return this.credito;
    }

    getNumChiamate(): number {
        return this.numChiamate;
    }

    azzeraChiamate(): void {
        this.numChiamate = this.numChiamate - this.numChiamate;
    }
}

//ISTANZA CLASSI
let Paolo = new Utente(0, 0);
let Pina = new Utente(0, 0);
let Maria = new Utente(0, 0);


//RICHIAMO FUNZIONI, STAMPA E CONSOLE LOG ORIGINALI

//PAOLO
Paolo.ricarica(50);
Paolo.chiamata(20);
Paolo.ricarica(50);
Paolo.chiamata(20);
lista.innerHTML+=`<li>Paolo</li><hr class="w-75"><li>Credito residuo:${Paolo.numero404()}</li><li>Numero chiamate:${Paolo.getNumChiamate()}</li>`;
console.log(`Paolo:`)
console.log(`-----------`)
console.log(`Credito residuo:${Paolo.numero404()}`);
console.log(`Numero chiamate:${Paolo.getNumChiamate()}`);
Paolo.azzeraChiamate();
lista.innerHTML+=`<li>Chiamate azzerate:${Paolo.getNumChiamate()}</li><hr class="w-75">`;
console.log(`Chiamate azzerate:${Paolo.getNumChiamate()}`);
console.log(`-----------`);

//PINA
Pina.ricarica(10);
Pina.chiamata(2);
Pina.ricarica(10);
Pina.chiamata(4);
Pina.ricarica(10);
Pina.chiamata(2);
Pina.ricarica(10);
Pina.chiamata(2);
lista.innerHTML+=`<li>Pina</li><hr class="w-75"><li>Credito residuo:${Pina.numero404().toFixed(2)}</li><li>Numero chiamate:${Pina.getNumChiamate()}</li>`;
console.log(`Pina:`)
console.log(`-----------`)
console.log(`Credito residuo:${Pina.numero404().toFixed(2)}`);
console.log(`Numero chiamate:${Pina.getNumChiamate()}`);
Pina.azzeraChiamate();
lista.innerHTML+=`<li>Chiamate azzerate:${Pina.getNumChiamate()}</li><hr class="w-75">`;
console.log(`Chiamate azzerate:${Pina.getNumChiamate()}`);
console.log(`-----------`);

//MARIA
Maria.ricarica(5);
Maria.chiamata(5);
Maria.ricarica(5);
Maria.chiamata(5);
Maria.ricarica(5);
Maria.chiamata(5);
Maria.ricarica(5);
Maria.chiamata(5);
Maria.ricarica(5);
Maria.chiamata(5);
Maria.ricarica(5);
Maria.chiamata(5);
lista.innerHTML+=`<li>Maria</li><hr class="w-75"><li>Credito residuo:${Maria.numero404()}</li><li>Numero chiamate:${Maria.getNumChiamate()}</li>`;
console.log(`Maria:`)
console.log(`-----------`)
console.log(`Credito residuo:${Maria.numero404()}`);
console.log(`Numero chiamate:${Maria.getNumChiamate()}`);
Maria.azzeraChiamate();
lista.innerHTML+=`<li>Chiamate azzerate:${Maria.getNumChiamate()}</li><hr class="w-75">`;
console.log(`Chiamate azzerate:${Maria.getNumChiamate()}`);
console.log(`-----------`);