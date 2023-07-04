 import cartSection from "./cartSection.js";
 import subTotalAmount from "./subTotalAmount.js";
 // cart js file
 let cartArray=[];


 let cart= function(){
    
    displayCartSection();
    let buttons = document.querySelectorAll('.addToCart');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
        let clickedButton = event.currentTarget;
        let clickedDiv = clickedButton.closest('.card');
        // getting the product-id 
        let productId = clickedDiv.querySelector('.productId').innerText;

       // check if the product is already in the cart or not 
        if(hasMatchingValue(cartArray, 'id', productId)){
            alert("Already in the cart");
        }else{
            let productName = clickedDiv.querySelector('.card-title').innerText;
            let price = clickedDiv.querySelector('p').innerText;
            // to get only numeric value from price
            price = getNumberPrice(price);
            // getting the cart and qty input div
            let btnQtyDiv = clickedDiv.querySelector('.btnQtyDiv');
            // getting the qty input value
            let qtyInput = btnQtyDiv.lastChild.value;
            let image=clickedDiv.querySelector(".image").src;
            // total price
            let totalPrice = price * qtyInput;
            // here pushing the cart array values
            cartArray.push({name:productName,price:price,totalPrice:totalPrice,image:image,id:productId,qty:qtyInput});
            
           
        }
        // now the cart section creation
        cartSection(cartArray);
         // calculate sub total
        subTotalAmount();
        });
    });
}
// to check wheather a product is already present inside cart or not
function hasMatchingValue(cartArray, id, productId) {
    return cartArray.some(item => item.hasOwnProperty(id) && item[id] === productId);
}
// to extract only numbers from price
let getNumberPrice=(price)=>{
    const pattern = /[0-9]+/g;
    const matches = [];
    let match;
    while ((match = pattern.exec(price)) !== null) {
        matches.push(match[0]);
    }
    return matches.toString();
}

// for displaying cart section
let displayCartSection =()=>{
    let cartSection = document.querySelector(".cart-section");
    cartArray.length==0 ? cartSection.style.display="none" : cartSection.style.display="block";
}
export {cart,cartArray,displayCartSection,getNumberPrice};