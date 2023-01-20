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

  var sliderImages = document.querySelectorAll(".slider-image");
  var currentImage = 0;
  var prevX = 0;
  var prevY = 0;
  window.setInterval(function () {
    // get random location inside header tag
    var randomX = Math.floor(Math.random() * 80 + 10);
    var randomY = Math.floor(Math.random() * 80 + 10);

    while (Math.abs(prevX - randomX) > 100)
      randomX = Math.floor(Math.random() * 80 + 10);

    while (Math.abs(prevY - randomY) > 100)
      randomY = Math.floor(Math.random() * 80 + 10);

    sliderImages[currentImage].style.top = randomY + "%";
    sliderImages[currentImage].style.left = randomX + "%";
    sliderImages[currentImage].classList.add("animate");
    currentImage = (currentImage + 1) % sliderImages.length;

    prevX = randomX;
    prevY = randomY;
  }, 500);

  sliderImages.forEach((image) => {
    image.addEventListener("animationend", () => {
      image.classList.remove("animate");
    });
  });

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

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

document.getElementById("email-input").addEventListener("click", () => {
  document.getElementById("email-input").style.borderColor = "white";
  document.getElementById("email-submit-status").innerHTML = "";
});

document.getElementById("submit-email-input").addEventListener("click", () => {
  var email = document.getElementById("email-input").value;
  if (ValidateEmail(email)) {
    document.getElementById("email-input").value = "";
    document.getElementById("email-submit-status").style.color = "#55e061";
    document.getElementById("email-submit-status").innerHTML =
      "* Email Submitted";
  } else {
    document.getElementById("email-input").style.borderColor = "red";
    document.getElementById("email-submit-status").style.color = "red";
    document.getElementById("email-submit-status").innerHTML =
      "* Invalid Email";
  }
});
