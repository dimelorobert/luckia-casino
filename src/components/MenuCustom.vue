<template>
	<nav class="menu">
		<!-- LOGO -->
		<div class="menu__logo">
			<a @click="menu" class="menu__logo--link" href="#">
				<img
					:src="logo.image"
					:alt="logo.description"
					class="menu__logo--img"
				/>
				<h1 class="menu__logo--title" v-if="hasTitle">{{ titlePage }}</h1>
			</a>
		</div>
		<!-- END LOGO -->

		<!-- BURGER BUTTON -->
		<div @click="menu" class="menu__burger">
			<div class="menu__strip menu__burger--strip">
				<div class="menu__bar"></div>
				<div class="menu__bar"></div>
				<div class="menu__bar"></div>
			</div>
		</div>
		<!-- END BURGER BUTTON -->

		<!-- LINKS -->
		<ul class="menu__list">
			<li
				v-for="linky in links"
				:key="linky.id"
				class="menu__list--item progress-bar-fx"
			>
				<a :href="linky.href" class="menu__list--link">{{ linky.name }}</a>
			</li>
			<!-- END LINKS -->

			<!-- SOCIAL ICON LINKS -->
			<div class="menu__list-social--container">
				<span class="menu__list-social--title">follow me</span>
				<ul class="menu__list-social">
					<li
						v-for="social in socialLogos"
						:key="social.id"
						class="menu__list-social--item"
					>
						<a href="#" class="menu__list-social--link">
							<img
								class="menu__list-social--icon"
								:src="social.logo"
								:alt="social.name"
						/></a>
					</li>
				</ul>
			</div>
			<!-- END SOCIAL ICON LINKS -->
		</ul>
		<!-- END LINKS -->
	</nav>
</template>

<script>
export default {
	name: "MenuCustom",
	data() {
		return {
			titlePage: "",
			logo: {
				image: require("../../public/logo-luckia.svg"),
				description: "Logo de la Web",
			},
			iconClose: require("../../public/x-square-fill.svg"),
			links: [
				{ name: "Home", href: "#" },
				{ name: "About me", href: "http://172.21.2.38:8080/" },
				{ name: "Hightlights", href: "#" },
				{ name: "Gallery", href: "#" },
				{ name: "Contact", href: "#" },
			],
			socialLogos: [
				{
					name: "facebook",
					logo: require("../../public/facebook.svg"),
					link: "#",
				},
				{
					name: "instagram",
					logo: require("../../public/instagram.svg"),
					link: "#",
				},
				{
					name: "youtube",
					logo: require("../../public/youtube.svg"),
					link: "#",
				},
			],
			showTitle: true,
			screen: window.innerWidth,
		};
	},
	watch: {
		screen(val1, val2) {
			console.log(val1, val2);
		},
	},
	computed: {
		hasTitle() {
			return this.titlePage.match(/^\s/g) || this.titlePage.length <= 0
				? false
				: true;
		},
	},
	methods: {
		menu() {
			let burger = document.querySelector(".menu__burger");
			let menuList = document.querySelector(".menu__list");
			let mobileMenuIsOpen = menuList.classList.toggle("menu__show");
			let barsBurger = document.querySelectorAll(".menu__bar");
			let bar1 = document.querySelector(".menu__bar:first-child");
			let bar2 = document.querySelector(".menu__bar:nth-child(2)");
			let bar3 = document.querySelector(".menu__bar:last-child");

			mobileMenuIsOpen
				? barsBurger.forEach(bar => {
						// bar.style.backgroundColor = "red";
						burger.style.backgroundColor = "var(--themeColor)";
						// burger.style.borderRadius = "50%";
				  })
				: barsBurger.forEach(bar => {
						bar.style.backgroundColor = "var(--darkColor)";
						burger.style.backgroundColor = "var(--themeColor)";
				  });
			bar1.classList.toggle("menu__bar1");
			bar2.classList.toggle("menu__bar2");
			bar3.classList.toggle("menu__bar3");
		},
	},
};
</script>

