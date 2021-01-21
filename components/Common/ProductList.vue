<template>
  <div :class="$style.product__list">
    <Product v-for="(item, index) in products" :key="index" :item="item" />
  </div>
</template>

<script>
export default {
  props: ["products"]
};
</script>

<style module lang="scss">
.product {
  &__list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
    grid-gap: 16px;
  }
}
</style>
