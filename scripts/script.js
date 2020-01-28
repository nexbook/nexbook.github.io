
const splash = ()=>{
    let container = document.getElementById("container");
    // let container__ = document.getElementById("container__");
    // setTimeout(()=>{
    //     container.parentNode.removeChild(container);
    //     window.location.href="shop.html";        
    // }, 1500);
    // container.className +=" splash";
    window.location.href="shop.html"; 
    // container__.style.display ="flex";
    
}

let cartItems = Number(sessionStorage.getItem('clickcount'));

// const loadCart = (cartItems) => {
//     console.log('load cart '+cartItems);
//     document.getElementById("cart_items").textContent =cartItems;
// }

const loadCart = () => {
    // console.log('load cart '+cartItems+' '+sessionStorage.clickcount);
    document.getElementById("cart_items").textContent =sessionStorage.clickcount;
}




