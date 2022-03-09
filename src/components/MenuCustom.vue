<template>
	<nav class="menu">
		<!-- LOGO -->
		<div class="menu__logo">
			<a @click="menu" class="menu__logo--link" href="#">
				<img :src="logo" :alt="logoDescription" class="menu__logo--img" />
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
				class="menu__list--item hoverMTop"
			>
				<a :href="linky.href" class="menu__list--link">{{ linky.name }}</a>
			</li>
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
			logo: require("../../public/logo-luckia.svg"),
			iconClose: require("../../public/x-square-fill.svg"),
			logoDescription: "Logo de la Web",
			links: [
				{ name: "Home", href: "#" },
				{ name: "About me", href: "http://172.21.2.38:8080/" },
				{ name: "Hightlights", href: "#" },
				{ name: "Gallery", href: "#" },
				{ name: "Contact", href: "#" },
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
			let menuList = document.querySelector(".menu__list");
			let mobileMenuIsOpen = menuList.classList.toggle("menu__show");
			let barsBurger = document.querySelectorAll(".menu__bar");
			let bar1 = document.querySelector(".menu__bar:first-child");
			let bar2 = document.querySelector(".menu__bar:nth-child(2)");
			let bar3 = document.querySelector(".menu__bar:last-child");

			mobileMenuIsOpen
				? barsBurger.forEach(bar => {
						bar.style.backgroundColor = "red";
				  })
				: barsBurger.forEach(bar => {
						bar.style.backgroundColor = "grey";
				  });
			bar1.classList.toggle("menu__bar1");
			bar2.classList.toggle("menu__bar2");
			bar3.classList.toggle("menu__bar3");
		},
	},
};
</script>

<style scoped>
@import url("../../public/font/stylesheet.css");

:root {
	--white: #ffffff;
}

.menu {
	display: flex;
	align-items: center;
	background: black;
	height: var(--xxxxl);
	justify-content: space-around;
	width: 100vw;
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
	background: white;
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
	background-color: grey;
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
	background-color: black;
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: calc(100vh - var(--xxxxl));
	justify-content: center;
	list-style: none;
	opacity: 0;
	position: absolute;
	top: 70px;
	transition: opacity 0.55s ease-in-out;
	width: 100vw;
	padding-bottom: 70px;
}

.menu__show {
	opacity: 1;
	transition: opacity 0.45s ease-in-out;
}

.menu__list--item {
	display: inline-block;
	height: 32px;
	border: 0;
	position: relative;
}

.menu__list--link:hover {
	color: rgb(229, 255, 0);
}

.menu__list--link {
	color: var(--white);
	text-decoration: none;
}

.hoverMTop:after {
	position: absolute;
	bottom: 0;
	left: 0;
	top: 100%;
	width: 0;
	height: 2px;
	background-color: rgb(229, 255, 0);
	display: block;
	content: "";
	transition: width 0.45s ease-in-out;
}
.hoverMTop:hover:after {
	width: 100%;
}

@media only screen and (min-width: 1200px) {
	.menu__logo--link {
		pointer-events: none;
	}
}
</style>
