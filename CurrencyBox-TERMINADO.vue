<template>
     <div>
          <input
               class="o-input"
               type="text"
               @blur="main"
               @focus="setFocuValue"
               :placeholder="placeholder"
               v-model="amount"
          />
     </div>
</template>

<script>
export default {
     name: "CurrencyBox",
     data() {
          return {
               amount: "",
               placeholder: "your currency amount here",
               focuValue: "",
          };
     },
     computed: {},

     props: {
          config: Object,
          culture: {
               type: String,
               default: "es-ES",
          },
     },
     methods: {
          main() {
               this.focuValue = this.amount;

               if (this.amount === null || this.amount === "") {
                    this.amount = "0.00";
               }

               this.removeLettersAndWhitespaces();
               this.loadData();

               console.log("[DATA] ::> Result Obj from main::::", this.result);
          },

          setFocuValue() {
               this.amount = this.focuValue;
          },

          loadData() {
               if (this.amount.match(/(,|\.)\d{1,}$/g)) {
                    this.amount = this.amount.replace(",", ".");
               }
               console.log("[IN] ::> AMOUNT FROM LOAD DATA ", this.amount);
               this.amount.replace(",", ".");
               this.amount = this.getCurrencyObject(parseFloat(this.amount));
          },

          removeLettersAndWhitespaces() {
               this.amount = this.amount
                    .match(/(\d+)?(,|.)?(\d)/g, "")
                    .join("");
          },

          getCurrencyObject(amount) {
               let currencyData = new Intl.NumberFormat(
                    this.culture,
                    this.config
               ).format(amount);

               return currencyData;
          },
     },
};
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
     -webkit-appearance: none;
     margin: 0;
}

input[type="number"] {
     -moz-appearance: textfield;
     height: 1.5rem;
}
</style>
