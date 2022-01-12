<template>
     <div class="home">
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
     /* background-image: url("../assets/beils-pattern.png"); 
     background-size: 450px;*/
     opacity: 40%;
     background-repeat: repeat;
     height: 100vh;
}
</style>
