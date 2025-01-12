
var div = document.getElementById("div");

function getDataMen() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../json/men.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.response);

            var searchBox = document.getElementById("searchBox");
            searchBox.addEventListener("input", () => {
                let searchInput = searchBox.value.toLowerCase();
                let filteredProducts = data.collection.men.filter((product) =>
                    product.title.toLowerCase().includes(searchInput)
                );

                var products = document.getElementById("container");
                products.innerHTML = ""; 

                if (filteredProducts.length > 0) {
                    filteredProducts.forEach((product) => {
                    products.innerHTML +=  `
                        <div class="card">
                        <div class="img-contanier">
                            <img src="https:${product.image.src}" width="400" height="400" class="main-image">
                            <div>
                                <button type="button">QUICK ADD</button>
                            </div>
                        </div>
                        <div class="data">
                            <div class="dataInfo">
                                <div class="item-name">
                                    <h2>${product.title}</h2>
                                    <p>${product.product.title}</p>
                                </div>
                            </div>
                            <div class="price"><p>${product.price.amount} ${product.price.currencyCode}</p></div>
                                <img src="https:${product.image.src}" width="50" height="50">
                            </div>
                            </div>
                        
                        `
                    });
                } else {
                    products.innerHTML = "<p>No products found</p>";
                }
            });
        }
    };

    xhr.send();
}
getDataMen();








///////////////////////////////
var closee=document.getElementById("close")
closee.onmouseover=function(){
    closee.style.cursor="pointer"
}
closee.onclick=function(){
    window.close()
    open("../HomePage/index.html")
}

