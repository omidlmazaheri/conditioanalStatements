
let objRedius, rediusValue, objResult ;
objRedius= document.getElementById("redius");
objResult=document.getElementById("result");


function calculateArea(){
    rediusValue=objRedius.value;
   return  rediusValue **2 * Math.PI;
}
 function showArea() {
    objResult.innerHTML=`the area is <b>${calculateArea()}</b>`;
 }
