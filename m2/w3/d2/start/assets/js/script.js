class Person {
    constructor(_nome, _eta) {
        this.nome = _nome;
        this.eta = _eta;
    }

    confronto() {
        let maggiore = p1;
        let i;
        for (i = 0; i < 1; i++) {
            if (maggiore.eta > this.eta) {
                document.getElementById('confronto').innerHTML += `<li>${maggiore.nome} è più vecchio di ${this.nome}</li>`;
            }
            else if(maggiore.eta < this.eta){
                document.getElementById('confronto').innerHTML += `<li>${this.nome} è più vecchio di ${maggiore.nome}</li>`
                maggiore = this.eta;
            }
            else{
                return;
            }
        }
    }

}

var p1 = new Person('Aldo', 23);
var p2 = new Person('Giovanni', 35);
var p3 = new Person('Giacomo', 76);
p2.confronto();
p3.confronto();
p1.confronto();