<template>
  <div class="list-item-fruit">
    <router-link :to="fruit.routerPath">
      <span>{{ fruit.name }}</span>
    </router-link>
  </div>
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

<style lang="stylus"
       scoped>
  .list-item-fruit
    a
      color #041679
      font-size 16px
      border 1px solid #ccc
      width calc(100% - 10px)
      display block
      padding 10px 5px
      margin-top 10px
      text-decoration none
      background-color #c8e5ff

      &:hover
        background #ebf6ff
</style>
