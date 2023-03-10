var autoRotate = true;
var rotateSpeed = -60;
var ar = 1.45;
var imgWidth = 0;
if (window.innerWidth < 700) {
  if (window.innerWidth < 500) {
    imgWidth = Math.floor(window.innerWidth / 1.5);
  } else {
    imgWidth = Math.floor(window.innerWidth / 1.8);
  }
} else {
  imgWidth = Math.floor(window.innerWidth / 3.5);
}

var imgHeight = Math.floor(imgWidth / ar);
var radius = Math.round(imgWidth);

setTimeout(init, 1000);

var dragC = document.getElementById("drag-container");
var spinC = document.getElementById("spin-container");
var carouselImg = spinC.getElementsByTagName("img");
var carouselVid = spinC.getElementsByTagName("video");
var carouselElements = [...carouselImg, ...carouselVid];

// Size of images
spinC.style.width = imgWidth + "px";
spinC.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < carouselElements.length; i++) {
    carouselElements[i].style.transform =
      "rotateY(" +
      i * (360 / carouselElements.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    carouselElements[i].style.transition = "transform 1s";
    carouselElements[i].style.transitionDelay =
      delayTime || (carouselElements.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  spinC.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 90;

// auto spin
if (autoRotate) {
  var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  spinC.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

// setup events
document.querySelector("header").onpointerdown = function (e) {
  clearInterval(dragC.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(dragC);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    dragC.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(dragC);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(dragC.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

// document.onmousewheel = function (e) {
//   e = e || window.event;
//   var d = e.wheelDelta / 20 || -e.detail;
//   radius += d;
//   init(1);
// };

window.addEventListener("load", async (event) => {
  applyTranform(dragC);
});
