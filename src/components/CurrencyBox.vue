<template>
     <div>
          <input
               class="o-input"
               type="text"
               v-model="amount"
               :placeholder="placeholder"
               @focus="setFocusValue"
               @blur="main"
          />
     </div>
</template>

<script>
export default {
     name: "CurrencyBox",

     data() {
          return {
               initialValue: "",
               amount: "",
               placeholder: "",
          };
     },
     watch: {
          amount() {
               this.amount = this.amount.replace(/[a-z\sA-Z]+/g, "");
               this.amount = this.amount.replace(
                    /[`~!@#$%^&*()_|+\=?;:'"·¬?¿¡¨´ºª<>ñ\{\}\[\]\\\/]/g,
                    ""
               );
          },
     },

     props: {
          config: Object,
          culture: String,
     },

     methods: {
          main() {
               this.initialValue = this.amount;
               if (this.amount === "") this.amount = "0.00";
               this.currencyToFloat();
               this.resultFormatted();
          },

          currencyObject() {
               let currencyProps = new Intl.NumberFormat(
                    this.culture,
                    this.config
               ).formatToParts(this.amount);

               console.log("CURRENCY PROPS::>> ", currencyProps);

               return currencyProps;
          },

          resultFormatted() {
               let result = [];
               this.currencyObject().map((currency) =>
                    result.push(currency.value)
               );
               this.amount = result.join("");
               console.log("RESULT FORMATTED::>", result.join(""));
          },

          setFocusValue() {
               this.amount = this.initialValue;
          },

          currencyToFloat() {
               this.amount = this.amount.replace(",", ".");
               this.amount = parseFloat(this.amount);
               console.log(
                    "FORMATEADO A FLOAT::>",
                    typeof this.amount,
                    this.amount
               );
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
     height: 3rem;
}
input {
     height: 3rem;
     font-size: 2rem;
     border-radius: 0.25rem;
}
</style>
