<template>
	<div class="accordion">
		<article class="accordion__slide">
			<!-- <img class="accordion__image" src="../assets/lu2.jpg" alt="" />  -->
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">lorem10 regrh trhtr htr trh</p>
			</a>

			<video
				autoplay="true"
				loop
				muted
				src="../assets/nike-shot.mp4"
				class="accordion__image"
			></video>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lui.webp" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">lorem10 regrh trhtr htr trh</p>
			</a>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu1.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">lorem10 regrh trhtr htr trh</p>
			</a>
		</article>
		<article class="accordion__slide">
			<img class="accordion__image" src="../assets/lu3.jpg" alt="" />
			<a class="accordion__link" href="#"
				><h3 class="accordion__title">Titulo Luisito H3</h3>
				<p class="accordion__description">lorem10 regrh trhtr htr trh</p>
			</a>
		</article>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	data() {
		return {
			articles: [
				{
					image: "../assets/lu1.jpg",
					url: "#",
					title: "Titulo Luisito H3",
					description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
					readMore: "Seguir leyendo ➔",
				},
			],
		};
	},
	computed: {
		descriptionLimiter() {
			return this.description.slice(0, 220) + this.readMore;
		},
	},
};
</script>

<style scoped>
@import url("../../public/font/stylesheet.css");

.accordion {
	display: flex;
	background-repeat: no-repeat;
	gap: 8px;
	margin: 16px;
	overflow: auto;
	scroll-snap-type: block mandatory;
	width: 100vw;
	z-index: 0;
}

.accordion__slide {
	/* margin-left: calc(24px - 8px); */
	min-width: auto;
	scroll-snap-align: start;
}

.accordion__slide:first-child {
}

.accordion__slide:last-child {
	/* margin-right: calc(24px - 8px); */
}

.accordion:hover .accordion__slide {
}

.accordion .accordion__slide:hover {
}

.accordion__image {
	border-radius: 2px;
	height: 400px;
	object-fit: cover;
	width: 300px;
	max-width: 660px;
}

.accordion__link {
	display: block;
	position: relative;
	bottom: 100%;
}

.accordion__title,
.accordion__description {
}

.accordion__title {
}

.accordion__description {
}

@media only screen and (min-width: 1024px) {
	.accordion {
		display: flex;
		height: 80vh;
		gap: 16px;
		margin: 2rem 0;
	}

	.accordion__slide {
		display: flex;
		filter: grayscale(75%);
		flex-direction: column;
		justify-content: flex-end;
		object-fit: cover;
		width: 100%;
		transition: 0.35s all ease-in-out;
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
	}

	.accordion__link {
		text-decoration: none;
	}

	.accordion__title,
	.accordion__description {
		color: #fff;
	}

	.accordion__title {
		font-size: 1.6rem;
		text-align: left;
		margin: 1rem 0;
		font-family: "Inter";
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
}
</style>
