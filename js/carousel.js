const container = document.getElementById("carousel-container");
const items = document.getElementById("carousel-items");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicatorsContainer = document.querySelector(".carousel-indicators");

let currentIndex = 0;
let autoplayInterval;
const autoplayDelay = 3000; 

function showSlide() {
  document
    .querySelectorAll(".carousel-item.active")
    .forEach((item) => (item.style.opacity = 0));

  let easeInTimeout;
  let easeOutTimeout = setTimeout(() => {
  
    document
      .querySelectorAll(".carousel-item")
      .forEach((item) => item.classList.remove("active"));

    items.children[currentIndex].classList.add("active");
    updateIndicators();

    easeInTimeout = setTimeout(() => {
      document.querySelectorAll(".carousel-item.active")[0].style.opacity = 1;
    }, 1000);
  }, 1000);

  delete easeInTimeout;
  delete easeOutTimeout;
}

function nextSlide() {
  currentIndex =
    (currentIndex - 1 + items.children.length) % items.children.length;
  showSlide();
}

function prevSlide() {
  currentIndex = (currentIndex + 1) % items.children.length;
  showSlide();
}

function updateIndicators() {
  indicatorsContainer.innerHTML = "";

  for (let i = 0; i < items.children.length; i++) {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (i === currentIndex) {
      indicator.classList.add("active");
    }
    indicator.onclick = () => {
      currentIndex = i;
      showSlide();
    };
    indicatorsContainer.appendChild(indicator);
  }
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    prevSlide();
  }, autoplayDelay);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}
document.addEventListener("DOMContentLoaded", () => {
  showSlide();
  startAutoplay();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoplay();
  startAutoplay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoplay();
  startAutoplay();
});
