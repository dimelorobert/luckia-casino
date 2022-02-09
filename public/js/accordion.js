"strict mode";

const accordion = document.querySelectorAll(".accordion");
const panel = document.querySelector(".accordion__panel");
const cross = document.querySelector(".accordion__cross");
const crossPath = document.querySelector(".accordion__cross>path");
const r = document.querySelector(".accordion__title").nextElementSibling;
console.log("r::>", r);

accordion.forEach(acc => {
	acc.firstElementChild.addEventListener("click", () => {
		console.log("poseso:::",acc);

		// cross.forEach(x => {
		// 	x.classList.toggle("svg--rotate");
		// });
		 cross.classList.toggle("svg--rotate");

		// crossPath.forEach(xp => {
		// 	xp.classList.toggle("svg--hover");
		// });
		 crossPath.classList.toggle("svg--hover");

		// panel.forEach(pnl => {
		// 	pnl.classList.toggle("show--links");
		// });
		 panel.classList.toggle("show--links");
	});
});
