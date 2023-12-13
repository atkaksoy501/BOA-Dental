const imgcontainer = document.querySelector(".image-container");
const prev = document.getElementById("back");
const next = document.getElementById("next");

let a = 0;

prev.addEventListener("click", () => {
  a = a + 45;
  updategallery();
});

next.addEventListener("click", () => {
  a = a - 45;
  updategallery();  
});

function updategallery() {
  imgcontainer.style.transform = `perspective(1000px) rotateY(${a}deg)`;
}
updategallery();

const faqs = document.querySelectorAll(".faq-container");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})