<template>
	<div id="app">
		<!-- <div id="nav">
               <router-link to="/">Home</router-link> |
               <router-link to="/about">About</router-link>
          </div> -->
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>

<style>
/* @import "../node_modules/bulma/css/bulma.css";
@import '../node_modules/bulma/sass/utilities/_all.sass'; */
:root {
	--green: #659082;
	--greenh: #BCCFC9;
	--white: ##FDFDFD;
	--grey: #F1F1F1;
	--salmon: #f4ac9e;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	scroll-behavior: smooth;
}

#app {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* Avenir, Helvetica, Arial, sans-serif; */
	-webkit-font-smoothing: antialiased;
}

@media only screen and (min-width: 1024px) {
	* {
		box-sizing: border-box;
		scrollbar-width: none;
	}

	*::-webkit-scrollbar {
		display: none;
	}
}
</style>
