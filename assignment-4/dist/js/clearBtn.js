import { cartArray } from "./cart.js";
import cartSection from "./cartSection.js";
import subTotalAmount from "./subTotalAmount.js";
let clearBtn =()=>{
    document.querySelector(".clear-btn").addEventListener("click",()=>{
        if(confirm("Are you sure ? You want to clear cart ?") == true){
            cartArray.length=0;
            cartSection(cartArray);
        }
        // cartArray.length=0;
        // cartSection(cartArray);
        // subTotalAmount();
    });
}
export default clearBtn;