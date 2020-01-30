const content = [
    {
        title: 'Legal & Policies',
        subtitles: [
            {
                subtitle: '1',
                content:'............'    
            },
            {
                subtitle: '2',
                content:'............'    
            },
        ]
    },
    {
        title: 'Frequently Asked Questions',
        subtitles: [
            {
                subtitle: 'How do NexBook rentals work?',
                content:'When a customer rents their item on the website, their order will be transported to their designated school (GHS/DEHS) where they can pick up their rented items at the Nexbook pickup area next to the school library. When making the rent purchase the student will type their school ID, this helps us to keep track of over-due items and students and will have their contact information incase Nexbook needs to remind the customer of any important dates regarding their return.'    
            },
            {
                subtitle: 'Is renting a prep book better than buying one?',
                content:'It’s up to you to decide which option best meets your educational needs. Although we primarily focus on rental. Our mission to give students access to prep books and other materials at a reduced price in order to succeed in their classes. We want the books to be used many times. However, many students buy books and only use it a couple times during their courses for one big price. While Nexbook Rental accommodates the needs for the students by providing them a variety of prep books at the right price.'    
            },
            {
                subtitle:'How do I return my item?',
                content:'At both schools, there is a NexBook drop-off box and a pick up place where the customer can pick up their items when their items are due. There is a drop-box where the customer can return their items, hopefully in the same condition the product was prior to the ownership of the customer.'
            },
            {
                subtitle:"What if I don't return my rented items?",
                content:'We will email you a reminder to return the rented items 3 days prior to the due date. After 15 days past the due-date, a fine will be used to your school account. The fine will be the cost of the item at the value before you rented it minus the cost of the rent.'
            },
            {
                subtitle:"Can I write or highlight in my rented book",
                content:'While other rental companies permit highlighting, we want to use the books many times, therefore we do not permit any writing or marks in the books. Just remember that future students will rent the same book after you, so be respectful.'
            },
            

        ]
    }
]

const fillContent = ()=>{
    let hd=document.getElementById("misc");
    let shd = document.querySelectorAll(".subheader");
    let cnt = document.querySelectorAll(".misc--content");

    switch (sessionStorage.misc) {
        case '0':
            hd.textContent=content[sessionStorage.misc].title;
            break;
        case '1':
            hd.textContent=content[sessionStorage.misc].title;
            shd[0].textContent = content[sessionStorage.misc].subtitles[0].subtitle; 
            cnt[0].textContent = content[sessionStorage.misc].subtitles[0].content; 
            shd[1].textContent = content[sessionStorage.misc].subtitles[1].subtitle; 
            cnt[1].textContent = content[sessionStorage.misc].subtitles[1].content; 
            shd[2].textContent = content[sessionStorage.misc].subtitles[2].subtitle; 
            cnt[2].textContent = content[sessionStorage.misc].subtitles[2].content; 
            shd[3].textContent = content[sessionStorage.misc].subtitles[3].subtitle; 
            cnt[3].textContent = content[sessionStorage.misc].subtitles[3].content; 
            shd[4].textContent = content[sessionStorage.misc].subtitles[4].subtitle; 
            cnt[4].textContent = content[sessionStorage.misc].subtitles[4].content; 
            break;    
    }
    
}

const expandDiv=(num)=>{
    let ms=document.querySelectorAll(".plusMinus");
    let cn=document.querySelectorAll(".misc--content");
    if (ms[num].textContent==="-") {
        ms[num].textContent="+";
        cn[num].style.display="none";
    } else {
        ms[num].textContent="-";
        cn[num].style.display="block";
    };
}

