<template>
   <div class="register">
      <form class="form">
			<!-- <spa class="icon-back-word"><img class="icon-back" src="../assets/back.png" alt="Atras">
			Atras</spa> -->
			<img class="logo" src="../assets/beils-green.png" alt="Logo">
			<img class="banner" src="../assets/beils-pattern.png" alt="Patrón banner">
         <h2 class="title">Nueva Ficha</h2>

         <div class="f-row">
				<div class="flex-container-col">
            <label class="label" for="name">Nombre</label>
            <input id="name" class="input" type="text" :placeholder="placeholder" autocomplete="off" />
         </div>

         <div class="flex-container-col">
            <label class="label" for="surname">Apellidos</label>
            <input id="surname" class="input" type="text" :placeholder="placeholder" autocomplete="off" />
         </div>
			</div>
			
         <div class="f-row">
				<div class="flex-container-col">
            <label class="label" for="address" >Dirección</label>
            <input class="input"
				id="address"
            type="text"
            :placeholder="placeholder"
            autocomplete="nope"
				/>
         </div>

         <div class="flex-container-col">
            <label class="label" for="telephone" >Telefono</label>
            <input class="input"
				id="telephone"
            type="text"
            :placeholder="placeholder"
            autocomplete="nope"
				/>
         </div>
			</div>

         <div class="f-row">
				<div class="flex-container-col">
            <label class="label" for="email" >Email</label>
            <input class="input"
				id="email"
            type="email"
            :placeholder="placeholder" 
				autocomplete="off"
				/>
         </div>

         <div class="flex-container-col">
            <label class="label" for="dni" >DNI</label>
            <input class="input"
				id="dni"
            type="text"
            :placeholder="placeholder"
            autocomplete="off"
				/>
         </div>
			</div>

         <div class="f-row">
				<div class="flex-container-col">
            <label class="label" for="birthdate" >Fecha de nacimiento</label>
            <input class="input"
            id="birthdate"
            type="date"
				/>
         </div>
			</div>

         <div class="flex-container-row">
				<button class="button">Crear Nueva Ficha</button>
			</div>

      </form>
   </div>
</template>

<script>
export default {
     data() {
          return {
               placeholder: "",
          };
     },
};
</script>

<style scoped>

p, label, span, input {
	font-size: 1rem;
}

input {
	border: none;
	border-radius: .5rem;
	height: 2.5rem;
	padding: .25rem 1rem ;
	text-align: center;
	background: #e4e4e4;
}

input:focus {
	border: 0 0 transparent;
	/* box-shadow: 0 0 10px 5px #386356; */
}

input[type=date]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
}

input[type=date]::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    display: none;
}
.register {
	display: flex;
	flex-direction: column;
	background-color: #FEFEFE;
}
.icon-back {
	cursor: pointer;
	width: 50px;
}

.icon-back-word {
	cursor: pointer;
	position: absolute;
	top: 11rem;
	left: 7rem;
	width: 50px;
}

.logo {
	position: relative;
	width: 255px;
	z-index: 1;
}

.logo {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 1rem auto 0 auto;
	width: 155px;
}

.banner {
	width: 100%;
	height: 140px;
	object-fit: cover;
}

.title {
	text-align: center;
	color: #4c7e6f;
	margin: 2rem 1rem;
}

.flex-container-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
}

.flex-container-row {
	display: flex;
	justify-content: center;
	align-content: center;
}



.label {
	display: block;
	text-align: center;
}

.input {
	width: 80%;
}

.margin {
	margin: 2rem 0;
}

.button {
	cursor: pointer;
	outline: none;
	height: 2.5rem;
	padding: .5rem 1rem;
	border-radius: .5rem;
	background-color: #4c7e6f;
	color: #FFF;
	border: none;
	font-weight: 600;
}

.button:hover {
	background-color: #a1cec0;
}

@media only screen and (min-width: 768px) {
	#name, #surname, #address, #telephone, #email, #dni, #birthdate {
		width: 100%;
		min-width: 300px;
	}
	
   .f-row {
		  display: flex;
		  justify-content: space-evenly;
		  align-items: center;
	}
}

@media only screen and (min-width: 768px) {

	.button {

	}
}

</style>
