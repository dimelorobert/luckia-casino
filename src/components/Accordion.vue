<template>
	<div class="accordion">
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu2.jpg" alt="" />

			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">{{ descriptionLimiter }}</p>
				{{ readMore }}</a>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu4.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">{{ descriptionLimiter }}</p>
				{{ readMore }}</a>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu1.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">{{ descriptionLimiter }}</p>
				{{ readMore }}</a>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu3.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">{{ descriptionLimiter }}</p>
				{{ readMore }}</a>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">{{ descriptionLimiter }}</p>
				{{ readMore }}</a>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu5.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">{{ descriptionLimiter }}</p>
				{{ readMore }}</a>
		</article>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	data() {
		return {
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
			readMore: "Seguir leyendo ➔",
		};
	},
	computed: {
		descriptionLimiter() {
			return this.description.slice(0, 220);
		},
	},
};
</script>

<style scoped>
@import url('../../public/font/stylesheet.css');

.accordion {
	display: flex;
	height: 80vh;
	gap: 0.75rem;
	background: #000101;
}

.accordion__slide {
	display: flex;
	filter: grayscale(75%);
	flex-direction: column;
	justify-content: flex-end;
	object-fit: cover;
	max-width: max-content;
	width: 100%;
	transition: 0.6s all ease-in-out;
	background: #000101;
}

.accordion__slide:first-child {
	width: 200%;
	filter: grayscale(0%);
}

.accordion:hover .accordion__slide {
	width: 100%;
}

.accordion .accordion__slide:hover {
	width: 200%;
	filter: grayscale(0%);
}

.accordion__image {
	position: fixed;
	object-fit: cover;
	width: 100%;
	height: 100%;
	z-index: -99;
}

.accordion__link {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	text-decoration: none;
	color: #fff;
	padding: 0.75rem 1rem 2rem 0.75rem;
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0.65) 35%,
		rgba(68, 68, 68, 0.1) 100%
	);
}

.accordion__title,
.accordion__description {
	color: #fff;
}

.accordion__title {
	font-size: 1.6rem;
	text-align: left;
	margin: 1rem 0;
	font-family: "Poppins";
	font-weight: 600;
	font-display: swap;
}

.accordion__description {
	font-size: 14px;
	max-width: max-content;
	margin: 0;
	line-height: 1.5rem;
	font-family: "Poppins";
	font-weight: normal;
}
</style>
