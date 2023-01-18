var td0 = 0.009;
var td1 = 0.005;
var td2 = 0.001;
var td3 = 0.0006;
var td4 = 0.0004;
var td5 = 0.0001;
var td6 = 0.0001;

var tu6 = 0.9;
var tu5 = 0.5;
var tu4 = 0.1;
var tu3 = 0.09;
var tu2 = 0.07;
var tu1 = 0.06;
var tu0 = 0.05;

var scrollUpDelta = 0.12;
var t0 = -100;
var t1 = -200;
var t2 = -300;
var t3 = -400;
var t4 = -500;
var t5 = -600;
var t6 = -650;

var oldScrollY = -1;

let prevScrollpos = window.pageYOffset;

window.onscroll = function (e) {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
  var ele = document.querySelectorAll(".slide-text");
  if (!(oldScrollY > this.scrollY)) {
    this.scrollY < 300 && t0 < 1 ? (t0 = this.scrollY * td0) : (t0 = 1);
    this.scrollY < 400 && t1 < 1 ? (t1 = this.scrollY * td1) : (t1 = 1);
    this.scrollY < 500 && t2 < 1 ? (t2 = this.scrollY * td2) : (t2 = 1);
    this.scrollY < 600 && t3 < 1 ? (t3 = this.scrollY * td3) : (t3 = 1);
    this.scrollY < 700 && t4 < 1 ? (t4 = this.scrollY * td4) : (t4 = 1);
    this.scrollY < 800 && t5 < 1 ? (t5 = this.scrollY * td5) : (t5 = 1);
    this.scrollY < 900 && t6 < 1 ? (t6 = this.scrollY * td6) : (t6 = 1);
  } else if (oldScrollY > this.scrollY) {
    this.scrollY > 200 && t0 >= -100
      ? (t0 = -(this.scrollY * tu0))
      : (t0 = -100);
    this.scrollY > 300 && t1 >= -200
      ? (t1 = -(this.scrollY * tu1))
      : (t1 = -200);
    this.scrollY > 400 && t2 >= -300
      ? (t2 = -(this.scrollY * tu2))
      : (t2 = -300);
    this.scrollY > 500 && t3 >= -400
      ? (t3 = -(this.scrollY * tu3))
      : (t3 = -400);
    this.scrollY > 600 && t4 >= -500
      ? (t4 = -(this.scrollY * tu4))
      : (t4 = -500);
    this.scrollY > 700 && t5 >= -600
      ? (t5 = -(this.scrollY * tu5))
      : (t5 = -600);
    this.scrollY > 800 && t6 >= -650
      ? (t6 = -(this.scrollY * tu6))
      : (t6 = -650);
  }

  ele[0].style.transform = `translateX(${t0}%)`;
  ele[1].style.transform = `translateX(${t1}%)`;
  ele[2].style.transform = `translateX(${t2}%)`;
  ele[3].style.transform = `translateX(${t3}%)`;
  ele[4].style.transform = `translateX(${t4}%)`;
  ele[5].style.transform = `translateX(${t5}%)`;
  ele[6].style.transform = `translateX(${t6}%)`;

  oldScrollY = this.scrollY;

  var sec4Img1 = document.getElementById("sec-4-img-1");
  sec4Img1.style.transform = `translateY(${
    Math.floor(this.scrollY * -0.05) + 140
  }%)`;

  // var sec25h = document.querySelector("#section-2-5-1 h2");
  // sec25h.style.transform = `translateY(${
  //   Math.floor(this.scrollY * 0.05) - 80
  // }%)`;

  // -ve value for up
  var sec25h = document.querySelector(".h2-container");
  sec25h.style.transform = `translateY(${
    Math.floor(this.scrollY * 0.05) - 100
  }%)`;

  var sec2Img = document.querySelector("#sec-2-img img");
  sec2Img.style.width = `${Math.floor(this.scrollY * 0.05) + 30}%`;
  sec2Img.style.height = `${Math.floor(this.scrollY * 0.05) + 30}%`;
};

var listContainer = document.getElementById("section-5");
function scrollList(event) {
  var list = document.getElementById("list-container");
  var listWidth = list.scrollWidth;
  var containerWidth = listContainer.clientWidth;
  var left = (containerWidth - listWidth) * (event.pageX / containerWidth);
  list.style.left = left + "px";
}

const images = document.querySelectorAll(".slider-text-image");
var currentImage = 0;
var section3 = document.getElementById("section-3");

var animationDelay = 0;
let prevX = 0;
let prevY = 0;

window.onload = function () {
  window.scrollTo(0, 0);
  window.setInterval(function () {
    const carouselImages = document.querySelectorAll(".carousel-image");

    carouselImages.forEach((image, index) => {
      let position = image.getBoundingClientRect();
      if (position.width > 500) {
        document
          .getElementById(`carousel-text-${index}`)
          .classList.add("active");
      } else {
        try {
          document
            .getElementById(`carousel-text-${index}`)
            .classList.remove("active");
        } catch {}
      }
    });
  }, 1000);
  listContainer.addEventListener("mousemove", (e) => {
    scrollList(e);
  });

  section3.addEventListener("mousemove", (event) => {
    if (
      (Math.abs(prevY - event.clientY) > 50 ||
        Math.abs(prevX - event.clientX) > 50) &&
      getComputedStyle(images[currentImage], null)["animation-name"] == "none"
    ) {
      prevX = event.clientX;
      prevY = event.clientY;
      images[currentImage].style.left = event.clientX + "px";
      images[currentImage].style.top = event.clientY + "px";
      images[currentImage].classList.add("animate");
    }
    currentImage = (currentImage + 1) % images.length;
  });

  images.forEach((image) => {
    image.addEventListener("animationend", () => {
      image.classList.remove("animate");
    });
  });

  const totalImages = images.length;
  let completedAnimations = 0;
  images.forEach((img) => {
    img.addEventListener("animationend", () => {
      completedAnimations++;
      if (completedAnimations === totalImages) {
        completedAnimations = 0;
        currentImage = 0;
      }
    });
  });
};

var eventHoverImage = document.querySelector("#events-hover-image");
var eventHoverText = document.querySelectorAll(".h2-container h2");
var imageArr = [
  "./assets/images/events/1.webp",
  "./assets/images/events/2.webp",
  "./assets/images/events/3.webp",
  "./assets/images/events/4.webp",
  "./assets/images/events/5.webp",
];

eventHoverText.forEach((text, i) => {
  text.addEventListener("mouseover", () => {
    eventHoverImage.attributes.src.value = imageArr[i];
  });
});
