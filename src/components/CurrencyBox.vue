<template>
     <div>
          <input
               class="o-input"
               type="text"
               v-model="amount"
               :placeholder="placeholder"
               @keyup="removeLettersAndWhitespaces"
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
               amount: "",
               placeholder: "0.00",
               focusValue: "",
               currencySign: "",
          };
     },

     props: {
          config: Object,
          culture: String,
     },

     methods: {
          main(e) {
               this.focusValue = this.amount;

               if (this.amount === null || this.amount === "") {
                    this.amount = "0.00";
               }

               this.amountFormatted();
          },

          getCurrencySign() {
               let currencyData = new Intl.NumberFormat(
                    this.culture,
                    this.config
               ).formatToParts(this.amount);

               let signObj = currencyData.find(
                    (currencySign) => currencySign.type === "currency"
               );

               this.placeholder = this.amount + signObj.value;
               console.log("FOCUS VALUE ::>", this.placeholder);
          },

          setFocusValue() {
               this.amount = this.focusValue;
          },

          formatInputValue() {
               this.amount = Number(this.amount.slice(0, -1).replace(",", "."))
                    .toFixed(2)
                    .toString();
          },

          amountFormatted() {
               if (this.amount.match(/(,|\.)\d{1,}$/g)) {
                    this.amount = this.amount.replace(",", ".");
               }

               this.amount.replace(",", ".");

               this.amount = this.currencyFormatter(parseFloat(this.amount));
          },

          removeLettersAndWhitespaces() {
               this.amount = this.amount.replace(/[a-z\sA-Z]+/g, "");
               this.amount = this.amount.replace(
                    /[`~!@#$%^&*()_|+\=?;:'"·¬?¿¡¨´ºª<>ñ\{\}\[\]\\\/]/g,
                    ""
               );
          },

          currencyFormatter(amount) {
               let currencyData = new Intl.NumberFormat(
                    this.culture,
                    this.config
               ).format(amount);

               let currencyHasMinusSign = currencyData.split("");
               currencyHasMinusSign.join("").slice(0, -1).split("")[1];

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
input {
     height: 2.5rem;
     font-size: 2rem;
     border-radius: 0.25rem;
}
</style>
