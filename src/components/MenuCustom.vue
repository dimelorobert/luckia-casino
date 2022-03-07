<template>
	<nav class="menu">
		<div class="menu__container">
			<div class="menu__logo">
				<a href="#"
					><img
						src="../assets/logo.png"
						:alt="logoDescription"
						class="menu__logo-img"
				/></a>
			</div>
		</div>

		<!-- BURGER BUTTON -->
		<div @click="menu" class="burger">
			<div class="strip burger-strip">
				<div class="bar"></div>
				<div class="bar"></div>
				<div class="bar"></div>
			</div>
		</div>
		<!-- END BURGER BUTTON -->

		<!-- MENU LIST -->
		<ul class="menu__list">
			<li v-for="linky in links" :key="linky.id" class="menu__item">
				<a :href="linky.href" class="menu__link">{{ linky.name }}</a>
			</li>
		</ul>
		<!-- END MENU LIST -->
	</nav>
</template>

<script>
export default {
	name: "MenuCustom",
	data() {
		return {
			title: "xxxx xxxx",
			screenWidth: "",
			logoDescription: "Descripcion del logo",
			links: [
				{ name: "HOME", href: "#" },
				{ name: "ABOUT ME", href: "#" },
				{ name: "HIGHLIGHTS", href: "#" },
				{ name: "GALLERY", href: "#" },
				{ name: "CONTACT", href: "#" },
			],
		};
	},
	watch: {},
	computed: {},
	methods: {
		menu() {
			const menuList = document.querySelector(".menu__list");
			const bool = menuList.classList.toggle("show");
			let bar1 = document.querySelector(".bar:first-child");
			let bar2 = document.querySelector(".bar:nth-child(2)");
			let bar3 = document.querySelector(".bar:last-child");
			bar1.classList.toggle("bar1");
			bar2.classList.toggle("bar2");
			bar3.classList.toggle("bar3");
		},
	},
};
</script>

<style scoped>
@import url("../../public/font/stylesheet.css");

.menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #000000;
	height: 70px;
	width: 100%;
	position: inherit;
	padding: 40px;
}

/* :::::::::: BURGER BUTTON :::::::::: */
.burger {
	width: 40px;
	height: 35px;
	border-radius: 8px;
	background: white;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
}

.burger-strip {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
}

.strip .bar {
	height: 3px;
	border-radius: 8px;
	background: rgb(56 56 56);
	margin: 2px;
	transition: all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 15px;
}

.bar1 {
	transform: translateY(7px) rotate(45deg);
}

.bar2 {
	opacity: 0;
}

.bar3 {
	transform: translateY(-7px) rotate(-45deg);
}

/* :::::::::: STYLES :::::::::: */

.menu__container {
	display: flex;
	justify-content: space-around;
	max-height: 50px;
}

.menu__logo {
	align-items: flex-start;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	height: 50px;
}

.menu__logo-img {
	height: 40px;
}

.menu__list {
	align-items: center;
	background-image: url("../assets/papyrus-dark.png");
	background-size: 150px;
	bottom: 400px;
	display: flex;
	filter: brightness(250%);
	flex-direction: column;
	gap: 32px;
	justify-content: center;
	left: 0;
	list-style: none;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 70px;
	transition: bottom .65s ease-in-out;
	z-index: 99;
}

.show {
	bottom: 0;
	opacity: 1;
	transition: bottom .75s ease-in-out, opacity .75s ease-in-out;
}

.menu__list > li > a {
	color: white;
	font-size: 1rem;
	text-decoration: none;
}

@media only screen and (min-width: 1024px) {
	.menu__container {
		display: flex;
		flex: 1;
	}

	.burger {
		display: none;
	}

	.menu__list {
		background-image: unset;
		flex-direction: row;
		flex: 2;
		opacity: 1;
		position: unset;
		z-index: 0;
	}
}
</style>
