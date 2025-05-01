
let uname, psw , msg;
uname=document.getElementById("username");
psw=document.getElementById("password");
msg=document.getElementById("prompt");
// case insensetive
function login() {
    if (uname.value.toLowerCase()==="admin".toLowerCase() && psw.value==="123" ) {
        msg.innerText="welcome";
    } else {
        msg.innerText="something goes wrong!";

    }
}
