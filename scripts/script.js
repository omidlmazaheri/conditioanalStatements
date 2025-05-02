
let uname, psw, msg;
let score, getScore, objGrade;
objScore=document.getElementById("score");
objGrade=document.getElementById("grade");

function login() {
    if (uname.value.toLowerCase()==="admin".toLowerCase() && psw.value==="123" ) {
        msg.innerText="welcome";
    } else {
        msg.innerText="something goes wrong!";

    }
}

function studentGrade(){
    debugger
    score= objScore.value;
    if (score >=90 && score<=100) {
        objGrade.innerText="Your Grade is A";
    } else if(score >=80 && score<90){
        objGrade.innerText="Your Grade is B";

    } else if(score >=50 && score<80){
        objGrade.innerText="Your Grade is C";
        // otherwise
    }else{
        objGrade.innerText="Your Grade is F";

    }

}









