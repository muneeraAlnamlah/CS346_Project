var signin_form         = document.getElementById("sign-in");
var signup_form         = document.getElementById("sign-up");
var login_signup_color    = document.getElementById("btn-color");
var signin_btn          = document.getElementById("si");
var signup_btn          = document.getElementById("su");

function sign_in(){
    signin_form.style.left = "50px"; 
    signup_form.style.left = "450px";
    login_signup_color.style.left = "0"
    signup_btn.style.color = "white"
    signin_btn.style.color = "black"
}
function sign_up(){
   signin_form.style.left = "-400px"; 
   signup_form.style.left = "50px";
   login_signup_color.style.left = "110px"
   signin_btn.style.color = "white"
   signup_btn.style.color = "black"
}