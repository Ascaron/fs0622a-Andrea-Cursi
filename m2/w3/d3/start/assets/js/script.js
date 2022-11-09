document.getElementById('invia').addEventListener('click', function(e){
    e.preventDefault();
    let utente=document.getElementById('nome').value;
    if(!localStorage.getItem(utente)){
        localStorage.setItem(utente,'');
    }
    localStorage.clear();
    localStorage.setItem(utente,'');
    let persona=localStorage.key(0);
    document.getElementById('saluto').innerHTML=`Benvenuto ${persona}!`
})