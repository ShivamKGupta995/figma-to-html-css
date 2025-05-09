const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("centered");
});



const textAnimation = document.getElementById("text-animation");
const words = ["Prevention", "Precision Nutrition", "Longevity", "Age Reversal"];
let index = 1;

function animateText() {
  // Remove animation class
  textAnimation.classList.remove("fade-in");

  // Trigger reflow to restart animation
  void textAnimation.offsetWidth;

  // Set new text
  textAnimation.innerHTML = words[index];

  // Re-add animation class
  textAnimation.classList.add("fade-in");

  index = (index + 1) % words.length;
}

setInterval(animateText, 3000);



let isMovedRight = false;

function toggleSlider() {
  const slider = document.getElementById("slider");
  const diagnosisImage = document.getElementById("diagnosis-image-before");
  const logo = document.getElementById("diagnosis-superceft-logo");
  const image_width = document.getElementsByClassName("diagnosis-image");
  const properyImageWidth = image_width[0].offsetWidth * 0.89;
  console.log(properyImageWidth);

  if (!isMovedRight) {
    slider.style.transform = `translateX(-${properyImageWidth}px)`;
    slider.style.background = "linear-gradient(90deg, #18856a 0%, #24c2b5 100%)";
    logo.style.background = "linear-gradient(90deg, #18856a 0%, #24c2b5 100%)";
    timeDelay = 1000; // 0.5 seconds
    diagnosisImage.src = "assets/images/home/general/diagnosis-dashboard-after.jpg";

  } else {
    slider.style.transform = "translateX(0px)";
    slider.style.background = "linear-gradient(90deg, #FF4562 0%, #B53A4D 100%)";
    logo.style.background = "linear-gradient(90deg, #FF4562 0%, #B53A4D 100%)";
    timeDelay = 1000; // 0.5 seconds

    diagnosisImage.src = "assets/images/home/general/diagnosis-dashboard.jpg";

  }}

  isMovedRight = !isMovedRight;

  const carousel = document.getElementById("carousel");
  const dots = document.querySelectorAll(".dot");

  function updateCarousel(index) {
    const slide = carousel.children[0]; // one .testimonial
    const slideWidth = slide.offsetWidth;
    const gap = parseInt(getComputedStyle(carousel).gap || "0");
    const offset = index * -(slideWidth + gap);

    carousel.style.transform = `translateX(${offset}px)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    activeIndex = index;
  }


  // Attach click event to dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      updateCarousel(i);
    });
  });

  // Default to the middle card (index 1)
  window.addEventListener("DOMContentLoaded", () => {
    updateCarousel(1);
  })

