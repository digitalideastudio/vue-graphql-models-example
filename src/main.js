import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import App from './App';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
