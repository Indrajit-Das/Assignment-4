import { productSection } from "./productSection.js";
import {cart,displayCartSection} from "./cart.js";
import subTotalAmount from "./subTotalAmount.js";
import clearBtn from "./clearBtn.js";
import discount from "./discount.js";
// import { displayCartSection } from "./cart.js";

// when the browser loaded...................................
window.addEventListener('load',()=>{
    // display cart section
    displayCartSection();
    // product section
    productSection();
    // cart js file
    cart();
    // subtotal amount
    subTotalAmount();
    // clear btn
    clearBtn();
    // discount
    discount();
});




