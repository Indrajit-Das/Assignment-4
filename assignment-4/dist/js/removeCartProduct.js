import { cartArray } from "./cart.js";
import cartSection from "./cartSection.js";
import subTotalAmount from "./subTotalAmount.js";
let removeCartProduct=()=>{
   let btnRemove = document.querySelectorAll(".btnRemove");
   btnRemove.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        let clickedBtn = event.currentTarget;
        let tr = clickedBtn.closest("tr");
        let id = tr.lastChild.value;
        // to remove from the crat array
        if(confirm("Are you sure ? You want to remove from cart ?") == true){
            cartArray.splice(id,1);
            // calculate sub total
            subTotalAmount();
        }
        cartSection(cartArray);
    });
   })
}

export {removeCartProduct};
