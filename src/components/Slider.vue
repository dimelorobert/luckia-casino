<template>
	<section id="slider" class="slider">
		<ul>
			<li data-color="#FF384B">
				<div
					class="content"
					style="background-image: url(https://i.imgur.com/i7VlkGV.png?2)"
				>
					<blockquote>
						<p>
							I got my red dress on tonight dancing in the dark in the
							pale moonlight.
						</p>
						<span>Summertime Sadness - Lana Del Rey</span>
					</blockquote>
				</div>
			</li>
			<li data-color="#FF9C00">
				<div
					class="content"
					style="background-image: url(https://i.imgur.com/i7VlkGV.png?2)"
				>
					<blockquote>
						<p>
							Will you still love me When I'm no longer young and
							beautiful Will you still love me
						</p>
						<span>Young And Beautiful - Lana Del Rey</span>
					</blockquote>
				</div>
			</li>
			<li data-color="#002AFF">
				<div
					class="content"
					style="background-image: url(https://i.imgur.com/i7VlkGV.png?2)"
				>
					<blockquote>
						<p>
							Blue jeans White shirt Walked into the room You know you
							made my eyes burn
						</p>
						<span>Blue Jeans - Lana Del Rey</span>
					</blockquote>
				</div>
			</li>
		</ul>
		<nav>
			<div><a class="prev" href="#"></a></div>
			<div><a class="next" href="#"></a></div>
		</nav>
	</section>
</template>

<script>
export default {
	name: "Slider",
	created() {
		(function () {
			var autoUpdate = false,
				timeTrans = 4000;

			var cdSlider = document.querySelector(".slider"),
				item = cdSlider.querySelectorAll("li"),
				nav = cdSlider.querySelector("nav");

			item[0].className = "current_slide";

			for (var i = 0, len = item.length; i < len; i++) {
				var color = item[i].getAttribute("data-color");
				item[i].style.backgroundColor = color;
			}

			// Detect IE
			// hide ripple effect on IE9
			var ua = window.navigator.userAgent;
			var msie = ua.indexOf("MSIE");
			if (msie > 0) {
				var version = parseInt(
					ua.substring(msie + 5, ua.indexOf(".", msie)),
				);
				if (version === 9) {
					cdSlider.className = "slider ie9";
				}
			}

			if (item.length <= 1) {
				nav.style.display = "none";
			}

			function prevSlide() {
				var currentSlide = cdSlider.querySelector("li.current_slide"),
					prevElement = currentSlide.previousElementSibling,
					prevSlide =
						prevElement !== null ? prevElement : item[item.length - 1],
					prevColor = prevSlide.getAttribute("data-color"),
					el = document.createElement("span");

				currentSlide.className = "";
				prevSlide.className = "current_slide";

				nav.children[0].appendChild(el);

				var size =
						cdSlider.clientWidth >= cdSlider.clientHeight
							? cdSlider.clientWidth * 2
							: cdSlider.clientHeight * 2,
					ripple = nav.children[0].querySelector("span");

				ripple.style.height = size + "px";
				ripple.style.width = size + "px";
				ripple.style.backgroundColor = prevColor;

				ripple.addEventListener("webkitTransitionEnd", function () {
					if (this.parentNode) {
						this.parentNode.removeChild(this);
					}
				});

				ripple.addEventListener("transitionend", function () {
					if (this.parentNode) {
						this.parentNode.removeChild(this);
					}
				});
			}

			function nextSlide() {
				var currentSlide = cdSlider.querySelector("li.current_slide"),
					nextElement = currentSlide.nextElementSibling,
					nextSlide = nextElement !== null ? nextElement : item[0],
					nextColor = nextSlide.getAttribute("data-color"),
					el = document.createElement("span");

				currentSlide.className = "";
				nextSlide.className = "current_slide";

				nav.children[1].appendChild(el);

				var size =
						cdSlider.clientWidth >= cdSlider.clientHeight
							? cdSlider.clientWidth * 2
							: cdSlider.clientHeight * 2,
					ripple = nav.children[1].querySelector("span");

				ripple.style.height = size + "px";
				ripple.style.width = size + "px";
				ripple.style.backgroundColor = nextColor;

				ripple.addEventListener("webkitTransitionEnd", function () {
					if (this.parentNode) {
						this.parentNode.removeChild(this);
					}
				});

				ripple.addEventListener("transitionend", function () {
					if (this.parentNode) {
						this.parentNode.removeChild(this);
					}
				});
			}

			updateNavColor();

			function updateNavColor() {
				var currentSlide = cdSlider.querySelector("li.current_slide");

				var nextColor =
					currentSlide.nextElementSibling !== null
						? currentSlide.nextElementSibling.getAttribute("data-color")
						: item[0].getAttribute("data-color");
				var prevColor =
					currentSlide.previousElementSibling !== null
						? currentSlide.previousElementSibling.getAttribute(
								"data-color",
						  )
						: item[item.length - 1].getAttribute("data-color");

				if (item.length > 2) {
					nav.querySelector(".prev").style.backgroundColor = prevColor;
					nav.querySelector(".next").style.backgroundColor = nextColor;
				}
			}

			nav.querySelector(".next").addEventListener("click", function (event) {
				event.preventDefault();
				nextSlide();
				updateNavColor();
			});

			nav.querySelector(".prev").addEventListener("click", function (event) {
				event.preventDefault();
				prevSlide();
				updateNavColor();
			});

			//autoUpdate
			setInterval(function () {
				if (autoUpdate) {
					nextSlide();
					updateNavColor();
				}
			}, timeTrans);
		})();
	},
};
</script>

