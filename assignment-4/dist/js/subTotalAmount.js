import { cartArray } from "./cart.js";

let subTotalAmount = ()=>{
    let subTotal=0;
    let tdSubTotal =document.querySelector("#subTotal");
    tdSubTotal.setAttribute("colspan","6");
    tdSubTotal.innerHTML="Sub Total Amount :&nbsp;"+subTotal+"&nbsp;TK";
    cartArray.forEach(product=>{
        subTotal += parseFloat(product.totalPrice);
    });
    tdSubTotal.innerHTML="Sub Total Amount :&nbsp;"+subTotal+"&nbsp;TK";
}
export default subTotalAmount;