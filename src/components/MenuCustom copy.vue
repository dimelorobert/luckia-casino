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

			<ul class="menu__list">
				<li v-for="linky in links" :key="linky.id" class="menu__item">
					<a :href="linky.href" class="menu__link">{{ linky.name }}</a>
					<span class="h"></span>
				</li>
			</ul>
		</div>
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
	watch: {
		title() {
			if (screen.width <= 767) {
				this.title = "LQ10";
				console.log("hol::>", this.title);
				return this.title;
			}

			if (screen.width >= 768) {
				this.title = "Luis Quintero";
				console.log("añaña::>", this.title);
				return this.title;
			}
		},
	},
	computed: {
		setTitle() {
			if (screen.width <= 767) {
				this.title = "LQ10";
				console.log("hol::>", this.title);
				return this.title;
			}
		},
	},
	methods: {
		detectorScreen() {
			console.log("Screen size:::>", screen.width);
		},
	},
	created() {
		window.addEventListener("resize", this.detectorScreen);
	},
	destroyed() {
		window.removeEventListener("resize", this.detectorScreen);
	},
};
</script>

<style scoped>
@import url("../../public/font/stylesheet.css");

.menu {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000000;
	height: 70px;
	width: 100%;
}

.menu__container {
	display: flex;
	justify-content: space-around;
	max-height: 70px;
	width: 100%;
}

.menu__logo {
	display: inline-flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	height: 70px;
}

.menu__logo-img {
	height: 40px;
}

.menu__list {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	height: 70px;
	gap: 24px;
}

.menu__list > li[class="menu__item"] {
}

.menu__item {
}

.menu__link {
	color: #ffffff;
	text-decoration: none;
}

.menu__link:hover {
	color: #fffb00;
	text-decoration: none;
}

.h {
	color: red;
	content: "·";
	font-size: 20px;
}
</style>
