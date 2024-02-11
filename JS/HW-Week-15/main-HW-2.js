let form = document.forms[0];
let select = document.querySelector("#buget");
let userName = document.querySelector(`[name="userName"]`);
let userPassword = document.querySelector(`[name="userPassword"]`);

function saveUserData() {
    window.sessionStorage.setItem("userName", userName.value);
    window.sessionStorage.setItem("usePassword", userPassword.value);
    window.sessionStorage.setItem("userBuget", select.value);
}
function getUserData() {
    if (window.sessionStorage.getItem("userName")) {
        userName.value = window.sessionStorage.getItem("userName");
        userPassword.value = window.sessionStorage.getItem("usePassword");
        select.value = window.sessionStorage.getItem("userBuget");
    }
}
form.onsubmit = (e) => {

    saveUserData();
   
}


getUserData();
