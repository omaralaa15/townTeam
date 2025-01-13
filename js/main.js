function Category(element) {
  const category = element.closest(".filter-category");
  const items = category.querySelector(".filter-items");
  const arrow = category.querySelector(".arrow");

  if (items.style.display === "block") {
    items.style.display = "none";
    arrow.innerHTML = `<img src="../photos/Path22.png" alt="" srcset="">`; // Arrow down
  } else {
    items.style.display = "block";
    arrow.innerHTML = `<img src="../photos/Path13.png" alt="" srcset="">`; // Arrow up
  }
}

let men = document.getElementById("men");
console.log(men);
men.addEventListener("change", () => {
  console.log(men.checked);
});

var gridone = document.getElementById("gridone");
gridone.addEventListener("click", () => {
  document.querySelector(".container").style = `display: grid;
  grid-template-columns: repeat(1, 1fr);`;
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style = `display:flex;max-width:100%`;
  });
  const imageContainer = document.querySelectorAll(".img-contanier");
  imageContainer.forEach((imageContainer) => {
    imageContainer.style = "width:35%";
  });
  const data = document.querySelectorAll(".data");
  data.forEach((data) => {
    data.style = `justify-content:start; align-items:start; margin-left:20px`;
  });
  const itemName = document.querySelectorAll(".item-name");
  itemName.forEach((name) => {
    name.style.fontSize = "18px";
  });
});

var gridtwo = document.getElementById("gridtwo");
gridtwo.addEventListener("click", () => {
  document.querySelector(".container").style = `display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;`;
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.maxWidth = "600px";
    card.style.display = "block";
  });

  const imageContainer = document.querySelectorAll(".img-contanier");
  imageContainer.forEach((imageContainer) => {
    imageContainer.style = "width:100%";
  });
  const data = document.querySelectorAll(".data");
  data.forEach((data) => {
    data.style = `justify-content:center; align-items:center; margin-left:0px`;
  });

  const itemName = document.querySelectorAll(".item-name");
  itemName.forEach((name) => {
    name.style.fontSize = "18px";
  });

  const images = document.querySelectorAll(".main-image");
  images.forEach((image) => {
    image.style.width = "100%";
  });
});

var gridthree = document.getElementById("gridthree");
gridthree.addEventListener("click", () => {
  document.querySelector(".container").style = `display: grid;
  grid-template-columns: repeat(3, 1fr);`;
  const itemName = document.querySelectorAll(".item-name");
  itemName.forEach((name) => {
    name.style.fontSize = "14px";
  });

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.maxWidth = "400px";
    card.style.display = "block";
  });

  const imageContainer = document.querySelectorAll(".img-contanier");
  imageContainer.forEach((imageContainer) => {
    imageContainer.style = "width:100%";
  });
  const data = document.querySelectorAll(".data");
  data.forEach((data) => {
    data.style = `justify-content:center; align-items:center; margin-left:0px`;
  });
});
var gridFour = document.getElementById("gridFour");
gridFour.addEventListener("click", () => {
  document.querySelector(".container").style = `display: grid;
  grid-template-columns: repeat(4, 1fr);`;
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.maxWidth = "300px";
    card.style.display = "block";
  });

  const imageContainer = document.querySelectorAll(".img-contanier");
  imageContainer.forEach((imageContainer) => {
    imageContainer.style = "width:100%";
  });
  const data = document.querySelectorAll(".data");
  data.forEach((data) => {
    data.style = `justify-content:center; align-items:center; margin-left:0px`;
  });
  const itemName = document.querySelectorAll(".item-name");
  itemName.forEach((name) => {
    name.style.fontSize = "11px";
  });
});

// search function


// document.getElementById("black").addEventListener("click", () => {
//     let searchInput = document.getElementById("black").value;
//     let filteredProducts = jsonData.collection.men.filter((product) =>
//       product.untranslatedTitle.toLowerCase().includes(serchInput.toLowerCase())
//     );
//     console.log(filteredProducts);
// });






















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
    location.assign("../sign-up/register.html")
}