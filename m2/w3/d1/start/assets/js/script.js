var elencoPersone;
var arrayPersone=[];

function Persone(_nome, _cognome, _eta) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta= _eta;
}

document.getElementById('invia').addEventListener('click', function () {
    let itsNome = document.getElementById('nome').value;
    let itsCognome = document.getElementById('cognome').value;
    let itsData = document.getElementById('data').value;
    let itsAnno = itsData.slice(0, 4);
    let itsMese= itsData.slice(5, 7);
    let itsGiorno= itsData.slice(8, 10);
    let nowData= new Date;
    let nowAnno=nowData.getFullYear();
    let nowMese=nowData.getMonth();
    let nowGiorno=nowData.getDate();
    let etaAnno= nowAnno - Number(itsAnno);
    let etaMese= (nowMese+1) - Number(itsMese);
    let etaGiorno=nowGiorno - Number(itsGiorno);

    if(etaGiorno==0){
        if(etaMese==0){
            let itsEta=etaAnno;
            creaLista(itsNome, itsCognome, itsEta);
        }
        else if(etaMese<0){
            let itsEta=etaAnno-1;
            creaLista(itsNome, itsCognome, itsEta);
        }
        else if(etaMese>0){
            let itsEta=etaAnno;
            creaLista(itsNome, itsCognome, itsEta);
        }
    }
    else if(etaGiorno<0){
        if(etaMese==0){
            let itsEta=etaAnno-1;
            creaLista(itsNome, itsCognome, itsEta);
        }
        else if(etaMese<0){
            let itsEta=etaAnno-1;
            creaLista(itsNome, itsCognome, itsEta);
        }
        else if(etaMese>0){
            let itsEta=etaAnno;
            creaLista(itsNome, itsCognome, itsEta);
        }
    }
    else if(etaGiorno>0){
        if(etaMese==0){
            let itsEta=etaAnno;
            creaLista(itsNome, itsCognome, itsEta);
        }
        else if(etaMese<0){
            let itsEta=etaAnno-1;
            creaLista(itsNome, itsCognome, itsEta);
        }
        else if(etaMese>0){
            let itsEta=etaAnno;
            creaLista(itsNome, itsCognome, itsEta);
        }
    }
})

function creaLista(newNome, newCognome, newEta) {
    let nuovoElenco = new Persone(newNome, newCognome, newEta);
    arrayPersone.push(nuovoElenco);
    console.log(arrayPersone);
    elencoPersone = `<dt>${nuovoElenco.nome} ${nuovoElenco.cognome} ${nuovoElenco.eta}</dt>`
    document.getElementById('lista').innerHTML += elencoPersone;
    document.getElementById('nome').value='';
    document.getElementById('cognome').value='';
    document.getElementById('data').value='';
}