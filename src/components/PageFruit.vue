<template>
  <div class="fruit">
    <div>Name: {{ fruit.name }}</div>
    <span>Color: {{ fruit.color }}</span>
    <span>Is Tasty: {{ fruit.isTasty }}</span>
    <span>Is Tropic: {{ fruit.isTropic }}</span>
    <div>Eaten: {{ fruit.isEaten }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageFruit',
};
</script>
