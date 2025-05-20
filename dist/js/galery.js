const track = document.querySelector(".gallery-track");
const images = document.querySelectorAll(".gallery-image");
const prevBtn = document.querySelector(".gallery-btn.prev");
const nextBtn = document.querySelector(".gallery-btn.next");

let currentIndex = 0;

function updateGallery() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Auto-slide every 5 seconds
setInterval(showNext, 5000);

window.addEventListener("resize", updateGallery); // For responsive resizing
