<template>
	<section class="match">
		<div class="match__banner">
			<div class="match__item">
				<img
					class="match__team"
					src="../assets/roda.png"
					alt="foto-equipo"
					width="65px"
				/>
				<h3 class="match__title-score">Roda</h3>
			</div>
			<div class="match__item">
				<div class="match__item-container">
					<span class="match__title-score">score</span>
					<h4 class="match__item-score">5 | 2</h4>
				</div>
			</div>
			<div class="match__item">
				<h3 class="match__title-score">Villarreal</h3>
				<img
					class="match__team"
					src="../assets/villarreal.png"
					alt="foto equipo"
					width="55px"
				/>
			</div>
		</div>
	</section>
</template>

<script>
name: "Score";
export default {};
</script>

<style scoped>
.match {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
}

.match__banner {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: max-content;
	padding: 0.25rem 4rem;
	background: #fff;
	border-radius: 0.25rem;
}

.match__item {
	display: inline-flex;
	justify-content: center;
	align-items: center;
}

.match__item:nth-child(2) {
}

.match__title-score {
	font-weight: normal;
	margin: 0 1rem;
}
.match__item-score {
	font-size: 2rem;
}

.match__item-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: fit-content;
}
</style>
