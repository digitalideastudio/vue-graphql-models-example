<template>
  <div>
    <label>
      <input
        v-model.trim="searchQuery"
        @keyup.esc="searchQuery = ''"
      >
    </label>
    <ListItemFruit
      v-for="(fruit, index) in filteredFruits.all()"
      :fruit="fruit"
      :key="index"
    />
  </div>
</template>

<script>
import { getView } from 'vue-graphql-models';
import Fruit from '../models/Fruit';

export default {
  name: 'PageFruits',

  components: {
    ListItemAsset: getView('fruits/ListItemFruit'),
  },

  data() {
    return {
      searchQuery: '',
      fruits: Fruit.emptyCollection(),
    };
  },

  computed: {
    variables() {
      return {
        name: this.searchQuery,
      };
    },

    filteredFruits() {
      return this.searchQuery
        ? this.fruits.filter(
          a => a.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()),
        )
        : this.fruits;
    },
  },

  async created() {
    this.fruits = await Fruit.get(this.variables);
  },
};
</script>
