<template>
  <div>
    <!-- Заголоавок и панель сортировки -->
    <Heading />

    <div :class="$style.content">
      <!-- Переключение между категориями -->
      <Categories @sortValue="value => (sortValue = value)" />

      <!-- Пока не загрузятся продукты, будет показан loader -->
      <template v-if="loader">
        <Loader />
      </template>

      <!-- Сиписок продуктов -->
      <template v-else>
        <ProductList :products="products" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    loader: true,
    sortValue: "price"
  }),
  computed: {
    ...mapGetters({
      products: "product/sortProducts"
    })
  },
  methods: {
    ...mapActions({
      fetchProduct: "product/fetchProduct"
    }),
    format(value, pattern) {
      var i = 0,
        v = value.toString();
      return pattern.replace(/#/g, _ => v[i++]);
    }
  },
  async fetch() {
    await this.fetchProduct(this.$route.params.id); // Зазрузка продуктов по id

    this.loader = false; // Потом переключаем компонент loader на список продуктов
  }
};
</script>

<style module lang="scss">
.content {
  @media (min-width: 1000px) {
    display: flex;
  }
}
</style>