<style scoped>
.info {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 9999999;
	margin: 1.5rem;
}
*,
*::before,
*::after {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	border: 0;
}

a {
	text-decoration: none;
	color: rgba(225, 255, 255, 0.8);
}
/* Slider style */
.slider {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}
.slider.ie9 nav div span {
	display: none;
}
.slider ul li {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	visibility: hidden;
	transition: visibility 0s 0.6s;
}
.slider ul li::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 100%;
	width: 135vh;
	height: 135vh;
	border: solid rgba(0, 0, 0, 0.2);
	border-width: 0;
	transform: translate(-50%, -50%);
	pointer-events: none;
	transition: border-width 0.4s 0.6s;
}
.content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-position: 50% 100%;
	background-size: auto 100%;
	background-repeat: no-repeat;
	mix-blend-mode: lighten;
	opacity: 0;
	transform: scale(1.2);
	transition: opacity 0.4s 0.6s, transform 0.4s 0.6s;
}
.content blockquote {
	position: absolute;
	bottom: 5%;
	left: 4%;
	z-index: 2;
	max-width: 45%;
}
blockquote p {
	font-size: 4rem;
	margin-bottom: 2rem;
}
blockquote span {
	font-size: 1.4rem;
}
/* current slide
---------------------------------*/
.slider li.current_slide {
	visibility: visible;
}
.slider li.current_slide::before {
	border-width: 16rem;
}
.slider li.current_slide .content {
	opacity: 1;
	transform: scale(1);
}
/* nav
---------------------------------*/
nav div {
	position: absolute;
	top: 50%;
	left: 4%;
	width: 5rem;
	height: 5rem;
	margin-top: -2.5rem;
	list-style: none;
}
nav div:last-of-type {
	left: auto;
	right: 4%;
}
.prev,
.next {
	position: relative;
	z-index: 100;
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 100%;
	transition: box-shadow 0.3s;
}
.prev::before,
.prev::after,
.next::before,
.next::after {
	content: "";
	position: absolute;
	left: 43%;
	background: #fff;
	width: 0.4rem;
	min-width: 3px;
	border-radius: 3px;
	height: 34%;
}
.prev::before {
	transform: rotate(45deg);
	top: 24%;
}
.prev::after {
	transform: rotate(-45deg);
	bottom: 24%;
}
.next::before,
.next::after {
	left: auto;
	right: 43%;
}
.next::before {
	transform: rotate(-45deg);
	top: 24%;
}
.next::after {
	transform: rotate(45deg);
	bottom: 24%;
}
.prev:hover,
.next:hover {
	box-shadow: 0 0 0 1rem rgba(0, 0, 0, 0.15);
}
nav > div > span {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	border-radius: 100%;
	z-index: 5;
	pointer-events: none;
	will-change: width, height;
	transform: translate(-50%, -50%);
	transition: width 0.6s, height 0.6s;
}
</style>
