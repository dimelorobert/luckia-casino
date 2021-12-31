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
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                         <input
                              class="input"
                              type="email"
                              :placeholder="placeholder"
                         />
                         <span class="icon is-small is-left">
                              <i class="fas fa-user"></i>

                         </span>
                    </div>
               </div>

               <div class="field">
                    <label class="label">Password</label>
                    <div class="control has-icons-left">
                         <input
                              class="input"
                              type="password"
                              :placeholder="placeholder"
                         />
                         <span class="icon is-small is-left">
                              <i class="fas fa-key"></i>
                              
                         </span>
                    </div>
               </div>

               <button
                    class="
                         button
                         is-primary
                         animate__animated animate__pulse
                         mod-btn-color
                    "
               >
                    Iniciar Sesión
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
@media only screen and (max-width: 767px) {
     .login {
          margin-bottom: 3rem;
     }
     .logo {
          width: 155px;
     }

     .mod-box {
          box-shadow: none;
          border-radius: 0;
          background: transparent;
     }
     .width-xs {
          width: calc(100vw - 3rem - 3rem);
     }

     .mod-btn-color {
          background-color: rgba(255, 75, 30, 0.904) !important;
     }
}
</style>
