<template>
	<nav class="menu">
		<div class="menu__logo-container">
			<h1 class="menu__logo-title">Luis Quintero</h1>
		</div>
		<div class="menu__link-container">
			<a href="#" class="menu__link">Home</a>
			<a href="#" class="menu__link">Gallery</a>
			<a href="#" class="menu__link">Videos</a>
			<a href="#" class="menu__link">Contact</a>
		</div>
	</nav>
</template>

<script>
export default {
	name: "MenuCustom",
};
</script>

<style scoped>
.menu {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 60px;
	background: #0a0a0a;
	color: #fff;
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
}

.menu__logo-title {
	display: inline-flex;
}
</style>
