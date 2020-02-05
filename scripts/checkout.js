let fakeCart = JSON.parse(sessionStorage.fakeCart) || [];
let inCart;
sessionStorage.inCart ? inCart = JSON.parse(sessionStorage.inCart) : inCart=[];



const url_recycle ='img/recycle.png';

const uploadCheckout=()=>{
    const date1 = new Date(Date.now());
    const date2 = new Date('5/20/2020');
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    let input = document.getElementById("daysToRent");
    input.setAttribute("max", diffDays);
    document.getElementById("spanMax").textContent=diffDays;
    
    let article = document.createElement("article")
    article.className = "card---";
    
    let total=0;
        
    for (i=0; i< fakeCart.length; i++){
                
        let div = document.createElement("div");
        
        let item = document.createElement("div");
        item.className = "div__item";

        let itemTitle = document.createElement("span");
        itemTitle.className = "chk__title";
        let titleNode = document.createTextNode(fakeCart[i].title);
        itemTitle.appendChild(titleNode);
    
        let itemPrice = document.createElement("span");
        itemPrice.className = "chk__price";
        let priceNode = document.createTextNode("$ " + parseFloat(fakeCart[i].price * slider.value).toFixed(2));
        itemPrice.appendChild(priceNode);
        total+=Number(parseFloat(fakeCart[i].price * slider.value).toFixed(2));

        item.appendChild(itemTitle);
        item.appendChild(itemPrice);
        div.appendChild(item);
        article.appendChild(div);
    
    }

    let totPrice = document.createElement("p");
    totPrice.className = "tot__price";
    let totNode = document.createTextNode("TOTAL AMOUNT: $ " + parseFloat(total).toFixed(2));
    totPrice.appendChild(totNode);
    sessionStorage.total = total;
    

    let chkButton = document.createElement("button")
    chkButton.className = "btn-";
    chkButton.addEventListener('click', ()=>{
        location.href='payment.html';
    }); 
    chkButton.innerHTML = "CHECKOUT &rarr;";
    
    article.appendChild(totPrice);
    article.appendChild(chkButton);
    let grid = document.getElementById("grid--checkout");
    grid.appendChild(article);
    

}

let retDate = document.getElementById("return--date");
let orderDate = document.getElementById("order--date");

let oldDate = new Date(Date.now());
orderDate.textContent = "Order Date: " + oldDate.getFullYear() + "/" + (oldDate.getMonth()+1) + "/" + oldDate.getDate();

let slider = document.getElementById("daysToRent");
slider.value = 10;
let newDate = new Date(Date.now() + slider.value*24*60*60*1000);
sessionStorage.dueDate = newDate;
retDate.textContent = "Return By: " +  newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate();

slider.addEventListener('change', ()=>{
    let cards = document.querySelector(".card---");
    cards.remove();
    
    let newDate = new Date(Date.now() + slider.value*24*60*60*1000);
    sessionStorage.dueDate = newDate;
    retDate.textContent = "Return By: " +  newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate();;
    uploadCheckout();

});