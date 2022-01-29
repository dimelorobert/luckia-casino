// Browsers you can use
const { webkit, chromium, firefox } = require("playwright");

// https://oxylabs.io/blog/playwright-web-scraping

// URL we want to visit
const URL =
	"https://resultados.isquad.es/equipo.php?seleccion=0&id_equipo=202137011&id=40989&id_territorial=33&id_ambito=3";

(async () => {
	const browser = await webkit.launch({ headless: false, slowMo: 50 });

	const page = await browser.newPage();

	await page.goto(URL);

	const player = await page.$$eval(".caja_jugador", players => {
		const data = [];
		players.forEach(jugador => {
			const name = jugador.querySelector(".nombre_corto").innerText;
			const img = jugador.querySelector(".foto_jugador>img").src;
			data.push({ name, img });
		});
		return data;
	});

	/*await page.type("input[id=cercadorOcultGoogle]", "Agenda cultural", {
		delay: 250,
	});

	await page.type("input[id=cercadorOcultGoogle]", "Agenda cultural", {
		delay: 75,
	});

	await page.click('input[type="submit"]');*/

	//await page.close();
	//await browser.close();
	const plantilla = "a.pestanas[href='#plantilla']";
	console.log(
		"esta es plantilla:::::>",player
	);

	await page.click('a[href="#plantilla"]');
})().catch(err => {
	console.log("[Error]::: ", err);
	process.exit();
});
