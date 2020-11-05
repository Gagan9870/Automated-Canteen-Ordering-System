var box = document.querySelector(".box");
var signin = document.getElementById("sign-in");
var signup = document.getElementById("sign-up");
signin.addEventListener("mouseover",changebc);
signup.addEventListener("mouseover",changebc);
signin.addEventListener("mouseout",removebc);
signup.addEventListener("mouseout",removebc);

function changebc(){
    signin.style.backgroundColor = "black";
    signup.style.backgroundColor = "orange";
}
function removebc(){
    signin.style.backgroundColor = "orange";
    signup.style.backgroundColor = "black";
}