<style>
@import url("../../public/font/stylesheet.css");

.menu {
	display: flex;
	align-items: center;
	background: var(--darkColor);
	height: 80px;
	justify-content: space-around;
	width: 100vw;
	border-bottom: 0.5px solid var(--themeColor);
}

/* :::::::::: LOGO :::::::::: */
.menu__logo {
	align-items: center;
	display: flex;
	justify-content: center;
}
.menu__logo--img {
	height: 32px;
}
.menu__logo--link {
	color: var(--white);
	text-decoration: none;
}
.menu__logo--title {
	display: none;
	font-size: 16px;
	text-align: center;
}

/* :::::::::: BURGER BUTTON :::::::::: */
.menu__burger {
	width: 32px;
	height: 32px;
	border-radius: 2px;
	background-color: white;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
}
.menu__burger--strip {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
}
.menu__strip .menu__bar {
	height: 2px;
	border-radius: 8px;
	background-color: var(--darkColor);
	margin: 2px;
	transition: all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 16px;
}
.menu__bar1 {
	background-color: yellow;
	transform: translateY(6px) rotate(45deg);
}
.menu__bar2 {
	opacity: 0;
}
.menu__bar3 {
	background-color: yellow;
	transform: translateY(-6px) rotate(-45deg);
}

/* :::::::::: LINKS :::::::::: */
.menu__list {
	align-items: center;
	background-color: var(--darkColor);
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: calc(100vh - 80px);
	justify-content: center;
	list-style: none;
	opacity: 0;
	position: absolute;
	top: 80px;
	left: 0;
	right: 0;
	bottom: 0;
	transform: translateX(-100%);
	transition: opacity 0.65s ease-in-out;
	width: 100vw;
	padding-bottom: 70px;
	z-index: 99;
}
.menu__show {
	opacity: 1;
	transform: translateY(0%);
	transition: opacity 0.35s ease-in-out;
}
.menu__list--item {
	display: inline-block;
	height: 32px;
	border: 0;
	position: relative;
}
.menu__list--link:hover {
	color: var(--themeColor);
}
.menu__list--link {
	color: var(--white);
	text-decoration: none;
}

/* :::::::::: PROGRESS BAR HOVER :::::::::: */
.progress-bar-fx:after {
	position: absolute;
	bottom: 0;
	left: 0;
	top: 100%;
	width: 0;
	height: 2px;
	background-color: var(--themeColor);
	display: block;
	content: "";
	transition: width 0.45s ease-in-out;
}
.progress-bar-fx:hover:after {
	width: 100%;
}
/* :::::::::: SOCIAL LINKS ICON :::::::::: */

.menu__list-social--container {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 80px;
}
.menu__list-social--title {
	color: var(--white);
}
.menu__list-social {
	display: flex;
	gap: 16px;
	list-style: none;
	margin: 16px;
}
.menu__list-social--item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu__list-social--icon {
	height: 24px;
	transform: scale(1, 1);
	transition: transform 0.25s ease-in;
}
.menu__list-social--icon[alt="youtube"] {
	height: 32px;
}
.menu__list-social--icon[alt="facebook"]:hover,
.menu__list-social--icon[alt="instagram"]:hover,
.menu__list-social--icon[alt="youtube"]:hover {
	transform: scale(1.15, 1.15);
	transition: transform 0.35s ease-in;
}
.menu__list-social--icon[alt="facebook"]:hover {
	filter: invert(49%) sepia(44%) saturate(7496%) hue-rotate(218deg)
		brightness(91%) contrast(92%);
}

.menu__list-social--icon[alt="instagram"]:hover {
}
.menu__list-social--icon[alt="youtube"]:hover {
	filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
		saturate(1600%) contrast(1);
}

/* :::::::::: MEDIA QUERIES :::::::::: */
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1024px) {
}
@media only screen and (min-width: 1200px) {
}
</style>
