<template>
     <div class="login">
          <form class="box mod-box">
               <div class="field">
                    <img
                         class="logo animate__animated animate__pulse"
                         src="../assets/beils-white.png"
                         alt="Logo Beils Beauty Bar"
                    />
               </div>
               <div class="field width-xs">
                    <label class="label mod-label">email</label>
                    <div class="control has-icons-left">
                         <input
                              class="input mod-input"
                              type="email"
                              :placeholder="placeholder"
                         />
                         <span class="icon is-small is-left">
                              <i class="fas fa-user mod-icon"></i>
                         </span>
                    </div>
               </div>

               <div class="field">
                    <label class="label mod-label">password</label>
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
     background: transparent;
     border-right: 0;
     border-left: 0;
     border-top: 0;
     border-bottom: 2px solid white;
     border-radius: 1rem;
}

.mod-btn {
     background-color: rgba(255, 75, 30, 0.904) !important;
     border-radius: 1rem;
}

.mod-label {
     color: #ecf8ef;
     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
     font-weight: 400;
}

.mod-icon {
     color: rgb(48, 78, 61);
}

@media only screen and (min-width: 1024px) {
     .mod-box {
          width: 512px;
     }
}
</style>
