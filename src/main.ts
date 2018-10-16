import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meta from 'vue-meta';
import '../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false;

Vue.use(Meta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
