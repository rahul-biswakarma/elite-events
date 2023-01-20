window.onload = function () {
  window.scrollTo(0, 0);

  document.querySelector("main").style.opacity = 1;

  // Show Search Bar
  document.getElementById("search-icon").addEventListener("click", () => {
    document.getElementById("search-container").style.transform =
      "translateX(0)";
  });

  // Hide Search Bar
  document
    .getElementById("search-close-button")
    .addEventListener("click", () => {
      document.getElementById("search-container").style.transform =
        "translateX(100%)";
    });

  // Show Ham menu
  document.getElementById("ham-icon").addEventListener("click", () => {
    document.getElementById("ham-menu").style.transform = "translateX(0)";
  });

  // Hide Search Bar
  document
    .getElementById("ham-menu-close-button")
    .addEventListener("click", () => {
      document.getElementById("ham-menu").style.transform = "translateX(100%)";
    });
};

document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
