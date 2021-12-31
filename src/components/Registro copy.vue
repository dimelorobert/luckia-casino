<template>
     <div class="registro">
          <form class="box">
               <img
                    class="logo"
                    src="../assets/beils.png"
                    alt="Logo Beils Beauty Bar"
               />
               <img
                    class="logo"
                    src="../assets/indiba.png"
                    alt="Logo Beils Beauty Bar"
               />
               
               <span class="subtitle is-5">Nueva ficha de cliente</span>
               <br />
               <div class="field space">
                    <div class="control separator">
                         <label class="label">Nombre</label>
                         <input
                              class="input"
                              type="text"
                              :placeholder="placeholder"
                         />
                    </div>
                    <div class="control separator">
                         <label class="label">Apellidos</label>
                         <input
                              class="input"
                              type="text"
                              :placeholder="placeholder"
                         />
                    </div>
               </div>
               <div class="field space">
                    <div class="control separator">
                         <label class="label">Dirección</label>
                         <input
                              class="input"
                              type="text"
                              :placeholder="placeholder"
                         />
                    </div>
                    <div class="control separator">
                         <label class="label">Telefono</label>
                         <input
                              class="input"
                              type="text"
                              :placeholder="placeholder"
                         />
                    </div>
               </div>
               <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                         <input
                              class="input"
                              type="email"
                              :placeholder="placeholder"
                         />
                    </div>
               </div>
               <br />
               <div class="control">
                    <label class="radio">
                         <input type="radio" name="answer" />
                         D.N.I
                    </label>
                    <label class="radio">
                         <input type="radio" name="answer" />
                         Permiso Residencia
                    </label>
                    <label class="radio">
                         <input type="radio" name="answer" />
                         Pasaporte
                    </label>
               </div>
               <br />
               <div class="field">
                    <label class="label">Numero Documento</label>
                    <div class="control">
                         <input
                              class="input"
                              type="text"
                              :placeholder="placeholder"
                         />
                    </div>
               </div>
               <div class="file has-name is-right">
                    <label class="file-label">
                         <input class="file-input" type="file" name="resume" />
                         <span class="file-cta">
                              <span class="file-icon">
                                   <i class="fas fa-upload"></i>
                              </span>
                              <span class="file-label"> Foto Documento </span>
                         </span>
                         <span class="file-name">
                              Screen Shot 2017-07-29 at 15.54.25.png
                         </span>
                    </label>
               </div>
               <br />
               <div class="file has-name is-right">
                    <label class="file-label">
                         <input class="file-input" type="file" name="resume" />
                         <span class="file-cta">
                              <span class="file-icon">
                                   <i class="fas fa-upload"></i>
                              </span>
                              <span class="file-label"> Foto Cliente </span>
                         </span>
                         <span class="file-name"> Filename-2345643.png </span>
                    </label>
               </div>
               <br />
               <button class="button is-primary">Crear Ficha</button>
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
.title {
     margin: 0 0 .5rem 0;
}
.logo {
     width: 125px;
     transform: rotate(7deg);
}
img.logo:nth-child(2) {
     display: block;
     margin: 0 auto;
     transform: rotate(0deg);
}

.separator {
     display: inline-flex;
     flex-direction: column;
     
}

.space {
     display: flex;
     justify-content: space-between;
}
</style>
