// Books Categories
// 1 - AP Classes
// 2 - Test Prep
// 3 - English / Social Studies
// 4 - Math / Science

// Array of Books

const books = [
    {
        title: 'AP Environmental Science',
        url: 'img/AP Environment.jpg',
        description: 'This is what you really need before you go to sleep',
        price: 0.99,
        stock: 3,
        cat: 4
    },
    {
        title: 'AP Human Geography',
        url: 'img/AP Human Geography.jpg',
        description: 'This is what you really need before you go to sleep',
        price: 0.99,
        stock: 3,
        cat: 4
    },
    {
        title: 'AP Psychology',
        url: 'img/AP Psycology.jpg',
        description: 'This is what you really need before you go to sleep',
        price: 0.99,
        stock: 3,
        cat: 3
    },
    {
        title: 'AP Spanish',
        url: 'img/AP Spanish.jpg',
        description: 'This is what you really need before you go to sleep',
        price: 0.99,
        stock: 3,
        cat: 3
    },
    {
        title: 'Prep Guide 2019-2020',
        url: 'img/prepguide.jpg',
        description: 'This is what you really need before you go to sleep',
        price: 1.49,
        stock: 3,
        cat: 2
    },
    {
        title: 'New PSAT/NMSQT',
        url: 'img/PSAT.jpg',
        description: 'This is what you really need before you go to sleep! This is what you really need before you go to sleep!',
        price: 0.99,
        stock: 3,
        cat: 2
    },
    {
        title: 'AP Biology',
        url: 'img/SAP Biology.jpg',
        description: 'This is what you really need before you go to sleep',
        price: 0.99,
        stock: 3,
        cat: 4
    },
    {
        title: 'SAT',
        url: 'img/SAT.jpg',
        description: 'This is what you really need before you go to sleep',
        price: 1.49,
        stock: 3,
        cat: 1
    }
    
];

let fakeCart;
sessionStorage.fakeCart ? fakeCart = JSON.parse(sessionStorage.fakeCart) : fakeCart=[];

let inCart;
sessionStorage.inCart ? inCart = JSON.parse(sessionStorage.inCart) : inCart=[];


sessionStorage.catCat ? document.getElementById("drop__cat").textContent = sessionStorage.catCat : document.getElementById("drop__cat").textContent = "ALL";

const uploadItems= ()=>{
    books.forEach((item, index)=>{
        let article = document.createElement("article")
        article.className = "card product-item";
        // 
        let header = document.createElement("header");
        header.className = "card__header";

        let h1 = document.createElement("h1");
        h1.className = "product__title";
        let cat = document.createElement("p");
        cat.className = "product__cat";

        let checked = document.createElement("span");
        checked.className = "checked non-checked";
        let imgChecked = document.createElement("img");
        imgChecked.src= "img/checked.png";
        imgChecked.alt="checked";
        
        checked.appendChild(imgChecked);

        let node = document.createTextNode(item.title);
        
        let catContent="";
        switch (item.cat) {
            case 1:
                catContent = "AP Classes";
                break;
            case 2:
                catContent = "Test Prep";
                break;
            case 3:
                catContent = "English/Social Studies";
                break;
            case 4:
                catContent = "Math/Science";
                break;
        }

        let nodeCat = document.createTextNode(catContent);
        h1.appendChild(node);
        h1.appendChild(checked);
        cat.appendChild(nodeCat);

        header.appendChild(h1);
        header.appendChild(cat);
        // 
        let cardContainer = document.createElement("div")
        cardContainer.className = "card__container";

        let cardImage = document.createElement("div");
        cardImage.className = "card__image";

        let img = document.createElement("img");
        img.src= item.url;
        img.alt="product";

        cardImage.appendChild(img);
        cardContainer.appendChild(cardImage);
        // 
        let cardActions = document.createElement("div")
        cardActions.className = "card__actions";

        let addButton = document.createElement("button")
        addButton.className = "btn add";
        addButton.addEventListener('click', (e)=>{
            if (fakeCart.length === 4) {
               alert("You reached the order limit!")
              } else {
            
                item.stock -=1;
                fakeCart.splice(fakeCart.length-1, 0, item);
                
                addButton.style.display='none';
                rmvButton.style.display='';
                checked.className='checked';
                
                inCart[index] = true;
    
                sessionStorage.inCart=JSON.stringify(inCart);

                sessionStorage.fakeCart=JSON.stringify(fakeCart);
                sessionStorage.clickcount = fakeCart.length
                document.getElementById("cart_items").textContent =sessionStorage.clickcount;
            }    
               
        });
        
        addButton.innerHTML = "Add To Cart &raquo;";
        
        cardActions.appendChild(addButton);

        let rmvButton = document.createElement("button")
        rmvButton.className = "btn remove";
        rmvButton.style.display='none';
        rmvButton.addEventListener('click', (e)=>{
              
                addButton.style.display='';
                rmvButton.style.display='none';
                checked.className='checked non-checked';
  
                inCart[index] = false;
                sessionStorage.inCart=JSON.stringify(inCart);
                            
  
                item.stock +=1;
                fakeCart = fakeCart.filter(i => i.title!=item.title);
                                                        
                sessionStorage.fakeCart=JSON.stringify(fakeCart);
                sessionStorage.clickcount = fakeCart.length
                document.getElementById("cart_items").textContent =sessionStorage.clickcount;

              
        });
        
        rmvButton.innerHTML = "&laquo; Remove Item";
        
        cardActions.appendChild(addButton);
        cardActions.appendChild(rmvButton);
        // 
        let cardContent = document.createElement("div")
        cardContent.className = "card__content";

        let itemPrice = document.createElement("h3");
        itemPrice.className = "product__price";
        let priceNode = document.createTextNode("$ " + parseFloat(item.price).toFixed(2));
        itemPrice.appendChild(priceNode);

        let itemInStock = document.createElement("span");
        itemInStock.className = "product__inStock";
        let stockNode = document.createTextNode("In Stock: " + item.stock);
        itemInStock.appendChild(stockNode);

        let itemContent = document.createElement("p");
        itemContent.className = "product__description";
        let contentNode = document.createTextNode(item.description);
        itemContent.appendChild(contentNode);

        cardContent.appendChild(itemPrice);
        cardContent.appendChild(itemInStock);
        cardContent.appendChild(itemContent);
        // 
        article.appendChild(header);
        article.appendChild(cardContainer);
        article.appendChild(cardContent);
        article.appendChild(cardActions);
        

        let grid = document.getElementById("grid");
        grid.appendChild(article);
        
        if (inCart.length < index) {
            inCart.push(item.inCart);
            console.log(inCart);
        }

        if (inCart[index] === true) {    
            addButton.style.display='none';
            rmvButton.style.display='';
            checked.className='checked';
        } else {
            addButton.style.display='';
            rmvButton.style.display='none';
            checked.className='checked non-checked';
            
        } 
        
        if (document.getElementById("drop__cat").textContent !== "ALL") {
            document.getElementById("drop__cat").textContent === catContent ? article.style.display='' : article.style.display='none';
        }
            
        
    });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
  function addEventListenerByClass(className, e) {
    let list = document.getElementsByClassName(className);
    for (let i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(e, ()=>{
            sessionStorage.catCat = list[i].textContent;
            document.getElementById("drop__cat").textContent = sessionStorage.catCat;
            uploadItems();
        });
    }
}

addEventListenerByClass('dropdown-content-a', 'click'); 