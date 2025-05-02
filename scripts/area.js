
let objWidth=document.getElementById("width");
let objHeight=document.getElementById("height");
let objResult=document.getElementById("result");
let widthValue, heightValue,areaValue; result;

OMID: a function with return value
function calculateArea() {
    widthValue=objWidth.value;
    heightValue=objHeight.value;
    result= widthValue* heightValue;
    return result;

}
function showArea(){
    areaValue= calculateArea();
    // OMID: Template Literals

    objResult.innerHTML=`the area is <b> ${areaValue} <b>`;
}