    import { displayCartSection } from "./cart.js";
    import { changeCartProduct } from "./changeCartProduct.js";
    import { removeCartProduct } from "./removeCartProduct.js";
    import discount from "./discount.js";

    let cartSection=function(cartArray){
        let tbody = document.querySelector('#tbody');
        tbody.innerHTML='';
        for(let data of cartArray){
            let row = document.createElement("tr");
            let tableDataImage = document.createElement("td");
            let tableDataName = document.createElement("td");
            let tableDataPrice = document.createElement("td");
            let tableDataTotalPrice = document.createElement("td");
            let tableDataQty = document.createElement("td");
            // button for remove the row data
            let tableDataBtn = document.createElement("td");
            let tableDataRemoveBtn = document.createElement("button");
            tableDataRemoveBtn.classList.add("btn");
            tableDataRemoveBtn.classList.add("btn-warning");
            tableDataRemoveBtn.classList.add("btnRemove");
            tableDataRemoveBtn.innerHTML="remove";
            tableDataRemoveBtn.style.padding="5px";
            tableDataRemoveBtn.style.border="1px solid blue";
            tableDataRemoveBtn.style.color="black";
            // to get the cartArray index of current product it shold be the last child
            let tableDataHiddenCartArrayIndex = document.createElement("input");
            tableDataHiddenCartArrayIndex.setAttribute("type","hidden");
            tableDataHiddenCartArrayIndex.classList.add("cartArrayIndex");
            let index=cartArray.findIndex(obj=>{
                return obj.id===data.id;
            });
            tableDataHiddenCartArrayIndex.value=index;
            // table data input
            let tableDataQtyInput = document.createElement("input");
            tableDataQtyInput.classList.add("qtyInput");
            tableDataQtyInput.setAttribute("type","number");
            tableDataQtyInput.setAttribute("min","1");
            tableDataQtyInput.setAttribute("max","5");
            // image section
            let tableImage = document.createElement("img");
            tableImage.setAttribute("width","80px");
            tableImage.setAttribute("height","60px");
            //little calculation before assigning
            let totalQtyPrice = parseFloat(data.price) * parseInt(data.qty);    
            // assigning the data
            tableImage.setAttribute("src",data.image);
            tableDataName.innerHTML=data.name;
            tableDataQtyInput.value=data.qty;
            tableDataPrice.innerHTML=data.price+"&nbsp;TK";
            tableDataTotalPrice.innerHTML=totalQtyPrice+"&nbsp;TK";
            // appending data
            tableDataQty.appendChild(tableDataQtyInput);
            tableDataImage.appendChild(tableImage);
            row.appendChild(tableDataImage);
            row.appendChild(tableDataName);
            row.appendChild(tableDataQty);
            row.appendChild(tableDataPrice);
            row.appendChild(tableDataTotalPrice);
            tableDataBtn.appendChild(tableDataRemoveBtn);
            row.appendChild(tableDataBtn);
            // this is the last child that is display none 
            row.appendChild(tableDataHiddenCartArrayIndex);
            tbody.appendChild(row);
        }
        // increase or decrease cart item 
        changeCartProduct(); 
        // remove cart Product
        removeCartProduct();
        // display cart section
        displayCartSection();
       
    }
  
   
    export default cartSection;