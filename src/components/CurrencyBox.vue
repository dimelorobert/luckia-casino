<template>
     <div>
          <input
               class="o-input"
               v-model.number="amount"
               :placeholder="placeholder"
               @focus="rawAmount"
               @blur="formatAmount"
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
               amount: null,
               placeholder: "0.00",
          };
     },

     props: {
          config: Object,
          culture: String,
     },
     methods: {
          formatAmount(e) {
               e.target.type = "text";
               this.initialValue = this.amount;
               let result = [],
                    exPos = 1;
               let currencyObj = this.formatterCall();
               currencyObj.map(({ value }) => result.push(value));
               let [{ value: currency }] = currencyObj.filter(
                    (currency) => currency.type === "currency"
               );
               if (result[exPos] != currency) {
                    this.amount = result.join("");
                    return;
               }
               this.amount = `${currency}${result
                    .join("")
                    .replace(currency, "")}`;
          },

          rawAmount(e) {
               e.target.type = "number";
               this.amount = this.initialValue
                    ? Number(this.initialValue).toFixed(2)
                    : (this.amount = null);
          },
          formatterCall() {
               return new Intl.NumberFormat(
                    this.culture,
                    this.config
               ).formatToParts(this.amount);
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
}
input {
     height: 3rem;
     font-size: 2rem;
     border-radius: 0.25rem;
}
</style>
