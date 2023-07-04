import productList from "./products.js";

let productSection = ()=>{
    // we need to make a card component for each individual element
productList.forEach((ele=>{
    let parent = document.querySelector(".product-list");
    // make a card element to form a product card
    let card= document.createElement('div');
    card.classList.add('card');
    // cards child elements creation
    // image
    let image =document.createElement('img');
    image.classList.add("card-image-top");
    image.classList.add("image");
    image.setAttribute("height","200px");
    // card body
    let cardBody=document.createElement('div');
    cardBody.classList.add("card-body");
    // title-name
    let titleName =document.createElement("h4");
    titleName.classList.add('card-title');
    // id
    let productId = document.createElement("span");
    productId.classList.add("productId");
    productId.classList.add("hidden");
    // price
    let price =document.createElement("p");
    // button and qty combine div
    let btnQtyDiv = document.createElement("div");
    btnQtyDiv.classList.add("btnQtyDiv");
    // button
    let buttonCard = document.createElement("button");
    buttonCard.classList.add("btn");
    buttonCard.classList.add("addToCart");
    // qty label
    let labelQty = document.createElement("label");
    labelQty.innerHTML="Qty : &nbsp;";
    labelQty.classList.add("labelQty");
    // qty button
    let qtyInput = document.createElement('input');
    qtyInput.classList.add(".qtyInput");
    qtyInput.setAttribute("max","5");
    qtyInput.setAttribute("min","1");
    qtyInput.setAttribute("value","1");
    qtyInput.setAttribute("type","number");

    // now forming the card layout
    card.appendChild(image);
    btnQtyDiv.appendChild(buttonCard);
    btnQtyDiv.appendChild(labelQty);
    btnQtyDiv.appendChild(qtyInput);

    cardBody.appendChild(titleName);
    cardBody.appendChild(productId);
    cardBody.appendChild(price);
    cardBody.appendChild(btnQtyDiv);
    card.appendChild(cardBody);
    // adding data to the element
    image.src= ele.image;
    image.setAttribute('alt',ele.titleName);
    productId.innerHTML=ele.id;
    titleName.innerHTML=ele.name;
    price.innerHTML="Price : "+ele.price+" TK";
    buttonCard.innerHTML="Add to Cart";
    parent.appendChild(card);
    }));
}

export {productSection};