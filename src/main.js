import VeeValidate from 'vee-validate';
import Vue from 'vue';
import router from './routes';
import Main from './layouts/Main.vue';

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Main)
}).$mount('#app');
