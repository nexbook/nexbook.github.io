const uploadPayment=()=>{
   let total = document.getElementById("subtot");
   total.textContent = "$" + parseFloat(sessionStorage.total).toFixed(2);
   let dueDate = document.getElementById("dueDate");
   let returnBy = new Date(sessionStorage.dueDate);
   dueDate.textContent = returnBy.getFullYear() + "/" + (returnBy.getMonth()+1) + "/" + returnBy.getDate();
   
}

const checkRadio=()=>{
   if(document.getElementById('visa').checked) {
     
      document.getElementById("visaId").style.display = "";
      document.getElementById("ppId").style.display = "none";
      document.getElementById("c1").setAttribute('required', 'required');
      document.getElementById("c2").setAttribute('required', 'required');
      document.getElementById("c3").setAttribute('required', 'required');
      document.getElementById("c4").setAttribute('required', 'required');
      document.getElementById("c5").setAttribute('required', 'required');
      document.getElementById("p1").removeAttribute('required');
      document.getElementById("p2").removeAttribute('required');

    }else if(document.getElementById('pp').checked) {
      document.getElementById("visaId").style.display = "none";
      document.getElementById("ppId").style.display = "block";
      document.getElementById("c1").removeAttribute('required');
      document.getElementById("c2").removeAttribute('required');
      document.getElementById("c3").removeAttribute('required');
      document.getElementById("c4").removeAttribute('required');
      document.getElementById("c5").removeAttribute('required');
      document.getElementById("p1").setAttribute('required', 'required');
      document.getElementById("p2").setAttribute('required', 'required');
    }
}

const formSubmitted=()=>{
   
   alert('Your Order Has Been Placed! Thank You! The confirmation letter has been sent to the email provided by you.');
   sessionStorage.clear()
   window.location.href="index.html";
}