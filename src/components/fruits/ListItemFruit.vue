<template>
  <router-link :to="fruit.routerPath">
    <span>Name: {{ fruit.name }}</span>
    <span>Color: {{ fruit.color }}</span>
  </router-link>
</template>

<script>
import Fruit from '../../models/Fruit';

export default {
  name: 'FruitListItem',

  props: {
    fruit: {
      type: Fruit,
      required: true,
      default: () => Fruit.empty(),
    },
  },
};
</script>
