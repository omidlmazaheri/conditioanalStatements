
let objRedius,  objResult ;
objRedius= document.getElementById("redius");
objResult=document.getElementById("result");

// OMID: for readability
function calculateArea(){
   
   return  objRedius.value **2 * Math.PI;
}
 function showArea() {
    objResult.innerHTML=`the area is <b>${calculateArea()}</b>`;
 }
