<template>
	<section class="bio">
		<!-- <img src="../assets/lu5.jpg" alt="" class="bio__player"> -->
		<!-- <div class="bio__video-container">
			<video
				class="video grayscale"
				autoplay="true"
				muted
				loop
				src="../assets/nike-shot.mp4"
			></video
			>
		</div>
		<div class="bio__story">
			<h2 class="bio__title">
				Sponsored by Nike
			</h2>
			<p class="bio__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sed voluptatibus minus itaque saepe. Quas quibusdam aliquam, voluptates minima architecto, similique sequi aperiam, odio cupiditate quis earum officia eaque sapiente nisi vel consequuntur adipisci enim mollitia facere possimus iure labore dolorem debitis. Nostrum, ipsum incidunt voluptatem obcaecati voluptate error alias veniam dolorum doloremque id sed eligendi iste magnam eveniet laborum aut similique! Quo animi velit vero cumque distinctio est deleniti nulla.</p>

			<div class="bio__container-button">
				<a class="bio__button" href="#">View short</a>
			</div>
		</div> -->
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
.bio {
	display: flex;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
	background: url("../assets/preview.jpg");
	background-position: top center;
	background-size: cover;
	background-repeat: no-repeat;
}

.bio__video-container {
	display: flex;
}

.video {
	object-fit: contain;
	filter: grayscale(75);
	border: none;
	width: 720px;
}

.video1 {
	position: relative;
	right: 45rem;
	top: 5rem;
	width: 720px;
}

.bio__player {
	width: 1024px;
	object-fit: contain;
}

.bio__title,
.bio__description {
	color: #fff;
}

.bio__title {
	font-size: 36px;
	margin: 1rem 0;
}

.bio__description {
	max-width: 466px;
	font-size: 18px;
}

.bio__container-button {
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 1rem auto;
}

.bio__button {
	text-align: center;
	text-decoration: none;
	color: #fff;
	border: 2px solid #fff;
	border-radius: 2rem;
	padding: 0.5rem 1rem;
	width: 50%;
}
</style>
