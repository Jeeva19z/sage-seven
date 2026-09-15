
const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");
if(menuToggle){menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));}
document.querySelectorAll(".dropdown-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open"));
});
const form=document.querySelector(".contact-form");
if(form){form.addEventListener("submit",e=>{e.preventDefault();const msg=form.querySelector(".form-message");if(msg)msg.textContent="Thank you! Our team will contact you shortly.";form.reset();});}
