
let objMonth = document.getElementById("months");

let monthValue;
function getSeason() {
    debugger
    monthValue= objMonth.value;
    if (monthValue === "فروردین" || monthValue === "اردیبهشت" || monthValue === "خرداد") {
       return "فصل بهار است.";
      } else if (monthValue === "تیر" || monthValue === "مرداد" || monthValue === "شهریور") {
       return "فصل تابستان است.";
      } else if (monthValue === "مهر" || monthValue === "آبان" || monthValue === "آذر") {
        return "فصل پاییز است.";
      } else {
       return"فصل زمستان است.";
      }
}
function showSeason(){
document.getElementById("result").innerHTML=` شما در فصل ${getSeason()} هستید` ;
}
