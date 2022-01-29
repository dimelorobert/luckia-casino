<template>
	<nav class="menu">
		<div class="menu__logo-container">
			<h1 class="menu__logo-title">{{ title }}</h1>
		</div>
		<div class="menu__link-container">
			<a href="#" class="menu__link">Home</a>
			<a href="#" class="menu__link">Gallery</a>
			<a href="#" class="menu__link">Videos</a>
			<a href="#" class="menu__link">Contact</a>
			<img src="../assets/menu.svg" alt="Boton menu" class="menu__button" />
		</div>
	</nav>
</template>

<script>
export default {
	name: "MenuCustom",
	data() {
		return {
			title: "Luis Quintero",
			screenWidth: "",
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
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 80px;
	background: #000101;
	position: sticky;
	top: 0;
	color: #fff;
	z-index: 99;
}

.menu__logo-container {
	width: 40%;
}

.menu__link-container {
	display: flex;
	width: 40%;
	justify-content: space-around;
}

.menu__link {
	color: #fff;
	text-decoration: none;
	font-family: 'Montserrat', sans-serif;/*"Poppins";*/
	font-weight: 400;
	font-display: swap;
	font-size: 15px;
}

.menu__button {
	display: none;
	width: 35px;
	cursor: pointer;
}

.menu__logo-title {
	display: inline-flex;
	font-family: "Poppins";
	font-weight: 600;
	font-style: normal;
	font-display: swap;
}

@media only screen and (max-width: 767px) {
	.menu__logo-container {
		display: flex;
		justify-content: space-around;
	}

	.menu__logo-container:nth-child(1) {
		width: 80%;
	}

	.menu__logo-container:nth-child(2) {
		width: 20%;
	}
	.menu__link-container {
		justify-content: center;
	}
	.menu__link {
		display: none;
	}

	.menu__button {
		display: block;
		filter: invert(100%);
	}
}
</style>
