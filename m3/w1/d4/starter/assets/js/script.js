var Capi = /** @class */ (function () {
    function Capi(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id,
            this.codprod = _codprod,
            this.collezione = _collezione,
            this.capo = _capo,
            this.modello = _modello,
            this.quantita = _quantita,
            this.colore = _colore,
            this.prezzoivaesclusa = _prezzoivaesclusa,
            this.prezzoivainclusa = _prezzoivainclusa,
            this.disponibile = _disponibile,
            this.saldo = _saldo;
    }
    Capi.prototype.getSaldo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Capi.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldo();
    };
    return Capi;
}());
var nuovoArray = [];
function getDati() {
    fetch('http://localhost:3000/Capi').then(function (response) {
        return response.json();
    }).then(function (data) {
        nuovoArray = data;
        data.map(function (element) {
            var capo = new Capi(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(capo);
            console.log(capo.getAcquistoCapo().toFixed(2));
        });
    });
}
getDati();
