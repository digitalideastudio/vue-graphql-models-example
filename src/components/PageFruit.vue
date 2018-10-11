<template>
  <div class="fruit">
    <div>Name: {{ fruit.name }}</div>
    <div>Color: {{ fruit.color }}</div>
    <div>Is Tasty: {{ fruit.isTasty }}</div>
    <div>Is Tropic: {{ fruit.isTropic }}</div>
    <div>Eaten: {{ fruit.isEaten }}</div>
  </div>
</template>

<script>
import Fruit from '../models/Fruit';

export default {
  name: 'PageFruit',

  data: () => ({
    fruit: Fruit.empty(),
  }),

  async created() {
    this.fruit = await Fruit.find({ _key: this.$route.params.key });
  },
};
</script>
