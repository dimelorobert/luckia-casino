<template>
     <div class="home">
          <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
          <!-- <CurrencyBox :config="config" :culture="culture" /> -->
          <Login />
          <!-- <Registro /> -->
          
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
                    currency: "JPY",
                    currencyDisplay: "symbol",
                    currencySign: "standard",
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    signDisplay: "auto",
                    style: "currency",
                    useGrouping: true,
               },
               culture: "ja-JP",

               lineWidth: 3,
               lineColor: "#444",
               bgColor: "#FFF",
               resultImg: "",
               isCrop: false,
          };
     },
     methods: {
     }
};
</script>
<style scoped>
.home {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 100vh;
     background-color: rgb(171, 212, 199);
}
</style>
