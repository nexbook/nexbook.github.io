let fakeCart = JSON.parse(sessionStorage.fakeCart) || [];
let inCart;
sessionStorage.inCart ? inCart = JSON.parse(sessionStorage.inCart) : inCart=[];



const url_recycle ='img/recycle.png';

const uploadCheckout=()=>{
    
    
    let article = document.createElement("article")
    article.className = "card--";

    let total=0;
        
    for (i=0; i< fakeCart.length; i++){
        // console.log(fakeCart[i].title);
        // console.log(fakeCart[i].price);
        
        let div = document.createElement("div");
        
        let item = document.createElement("div");
        item.className = "div__item";

        let itemTitle = document.createElement("span");
        itemTitle.className = "chk__title";
        let titleNode = document.createTextNode(fakeCart[i].title);
        itemTitle.appendChild(titleNode);
    
        let itemPrice = document.createElement("span");
        itemPrice.className = "chk__price";
        let priceNode = document.createTextNode("$ " + parseFloat(fakeCart[i].price * slider.value/10).toFixed(2));
        itemPrice.appendChild(priceNode);
        total+=Number(parseFloat(fakeCart[i].price * slider.value/10).toFixed(2));

        let recycleImg = document.createElement("span");
        recycleImg.className = "recycle__image";
        
        let img = document.createElement("img");
        img.src= url_recycle;
        img.alt="remove";
        
        recycleImg.appendChild(img);

        item.appendChild(itemTitle);
        item.appendChild(itemPrice);
        item.appendChild(recycleImg);
        
        div.appendChild(item);

        article.appendChild(div);
    
    }

    let totPrice = document.createElement("p");
    totPrice.className = "tot__price";
    let totNode = document.createTextNode("TOTAL AMOUNT: $ " + parseFloat(total).toFixed(2));
    totPrice.appendChild(totNode);
    sessionStorage.total = total;
    

    let chkButton = document.createElement("button")
    chkButton.className = "btn";
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
// orderDate.textContent = "HELLO" + new Date;
let oldDate = new Date(Date.now());
orderDate.textContent = "Order Date: " + oldDate.getFullYear() + "/" + (oldDate.getMonth()+1) + "/" + oldDate.getDate();

let slider = document.getElementById("daysToRent");
slider.value = 10;
let newDate = new Date(Date.now() + slider.value*24*60*60*1000);
sessionStorage.dueDate = newDate;
retDate.textContent = "Return By: " +  newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate();

slider.addEventListener('change', ()=>{
    let cards = document.querySelector(".card--");
    cards.remove();
    
    let newDate = new Date(Date.now() + slider.value*24*60*60*1000);
    sessionStorage.dueDate = newDate;
    retDate.textContent = "Return By: " +  newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate();;
    uploadCheckout();

});





