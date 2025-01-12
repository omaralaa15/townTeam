document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const subscribe = document.getElementById("subscribe").checked;
  // Select the button by its ID
  const createAccountButton = document.getElementById("createAccountBtn");

  if (email && password) {
    alert(`Account Created Successfully!\nName: ${firstName} ${lastName}\nSubscribed: ${subscribe}`);
     createAccountButton.addEventListener("click", function () {
          window.location.href = "login side-bar.html"; // Replace 'home.html' with the actual home page URL
    });
  } else {
    alert("Please fill in all required fields.");
   
  }
}); 

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





