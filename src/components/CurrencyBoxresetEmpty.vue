<template>
     <div>
          <input
               class="o-input"
               v-model="setInput"
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
               placeholder: "0.00",
          };
     },

     props: {
          config: Object,
          culture: String,
     },
     watch: {
          setInput(newValue, oldValue) {
               console.log("new", newValue, "old", oldValue)
          }
     },
     methods: {
          main(e) {
               console.log(
                    "TARGET VALUE :::>",
                    e.target.value,
                    typeof e.target.value,
                    this.amount,
                    typeof this.amount
               );

               let result = [];
               let currencyObj = this.currencyObject(this.amount);

               console.log("CURRENCY OBJ::>", currencyObj);
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
                         .slice(2, result[result.length - 1])
                         .trim()}`;

                    return this.amount;
               }

               this.amount = result.join("");
          },

          amountNoFormatted(e) {
               // avoid make a replace(",", ".")
               e.target.type = "text";
               this.amount = e.target.value;
               return this.amount.replace(",", ".");
          },

          setFocus(e) {
               this.placeholder = "";
               this.amount = e.target.value;
               console.log("FOCUS :::>", this.amount);
               return this.amount;
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

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
     -webkit-appearance: none;
     margin: 0;
}

input[type="number"] {
     -moz-appearance: textfield;
}
</style>
