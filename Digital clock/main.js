
const hour=document.getElementById("hour");
const minute=document.getElementById("Minutes");
const second=document.getElementById("seconds");
const ampm=document.getElementById("ampm");

function updateClock(){
    let h =new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampmVal= "AM";


    if(h>12){
       h= h-12;
    ampmVal ="PM";
    }
    h=h<10 ? "0"+h:h;
    m=m<10 ? "0"+m:m;
    s=s<10 ? "0"+s:s;

    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampm.innerText=ampmVal;
    setTimeout(()=>{
        updateClock();
    },1000)

}
updateClock();