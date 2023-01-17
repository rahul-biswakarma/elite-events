// var cntWd, sldWd, tb;
// $(function () {
//   cntWd = $("#container").innerWidth();
//   tb = $("#thumbs");
//   sldWd = tb.outerWidth();

//   $("#container").mousemove(function (e) {
//     tb.css({
//       left: ((cntWd - sldWd) * (e.pageX / cntWd).toFixed(3)).toFixed(1) + "px",
//     });
//   });
// });

var listContainer = document.getElementById("section-5");
function scrollList(event) {
  var list = document.getElementById("list-container");
  var listWidth = list.scrollWidth;
  var containerWidth = listContainer.clientWidth;
  var left = (containerWidth - listWidth) * (event.pageX / containerWidth);
  console.log(containerWidth, listWidth, event.pageX, left);
  list.style.left = left + "px";
}

window.onload = function (e) {
  listContainer.addEventListener("mousemove", (e) => {
    scrollList(e);
  });
};
