abstract class Lavoratore{

    codRedd:number;
    redditoAnnuoLordo:number;
    tasseInps:number;
    tasseIrpef:number;

    constructor(_codRedd:number, _redditoAnnuoLordo:number, _tasseInps:number, _tasseIrpef:number){
        this.codRedd=_codRedd;
        this.redditoAnnuoLordo=_redditoAnnuoLordo;
        this.tasseInps=_tasseInps;
        this.tasseIrpef=_tasseIrpef;
    }

    getUtileTasse():number{
        let utileTasse:number=(this.redditoAnnuoLordo*this.codRedd/100);
        return utileTasse;
    };
    getTasseInps():number{
        let tasseDellInps:number=(this.getUtileTasse()*this.tasseInps/100);
        return tasseDellInps;
    };
    getTasseIrpef():number{
        let tasseDellIrpef:number=(this.getUtileTasse()*this.tasseIrpef/100);
        return tasseDellIrpef;
    };
    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto:number=(this.redditoAnnuoLordo-(this.getTasseInps()+this.getTasseIrpef()));
        return redditoAnnuoNetto;
    };
}

class Professionista extends Lavoratore{

    constructor(_codRedd:number, _redditoAnnuoLordo:number){
        super(_codRedd, _redditoAnnuoLordo, 4, 5)
        this.tasseInps=4;
        this.tasseIrpef=5;
    }
}

class Commerciante extends Lavoratore{

    constructor(_codRedd:number, _redditoAnnuoLordo:number){
        super(_codRedd, _redditoAnnuoLordo, 4, 5)
        this.tasseInps=4;
        this.tasseIrpef=5;
    }
}

class Artigiano extends Lavoratore{

    constructor(_codRedd:number, _redditoAnnuoLordo:number){
        super(_codRedd, _redditoAnnuoLordo, 4, 5)
        this.tasseInps=4;
        this.tasseIrpef=5;
    }
}

class Evasore extends Lavoratore{

    constructor(_codRedd:number, _redditoAnnuoLordo:number){
        super(_codRedd, _redditoAnnuoLordo, 4, 5)
        this.tasseInps=4;
        this.tasseIrpef=5;
    }
}

var Luca= new Professionista(78,40000);
var Paolo= new Artigiano(67,20000);
var Alessandro= new Commerciante(40,30000);
var Silvio= new Evasore(0,100000);

console.log(`Professionista: utile tasse:${Luca.getUtileTasse()}, tasse Inps:${Luca.getTasseInps()},
 tasse Irpef:${Luca.getTasseIrpef()}, reddito annuo netto:${Luca.getRedditoAnnuoNetto()}`);

console.log(`Artigiano: utile tasse:${Paolo.getUtileTasse()}, tasse Inps:${Paolo.getTasseInps()},
tasse Irpef:${Paolo.getTasseIrpef()}, reddito annuo netto:${Paolo.getRedditoAnnuoNetto()}`);

console.log(`Commerciante: utile tasse:${Alessandro.getUtileTasse()}, tasse Inps:${Alessandro.getTasseInps()},
tasse Irpef:${Alessandro.getTasseIrpef()}, reddito annuo netto:${Alessandro.getRedditoAnnuoNetto()}`);

console.log(`Evasore: utile tasse:${Silvio.getUtileTasse()}, tasse Inps:${Silvio.getTasseInps()},
tasse Irpef:${Silvio.getTasseIrpef()}, reddito annuo netto:${Silvio.getRedditoAnnuoNetto()}`);