import BaseModel from './BaseModel';

export default class Fruit extends BaseModel {
  // Getters
  // eslint-disable-next-line class-methods-use-this
  get defaults() {
    return {
      name: 'Apple',
      eaten: false,
    };
  }

  get isEaten() {
    return this.eaten;
  }

  // Methods
  eat() {
    this.eaten = true;
  }
}
