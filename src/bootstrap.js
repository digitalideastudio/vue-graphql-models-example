import Vue from 'vue';
import { Application, Config as BaseConfig } from 'vue-graphql-models';

class Config extends BaseConfig {
  gqlImporter = path => import(/* webpackChunkName: "gql/[request]" */ `@/graphql/${path}.graphql`);
  dataImporter = path => import(/* webpackChunkName: "data/[request]" */ `@/data/${path}.json`);
  modelImporter = path => import(/* webpackChunkName: "models/[request]" */ `@/models/${path}`);
  viewImporter = path => import(/* webpackChunkName: "views/[request]" */ `@/components/${path}.vue`);

  constructor(vue) {
    super();
    this.vue = vue;
    this.vuex = vue.$store;
    this.apollo = vue.$apollo;
  }
}

function bootstrapApp(vue) {
  const $application = new Application(new Config(vue));
  Object.assign(Vue.prototype, { $application });
  return $application;
}

export default vue => bootstrapApp(vue);
