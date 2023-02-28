

const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuv!@#$%^&*";

function random(){
    let passwordLen=12;
    let colorCode="";
    for(i=0;i<passwordLen;i++){
    password=Math.floor(Math.random()*a.length);
    colorCode += a.slice(password, password + 1);

}
return colorCode;
}
console.log(random());
//console.log(Math.random());