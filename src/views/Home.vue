<template>
     <div class="home">
          <img alt="Vue logo" src="../assets/logo.png" />
          <CurrencyBox
               :config="config"
               :culture="culture"
               :amount="currencyAmount"
          />
     </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CurrencyBox from "@/components/CurrencyBox.vue";

export default {
     name: "Home",
     components: {
          HelloWorld,
          CurrencyBox,
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
               currencyAmount: "",
               culture: "es-ES",
          };
     },
};
</script>
<style scoped></style>
