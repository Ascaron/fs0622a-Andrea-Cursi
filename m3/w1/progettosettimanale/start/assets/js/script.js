//COMANDI RELATIVI ALL'INTERFACCIA HTML
var btn1 = document.getElementById('apriSchermata');
var btn2 = document.getElementById('chiudiSchermata');
var primo = document.getElementById('primo');
var secondo = document.getElementById('secondo');
var terzo = document.getElementById('terzo');
var quarto = document.getElementById('quarto');
var lista = document.getElementById('lista');
btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener('click', function () {
    primo === null || primo === void 0 ? void 0 : primo.classList.add('scompari');
    primo === null || primo === void 0 ? void 0 : primo.classList.remove('container', 'd-flex', 'col-12');
    secondo === null || secondo === void 0 ? void 0 : secondo.classList.add('scompari');
    secondo === null || secondo === void 0 ? void 0 : secondo.classList.remove('container', 'd-flex', 'col-12');
    terzo === null || terzo === void 0 ? void 0 : terzo.classList.add('scompari');
    terzo === null || terzo === void 0 ? void 0 : terzo.classList.remove('container', 'd-flex', 'col-12');
    quarto === null || quarto === void 0 ? void 0 : quarto.classList.toggle('scompari');
});
btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener('click', function () {
    primo === null || primo === void 0 ? void 0 : primo.classList.remove('scompari');
    primo === null || primo === void 0 ? void 0 : primo.classList.add('container', 'd-flex', 'col-12');
    secondo === null || secondo === void 0 ? void 0 : secondo.classList.remove('scompari');
    secondo === null || secondo === void 0 ? void 0 : secondo.classList.add('container', 'd-flex', 'col-12');
    terzo === null || terzo === void 0 ? void 0 : terzo.classList.remove('scompari');
    terzo === null || terzo === void 0 ? void 0 : terzo.classList.add('container', 'd-flex', 'col-12');
    quarto === null || quarto === void 0 ? void 0 : quarto.classList.toggle('scompari');
});
var Utente = /** @class */ (function () {
    function Utente(_credito, _numChiamate) {
        this.credito = _credito;
        this.numChiamate = _numChiamate;
    }
    Utente.prototype.ricarica = function (ammontare) {
        this.credito = this.credito + ammontare;
    };
    Utente.prototype.chiamata = function (durata) {
        this.credito = this.credito - (durata * 0.20);
        this.numChiamate++;
    };
    Utente.prototype.numero404 = function () {
        return this.credito;
    };
    Utente.prototype.getNumChiamate = function () {
        return this.numChiamate;
    };
    Utente.prototype.azzeraChiamate = function () {
        this.numChiamate = this.numChiamate - this.numChiamate;
    };
    return Utente;
}());
//ISTANZA CLASSI
var Paolo = new Utente(0, 0);
var Pina = new Utente(0, 0);
var Maria = new Utente(0, 0);
//RICHIAMO FUNZIONI, STAMPA E CONSOLE LOG ORIGINALI
//PAOLO
Paolo.ricarica(50);
Paolo.chiamata(20);
Paolo.ricarica(50);
Paolo.chiamata(20);
lista.innerHTML += "<li>Paolo</li><hr class=\"w-75\"><li>Credito residuo:".concat(Paolo.numero404(), "</li><li>Numero chiamate:").concat(Paolo.getNumChiamate(), "</li>");
console.log("Paolo:");
console.log("-----------");
console.log("Credito residuo:".concat(Paolo.numero404()));
console.log("Numero chiamate:".concat(Paolo.getNumChiamate()));
Paolo.azzeraChiamate();
lista.innerHTML += "<li>Chiamate azzerate:".concat(Paolo.getNumChiamate(), "</li><hr class=\"w-75\">");
console.log("Chiamate azzerate:".concat(Paolo.getNumChiamate()));
console.log("-----------");
//PINA
Pina.ricarica(10);
Pina.chiamata(2);
Pina.ricarica(10);
Pina.chiamata(4);
Pina.ricarica(10);
Pina.chiamata(2);
Pina.ricarica(10);
Pina.chiamata(2);
lista.innerHTML += "<li>Pina</li><hr class=\"w-75\"><li>Credito residuo:".concat(Pina.numero404().toFixed(2), "</li><li>Numero chiamate:").concat(Pina.getNumChiamate(), "</li>");
console.log("Pina:");
console.log("-----------");
console.log("Credito residuo:".concat(Pina.numero404().toFixed(2)));
console.log("Numero chiamate:".concat(Pina.getNumChiamate()));
Pina.azzeraChiamate();
lista.innerHTML += "<li>Chiamate azzerate:".concat(Pina.getNumChiamate(), "</li><hr class=\"w-75\">");
console.log("Chiamate azzerate:".concat(Pina.getNumChiamate()));
console.log("-----------");
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
lista.innerHTML += "<li>Maria</li><hr class=\"w-75\"><li>Credito residuo:".concat(Maria.numero404(), "</li><li>Numero chiamate:").concat(Maria.getNumChiamate(), "</li>");
console.log("Maria:");
console.log("-----------");
console.log("Credito residuo:".concat(Maria.numero404()));
console.log("Numero chiamate:".concat(Maria.getNumChiamate()));
Maria.azzeraChiamate();
lista.innerHTML += "<li>Chiamate azzerate:".concat(Maria.getNumChiamate(), "</li><hr class=\"w-75\">");
console.log("Chiamate azzerate:".concat(Maria.getNumChiamate()));
console.log("-----------");
