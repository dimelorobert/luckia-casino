<template>
     <div>
          <input
               class="o-input"
               v-model.number="amount"
               type="number"
               :placeholder="placeholder"
               @input="setInput"
               @focus="setFocus"
               @blur="main"
               autocomplete="off"
          />
     </div>
</template>

<script>
export default {
     name: "CurrencyBox",

     data() {
          return {
               initialValue: null,
               amount: 0,
               placeholder: "",
          };
     },

     props: {
          config: Object,
          culture: String,
     },

     watch: {
          // new = Number , old = String
          amount(newAmount, oldAmount) {
               console.log(
                    "1- [WATCH] lo detecta el evento @focus AMOUNT:::>",
                    typeof newAmount,
                    newAmount
               );
          },
     },

     methods: {
          main(e) {
               console.log(
                    "[MAIN] evento: INPUT VALUE:::>",
                    typeof e.target.value,
                    e.target.type
               );
               this.initialValue = this.amount;
               let result = [];

               this.currencyObject(this.amount).map((currency) =>
                    result.push(currency.value)
               );
               e.target.type = "text";
               this.amount = result.join("");
               console.log("[MAIN] RESULT:::>", result.join(""), this.amount);
          },

          setFocus(e) {
               console.log("set focus value", e.target.value);
               // initValue = null
               this.amount = this.initialValue;
               if (!e.target.value.length <= 0) {
                    this.amount = e.target.value.slice(0, -2);
               }
          },

          setInput(e) {
               let inputValue = e.target.value;
               let r = (inputValue = parseFloat(inputValue));

               console.log(
                    "2- [SET INPUT] lo detecta el evento @input: INPUT VALUE:::>",
                    typeof inputValue,
                    inputValue,
                    typeof r,
                    r
               );
          },

          currencyObject(amount) {
               let currencyProps = new Intl.NumberFormat(
                    this.culture,
                    this.config
               ).formatToParts(amount);

               console.log("3- CURRENCY PROPS::>> ", currencyProps);

               return currencyProps;
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
