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
               amount: "0.00",
               placeholder: "",
          };
     },

     props: {
          config: Object,
          culture: String,
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

     methods: {
          main(e) {
               this.initialValue = this.amount;
               if (this.amount === "") this.amount = "0.00";
               this.currencyToFloat();
               this.amount = this.resultFormatted().sign;

               this.amount;
          },

          setFocusValue() {
               this.amount = this.initialValue;
          },

          currencyToFloat() {
               this.amount = this.amount.replace(",", ".");
               this.amount = parseFloat(this.amount);
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
               let resultNoSign = [];

               // Sign
               this.currencyObject().map((currency) => {
                    result.push(currency.value);
               });

               // No sign
               this.currencyObject().filter((currency) => {
                    if (currency.type !== "currency")
                         resultNoSign.push(currency.value);
               });

               let resulStorage = {
                    sign: (this.amount = result.join("")),
                    noSign: (this.amount = resultNoSign.join("")),
               };

               console.log(
                    "RESULT FORMATTED::>",
                    resulStorage.sign,
                    resulStorage.noSign
               );
               return resulStorage;
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
