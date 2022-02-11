<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<!-- <CurrencyBox :config="config" :culture="culture" /> -->
		<!-- <Login /> -->
		<!-- <Registro :user="user" /> -->
		<MenuCustom />
		<!-- <Slider class="h-slider" /> -->
		<Accordion class="h-accordion" />
		<!-- <Accordion class="h-accordion" />
		<VideoShort />
		<Bio /> -->
		<!-- <Score /> -->
		<!-- <Link :href="href" :text="text" :style="styles" /> -->
		<!-- <Button :text="textBtn" :type="typeBtn" /> -->
		<Footer />
	</div>
</template>

<script>
import axios from "axios";

import HelloWorld from "@/components/HelloWorld.vue";
import CurrencyBox from "@/components/CurrencyBox.vue";
import Login from "@/components/Login.vue";
import Registro from "@/components/Registro.vue";
import Accordion from "@/components/Accordion.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import Bio from "@/components/Bio.vue";
import Contact from "@/components/Contact.vue";
import Score from "@/components/Score.vue";
import VideoShort from "@/components/VideoShort.vue";
import Link from "@/components/Link.vue";
import Button from "@/components/Button.vue";
import Slider from "@/components/Slider.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Home",
	components: {
		HelloWorld,
		CurrencyBox,
		Login,
		Registro,
		Accordion,
		MenuCustom,
		Bio,
		Contact,
		Score,
		VideoShort,
		Link,
		Button,
		Slider,
		Footer,
	},
	data() {
		return {
			user: {
				name: "",
				surname: "",
				address: "",
				telephone: null,
				email: "",
				dni: "",
				birthdate: "",
				genre: "",
			},

			/* Config  Link*/
			href: "https://google.es",
			text: "links__container marola",
			styles: {
				color: "#FFF",
				fontSize: "1rem",
				textDecoration: "none",
			},
			/* Config Button*/
			textBtn: "Comprar",
			typeBtn: "reset",

			// Currency Box Config parameters
			config: {
				currency: "EUR",
				currencyDisplay: "symbol",
				currencySign: "standard",
				maximumFractionDigits: 2,
				minimumFractionDigits: 2,
				signDisplay: "auto",
				style: "currency",
				useGrouping: true,
			},
			culture: "es-ES",

			lineWidth: 3,
			lineColor: "#444",
			bgColor: "#FFF",
			resultImg: "",
			isCrop: false,
		};
	},
	methods: {
		async createUser() {
			const res = await axios.post("users/create", this.user);
			console.log("RESPONSE:::>", res);
		},
	},
};
</script>
<style scoped>
.home {
	align-items: center;
	background: #000101;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

/*.h-slider {
	display: none;
}

@media only screen and (max-width: 767px) {
	.h-slider {
		display: block;
		
	}

	.slider-controller {
		overflow: hidden;
	}

	.h-accordion {
		display: none;
	}
}*/
</style>
