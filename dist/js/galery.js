const images = document.querySelectorAll(".gallery-image");
      let current = 0;
      setInterval(() => {
        images[current].classList.add("hidden");
        current = (current + 1) % images.length;
        images[current].classList.remove("hidden");
      }, 10000);