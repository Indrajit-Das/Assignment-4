import {getNumberPrice} from "./cart.js";


let discount =()=>{
    document.querySelector("#disBtn").addEventListener("click",()=>{
        let disInput = document.querySelector("#disInput");
        let disInputValue=disInput.value;
        console.log(disInputValue);
       if(disInputValue.length >0){
            let tdSubTotal =document.querySelector("#subTotal");
            let discount =document.querySelector("#discount");
            discount.setAttribute("colspan","6");
            let subTotalAmount= tdSubTotal.innerHTML;
            // console.log(subTotalAmount);
            subTotalAmount= parseFloat(getNumberPrice(subTotalAmount));
            subTotalAmount -=parseFloat(disInputValue);
            tdSubTotal.innerHTML="Sub Total Amount :&nbsp;"+subTotalAmount+"&nbsp;TK";
            disInput.value="";
       }else{
        alert("Please Enter Discount Value");
       }
    });
}
 export default discount;