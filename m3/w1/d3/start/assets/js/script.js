var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var utileTasse = (this.redditoAnnuoLordo * this.codRedd / 100);
        return utileTasse;
    };
    ;
    Lavoratore.prototype.getTasseInps = function () {
        var tasseDellInps = (this.getUtileTasse() * this.tasseInps / 100);
        return tasseDellInps;
    };
    ;
    Lavoratore.prototype.getTasseIrpef = function () {
        var tasseDellIrpef = (this.getUtileTasse() * this.tasseIrpef / 100);
        return tasseDellIrpef;
    };
    ;
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
        return redditoAnnuoNetto;
    };
    ;
    return Lavoratore;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_codRedd, _redditoAnnuoLordo) {
        var _this = _super.call(this, _codRedd, _redditoAnnuoLordo, 4, 5) || this;
        _this.tasseInps = 4;
        _this.tasseIrpef = 5;
        return _this;
    }
    return Professionista;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_codRedd, _redditoAnnuoLordo) {
        var _this = _super.call(this, _codRedd, _redditoAnnuoLordo, 4, 5) || this;
        _this.tasseInps = 4;
        _this.tasseIrpef = 5;
        return _this;
    }
    return Commerciante;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_codRedd, _redditoAnnuoLordo) {
        var _this = _super.call(this, _codRedd, _redditoAnnuoLordo, 4, 5) || this;
        _this.tasseInps = 4;
        _this.tasseIrpef = 5;
        return _this;
    }
    return Artigiano;
}(Lavoratore));
var Evasore = /** @class */ (function (_super) {
    __extends(Evasore, _super);
    function Evasore(_codRedd, _redditoAnnuoLordo) {
        var _this = _super.call(this, _codRedd, _redditoAnnuoLordo, 4, 5) || this;
        _this.tasseInps = 4;
        _this.tasseIrpef = 5;
        return _this;
    }
    return Evasore;
}(Lavoratore));
var Luca = new Professionista(78, 40000);
var Paolo = new Artigiano(67, 20000);
var Alessandro = new Commerciante(40, 30000);
var Silvio = new Evasore(0, 100000);
console.log("Professionista: utile tasse:".concat(Luca.getUtileTasse(), ", tasse Inps:").concat(Luca.getTasseInps(), ",\n tasse Irpef:").concat(Luca.getTasseIrpef(), ", reddito annuo netto:").concat(Luca.getRedditoAnnuoNetto()));
console.log("Artigiano: utile tasse:".concat(Paolo.getUtileTasse(), ", tasse Inps:").concat(Paolo.getTasseInps(), ",\ntasse Irpef:").concat(Paolo.getTasseIrpef(), ", reddito annuo netto:").concat(Paolo.getRedditoAnnuoNetto()));
console.log("Commerciante: utile tasse:".concat(Alessandro.getUtileTasse(), ", tasse Inps:").concat(Alessandro.getTasseInps(), ",\ntasse Irpef:").concat(Alessandro.getTasseIrpef(), ", reddito annuo netto:").concat(Alessandro.getRedditoAnnuoNetto()));
console.log("Evasore: utile tasse:".concat(Silvio.getUtileTasse(), ", tasse Inps:").concat(Silvio.getTasseInps(), ",\ntasse Irpef:").concat(Silvio.getTasseIrpef(), ", reddito annuo netto:").concat(Silvio.getRedditoAnnuoNetto()));
