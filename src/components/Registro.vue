<template>
     <form class="box mod-box">
          <!-- <div class="field">
                    <img
                         class="logo"
                         src="../assets/innovapro.png"
                         alt="Logo Beils Beauty Bar"
                    />
               </div> -->

        
               <div class="field">
                    <div class="control mod-control">
                         <label class="label mod-label"
                              >Nombre
                              <input
                                   class="input mod-input"
                                   type="text"
                                   :placeholder="placeholder"
                         /></label>
                    </div>
               </div>
               <div class="field">
                    <div class="control mod-control">
                         <label class="label mod-label"
                              >Apellidos
                              <input
                                   class="input mod-input"
                                   type="text"
                                   :placeholder="placeholder"
                         /></label>
                    </div>
               </div>
     

          
               <div class="field">
                    <div class="control mod-control">
                         <label class="label mod-label"
                              >Dirección
                              <input
                                   class="input mod-input"
                                   type="text"
                                   :placeholder="placeholder"
                                   autocomplete="off"
                         /></label>
                    </div>
               <div class="field">
                    <div class="control">
                         <label class="label mod-label"
                              >Telefono
                              <input
                                   class="input mod-input"
                                   type="text"
                                   :placeholder="placeholder"
                                   autocomplete="off"
                         /></label>
                    </div>
               </div>
        

         
               <div class="field">
                    <div class="control mod-control">
                         <label class="label mod-label"
                              >Email
                              <input
                                   class="input mod-input"
                                   type="email"
                                   :placeholder="placeholder"
                         /></label>
                    </div>
               </div>

               <div class="field">
                    <div class="control mod-control">
                         <label class="label mod-label"
                              >DNI
                              <input
                                   class="input mod-input"
                                   type="text"
                                   :placeholder="placeholder"
                                   autocomplete="off"
                         /></label>
                    </div>
               </div>
         

         
               <div class="field">
                    <label for="birthdate" class="label mod-label"
                         >Fecha de nacimiento
                         <input
                              class="input mod-input"
                              type="date"
                              name="birthdate"
                              id="birthdate"
                    /></label>
               </div>
       
          </div>

          <button class="button is-primary mod-btn">Crear Nueva Ficha</button>
     </form>
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
.mod-box {
     background: transparent;
     box-shadow: none;
     border-radius: 0;
     padding: 1rem;
     background: #f7f7f7;
}

.logo {
     width: 155px;
}

.mod-input {
     text-align: center;
     background: #ededed;
     border: none;
     border-radius: 1.5rem;
}

.mod-input:focus {
     outline: none;
     border: none;
     box-shadow: 0 0 10px #88b6a7;
}

.mod-btn {
     background-color: #88b6a7; /*#F4AC9E;*/
     border-radius: 1.5rem;
     display: flex;
     width: 100%;
     font-weight: 700;
}

.mod-label {
     color: #527c6f;
     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
     font-weight: 400;
     position: relative;
     top: 1rem
}

.mod-icon {
     display: none;
     font-size: 1.2rem;
     color: #bccfc9;
}

.mod-link {
     color: #527c6f;
}

.mod-control {
     margin: 1rem auto;
}

@media only screen and (min-width: 768px) {
     .container {
          display: flex;
          justify-content: space-evenly;
     }
}
</style>
