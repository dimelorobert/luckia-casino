// Browsers you can use
const { webkit, chromium, firefox } = require("playwright");

// https://oxylabs.io/blog/playwright-web-scraping

// URL we want to visit
const URL =
	"https://resultados.isquad.es/equipo.php?seleccion=0&id_equipo=202137011&id=40989&id_territorial=33&id_ambito=3";

(async () => {
	const browser = await chromium.launch({ headless: true, slowMo: 50 });

	const page = await browser.newPage();

	await page.goto(URL);

	await page.waitForTimeout(6000);

	const nameImgPlayer = await page.$$eval(".caja_jugador", players => {
		const data = [];
		players.forEach(jugador => {
			const name = jugador.querySelector(".nombre_corto").innerText;
			const image = jugador.querySelector(".foto_jugador>img").src;
			const feats = jugador.querySelectorAll(".item");
			console.log("ESTOS SON LOS FEATS::>", feats);
			data.push({ name, image  });
		});
		return data;
	});
	console.log("esta es plantilla:::::>", nameImgPlayer);
	await page.close();
	//await page.waitForTimeout(10000);
	await browser.close();
})().catch(err => {
	console.log("[Error]::: ", err);
	process.exit();
});
