let users = JSON.parse(localStorage.getItem("users")) || [];

// Function for Sign-Up
function signUp(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("emailSignUp").value.trim();
  const password = document.getElementById("passwordSignUp").value.trim();
  const subscribe = document.getElementById("subscribe").checked;

  // Validate inputs
  if (!firstName || !lastName || !email || !password) {
    alert("Please fill out all required fields.");
    return;
  }

  // Check if email already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert("Email already exists.");
    return;
  }

  // Add user to Local Storage
  users.push({ firstName, lastName, email, password, subscribe });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  document.getElementById("registerForm").reset();
}

// Attach event listeners
document.getElementById("registerForm").addEventListener("submit", signUp);
document.getElementById("loginForm").addEventListener("submit", login);


document.querySelector('.facebook').addEventListener('click', function () {
  alert('Redirecting to Facebook login...');
  window.location.href = 'https://www.facebook.com/';
});

document.querySelector('.google').addEventListener('click', function () {
  alert('Redirecting to Google login...');
  window.location.href = 'https://www.google.com/';
});

document.querySelector('.twitter').addEventListener('click', function () {
  alert('Redirecting to Twitter login...');
  window.location.href = 'https://www.twitter.com/';
});



///////Nav Bar///////
var logo = document.getElementById("logo");
logo.onmouseover = function () {
  logo.style.cursor = "pointer";
};
//////////////linksHover//////////////////
var links = document.getElementsByClassName("link");
function linkOverFun(event) {
  event.target.style.textDecoration = "underline";
  event.target.style.cursor = "pointer";
}

function linkOutFun(event) {
  event.target.style.textDecoration = "none";
}
for (link of links) {
  link.onmouseover = linkOverFun;
  link.onmouseout = linkOutFun;
}
///////////////iconsHover////////////////
var icons = document.getElementsByClassName("icon");
function iconOverFun(event) {
  event.target.style.transform = "scale(1.3)";
  event.target.style.transitionDuration = "0.5s";
  event.target.style.transitionTimingFunction = "ease-out";
  event.target.style.cursor = "pointer";
}
function iconOutFun(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.transitionDuration = "0.5s";
  event.target.style.transitionTimingFunction = "ease-in";
}
for (icon of icons) {
  icon.onmouseover = iconOverFun;
  icon.onmouseout = iconOutFun;
}

/////////FOOTER/////////
var links = document.getElementsByClassName("link");
function linkOverFun(event) {
  event.target.style.textDecoration = "underline";
  event.target.style.cursor = "pointer";
}

function linkOutFun(event) {
  event.target.style.textDecoration = "none";
}
for (link of links) {
  link.onmouseover = linkOverFun;
  link.onmouseout = linkOutFun;
}


var logo =document.getElementById("logo")
logo.onclick=function(){
  location.assign("../index.html")
}



/////////////////////searchIcon//////////////
var search=document.getElementById("search")
search.onclick=function(){
    location.assign("../search/search.html")
}
/////////////////////cartIcon//////////////
var cart=document.getElementById("cart")
cart.onclick=function(){
    location.assign("../html/cart.html")
}
/////////////////////create sign up//////////////
var sign=document.getElementById("sign")
sign.onclick=function(){
    location.assign("../sign up/register.html")
}