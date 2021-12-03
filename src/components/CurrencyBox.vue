<template>
     <div>
          <input
               class="o-input"
               v-model.number="amount"
               type="number"
               :placeholder="placeholder"
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
               initialValue: "",
               amount: null,
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
               e.target.type = "text";

               this.initialValue = this.amount;

               let result = [];
               let currencyObj = this.currencyObject(this.amount);
               currencyObj.map((currency) => result.push(currency.value));

               if (
                    currencyObj[0].value === "-" &&
                    this.config.currency !== "EUR"
               ) {
                    let [{ value: currency }] = currencyObj.filter(
                         (currency) => currency.type === "currency"
                    );

                    let [{ value: minus }] = currencyObj.filter(
                         (sign) => sign.type === "minusSign"
                    );
                    this.amount = `${currency}${minus}${result
                         .join("")
                         .slice(2, result[result.length - 1]).trim()}`;

                    console.log("[MAIN] AMOUNT NEGATIVO :::>", this.amount);
                    return this.amount;
               }

               this.amount = result.join("");
          },

          setFocus(e) {
               e.target.type = "number";
               this.amount = Number(this.initialValue).toFixed(2);
          },

          setInput(e) {
               let inputValue = e.target.value;
               inputValue = parseFloat(inputValue);
          },

          currencyObject(amount) {
               let currencyProps = new Intl.NumberFormat(
                    this.culture,
                    this.config
               ).formatToParts(amount);

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
