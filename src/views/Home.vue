<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<!-- <CurrencyBox :config="config" :culture="culture" /> -->
		<!-- <Login /> -->
		<!-- <Registro :user="user" /> -->
		<accordion />
	</div>
</template>

<script>
import axios from "axios";

import HelloWorld from "@/components/HelloWorld.vue";
import CurrencyBox from "@/components/CurrencyBox.vue";
import Login from "@/components/Login.vue";
import Registro from "@/components/Registro.vue";
import Accordion from "../components/Accordion.vue";

export default {
	name: "Home",
	components: {
		HelloWorld,
		CurrencyBox,
		Login,
		Registro,
		Accordion,
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
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
</style>
