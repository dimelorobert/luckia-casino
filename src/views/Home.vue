<template>
     <div class="home">
          <img src="../assets/spa.jpg" alt="" srcset="">
          <h2 class="title is-2 mod-title">Nueva Ficha</h2>
          <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
          <!-- <CurrencyBox :config="config" :culture="culture" /> -->
          <!-- <Login /> -->
          <Registro />
     </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import CurrencyBox from "@/components/CurrencyBox.vue";
import Login from "@/components/Login.vue";
import Registro from "@/components/Registro.vue";

export default {
     name: "Home",
     components: {
          HelloWorld,
          CurrencyBox,
          Login,
          Registro,
     },
     data() {
          return {
               // Currency Box Config parameters
               config: {
                    currency: "EUR",
                    currencyDisplay: "symbol",
                    currencySign: "standard",
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    signDisplay: "auto",
                    style: "currency",
                    useGrouping: true,
               },
               culture: "es-ES",

               lineWidth: 3,
               lineColor: "#444",
               bgColor: "#FFF",
               resultImg: "",
               isCrop: false,
          };
     },
     methods: {},
};
</script>
<style scoped>
.home {
     display: flex;
     flex-direction: column;
     justify-content: center;
     /* background-image: url("../assets/spa.jpg");
     background-size: 412px;
     background-repeat: no-repeat; */
     background: #f7f7f7;
     width: 100%;
     height: 100vh;
} 
.mod-title {
    position: relative;
    bottom: 1.5rem;
    text-align: center;
}
</style>
