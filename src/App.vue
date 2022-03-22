<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<!-- <CurrencyBox :config="config" :culture="culture" /> -->
		<!-- <Login /> -->
		<!-- <Registro :user="user" /> -->
		<!-- <MenuCustom /> -->
		<!-- <Bio /> -->
		<!-- <accordion /> -->
		<!-- <VideoShort /> -->
		<!-- <Score /> -->
		<!-- <Link :href="href" :text="text" :style="styles" /> -->
		<!-- <Button :text="textBtn" :type="typeBtn" /> -->
		<router-view />
	</div>
</template>
<script>
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

export default {
	name: "App",
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
	},
	data() {
		return {};
	},
};
</script>

<style>
/* @import "../node_modules/bulma/css/bulma.css";
@import '../node_modules/bulma/sass/utilities/_all.sass'; */
@import "../public/font/interfont.css";
:root {
	/* :::::::::: WEB COLORS :::::::::: */
	--green: #659082;
	--greenh: #bccfc9;
	--white: #fdfdfd;
	--grey: #f1f1f1;
	--salmon: #f4ac9e;
	--luckia: #ea5b0c;
	--luckia-dark: #8d3707;
	--luckia-light: #f5ad85;
	--basket: #f80;
	--luckia-old: #dc4405;
	--themeColor: #daa520;
	--darkColor: #000000;

	/* :::::::::: WEB SIZES :::::::::: */
	--xs: 8px;
	--s: 16px;
	--m: 24px;
	--l: 32px;
	--x: 40px;
	--xl: 48px;
	--xxl: 56px;
	--xxl: 64px;
	--xxxl: 72px;
	--xxxxl: 80px;
	--total: 100%;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
/* 
html {
	overflow: hidden;
}

body {
	scroll-behavior: smooth;
} */

#app {
	font-family: "Inter", Tahoma, Geneva, Verdana, sans-serif; /* Avenir, Helvetica, Arial, sans-serif; */
	-webkit-font-smoothing: antialiased;
	background-color: var(--darkColor);
}

@media only screen and (min-width: 1024px) {
	* {
		box-sizing: border-box;
		/* scrollbar-width: none; */
	}

	/* *::-webkit-scrollbar {
		display: none;
	} */
}
</style>
