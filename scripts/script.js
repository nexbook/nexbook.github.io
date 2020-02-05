
const splash = ()=>{
    window.location.href="shop.html"; 
  
}

let cartItems = Number(sessionStorage.getItem('clickcount'));

const loadCart = () => {
    document.getElementById("cart_items").textContent =sessionStorage.clickcount;
}




