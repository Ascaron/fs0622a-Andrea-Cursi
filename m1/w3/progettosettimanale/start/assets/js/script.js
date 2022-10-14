function printInput(valore) {
    document.getElementById('scrivi').value += `${valore}`;
};

function cancAll() {
    document.getElementById('scrivi').value = '';
};

function giveResult() {
    document.getElementById('scrivi').value = eval(document.getElementById('scrivi').value);
};

function squareRoot() {
    document.getElementById('scrivi').value = Math.sqrt(document.getElementById('scrivi').value);
};

function lnAritm() {
    document.getElementById('scrivi').value = Math.log(document.getElementById('scrivi').value);
};

function absolute() {
    document.getElementById('scrivi').value = Math.abs(document.getElementById('scrivi').value);
};