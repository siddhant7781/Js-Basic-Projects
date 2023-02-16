const hourEl= document.querySelector('.hour');
const minEl= document.querySelector('.min');
const secEl= document.querySelector('.sec');

setInterval(()=>{
    const date= new Date;
    const secdeg=date.getSeconds()/60*360-90;
    const mindeg=date.getMinutes()/60*360-90;
    const hourdeg=date.getHours()/12*360-90;
    
    secEl.style.transform = `rotate(${secdeg}deg)`;
    minEl.style.transform = `rotate(${mindeg}deg)`;
    hourEl.style.transform = `rotate(${hourdeg}deg)`;
},1000)
