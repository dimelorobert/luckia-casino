<template>
	<div class="accordion">
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu.jpg" alt="" />

			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?
				</p></a
			>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu2.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?
				</p></a
			>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu1.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?
				</p></a
			>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu3.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?
				</p></a
			>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?
				</p></a
			>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?
				</p></a
			>
		</article>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	data() {
		return {};
	},
};
</script>

<style scoped>
body {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.accordion {
	display: flex;
	height: 80vh;
	background: #0a0a0a;
	margin: 2rem auto;
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
	margin: 0 0.35rem;
}

.accordion .accordion__slide:first-child {
	width: calc(100% * 2);
	filter: grayscale(0%);
}

.accordion__slide:hover {
	width: calc(100% * 2);
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
	text-align: left;
	margin: 1rem 0;
}

.accordion__description {
	font-size: 14px;
	max-width: max-content;
	margin: 0;
	line-height: 1.5rem;
}
</style>
