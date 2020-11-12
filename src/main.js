import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueCookies from 'vue-cookies';

Vue.use(VueAxios, axios);
Vue.use(VueCookies);

// set default config
Vue.$cookies.config('7d');

Vue.config.productionTip = false;

// Vue.prototype.$apiURI = "http://3.12.85.177:8442/";
Vue.prototype.$apiURI = "http://localhost:3000/";

const app = new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app;