// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });
}

// Testimonial slider
const testimonialTrack = document.getElementById("testimonialTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (testimonialTrack && prevBtn && nextBtn) {
  let currentIndex = 0;
  const cards = testimonialTrack.querySelectorAll(".testimonial-card");
  const totalCards = cards.length;

  function updateSlider() {
    const sliderWidth = testimonialTrack.parentElement.offsetWidth;
    const translateAmount = sliderWidth * currentIndex;
    testimonialTrack.style.transform = `translateX(-${translateAmount}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);
}

// Contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
    }
  });
});
