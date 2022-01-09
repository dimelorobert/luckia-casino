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
    return {

    }
  },
  
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
@import '../node_modules/bulma/sass/utilities/_all.sass';

* {
     box-sizing: border-box;
      -ms-overflow-style: none;

  scrollbar-width: none;
}
*::-webkit-scrollbar {

  display: none;

}

body{
     position: relative;
     height: 100vh;
     /* overflow: hidden; */
     scroll-behavior: smooth;
}

#app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     height: 100%;
     background-color: #f7f7f7;
} 

#nav {
     padding: 30px;
}

#nav a {
     font-weight: bold;
     color: #2c3e50;
}

#nav a.router-link-exact-active {
     color: #42b983;
}
</style>
