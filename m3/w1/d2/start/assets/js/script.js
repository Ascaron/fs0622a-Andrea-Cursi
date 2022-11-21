var SonAccount = /** @class */ (function () {
    function SonAccount(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.balanceInit = 0;
    }
    SonAccount.prototype.oneDeposit = function () {
        var versamento = 100;
        var saldoFinale = versamento + this.balanceInit;
        return saldoFinale;
    };
    SonAccount.prototype.oneWithDraw = function () {
        var prelievo = 50;
        var saldoFinale = this.oneDeposit() - prelievo;
        return saldoFinale;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.balanceInit = 0;
    }
    MotherAccount.prototype.oneDeposit = function () {
        var versamento = 100;
        var vessato = versamento - (versamento / 10);
        var saldoFinale = vessato + this.balanceInit;
        return saldoFinale;
    };
    MotherAccount.prototype.oneWithDraw = function () {
        var prelievo = 50;
        var vessato = prelievo + (prelievo / 10);
        var saldoFinale = this.oneDeposit() - vessato;
        return saldoFinale;
    };
    return MotherAccount;
}());
var figlio = new SonAccount('Alessandro', 'Alessandri');
var madre = new MotherAccount('Paola', 'Paoli');
console.log(figlio.oneDeposit());
console.log(figlio.oneWithDraw());
console.log(madre.oneDeposit());
console.log(madre.oneWithDraw());
