
salutami();
function salutami() {
    var data=new Date();
    if (data.getHours() >= 0 && data.getHours() < 8) {
        document.getElementById('saluto').innerHTML = 'Buonanotte';
    } else if (data.getHours() >= 8 && data.getHours() < 14) {
        document.getElementById('saluto').innerHTML = 'Buongiorno';
    } else if (data.getHours() >= 14 && data.getHours() < 20) {
        document.getElementById('saluto').innerHTML = 'Buon pomeriggio';
    } else {
        document.getElementById('saluto').innerHTML = 'Buonasera';
    }
}