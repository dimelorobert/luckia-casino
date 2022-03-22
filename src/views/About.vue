<template>
	<section class="hero no-padding is-success">
		<div class="hero-body no-padding">
			<div class="empty"></div>
			<div class="menu mod-menu">
				<a href="#">Home</a>
				<a href="#">Bio</a>
				<a href="#">Gallery</a>
				<a href="#">Contact</a>
			</div>
			<!-- <img class="hero" src="../assets/preview.jpg" alt=""> -->
			<!-- <h2 class="title is-2">LQ10</h2> -->
		</div>
	</section>
</template>
<style scoped>
.no-padding {
	padding: 0;
}

.hero-body {
	height: 100vh;
	background-image: url("../assets/preview.jpg");
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
}

img.hero {
	width: 100%;
}

.empty {
	width: 50vw;
}

.mod-menu {
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
}
</style>
