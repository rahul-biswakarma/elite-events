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

	// Section 2-5 H2 container Scroll Animation
	// -ve value for up
	var sec25h = document.querySelector(".h2-container");
	sec25h.style.transform = `translateY(${
		Math.floor(this.scrollY * 0.05) - 100
	}%)`;

	var sec4Img = document.querySelector("#sec-4-img-2");
	sec4Img.style.transform = `translateY(${
		Math.floor(this.scrollY * 0.05) - 220
	}%)`;

	// Section 2 Image Scroll Scale Animation
	var sec2Img = document.querySelector("#sec-2-img img");
	sec2Img.style.width = `${Math.floor(this.scrollY * 0.05) + 30}%`;
	sec2Img.style.height = `${Math.floor(this.scrollY * 0.05) + 30}%`;
};

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

	// Section 3 Cursor image trail animation
	section3.addEventListener("mousemove", handleMove);
	section3.addEventListener("touchmove", handleMove);

	function handleMove(event) {
		let clientX, clientY;
		if (event.type === "touchmove") {
			clientX = event.touches[0].clientX;
			clientY = event.touches[0].clientY;
		} else {
			clientX = event.clientX;
			clientY = event.clientY;
		}
		if (
			(Math.abs(prevY - clientY) > 50 || Math.abs(prevX - clientX) > 50) &&
			getComputedStyle(images[currentImage], null)["animation-name"] == "none"
		) {
			prevX = clientX;
			prevY = clientY;
			images[currentImage].style.left = clientX + "px";
			images[currentImage].style.top = clientY + "px";
			images[currentImage].classList.add("animate");
		}
		currentImage = (currentImage + 1) % images.length;
	}

	images.forEach((image) => {
		image.addEventListener("animationend", () => {
			image.classList.remove("animate");
		});
		image.addEventListener("touchend", () => {
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
		img.addEventListener("touchend", () => {
			completedAnimations++;
			if (completedAnimations === totalImages) {
				completedAnimations = 0;
				currentImage = 0;
			}
		});
	});
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

// Section 2-5-2 Hover Image Change
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

const slider = document.querySelector(".list");
var isDown = false;
var startX;
var scrollLeft;

// Blog list scroll
document
	.getElementById("blog-container-arrow")
	.addEventListener("click", () => {
		slider.scrollLeft += 300;
	});

slider.addEventListener("mousedown", (e) => {
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
	isDown = false;
	slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
	isDown = false;
	slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 2; //scroll-fast
	slider.scrollLeft = scrollLeft - walk;
});

// Lazy Loading
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

// Email Validation
function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

// Validating email from newsletter input
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
