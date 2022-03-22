<template>
	<button
		:type="type"
		@mousedown="evButton"
		@mouseup="evButton"
		class="button"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		text: {
			type: String,
			default: "Button",
		},

		type: {
			type: String,
			default: "button",
		},
	},
	methods: {
		evButton(e) {
			const btn = document.querySelector(".button");
			const mouseDown = e.type === "mousedown";
			mouseDown
				? (btn.style.transform = "scale(98%)")
				: (btn.style.transform = "");

			console.log("Click event:::> 1", e.type, btn.type);
		},
	},
};
</script>

<style scoped>
.button {
	display: flex;
	background-color: transparent;
	border: 2px solid #fff;
	border-radius: 2rem;
	color: #fff;
	font-size: 1rem;
	font-weight: bold;
	justify-content: center;
	outline: none;
	padding: 0.8rem 5%;
	margin: 1.5rem auto;
	text-align: center;
	transition: 0.18s all ease-in-out;
	width: 50%;
}

.button:hover {
	background-color: #fff;
	color: #000;
}

@media only screen and (max-width: 320px) {
	.button {
		padding: 0.8rem 4.5%;
	}
}
</style>
