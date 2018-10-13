import { BaseModel as VGMBaseModel } from 'vue-graphql-models';

export default class BaseModel extends VGMBaseModel {
  gqlLoader = path => import(/* webpackChunkName: "gql/[request]" */ `@/graphql/${path}.graphql`);
  dataLoader = path => import(/* webpackChunkName: "data/[request]" */ `@/data/${path}.json`);
  modelLoader = path => import(/* webpackChunkName: "models/[request]" */ `@/models/${path}`);
}
