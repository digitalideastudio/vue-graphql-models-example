<template>
  <div>
    <label>
      <input
        v-model.trim="searchQuery"
        autofocus
        placeholder="Search by fruit name"
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
import Fruit from '../models/Fruit';

export default {
  name: 'PageFruits',

  components: {
    ListItemFruit: () => import('./fruits/ListItemFruit'),
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

<style lang="stylus" scoped>
  input
    display block
    width calc(100% - 20px)
    padding 10px
    font-size 16px
    margin-bottom 20px
</style>
