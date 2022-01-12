<template>
     <div id="app">
          <!-- <div id="nav">
               <router-link to="/">Home</router-link> |
               <router-link to="/about">About</router-link>
          </div> -->
          <router-view />
     </div>
</template>
<script>
export default {
     data() {
          return {};
     },
};
</script>

<style>
/* @import "../node_modules/bulma/css/bulma.css";
@import '../node_modules/bulma/sass/utilities/_all.sass'; */
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

body {
     position: relative;
     scroll-behavior: smooth;
}

input {
   height: 1rem;
}

#app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     color: #2c3e50;
     
}

@media only screen and (min-width: 1024px) {
   * {
     box-sizing: border-box;
     scrollbar-width: none;
   }

   *::-webkit-scrollbar {
      display: none;
   }
}
</style>
