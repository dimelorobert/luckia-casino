<template>
	<form class="form">
		<!-- <div class="container-logo">
			<img class="logo animate__animated animate__pulse" src="../assets/beils-green.png" loading="lazy" alt="Logo" />
		</div> -->
		<h2 class="title">Nueva Ficha</h2>

		<div class="flex-container-row">
			<div class="child-f-row">
				<label class="label" for="name">Nombre</label>
				<input
					v-model="user.name"
					id="name"
					class="input"
					type="text"
					:placeholder="placeholder"
					autocomplete="off"
				/>
			</div>

			<div class="child-f-row">
				<label class="label" for="surname">Apellidos</label>
				<input
					v-model="user.surname"
					id="surname"
					class="input"
					type="text"
					:placeholder="placeholder"
					autocomplete="off"
				/>
			</div>
		</div>

		<div class="flex-container-row">
			<div class="child-f-row">
				<label class="label" for="address">Dirección</label>
				<input
					v-model="user.address"
					id="address"
					class="input"
					type="text"
					:placeholder="placeholder"
					autocomplete="nope"
				/>
			</div>

			<div class="child-f-row">
				<label class="label" for="telephone">Telefono</label>
				<input
					v-model="user.telephone"
					id="telephone"
					class="input"
					type="tel"
					:placeholder="placeholder"
					autocomplete="nope"
					maxlength="9"
				/>
			</div>
		</div>

		<div class="flex-container-row">
			<div class="child-f-row">
				<label class="label" for="email">Email</label>
				<input
					v-model="user.email"
					id="email"
					class="input"
					type="email"
					:placeholder="placeholder"
					autocomplete="off"
				/>
			</div>

			<div class="child-f-row">
				<label class="label" for="dni">DNI</label>
				<input
					v-model="user.dni"
					id="dni"
					class="input"
					type="text"
					:placeholder="placeholder"
					autocomplete="off"
					maxlength="9"
				/>
			</div>
		</div>

		<div class="flex-container-row">
			<div class="child-f-row">
				<label class="label" for="birthdate">Fecha de nacimiento</label>
				<input
					v-model="user.birthdate"
					id="birthdate"
					class="input"
					type="date"
				/>
			</div>

			<div class="child-f-row">
				<label class="label" for="birthdate">Genero</label>
				<select v-model="user.genre" class="select">
					<option>Elige genero</option>
					<option>Mujer</option>
					<option>Hombre</option>
				</select>
			</div>
		</div>

		<div class="flex-container-row">
			<button class="button">📝 Crear Nueva Ficha</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "Registro",
	props: {
		user: Object,
	},
	data() {
		return {
			placeholder: "",
		};
	},
};
</script>

<style scoped>
p,
label,
span,
input,
select,
option {
	color: var(--green);
	font-size: 1rem;
}

input {
	background: var(--grey);
	border: none;
	outline: none;
	padding: 0.25rem 1rem;
}

input.input:hover,
input.input:focus,
select:hover {
	/* border: 2px solid var(--salmon); */
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

input,
.select {
	height: 2.5rem;
}

input,
.select,
.title {
	text-align: center;
}

input,
.button,
.select {
	border-radius: 0.5rem;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
	-webkit-appearance: none;
	display: none;
}

select {
	border: none;
}

option:after {
	border-radius: 1rem;
	width: 150px;
}

button {
	color: var(--white);
}

.form {
	align-items: center;
	flex-direction: column;
	max-width: 650px;
	height: 656px;
}

.logo {
	filter: drop-shadow(0px 2px 1px var(--green));
	width: 155px;
}

.container-logo {
	align-items: center;
	background-image: url("../assets/beils-pattern.png");
	display: flex;
	height: 50px;
	justify-content: center;
	width: 100%;
}

.title {
	color: var(--green);
	font-size: 2.5rem;
	margin: 2rem 1rem;
}

.child-f-row,
.button {
	margin: 1rem 0;
}

.flex-container-row {
	align-items: center;
	flex-wrap: wrap;
}

.form,
.flex-container-row,
.label {
	display: flex;
	justify-content: center;
}

.form,
.banner,
.flex-container-row,
.input,
.select {
	width: 100%;
}

.select {
	background: var(--grey);
	color: var(--green);
}

.child-f-row,
.button {
	width: 80%;
}

.button {
	background-color: var(--green);
	border: none;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 600;
	outline: none;
	padding: 0.5rem 1rem;
	height: 3rem;
	color: #fff;
}

button:hover {
	background-color: var(--greenh);
}

@media only screen and (min-width: 768px) {
	.register {
		display: flex;
		justify-content: center;
	}
	.child-f-row {
		margin: 1rem auto;
	}

	.child-f-row,
	.button {
		width: 40%;
	}
}
</style>
