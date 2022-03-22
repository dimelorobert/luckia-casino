const days = [
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo",
];
const activities = [
	"Correr",
	"Nadar",
	"Follar",
	"Comprar",
	"Comer Chocho",
	"Follar Culo",
	"Ponertela en la boca"
];

const myDays = activities.map((name, index) => {
	console.log("Este es name e index:::>>", name, index);
	const obj = {};
	obj[days[index]] = name;
	return obj;
});

console.log(myDays);