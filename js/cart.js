
// ----------------------------------header-----------------------------------------------------
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
//////////////////////////////////////////////////////////////////////////////////
// ----------------------------------cart-----------------------------------------------------


var cart = JSON.parse(localStorage.getItem("cart")) || [];
var container = document.getElementById("cartContainer");

function cartitem() {

    container.innerHTML = ""

    if (cart.length === 0) {
        container.textContent = "Your cart is empty.";
    } else {
        cart.forEach(function (item) {

            item.quantity = item.quantity || 1;

            var div = document.createElement("div");
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "space-between"
            div.style.border = "1px solid #ccc";
            div.style.padding = "10px";
            div.style.margin = "10px";
            div.style.display = "flex";
            div.style.width = "90em";
            //div.style.width = "70%";
            div.style.height = "150px";
            div.className = "itemsp"

            var img = document.createElement("img");
            img.src = item.img;
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.marginRight = "20px";

            var title = document.createElement("h3");
            title.textContent = item.title;
            title.style.fontSize = "18px";
            title.style.fontWeight = "600";
            title.style.color = "#333";
            title.style.marginBottom = "5px";

            var price = document.createElement("p");
            price.textContent = `$${(item.price) * item.quantity.toFixed(2)}`;
            price.style.marginLeft = "20px";
            price.style.marginright = "20px";

            var priceitem = document.createElement("p");
            priceitem.textContent = `$${item.price}`;
            priceitem.style.marginLeft = "20px";
            priceitem.style.marginright = "20px";


            var amount = document.createElement("div");
            amount.style.display = "flex";
            amount.style.border = "1px solid #ccc";
            amount.style.height = "50px"
            amount.style.marginLeft = "20px";
            amount.style.marginright = "20px";
            amount.style.alignItems = "center";
            amount.style.gap = "10px";
            amount.innerHTML = `
                <button class="minusbtn">-</button>
                <span class="itemcount">${item.quantity}</span>
                <button class="plusbtn">+</button>
            `;

            var buttons = amount.querySelectorAll("button");
            buttons.forEach(button => {
                button.style.padding = "8px 15px";
                button.style.border = "none";
                button.style.cursor = "pointer";
                button.style.backgroundColor = "#fff";
                button.style.color = "#333";
            });

            var remove = document.createElement("button")
            remove.textContent = "x"
            remove.className = "removefromcart";
            remove.style.textAlign = "center"
            remove.style.width = "50px";
            remove.style.height = "50px";
            remove.style.marginLeft = "20px";
            //remove.style.padding = "5px 10px";
            remove.style.backgroundColor = "#fff";
            remove.style.color = "black";
            remove.style.border = "none";
            remove.style.cursor = "pointer";
            remove.style.fontSize = "16px";
            remove.addEventListener("click", function () {
                removeFromCart(item, div)
            });

            amount.querySelector(".plusbtn").addEventListener("click", function () {
                item.quantity = Number(item.quantity) + 1;
                updateCart();
                cartitem(); 
                updateCartCounter();
                totalprice()
                updateProgressBar()

            });

            amount.querySelector(".minusbtn").addEventListener("click", function () {
                if (item.quantity > 1) {
                    item.quantity = Number(item.quantity) - 1;
                    updateCart();
                    cartitem();
                    updateCartCounter();
                    totalprice()
                    updateProgressBar()

                }
            });



            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(priceitem);
            div.appendChild(amount);
            div.appendChild(price);
            div.appendChild(remove)

            container.appendChild(div);
        })
    }
    updateCartCounter()
    totalprice()
    updateProgressBar()

}


function removeFromCart(item, div) {
    cart = cart.filter(function (cartItem) {
        return cartItem.id !== item.id; 
    });
    updateCart();
    div.remove();
    updateCartCounter();
    totalprice();
    updateProgressBar();
}


function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// function updateCartCounter() {
//     cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let totalItems=0;
//     for(let i=0;i<cart.length;i++)
// {
//     let item=cart[i];
//     totalItems +=Number(item.quantity) ||0;
// }
//     document.getElementById("cartCounter").textContent = totalItems;
// }

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((total, item) => total + Number(item.quantity), 0);
    document.getElementById("cartCounter").textContent = totalItems;
}


cartitem();


function totalprice(cart) {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalprice = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemPrice = Number(item.price);
        let itemQuantity = item.quantity || 1;

        totalprice += itemPrice * itemQuantity;
    }
    document.getElementById("totalprice").textContent = `$${totalprice.toFixed(2)}`;
    return totalprice
}
totalprice(cart);
cartitem();
updateProgressBar()


function AddToCart(item) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var existingItem = cart.find(cartItem => cartItem.title === item.title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        item.quantity = 1;
        cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
    totalprice()
    updateProgressBar()
}

function updateProgressBar() {
    var totalPrice = totalprice(cart);
    var progressBar = document.getElementById('progressBar');
    var maxPrice = 1399;

    let progress = (totalPrice / maxPrice) * 100;
    if (progress > 100) {
        progress = 100;
    }
    progressBar.value = progress;
}
updateProgressBar();


function applyCoupon() {
    var totalPriceElement = document.getElementById('totalprice');
    var couponCode = document.getElementById('couponCode').value.trim().toUpperCase();

    var totalPrice = totalprice();
    var validCouponCode = "TEAM3";

    if (couponCode === validCouponCode) {
        var discount = totalPrice * 0.10;
        totalPrice -= discount;
        //alert("Promo code applied! You get 10% off.");
    } else if (couponCode !== "") {
        alert("Invalid coupon code.");
    }
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}
// ----------------------------------footer-------------------------------------------------------
var links = document.getElementsByClassName("link")
function linkOverFun(event) {
    event.target.style.textDecoration = "underline"
    event.target.style.cursor = "pointer"
}

function linkOutFun(event) {
    event.target.style.textDecoration = "none"
}
for (link of links) {
    link.onmouseover = linkOverFun
    link.onmouseout = linkOutFun

}
////////////////////////
var con=document.getElementById("con")
con.onclick=function(){
    location.assign("../html/men.html")

}
////////////////
var logo =document.getElementById("logo")
logo.onclick=function(){
  location.assign("../index.html")
}