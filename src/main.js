import Vue from 'vue';
import VueGraphqlModels from 'vue-graphql-models';
import store from '@/store';
import router from '@/router';
import App from './App';
import { createProvider, cachePersistor } from './vue-apollo';

Vue.config.productionTip = false;
Vue.use(VueGraphqlModels, {
  cachePersistor,
  gqlLoader(path) {
    return import(/* webpackChunkName: "gql/[request]" */ `@/graphql/${path}.graphql`);
  },
  dataLoader(path) {
    return import(/* webpackChunkName: "data/[request]" */ `@/data/${path}.json`);
  },
  modelLoader(path) {
    return import(/* webpackChunkName: "models/[request]" */ `@/models/${path}`);
  },
});

export default new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
