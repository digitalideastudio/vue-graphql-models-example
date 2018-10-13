import Vue from 'vue';
import VueGraphqlModels from 'vue-graphql-models';
import store from '@/store';
import router from '@/router';
import App from './App';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;
Vue.use(VueGraphqlModels);

export default new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
