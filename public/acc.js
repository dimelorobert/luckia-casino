"strict mode";

const accordionContainer = document.querySelector(".accordion");
const accordionSlide = document.querySelector(".accordion__slide");

accordionContainer.addEventListener("mouseover", event => {
   
   console.log("ACORDEON::::>", event.target.classList.value);
});