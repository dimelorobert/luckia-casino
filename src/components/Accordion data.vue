<template>
	<div class="accordion-slider">
		<article
			v-for="article in articles"
			:key="article.id"
			class="accordion-slider__slide"
		>
			<div class="accordion__slide-header">
				<!-- <video class="accordion__slide-header--video" :src="article.video"></video> -->
				<img
					:src="article.image"
					:alt="article.alternative"
					class="accordion__slide-header--image"
				/>
			</div>

			<div class="accordion__slide-body">
				<a :href="article.url" class="accordion-slider--link"
					><h3 class="accordion__slide-body--title">
						{{ article.title }}
					</h3>
					<p class="accordion__slide-body--description">
						{{ article.description }}
					</p></a
				>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	data() {
		return {
			articles: [
				// {
				// 	image: "",
				// 	video: "../assets/nike-shot.mp4",
				// 	alternative: "",
				// 	url: "#",
				// 	title: "Titulo Luisito H3",
				// 	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
				// 	dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
				// 	aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
				// 	totam?`,
				// 	// readMore: "Seguir leyendo ➔",
				// },
				/*/\.(gif|jpe?g|tiff?|png|webp|svg)$/g*/
				{
					image: require("../assets/lu3.jpg"),
					video: "",
					alternative: "alternative",
					url: "#",
					title: "Titulo Luisito H3",
					description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
					// readMore: "Seguir leyendo ➔",
				},
				{
					image: require("../assets/lu2.jpg"),
					video: "",
					alternative: "alternative",
					url: "#",
					title: "Titulo Luisito H3",
					description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
					// readMore: "Seguir leyendo ➔",
				},
			],
		};
	},
	computed: {
		descriptionLimiter(article) {
			return article.description.slice(0, 220) + this.readMore;
		},
	},
	methods: {
		// () {
		// }
	},
};
</script>

<style scoped>
@import url("../../public/font/stylesheet.css");

.accordion-slider {
	display: flex;
	height: calc(100vh - 80px);
	gap: 0.75rem;
	background: #000101;
	width: 100%;
	overflow: hidden;
	padding: 0 4px;
}

.accordion-slider__slide {
	margin: 0 4px;
}
.accordion__slide-header {
}

.accordion__slide-body--title {
	position: relative;
	bottom: 150px;
}

.accordion__slide-header--image {
	width: 250px;
	z-index: -99;
}
</style>
