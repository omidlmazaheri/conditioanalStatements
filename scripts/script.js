
let uname, psw;
function login() {
    if (uname.value.toLowerCase()==="admin".toLowerCase() && psw.value==="123" ) {
        msg.innerText="welcome";
    } else {
        msg.innerText="something goes wrong!";

    }
}
