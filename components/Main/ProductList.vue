<template>
  <div :class="$style.product__list">
    <!-- Пока не загрузятся продукты, будет показан loader -->
    <template v-if="loader">
      <Loader />
    </template>

    <!-- Список продуктов -->
    <template v-else>
      <Product v-for="(item, index) in getProducts" :key="index" :item="item" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: ["id"],

  data: () => ({
    loader: true,
    products: [],
    productId: 1
  }),
  computed: {
    ...mapGetters({
      getProducts: "product/getProducts"
    })
  },
  methods: {
    ...mapActions({
      fetchProduct: "product/fetchProduct"
    }),
    ...mapMutations({
      SORT_PRODUCTS: "product/SORT_PRODUCTS"
    })
  },
  async mounted() {
    await this.fetchProduct(this.id); // Зазрузка продуктов по id

    this.SORT_PRODUCTS(); // После загрузки продуктов, сразу их сортируем

    this.loader = false; // Потом переключаем компонент loader, на список продуктов
  }
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
