<template>
     <div class="register">
          <form class="form">
               <!-- <spa class="icon-back-word"><img class="icon-back" src="../assets/back.png" alt="Atras">
			Atras</spa> -->
               <img class="logo" src="../assets/beils-green.png" alt="Logo" />
               <img
                    class="banner"
                    src="../assets/beils-pattern.png"
                    alt="Patrón banner"
               />
               <h2 class="title">Nueva Ficha</h2>

               <div class="flex-container-row">
                    <div class="child-f-row">
                         <label class="label" for="name">Nombre</label>
                         <input
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
                              class="input"
                              id="address"
                              type="text"
                              :placeholder="placeholder"
                              autocomplete="nope"
                         />
                    </div>

                    <div class="child-f-row">
                         <label class="label" for="telephone">Telefono</label>
                         <input
                              class="input"
                              id="telephone"
                              type="text"
                              :placeholder="placeholder"
                              autocomplete="nope"
                         />
                    </div>
               </div>

               <div class="flex-container-row">
                    <div class="child-f-row">
                         <label class="label" for="email">Email</label>
                         <input
                              class="input"
                              id="email"
                              type="email"
                              :placeholder="placeholder"
                              autocomplete="off"
                         />
                    </div>

                    <div class="child-f-row">
                         <label class="label" for="dni">DNI</label>
                         <input
                              class="input"
                              id="dni"
                              type="text"
                              :placeholder="placeholder"
                              autocomplete="off"
                         />
                    </div>
               </div>

               <div class="flex-container-row">
                    <div class="child-f-row">
                         <label class="label" for="birthdate"
                              >Fecha de nacimiento</label
                         >
                         <input class="input" id="birthdate" type="date" />
                    </div>

						  <div class="child-f-row">
							  <label class="label" for="birthdate"
                              >Genero</label
                         >
							  <select class="select">
                                   <option disabled selected>Elige...</option>
                                   <option>Mujer</option>
                                   <option>Hombre</option>
                        </select>
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
p,
label,
span,
input {
	color: #386356;
     font-size: 1rem;
}

input {
     border: none;
     border-radius: 0.5rem;
     height: 2.5rem;
     padding: 0.25rem 1rem;
     text-align: center;
     background: #e4e4e4;
}

input:focus {
     border: 0 0 transparent;
     /* box-shadow: 0 0 10px 5px #386356; */
}

input[type="date"]::-webkit-inner-spin-button {
     -webkit-appearance: none;
     display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
     -webkit-appearance: none;
     display: none;
}
.register {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     background-color: #fefefe;
}

.form {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 100%;
}

.logo {
     position: relative;
     width: 255px;
     z-index: 1;
	  filter: drop-shadow(0px 2px 1px #386356);
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

.child-f-row {
     width: 80%;
     margin: 1rem 0;
}

.flex-container-row {
     display: flex;
	  justify-content: center;
	  align-items: center;
     flex-wrap: wrap;
	  width: 100%;
}

.label {
	display: flex;
	justify-content: center;
}

.input {
     width: 100%;
}

.select {
	text-align: center;
	background: #e4e4e4;
	border-radius:  .5rem;
	height: 2.5rem;
	width: 100%;
	color: #386356;
}

.button {
     background-color: #4c7e6f;
     border: none;
     border-radius: 0.5rem;
     color: #fff;
     cursor: pointer;
     font-weight: 600;
     height: 2.5rem;
     outline: none;
     padding: 0.5rem 1rem;
	  width: 80%;
}

.button:hover {
     background-color: #a1cec0;
}

@media only screen and (min-width: 768px) {
     .child-f-row {
		  width: 35%;
		  margin: 1rem auto;
	  }

	  .button {
		  width: 35%;
	  }
}
</style>
