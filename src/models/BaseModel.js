import Vue from 'vue';
import VGMBaseModel from 'vue-graphql-models';

export default class BaseModel extends VGMBaseModel {
  constructor(props) {
    super(props);
    this.application = Vue.prototype.$application;
  }
}
