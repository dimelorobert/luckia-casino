<template>
	<section class="sponsor">
		<div class="sponsor__video-container">
			<video
				class="sponsor__video"
				autoplay="true"
				loop
				muted
				src="../assets/nike-shot.mp4"
			></video>
		</div>
		<div class="sponsor__story">
			<h2 class="sponsor__title">Sponsored by Nike</h2>
			<p class="sponsor__description">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sed
				voluptatibus minus itaque saepe. Quas quibusdam aliquam, voluptates
				minima architecto, similique sequi aperiam, odio cupiditate quis
				earum officia eaque sapiente nisi vel consequuntur adipisci enim
				mollitia facere possimus iure labore dolorem debitis.
			</p>

			<Button class=".sponsor__button" :text="textBtn" :type="typeBtn" />
		</div>
	</section>
</template>

<script>
import Button from "./Button.vue";
export default {
	name: "VideoShort",
	components: {
		Button,
	},
	data() {
		return {
			/* Config Button*/
			textBtn: "View Short",
			typeBtn: "button",
		};
	},
};
</script>

<style scoped>
.sponsor {
	background-color: #000;
	display: flex;
	flex-wrap: wrap;
	height: max-content;
	justify-content: space-evenly;
	padding: 2rem 0;
	max-width: 1920px;
	width: 100%;
}

.sponsor__video {
	border: none;
	filter: grayscale(75);
	width: 100%;
	max-width: 650px;
}

.sponsor__story {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.sponsor__title {
	font-size: 36px;
	margin: 2rem 0;
	color: #fff;
	text-align: center;
}

.sponsor__description {
	max-width: 645px;
	font-size: 18px;
	line-height: 2rem;
	color: #fff;
	text-align: center;
	text-justify: inter-word;
	padding: 0 1.5rem;
}
.sponsor__button {
	display: flex;
	justify-content: center;
}

@media only screen and (max-width: 767px) {
	/* * {
		scrollbar-width: none;
	}

	*::-webkit-scrollbar {
		display: none;
	} */

	/* .sponsor__video {
		width: fit-content;
	} */

	.sponsor__story {
		padding: 0 1rem;
	}

	.sponsor__description {
		font-size: 0.95rem;
		padding: 0 1rem;
		text-align: left;
		text-justify: newspaper;
	}
}

@media only screen and (min-width: 768px) {
	.sponsor__description {
		max-width: 720px;
	}
}
</style>
