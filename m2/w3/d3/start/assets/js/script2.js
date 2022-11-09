var s= 0;
var time=sessionStorage.getItem('time');
if(time==null){
    s=0;
}else{
    s=time;
}
    setInterval(function(){
        document.getElementById('secondi').innerHTML=s;
        sessionStorage.setItem('time',s);
        s++
    }, 1000)