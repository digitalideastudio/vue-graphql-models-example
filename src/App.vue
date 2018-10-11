<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import bootstrap from './bootstrap';

export default {
  name: 'App',

  created() {
    bootstrap(this);
  },
};
</script>

<style lang="stylus">
  body
    padding 0
    margin 0
    overflow hidden
    font-family 'Roboto'

  #app
    background-color #f1f6ff
    height 100vh
    padding: 15px
</style>
