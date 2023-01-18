var i = 0;
var imagesUrlsCount = 5;
var loadingImages = document.getElementsByClassName("loading-page-image");

function LoadingComplete() {
  document.getElementById("loader-line-container").style.width = "0px";
  document.getElementById("loader-black-layer").style.opacity = "0";
  var loaderText = document.querySelectorAll(".loading-text span");
  loaderText.forEach((text) => {
    text.style.animation = "hide 2s cubic-bezier(0.77, 0, 0.175, 1)";
  });
  document.getElementById("loading-heading").style.opacity = 0;
  document.getElementById("loading-percentage").style.opacity = 0;
  window.clearInterval(imageCarouselLoop);
  Array.from(loadingImages).forEach((image) => {
    image.style.opacity = 0;
  });
  // loadingImages[0].style.opacity = 1;
  document.getElementById("main").style.display = "block";
  document.getElementById("main").style.opacity = "1";
  document.getElementById("loading").style.display = "none";

  setTimeout(function () {
    tY = 0;
    applyTranform(dragC);
  }, 1000);

  setTimeout(function () {
    document.querySelector("body").style.overflow = "auto";
  }, 2000);

  setTimeout(function () {
    document.getElementById("drag-container").style.transition = "none";
  }, 3000);
}

async function LoadingImageCarousel() {
  window.setTimeout(() => {
    imageCarouselLoop = window.setInterval(function () {
      if (i - 1 >= 0) loadingImages[i - 1].style.opacity = 0;
      else loadingImages[imagesUrlsCount - 1].style.opacity = 0;
      loadingImages[i].style.opacity = 1;
      i = i == imagesUrlsCount - 1 ? 0 : i + 1;
    }, 500);
  }, 1500);
}

async function LoadignMain() {
  await new Promise((res) =>
    setTimeout(() => {
      res(LoadingComplete());
    }, 7000)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  // var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  // if ("IntersectionObserver" in window) {
  //   let lazyImageObserver = new IntersectionObserver(function (
  //     entries,
  //     observer
  //   ) {
  //     entries.forEach(function (entry) {
  //       if (entry.isIntersecting) {
  //         let lazyImage = entry.target;
  //         lazyImage.src = lazyImage.dataset.src;
  //         lazyImage.srcset = lazyImage.dataset.srcset;
  //         lazyImage.classList.remove("lazy");
  //         lazyImageObserver.unobserve(lazyImage);
  //       }
  //     });
  //   });

  //   lazyImages.forEach(function (lazyImage) {
  //     lazyImageObserver.observe(lazyImage);
  //   });
  // } else {
  //   // Possibly fall back to event handlers here
  // }
  LoadingImageCarousel();
  LoadignMain();
});
