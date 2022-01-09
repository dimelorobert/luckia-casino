<template>
     <div class="login">
          <form class="box mod-box">
               <div class="field">
                    <img
                         class="logo animate__animated animate__pulse"
                         src="../assets/beils-green.png"
                         alt="Logo Beils Beauty Bar"
                         preload="lazy"
                    />
               </div>
               <div class="field width-xs">
                    <label class="label mod-label">Email</label>
                    <div class="control has-icons-left">
                         <input
                              class="input mod-input"
                              type="email"
                              :placeholder="placeholder"
                         />
                         <p class="icon is-small is-left mod-icon-cont">
                              <i class="fas fa-user mod-icon"></i>
                         </p>
                    </div>
               </div>

               <div class="field">
                    <label class="label mod-label">Password</label>
                    <div class="control has-icons-left">
                         <input
                              class="input mod-input"
                              type="password"
                              :placeholder="placeholder"
                         />
                         <span class="icon is-small is-left">
                              <i class="fas fa-key mod-icon"></i>
                         </span>
                    </div>
               </div>
               <a href="#" class="nav-link mod-link"><span class="icon"><i class="fas fa-question-circle"></i></span>¿Olvidaste la contraseña?</a>
               
                    <button
                    class="
                         button
                         is-primary
                         animate__animated animate__pulse
                         mod-btn
                    "
               >
                    Iniciar sesión
               </button>
             
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
.login {
     margin-bottom: 3rem;
}

.mod-box {
     box-shadow: none;
     background: transparent;
     border-radius: 0;
}

.logo {
     width: 155px;
}


.mod-input {
     background: #ededed;
     border: none;
     border-radius: 1.5rem;
}

.mod-input:focus {
     padding-left: 2.5rem;
    outline: none;
    border:none;
    box-shadow: 0 0 10px #88b6a7;
}

.mod-icon-cont{
     display: flex;
     justify-content: center;
     align-items: center;
     height: fit-content;
}

.mod-btn {
     background-color: #88b6a7;/*#F4AC9E;*/
     border-radius: 1.5rem;
     display: flex;
     width: 100%;
     font-weight: 700;
     margin-top: 1rem;
}

.mod-label {
     color: #527c6f;
     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
     font-weight: 400;
}

.mod-icon {
     display: none;
     font-size: 1.2rem;
     color: #BCCFC9;
}

.mod-link {
     color: #527c6f;
}


@media only screen and (min-width: 768px) {
     .mod-box {
          width: 512px;
     }

     .mod-input {
               height: 3rem;
     }

     .mod-icon {
          display: block;

     }
}
</style>
