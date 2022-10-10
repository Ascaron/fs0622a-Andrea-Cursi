//Correzione
var pet_preferito = 'gatto';
console.log(pet_preferito);

var pet = 'gatto';
var pet2 = 'cane'; //Correzione
var petPreferito = 'criceto';
var petPreferito2 = 'coniglio'; //Correzione

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
document.write(_pet2);

//Correzione nome e valore
var numero = 12;
var numero2 = 12.5;

document.write(numero + numero2);

//nuove variabili e direttive
var num = 5.6;
var num2 = 9.32;

document.write(num * num2);

//nuove variabili e direttive

var dividendo = 25;
var dividendo2 = 5;

console.log(dividendo / dividendo2);

//alert con pet

window.alert(pet);

//richiamo innerHtml
document.getElementById('bottone').addEventListener('click' , function(){
    document.getElementById('javaScript').innerHTML= "JAVASCRIPT!"
})