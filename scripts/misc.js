const fillContent = ()=>{
    let hd=document.getElementById("misc");
    let shd = document.querySelectorAll(".subheader");
    let cnt = document.querySelectorAll(".misc--content");
    let ttl = document.querySelectorAll(".misc--title");

    
    hd.textContent=content[sessionStorage.misc].title;
    document.getElementById("misc--img").setAttribute("src", content[sessionStorage.misc].src);

    ttl.forEach((item, idx)=>{
        if (idx > content[sessionStorage.misc].subtitles.length-1) {
            item.style.display="none";
        }  
    })
    
    content[sessionStorage.misc].subtitles.forEach((item, idx)=>{
        shd[idx].textContent = item.subtitle; 
        cnt[idx].textContent = item.content; 
    });
    
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

const content = [
    {
        title: 'Legal & Policies',
        src:'img/legal.png',
        subtitles: [
            {
                subtitle: 'General Policies:',
                content:"We work with district shipping partnered with UPS to guarantee arrival of your textbooks at the chosen location no later than the date stated on your order confirmation. If you still haven't received your order by then, let us know by contacting us and we will refund your shipping and if necessary we will send you another copy."    
            },
            {
                subtitle: 'Quality of book guarantee:',
                content:"All books are checked and verified of the quality before putting items available to rent on the website. To help us out, we ask that you keep the books high quality for the next user. If you're unhappy with the quality of any of our books, we'll immediately have another copy of the same book available for you to pick up at the location. To qualify, you must return the original rental book to the Nexbook center at Grandview High School or Denver East High School in accordance with the Return Shipping Policy section below. If you've purchased a new book, the book must be returned in brand new condition to qualify for a refund."    
            },
            {
                subtitle: "Highlighting and drawing:",
                content: "Highlighting is not permitted, please do not write in rented physical books and other items. Remember that rentals are intended for multiple users. As a courtesy to your fellow students, please do not highlight or write with pen in the books."
            },
            {
                subtitle: "Damage to items:",
                content: "We expect books to have some ordinary wear after each use; however highlighting, underlining and marking is not permitted. If a book is returned in damaged condition (stained, torn pages, loose binding etc.), you'll be charged the price value of the book. In those cases, we'll contact you and offer to have the damaged book returned to you at your cost. If you do not claim the book within 45 days of our contact, Nexbook will treat the book as abandoned and may have it donated, recycled, or otherwise disposed of."
            },
            {
                subtitle: "Lost Items",
                content: "If your book is lost or stolen, you can always try to find an identical book in the same condition and send it back. The other option is to pay the purchase price of the lost book, that is, the list price minus any rental fees you have already paid. To pay for a lost, stolen, or damaged book, an email will be sent to you."
            },
            {
                subtitle: "Late Returns:",
                content: "When you rent your book, you will be given a due date for returning the book. Your book is 'returned' as of the date that you drop off your book at the Nexbook location (Grandview High School or Denver East High School). If your book is not returned by the due date, Nexbook will email you a warning. If you don’t return it within 15 days, Nexbook will email you with your options as a reminder. If you were charged the purchase price but still want to return the book, you must return the book within 15 days of being charged for a refund of the purchase fee. If you decide to keep a book it will never cost more than the purchase price. Our mission as a company is to alleviate costs of the prep books and items for students."
            },
            {
                subtitle: "Out-of-stock Products:",
                content: "On the website we will have updates and show alerts if any books are out-of-stock. A book that is out of stock will be available the following week as we are receiving returns from students every week. However, if an item is out of stock, your order may be delayed. We will notify you of any book that is unavailable for immediate shipment. You may cancel any item not being prepared for shipment. You may request a cancellation by emailing us. Contact information can be found on our website"
            },
           
        ]
    },
    {
        title: 'Frequently Asked Questions',
        src:'img/faq.png',
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
            {
                subtitle:"How much money does renting my prep book save?",
                content:'Students typically see a savings of 50% to 85% over new or used purchases. Some students will see even greater savings of up to 90 or 95%. Just do a quick search of your books and List Price of the product is found under the “Product Description”'
            },
            {
                subtitle:"Can I purchase my book after renting it?",
                content:'Certainly! You’re only charged the difference between what you already paid and the value/quality of the book at the time you initially rented it. Please contact us or come to the Nexbook stand next/ at your school library and we’ll walk you through the check out process.'
            },
            {
                subtitle:"How much can I save?",
                content:'It depends on the book. Generally renting NexBook items can save you up to 70-80% compared to a new book/prep book.'
            },
            {
                subtitle:"What kind of condition are the books in? ",
                content:"All textbooks are in an acceptable used, like new or new condition. We strive to provide you with high quality textbooks similar to new and used books in your school bookstore. After all, we'd like to rent the book to someone else once you're done with it, so it's in our interest to provide quality textbooks."
            },
            {
                subtitle:"Do you only provide rented items to certain schools?",
                content:'As of December 2019 we only provide the Nexbook rental service to Grandview HIgh School in the cherry creek school district and to Denver East High School in Denver Public schools. When our business is successful at both schools we will spread this company to more Denver Public Schools and Cherry Creek Schools as well.'
            },
            {
                subtitle:"Where will my books and items arrive?",
                content:'Your  books will arrive at the NexBook stand; the pick-up center. Nexbook rental center is available at both locations next to or inside the school library.'
            },
            {
                subtitle:"I lost one of my prep books, what do I do?",
                content:'In order to clear your school-account for fines or overdue you can contact NexBook (contact information found on the website) OR you can send a replacement copy of the book. In order to confirm the replacement, there is additional information found about the product with publication date, author, ISBN, Edition, etc.'
            },
            {
                subtitle:"Will I get my books on time?",
                content:'Most items are located at both of the locations, and ready to pick up the next day. Some items need to be transported from one school to the other via district shipping. Products may arrive late from weather conditions or holidays. In any of those cases, an email will be sent to the customer informing them of the delay.'
            },
            {
                subtitle:"What if my items don’t show up?",
                content:'If the product doesn’t come after 13 days to the pick-up location, please email NexBook rental or call your NexBook rental school number, found on the “contact” page of the rental website and we will locate the item or you can choose to get a refund.'
            },
            {
                subtitle:"What if you don't receive my books by their due date?",
                content:'We give the customer 15 days to return the book at the NexBook drop-off book available at both schools. If the book is not returned by that time, a fine will show up on the student’s school account and will have to pay the fine to be able to participate in their school activities and field trips.'
            },
            {
                subtitle:"How do I pay for my NexBook rental?",
                content:'Credit card payments are processed securely during the checkout procedure. All major credit cards are accepted. We cannot accept cash or money orders, and we are not taking orders over the phone at this time.'
            },
            {
                subtitle:"What if I need to keep my book longer than the rental period?",
                content:'You can request an extension for the item. Just email us at NexBook.xyz@gmail.com and follow the directions for requesting an extension on the item. '
            },
            {
                subtitle:"What if I need the same book for the next term?",
                content:'Ask for an extension, email us at NexBook.xyz@gmail.com and  the extension price will be half the price of the previous bill of the NexBook item.'
            },
            {
                subtitle:"Are there online items I can rent?",
                content:'As of now, there are not but in the near future we will expand our products and consider having online rented items available for the customer.'
            },
            {
                subtitle:"How does loss/damage protection work and why should I protect my books?",
                content:'When you select the loss/damage protection option, your book is protected against theft, loss, and damage for the entire rental period. For a very low price, you can have peace of mind that your rentals are covered so you do not need to worry about covering the full price of the rented items. If your item is damaged then the customer will only need to pay 30% of the damaged item.'
            },
            
        ]
    },
    {
        title: 'Rental/Shipping Agreement',
        src:'img/mailing.png',
        subtitles: [
            {
                subtitle: "School and District Partnership",
                content:"NexBook rental company has partnered up with Grandview High School and Denver public schools with Denver East High School. NexBook uses district shipping because the schools have a rental agreement with their shipping products as well. The school uses a government rate with companies to get access to materials for the students. The district has also granted NexBook permission to use the same government rate with the companies for shipping so that it would be beneficial for shipping from Denver East to Grandview High School."    
            },
            {
                subtitle: "Company Space within the school campus",
                content:"NexBook benefits Grandview High School and Denver East High School because the more students have access to prep books and other materials, the more successful the students will be in their classes. NexBook is based online because students do a lot of business online rather than in person. NexBook does not make orders on the phone, Nexbook only makes orders with Credit Cards online."    
            },
            {
                subtitle: "Multiple Product Orders:",
                content:"Many students that rent from our website purchase more than one book. Sometimes the books may come at different times depending on the location of the books and the location of the student. A student purchasing more than one item on the website will likely have to wait longer for shipping."    
            },
            {
                subtitle: "Shipping:",
                content:"Nexbook Rental company takes care of all the shipping costs for the students that are renting the products, just like many other renting companies. Most packages will take 3 to 7 days to get to the designated school. Holidays are excluded as the shipping methods we are using (partnered with the districts under a discounted rate) don’t ship during holidays. On the other hand, some products may be available to be picked up the next day because the chosen school has the books in stock. If the item doesn’t get to the student in 13 business days, please contact Nexbook. Contact information can be found under the “Contact” page on our website."    
            },
            
        ]
    },
    {
        title: 'Terms & Conditions',
        src:'img/termsconditions.png',
        subtitles: [
            {
                subtitle: "General Terms",
                content:"Our services are available to individuals over the age of 12. If you are between the ages of 13 and 18, these Terms must be read with your parent or guardian to confirm that your parent and guardian understand and agree with it. All transactions will be processed in US dollars. Our services are not intended to be used anywhere where the laws do not permit us to do business.NexBook operates mostly in Colorado. Anyone using our services is responsible to comply with Colorado state laws with respect to online conduct and content. It is our right to limit the accessibility of our services to any person in any area at any time."    
            },
            {
                subtitle: "Services",
                content:"The services are owned and operated by NexBook. All materials that are a part of our services are owned, controlled, or licensed by NexBook. These include, but are not limited to, all versions, domain names, code, text, site design, logos, graphics, icons, images, and NexBook Content. Copyright, trademark, patent, and other laws and regulations protect NexBook Content from unauthorized use, copying and dissemination. All rights in images of books or other publications included in our product packages are reserved by the copyright owners of their respective materials. NexBook prohibits the unauthorized use of our Content. Use of NexBook’s services that violates the copyright, trademark, patent and other laws could result in criminal or civil penalties. Your license to use NexBook Content Assuming that you will compliance with these Terms of Use, NexBook grants you a limited, personal, non-exclusive, non-commercial, revocable, and non-transferable license to view our Content. The Content is only to be used for personal reasons. Viewing, and copying information by automated means or using other data mining technology to extract data or other materials from NexBook Content is prohibited. No materials from NexBook Content can be copied, modified, uploaded, transmitted, reproduced, republished, or distributed in any form without our written consent. When you download or use the NexBook Content as authorized by these Terms of Use, you must: (a) keep intact any and all copyright and other proprietary notices; (b) make no modifications to the NexBook Content; and (c) not copy or adapt any object code associated with the Services or reverse engineer, or allow or assist any third-party (whether or not for your benefit) to do so. All rights not expressly granted herein are reserved. Where you purchase a subscription or a license to access any NexBook Content, you may not share that subscription or license with others. NexBook may impose reasonable limits on your scope of access to NexBook Content, including limits on time or number of materials accessed or machines used to access such Content, to prevent unauthorized third-party access to or use of that Content."    
            },
           
        ]
    },
    {
        title: 'Terms of Use',
        src:'img/termsofuse.png',
        subtitles: [
            {
                subtitle: "Proprietary rights",
                content:"The Services are owned and operated by Nexbook. Unless otherwise explicitly specified by Nexbook, all materials that are included in or otherwise a part of the Services, including past, present, and future versions, domain names, source and object code, the text, site design, logos, graphics, bibliographic and citation information, icons, and book cover images, as well as the selection, assembly and arrangement thereof and the 'look and feel' of the Services (collectively, 'Nexbook Content'), are owned, controlled, or licensed by Nexbook. Nexbook Content is protected from unauthorized use, copying and dissemination by copyright, trademark, patent, and other laws, rules, regulations and treaties. All rights in images of books or other publications included in the Services are reserved by the copyright owners of such materials. Portions of the bibliographic and citation content included in the Services are supplied by third-parties. Any unauthorized use of Nexbook Rental Content is prohibited. Any unauthorized use of the materials appearing on the Services may violate copyright, trademark, patent, and other applicable laws, rules, regulations, and treaties, and could result in criminal or civil penalties."    
            },
            {
                subtitle: "Use of Trademarks",
                content:"Nexbook, NexBook rental, NexBookrental.com, and other slogans used on the website are trademarks of Nexbook Rental Company. NexbookRental.com makes no claim of ownership to the trademarks of any online merchant whose online stores, products, or services are listed on this website. Nexbookrental.com makes no claim of ownership for any text, images, phrases, statements, copyright information, etc. that is linked to or cited on this website, except the slogan and the Nexbook Rental logo."    
            },
            {
                subtitle: "Terms & Services",
                content:"All of the material in this site is owned by or licensed to Nexbook Rental company. Nexbook Rental provides this material to provide information about products, services and other information. Nexbook Rental Company grants you a limited, nonexclusive, revocable license to access and make personal, non-commercial use of the contents of the Site (the 'Contents'). This license does not include any right to (a) download (other than page caching), reproduce, copy or modify the Site or Contents, or any portion or derivative thereof; (b) the resale or commercial use of any collection or any product listings, descriptions or prices (unless you have a business relationship with Nexbook Rental Company which authorizes such use); (c) any derivative use of this Site or the Contents; (d) any downloading or copying of account information for the benefit of another merchant; (e) frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Nexbook Rental CompanyBook Rentals; or (f) use any metatags or any other 'hidden text' utilizing Nexbook Rental Company’s name or trademarks."    
            },
           
        ]
    },
]