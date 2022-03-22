import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/*Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

const baseURL = `http://localhost:3002`;
axios.defaults.baseURL = baseURL;*/

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: function (h) {
		return h(App);
	},
}).$mount("#app");
