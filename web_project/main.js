const imgcontainer = document.querySelector(".image-container");
const prev = document.getElementById("back");
const next = document.getElementById("next");

let a = 0;
let timeout;

prev.addEventListener("click", () => {
  a = a + 45;
  updategellary();
});

next.addEventListener("click", () => {
  a = a - 45;
  updategellary();  
});

function updategellary() {
  imgcontainer.style.transform = `perspective(1000px) rotateY(${a}deg)`;
}
updategellary();

const faqs = document.querySelectorAll(".faq-container");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})