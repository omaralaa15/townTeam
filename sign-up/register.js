
function showForm(form) {
  if (form === 'login') {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
  } else {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
  }
}

//register function
function register(event) {
  event.preventDefault(); 
  const username = document.getElementById('register-username').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value.trim();
  const errorDiv = document.getElementById('register-error');

  errorDiv.textContent = '';

  if (!username || !email || !password) {
    errorDiv.textContent = 'All fields are required!';
    return;
  }

  if (!email.includes('@')) {
    errorDiv.textContent = 'Invalid email format!';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || []; 
  if (users.some(user => user.username === username)) {
    errorDiv.textContent = 'Username already exists!';
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registration successful!');
  showForm('login');
}

// Login function
function login(event) {
  event.preventDefault(); 
  const username = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorDiv = document.getElementById('login-error');

  errorDiv.textContent = ''; 

  if (!username || !password) {
    errorDiv.textContent = 'All fields are required!';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || []; 
  const user = users.find(user => user.email === username && user.password === password);

  if (!user) {
    errorDiv.textContent = 'Invalid username or password!';
  } else {
    alert('Login successful!');
    
    location.assign('../html/men.html'); 
  }
}

function logout() {
  localStorage.removeItem("users");
  alert('logout successful!');
  window.location.href = './index.html';
}






// Attach event listeners
document.getElementById("registerForm").addEventListener("submit", register);
document.getElementById("loginForm").addEventListener("submit", login);

// Social media login buttons
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

// Navbar logo hover effect
var logo = document.getElementById("logo");
logo.onmouseover = function () {
  logo.style.cursor = "pointer";
};

// Links hover effect
var links = document.getElementsByClassName("link");
function linkOverFun(event) {
  event.target.style.textDecoration = "underline";
  event.target.style.cursor = "pointer";
}

function linkOutFun(event) {
  event.target.style.textDecoration = "none";
}

for (var link of links) {
  link.onmouseover = linkOverFun;
  link.onmouseout = linkOutFun;
}

// Icons hover effect
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

for (var icon of icons) {
  icon.onmouseover = iconOverFun;
  icon.onmouseout = iconOutFun;
}

// Footer links hover effect (this was duplicated, now fixed)
var footerLinks = document.getElementsByClassName("footer-link");
for (var link of footerLinks) {
  link.onmouseover = linkOverFun;
  link.onmouseout = linkOutFun;
}

// Redirection actions for icons and buttons

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