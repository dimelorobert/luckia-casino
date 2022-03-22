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

		<!-- LINKS -->
		<ul class="menu__list">
			<li v-for="linky in links" :key="linky.id" class="menu__list--item">
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
			logoDescription: "Logo de la Web",
			links: [
				{ name: "Home", href: "#" },
				{ name: "About me", href: "#" },
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
			const menuList = document.querySelector(".menu__list");
			menuList.classList.toggle("show");
			// let bar1 = document.querySelector(".bar:first-child");
			// let bar2 = document.querySelector(".bar:nth-child(2)");
			// let bar3 = document.querySelector(".bar:last-child");
			// bar1.classList.toggle("bar1");
			// bar2.classList.toggle("bar2");
			// bar3.classList.toggle("bar3");
		},
	},
};
</script>

<style scoped>
@import url("../../public/font/stylesheet.css");

:root {
	--luckia: #ea5b0c;
	--luckia-dark: #8d3707;
	--luckia-light: #f5ad85;
	--basket: #f80;
	--luckia-old: #dc4405;
}

.menu {
	display: flex;
	align-items: center;
	background-image: linear-gradient(
		266deg,
		var(--basket),
		var(--luckia) 53%,
		var(--luckia-old)
	);
	width: 100%;
}

.menu__list {
	align-items: center;
	background-color: black;
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: 100vh;
	justify-content: center;
	list-style: none;
	opacity: 0;
	position: absolute;
	top: 0;
	transition: opacity 0.75s ease-in-out;
	width: 100%;
	z-index: -9;
}

.show {
	opacity: 1;
	transition: opacity 0.75s ease-in-out;
}

.menu__list--link {
	color: white;
	text-decoration: none;
}

@media only screen and (min-width: 1024px) {
	.menu__logo--link {
		pointer-events: none;
	}
}
</style>
