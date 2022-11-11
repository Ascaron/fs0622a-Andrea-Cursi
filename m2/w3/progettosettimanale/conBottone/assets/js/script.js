var nome;
var cognome;
var segno;
var addBtn;
var modBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var elenco2 = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	segno = document.getElementById('segno');
	addBtn = document.getElementById('scrivi');
	modBtn = document.getElementById('modifica');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		controlla();
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					elencoHTML.innerHTML += `<li class="mb-1"><button type="button" class="btn btn-danger me-1" onClick="elimina(${element.id})"><i class="fa-solid fa-trash-can"></i></button>
					<button type="button" class="btn btn-success me-1" onClick="modifica(${element.id})"><i class="fa-solid fa-hammer"></i></button>
					${element.nome} ${element.cognome} ${element.segno}</li>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '' && segno.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
			segno: segno.value,
		};
		addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
	segno.value = '';
}

//MODIFICA

function modifica(questo) {
	fetch(`http://localhost:3000/elenco/${questo}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco2 = data;
			nome.value = elenco2.nome;
			cognome.value = elenco2.cognome;
			segno.value = elenco2.segno;
			let esto = Number(elenco2.id);
			modBtn.classList.toggle('d-none');
			addBtn.classList.toggle('d-none');
			eventHandler2(esto);
		});
}

function eventHandler2(esto) {
	modBtn.addEventListener('click', function () {
		controlla2(esto);
	});
}

function controlla2(esto) {
	if (nome.value != '' && cognome.value != '' && segno.value != '') {
		var data2 = {
			nome: nome.value,
			cognome: cognome.value,
			segno: segno.value,
			id: esto
		};
		modData(data2);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

function modData(data2) {
	fetch(`http://localhost:3000/elenco/${data2.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			nome: data2.nome,
			cognome: data2.cognome,
			segno: data2.segno,
			id: data2.id
		}),
	}).then((response) => {
		return response.json();
	});
	clearForm();
	modBtn.classList.toggle('d-none');
	addBtn.classList.toggle('d-none');
}

//ELIMINA
function elimina(questo) {
	if (confirm('L\' azione è irreversibile, sei sicuro?')==true) {
		fetch(`http://localhost:3000/elenco/${questo}`, {
			method: 'DELETE',
		}).then((response) => {
			return response.json();
		});
	}
	else {
		return;
	}
}