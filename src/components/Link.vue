<template>
	<a class="link" href="#" :style="style">{{ text }}</a>
</template>

<script>
export default {
	name: "Link",
	props: {
		href: {
			type: String,
			default: "#",
		},
		text: {
			type: String,
			default: "Este es un Link de Prueba",
		},
		style: {
			type: Object,
			default: {
				color: "#FFF",
				fontSize: "1rem",
			},
		},
	},
};
</script>

<style scoped>
.link {
	text-decoration: none;
}
</style>
