// Books Categories
// 1 - AP Classes
// 2 - Test Prep
// 3 - Languages / Social Studies
// 4 - Math / Science

// Array of Books

const books = [
    {
        title: "Barron's AP US History Test Prep Book + Flashcards Bundle",
        url: 'img/US History.jpg',
        description: [
            'Quality: very good',
            'Publication date: 2018',
            'Author: Eugene V. Resnick M.A., Kevin D. Preis Ed.M., Micheal R. Bergman J.D',
            'List Price: $33.86',
            'Format: Paperback',
            'ISBN-10: 1438011083',
            'ISDN-13: 978-1438011083',
            'Edition: 4th Edition'
        ],
        price: 0.11,
        stock: 25,
        cat: 3
    },
    {
        title: "Barron's AP US History Flashcards",
        url: 'img/US History Flashcards.jpg',
        description:  [
            'Quality: good',
            'Publication date: 2018',
            'Author: Eugene V. Resnick M.A.',
            'List Price: $14.77',
            'Format: Paperback',
            'ISBN-10: 1438011083',
            'ISDN-13: 978-1438011080',
            'Edition: 3rd Edition'
        ],
        price: 0.05,
        stock: 25,
        cat: 3
    },
    {
        title: "Barron's AP US History Test Preparation Book",
        url: 'img/US History.jpg',
        description:  [
            'Quality: very good',
            'Publication date: 2018',
            'Author: Eugene V. Resnick M.A.',
            'List Price: $19.09',
            'Format: Paperback',
            'ISBN-10: 1438076118',
            'ISDN-13: 978-1438076119',
            'Edition: 3rd Edition'
        ],
        price: 0.06,
        stock: 25,
        cat: 3
    },
    {
        title: "Barron's AP Biology Flashcards",
        url: 'img/AP Biology.jpg',
        description:  [
            'Quality: good',
            'Publication date: 2017',
            'Author: Deborah T., Goldberg M.S.',
            'List Price: $18.99',
            'Format: Paperback',
            'ISBN-10: 1438076118',
            'ISDN-13: 978-1438076118',
            'Edition: 3rd Edition'
        ],
        price: 0.06,
        stock: 25,
        cat: 4
    },
    {
        title: "Barron's AP Physics 1 Test Prep Book",
        url: 'img/AP Physics.jpg',
        description:  [
            'Quality: good',
            'Publication date: 2018',
            'Author: Rideout M.S., Jonathon Wolf M.A. Ed. M',
            'List Price: $21.99',
            'Format: Paperback',
            'ISBN-10: 1438010701',
            'ISDN-13: 978-1438010717',
            'Edition: 3rd Edition'
        ],
        price: 0.07,
        stock: 25,
        cat: 4
    },
    {
        title: "Barron's AP European History Flashcards",
        url: 'img/AP History.jpg',
        description:  [
            'Quality: good',
            'Publication date: 2018',
            'Author: Seth A., Roberts M.A.',
            'List Price: $23.99',
            'Format: Paperback',
            'ISBN-10: 1438010670',
            'ISDN-13: 978-1438010670',
            'Edition: 9th Edition'
        ],
        price: 0.08,
        stock: 25,
        cat: 3
    },
    {
        title: "Barron's AP US Government & Politics Test Prep Book",
        url: 'img/AP Gov.jpg',
        description:  [
            'Quality: good',
            'Publication date: 2018',
            'Author: Curt Lader M.S. Ed.',
            'List Price: $22.09',
            'Format: Paperback',
            'ISBN-10: 1438011684',
            'ISDN-13: 978-1438011684',
            'Edition: 11th Edition'
        ],
        price: 0.07,
        stock: 25,
        cat: 3
    },
    {
        title: "Barron's AP Calculus AB Test Prep Book",
        url: 'img/AP Calc.jpg',
        description:  [
            'Quality: excellent',
            'Publication date: 2018',
            'Author: David Brock M.S., Dennis Donovan M.S., Shirley O. Hockett Ph. D',
            'List Price: $24.99',
            'Format: Paperback',
            'ISBN-10: 1506261906',
            'ISDN-13: 978-1506261904',
            'Edition: 15th Edition'
        ],
        price: 0.08,
        stock: 25,
        cat: 4
    },
    {
        title: 'Cracking The AP Chemistry Exam Book',
        url: 'img/AP Chemistry Exam.jpg',
        description:  [
            'Quality: good',
            'Publication date: 2018',
            'Author: The Princeton Review',
            'List Price: $19.99',
            'Format: Paperback',
            'ISBN-10: 0525568186',
            'ISDN-13: 978-025568186',
            'Edition: 8th Edition'
        ],
        price: 0.06,
        stock: 25,
        cat: 4
    },
    {
        title: "Barron's AP Environmental Science Test Prep Book",
        url: 'img/AP Environment.jpg',
        description:  [
            'Quality: excellent',
            'Publication date: 2017',
            'Author: Gary S., Thorpe M.S.',
            'List Price: $24.99',
            'Format: Paperback',
            'ISBN-10: 1438008651',
            'ISDN-13: 978-1438008653',
            'Edition: 4th Edition'
        ],
        price: 0.08,
        stock: 25,
        cat: 4
    },
    {
        title: "Barron's AP Human Geography Test Prep Book",
        url: 'img/AP Human Geography.jpg',
        description:  [
            'Quality: very good',
            'Publication date: 2018',
            'Author: Meredith Marsh Ph.D., Peter S. Alagona Ph. D',
            'List Price: $22.99',
            'Format: Paperback',
            'ISBN-10: 1439010680',
            'ISDN-13: 978-1438011087',
            'Edition: 7th Edition'
        ],
        price: 0.07,
        stock: 25,
        cat: 3
    },
    {
        title: "Barron's AP Psychology Test Prep Book",
        url: 'img/AP Psychology.jpg',
        description:  [
            'Quality: very good',
            'Publication date: 2018',
            'Author: Allyson Wesley Ed. D., Robert McEntartffer Ph.D.',
            'List Price: $22.99',
            'Format: Paperback',
            'ISBN-10: 1438010699',
            'ISDN-13: 978-1438010694',
            'Edition: 14th Edition'
        ],
        price: 0.07,
        stock: 25,
        cat: 3
    },
    {
        title: "Barron's AP Spanish Language and Culture Test Prep Book",
        url: 'img/AP Spanish.jpg',
        description:  [
            'Quality: very good',
            'Publication date: 2019',
            'Author: Daniel Paolicchi M.A., Alice Gericke Springer',
            'List Price: $18.99',
            'Format: Paperback',
            'ISBN-10: 1506262000',
            'ISDN-13: 978-1506262000',
            'Edition: 10th Edition'
        ],
        price: 0.06,
        stock: 25,
        cat: 3
    },
    {
        title: 'ACT Preparation Guide 2019-2020',
        url: 'img/prepguide.jpg',
        description:  [
            'Quality: excellent',
            'Publication date: 2019',
            'Author: ACT',
            'List Price: $34.95',
            'Format: Paperback',
            'ISBN-10: 1119580501',
            'ISDN-13: 978-1119580508',
            'Edition: Wiley 1 Edition'
        ],
        price: 0.11,
        stock: 25,
        cat: 2
    },
    {
        title: "Barron's New PSAT/NMSQT Prep Guide",
        url: 'img/PSAT.jpg',
        description:  [
            'Quality: very good',
            'Publication date: 2018',
            'Author: Ira K. Wolf Ph.D., Sharon W. Green M.A., Brian W. Stewart M.Ed.',
            'List Price: $22.99',
            'Format: Paperback',
            'ISBN-10: 1438011067',
            'ISDN-13: 978-1438011067',
            'Edition: 19th Edition'
        ],
        price: 0.07,
        stock: 25,
        cat: 2
    },
    {
        title: "Barron's AP Biology Prep Book",
        url: 'img/SAP Biology.jpg',
        description:  [
            'Quality: very good',
            'Publication date: 2018',
            'Author: Deborah T., Goldberg M.S.',
            'List Price: $18.99',
            'Format: Paperback',
            'ISBN-10: 1438008686',
            'ISDN-13: 978-1438008684',
            'Edition: 6th Edition'
        ],
        price: 0.06,
        stock: 25,
        cat: 4
    },
    {
        title: 'SAT Study Guide (with 5 practice tests)',
        url: 'img/SAT.jpg',
        description:  [
            'Quality: excellent',
            'Publication date: 2019',
            'Author: Sharon W. Green M.A., Ira K. Wolf Ph.D., Brian W. Stewart M.Ed.',
            'List Price: $19.99',
            'Format: Paperback',
            'ISBN-10: 1506268026',
            'ISDN-13: 978-1506258027',
            'Edition: 13th Edition'
        ],
        price: 0.06,
        stock: 25,
        cat: 2
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
                catContent = "Languages/Social Studies";
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

        let dContent = document.createElement("h3");
        dContent.className = "product__description";
        let dNode = document.createTextNode("+ Description");
        dContent.appendChild(dNode);
        
        let itemContent = document.createElement("p");
        itemContent.className = "product__description";
        for (i=0;i<8;i++) {
            let contentNode = document.createTextNode(item.description[i]);
            let descrBr = document.createElement("br");
            itemContent.appendChild(contentNode);
            itemContent.appendChild(descrBr);
        }
        
        

        cardContent.appendChild(itemPrice);
        cardContent.appendChild(itemInStock);
        cardContent.appendChild(dContent);
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