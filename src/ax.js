const axios = require("axios");
const cheerio = require("cheerio");
const URL =
	"https://resultados.isquad.es/equipo.php?seleccion=0&id_equipo=202137011&id=40989&id_territorial=33&id_ambito=3";

async function getPlayersData(url) {
	try {
		const res = await axios.get(URL);
		const $ = cheerio.load(res.data);
		$(".caja_jugador").each((index, element) => {
			const name = $(element).find(".nombre_corto").text();
			console.log("ESTE ES EL NAME:::>>", name);
		});
	} catch (error) {
		console.log("ERROR::>", error.message);
	}
}

getPlayersData(URL);
