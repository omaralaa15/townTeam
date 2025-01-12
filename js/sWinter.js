let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get('id');
console.log(productId)

let xhr = new XMLHttpRequest();
xhr.open("GET", "../json/winter.json");
xhr.onload = function() {
if (xhr.status === 200) {
try {
    let data = JSON.parse(xhr.responseText);
    console.log("JSON Data:", data); 

    if (data && data.collection && data.collection.winter) {
        let products = data.collection.winter;

        console.log(data.collection.winter);
        
        let product = products.find(p => p.product.id == productId);
        console.log(productId);
        console.log(product);
        

        if (product) {
            document.getElementById('product-name').textContent = product.product.title;
            document.getElementById('product-img').src = product.image.src;
            document.getElementById('product-price').textContent = product.price.amount;
            document.getElementById('product-color').textContent = product.title;
            let quantity = document.getElementById("quantity").value;
            
            document.getElementById('subtotal').textContent = product.price.amount* quantity;
            
            


        } else {
            document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
        }
    } else {
        console.error("Invalid JSON structure:", data);
        document.getElementById("product-details").innerHTML = "<p>Error loading product data.</p>";
    }
} catch (error) {
    console.error("Error parsing JSON:", error);
    document.getElementById("product-details").innerHTML = "<p>Error loading product data.</p>";
}
} else {
console.error("Failed to fetch JSON file. Status:", xhr.status);
}
};

xhr.send();




function decrese() {
    let quantityInput = document.getElementById("quantity"); 
    let currentQuantity = Number(quantityInput.value); 

    if (currentQuantity > 1) { 
        let newQuantity = currentQuantity - 1; 
        quantityInput.value = newQuantity; 

        
        let productPrice = parseFloat(document.getElementById('product-price').textContent);

        
        let subtotal = newQuantity * productPrice;

        
        document.getElementById('subtotal').textContent = subtotal.toFixed(2);

        return newQuantity; 
    }
}

function increase() {
    let quantityInput = document.getElementById("quantity"); 
    let currentQuantity = Number(quantityInput.value); 
    let newQuantity = currentQuantity + 1; 

    quantityInput.value = newQuantity;

    
    let productPrice = parseFloat(document.getElementById('product-price').textContent);

    
    let subtotal = newQuantity * productPrice;

    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);

    return newQuantity; 
}


function addTocart(){
    
    window.location.href = "cart.html";
}



document.getElementById("addTocarBtn").addEventListener("click", function () {
    
    let productId = urlParams.get('id');
    let productName = document.getElementById("product-name").textContent;
    let productPrice = document.getElementById("product-price").textContent;
    let productImg = document.getElementById("product-img").src;
    let productQuantity = document.getElementById("quantity").value;

    
    let product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
        img: productImg,
        quantity: parseInt(productQuantity)
    };

    
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];

    
    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        
        existingProduct.quantity += product.quantity;
    } else {
        
        cart.push(product);
    }
    
    
    localStorage.setItem("cart", JSON.stringify(cart));

    
    
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


////////////////////
var logo =document.getElementById("logo")
logo.onclick=function(){
  location.assign("../HomePage/index.html")
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