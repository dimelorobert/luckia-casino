const Nightmare = require("nightmare");
const nightmare = Nightmare({
	show: true,
	waitTimeout: 3000,
});

nightmare
	.goto("https://piensoymascotas.com/")
	.click(".user-info-pym > a")
	.type("input[type='email']", "airbusjayrobert@gmail.com")
	.type("input[type='password']", "robert591")
	.click("footer.tvlogin-btn > button[type='submit']")
	// .evaluate(() => document.querySelector(".links > a"))
	// .end()
	.then(console.log)
	.catch(error => {
		console.error("Search failed:", error);
	});
