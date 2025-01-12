let data;
var xhr = new XMLHttpRequest();
xhr.open("GET", "../json/winter.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    displayData(data.collection.winter);
  }
};
xhr.send();

function displayData(data) {
  let allContainer = document.querySelector(".container");

  data.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";

    const saleDiv = document.createElement("div");
    saleDiv.className = "sale";

    const sale = document.createElement("div");
    sale.className = "sale-text";
    sale.textContent = "Sale 60%";

    const newDiv = document.createElement("div");
    newDiv.className = "new-text";
    newDiv.textContent = "NEW";

    saleDiv.appendChild(sale);
    saleDiv.appendChild(newDiv);

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-contanier";
    imgContainer.appendChild(saleDiv);

    const mainImage = document.createElement("img");
    mainImage.src = item.image.src;
    mainImage.alt = item.product.title;
    mainImage.className = "main-image";
    mainImage.setAttribute("id", item.product.id);

    const buttonDiv = document.createElement("div");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "QUICK ADD";

    buttonDiv.appendChild(button);
    imgContainer.appendChild(mainImage);
    imgContainer.appendChild(buttonDiv);
    card.appendChild(imgContainer);

    const dataDiv = document.createElement("div");
    dataDiv.className = "data";

    const dataInfo = document.createElement("div");
    dataInfo.className = "dataInfo";

    const itemName = document.createElement("div");
    itemName.className = "item-name";

    const productName = document.createElement("p");
    productName.textContent = item.product.title;

    const productType = document.createElement("p");
    productType.textContent = item.product.type;

    itemName.appendChild(productName);
    itemName.appendChild(document.createTextNode(" - "));
    itemName.appendChild(productType);
    dataInfo.appendChild(itemName);
    dataDiv.appendChild(dataInfo);

    const priceDiv = document.createElement("div");
    priceDiv.className = "price";

    const priceText = document.createElement("p");
    priceText.textContent = `${item.price.currencyCode} ${item.price.amount}`;
    priceDiv.appendChild(priceText);

    dataDiv.appendChild(priceDiv);

    let smallImg = document.createElement("img");
    smallImg.src = item.image.src;
    smallImg.width = 50;
    smallImg.height = 50;

    dataDiv.appendChild(smallImg);
    card.appendChild(dataDiv);

    allContainer.appendChild(card);
    viewProduct();
  });
}
// let cartButton = document.createElement("button");
// cartButton.textContent = "View Cart";
// cartButton.addEventListener("click", opencart);
// document.body.appendChild(cartButton);

function viewProduct() {
  const cardId = document.querySelectorAll(".main-image");
  cardId.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("id");
      window.location.assign(`../html/singleWinter.html?id=${productId}`);
    });
  });
}
