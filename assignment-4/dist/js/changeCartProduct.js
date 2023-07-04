import { cartArray} from "./cart.js";
import cartSection from "./cartSection.js";
import subTotalAmount from "./subTotalAmount.js";

let changeCartProduct = function(){
    let qtyInput = document.querySelectorAll(".qtyInput");
    qtyInput.forEach(qty=>{
        qty.addEventListener("change",(event)=>{
            let clickedQtyInput = event.currentTarget;
            let tr = clickedQtyInput.closest("tr");
            let id = tr.lastChild.value;
            let data = cartArray[id];
            let qtyInput = clickedQtyInput.value;
            data.qty = qtyInput;
            data.totalPrice = data.price * qtyInput;
            // calculate sub total
            subTotalAmount();
            // call one more time the cart section
            cartSection(cartArray);
        });
    })
}


export {changeCartProduct};