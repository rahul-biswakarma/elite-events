var scrollDownDelta = 0.05;
var scrollUpDelta = 0.1;
var t0 = -100;
var t1 = -200;
var t2 = -300;
var t3 = -400;
var t4 = -500;
var t5 = -600;
var t6 = -650;

var oldScrollY = -1;

window.onscroll = function (e) {
  var ele = document.querySelectorAll(".slide-text");
  if (!(oldScrollY > this.scrollY)) {
    this.scrollY < 300 && t0 < 1 ? t0 + scrollDownDelta : (t0 = 1);
    this.scrollY < 400 && t1 < 1 ? t1 + scrollDownDelta : (t1 = 1);
    this.scrollY < 500 && t2 < 1 ? t2 + scrollDownDelta : (t2 = 1);
    this.scrollY < 600 && t3 < 1 ? t3 + scrollDownDelta : (t3 = 1);
    this.scrollY < 700 && t4 < 1 ? t4 + scrollDownDelta : (t4 = 1);
    this.scrollY < 800 && t5 < 1 ? t5 + scrollDownDelta : (t5 = 1);
    this.scrollY < 900 && t6 < 1 ? t6 + scrollDownDelta : (t6 = 1);
  } else if (oldScrollY > this.scrollY) {
    this.scrollY > 200 && t0 >= -100 ? t0 - (scrollUpDelta + 0) : (t0 = -100);
    this.scrollY > 300 && t1 >= -200 ? t1 - (scrollUpDelta + 0) : (t1 = -200);
    this.scrollY > 400 && t2 >= -300 ? t2 - (scrollUpDelta + 1) : (t2 = -300);
    this.scrollY > 500 && t3 >= -400 ? t3 - (scrollUpDelta + 1) : (t3 = -400);
    this.scrollY > 600 && t4 >= -500 ? t4 - (scrollUpDelta + 2) : (t4 = -500);
    this.scrollY > 700 && t5 >= -600 ? t5 - (scrollUpDelta + 2) : (t5 = -600);
    this.scrollY > 800 && t6 >= -650 ? t6 - (scrollUpDelta + 3) : (t6 = -650);
  }

  console.log(t0, t1, t2, t3, t4, t5, t6);

  ele[0].style.transform = `translateX(${t0}%)`;
  ele[1].style.transform = `translateX(${t1}%)`;
  ele[2].style.transform = `translateX(${t2}%)`;
  ele[3].style.transform = `translateX(${t3}%)`;
  ele[4].style.transform = `translateX(${t4}%)`;
  ele[5].style.transform = `translateX(${t5}%)`;
  ele[6].style.transform = `translateX(${t6}%)`;

  oldScrollY = this.scrollY;
};

function pointerImage() {}
