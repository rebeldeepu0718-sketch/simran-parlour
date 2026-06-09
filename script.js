// Reveal animation

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});

// Booking Form Demo

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Appointment Request Submitted Successfully!");

form.reset();

});

// 3D Mouse Effect

document.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.pageX)/40;
const y = (window.innerHeight/2 - e.pageY)/40;

document.querySelectorAll(".card").forEach(card=>{

card.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

});const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});