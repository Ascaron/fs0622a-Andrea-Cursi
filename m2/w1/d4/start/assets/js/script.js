//MENU A TENDINA

function show() {
    document.querySelector('.menuList').classList.toggle('open');
    document.querySelector('#openMenu').classList.toggle('openMenu2');
}

document.querySelector('#openMenu').addEventListener('mouseover', function () {
    document.querySelector('#openMenu').style.backgroundColor = 'aqua';
})

document.querySelector('#openMenu').addEventListener('mouseout', function () {
    document.querySelector('#openMenu').style.backgroundColor = 'blue';
})

var arrayLi1 = document.querySelectorAll('.listEl');

for (var i = 0; i < arrayLi1.length; i++) {
    arrayLi1[i].addEventListener('mouseover', function () {
        this.classList.toggle('listElHover');
    });
}

for (var i = 0; i < arrayLi1.length; i++) {
    arrayLi1[i].addEventListener('mouseout', function () {
        this.classList.toggle('listElHover');
    });
}

//BOTTONI

function ingrandisci() {
    document.querySelector('#title').style.fontSize = '50px';
}
function colora() {
    document.querySelector('#title').style.color = 'red';
}

function maiuscolo() {
    document.querySelector('#title').style.textTransform = 'uppercase';
}

function nascondi() {
    document.querySelector('#title').style.visibility = 'hidden';
}

function mostra() {
    document.querySelector('#title').style.visibility = 'visible';
}
//LISTA COSE DA FARE

var lista = document.querySelectorAll('.listElements');

for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener('mouseover', function () {
        this.classList.add('listElementsHover');
    });
}

for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener('mouseout', function () {
        this.classList.remove('listElementsHover');
    });
}

for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener('click', function () {
        this.classList.toggle('listElementsBar');
    });
}