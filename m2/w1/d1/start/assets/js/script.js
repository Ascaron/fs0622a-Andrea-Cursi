var data = new Date();
document.getElementById('literaleDate').innerHTML += `${data.getDate()}/ottobre/${data.getFullYear()}`;
document.getElementById('americanDate').innerHTML = data;
document.getElementById('day').innerHTML += data.getDate();
document.getElementById('month').innerHTML += ' ottobre';
document.getElementById('euroData').innerHTML += ` ${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;