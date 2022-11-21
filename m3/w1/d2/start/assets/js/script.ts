class SonAccount{
    nome:string;
    cognome:string;
    balanceInit:number;
    constructor(_nome:string, _cognome:string){
        this.nome=_nome;
        this.cognome=_cognome;
        this.balanceInit=0;
    }

    oneDeposit():number{
        let versamento:number=100;
        let saldoFinale:number=versamento+this.balanceInit;
        return saldoFinale;
    }

    oneWithDraw():number{
        let prelievo:number=50;
        let saldoFinale:number=this.oneDeposit()-prelievo
        return saldoFinale;
    }
}

class MotherAccount{
    nome:string;
    cognome:string;
    balanceInit:number;
    constructor(_nome:string, _cognome:string){
        this.nome=_nome;
        this.cognome=_cognome;
        this.balanceInit=0;
    }

    oneDeposit():number{
        let versamento:number=100;
        let vessato:number=versamento-(versamento/10);
        let saldoFinale:number=vessato+this.balanceInit;
        return saldoFinale;
    }

    oneWithDraw():number{
        let prelievo:number=50;
        let vessato:number=prelievo+(prelievo/10);
        let saldoFinale:number=this.oneDeposit()-vessato;
        return saldoFinale;
    }
}


var figlio = new SonAccount('Alessandro', 'Alessandri');
var madre = new MotherAccount('Paola', 'Paoli');

console.log(figlio.oneDeposit());
console.log(figlio.oneWithDraw());
console.log(madre.oneDeposit());
console.log(madre.oneWithDraw());