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

// JavaScript code

// Get the modal and button elements
var modal = document.getElementById("appointmentModal");
var appointmentButton = document.getElementById("appointmentButton");

// When the user clicks the button, display the modal
appointmentButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on the close button, close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
