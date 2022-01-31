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
import cheerio from "cheerio";
const axios = require("axios").default;

export default {
	name: "Score",
	data() {
		return {
			players: [],
			playerobj: {},
			url: "https://resultados.isquad.es/equipo.php?seleccion=0&id_equipo=202137011&id=40989&id_territorial=33&id_ambito=3",
		};
	},
	methods: {
		async getPlayerData() {
			const res = await axios.get(this.url);
			console.log("RESPONSE:::>", res);
			// const $ = cheerio.load(res.data);
			// $(".caja_jugador").each((index, element) => {
			// 	const name = $(element).find(".nombre_corto").text();
			// 	this.players = this.players.push({ name });
			// 	console.log("ESTE ES EL NAME:::>>", name, this.players);
			// 	//console.log("ESTE ES EL ARRAY:::>>", this.players);
			// });
		},
	},
	async created() {
		await this.getPlayerData();
	},
};
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
