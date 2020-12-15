<template>
  <!-- Список катерорий -->
  <nav :class="$style.category__wrapper">
    <!-- Катерогии -->
    <div
      :class="[
        $style.category,
        item.id === categoryId ? $style.category__active : ''
      ]"
      v-for="(item, index) in getProductsCategories"
      :key="index"
      @click.prevent="updateCategoryId(item.id)"
    >
      {{ item.name }}
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({ categoryId: 1 }),
  computed: {
    ...mapGetters({
      getProductsCategories: "product/getProductsCategories"
    })
  },
  methods: {
    ...mapActions({
      fetchProductCategories: "product/fetchProductCategories"
    }),
    // Редирект
    updateCategoryId(id) {
      // Меням класс active в navbar
      this.categoryId = id;

      // Редирект на нужную  страницу по id
      if (id === 1) {
        return this.$router.push("/backpack");
      }

      if (id === 2) {
        return this.$router.push("/messenger-bags");
      }

      if (id === 3) {
        return this.$router.push("/business-bags");
      }
    }
  },
  async mounted() {
    // Загружаем категории
    await this.fetchProductCategories();
  }
};
</script>

<style module lang="scss">
.category {
  line-height: 21px;
  margin-bottom: 16px;
  color: $gray-light;
  cursor: pointer;
  @media (max-width: 470px) {
    margin-bottom: 6px;
  }
  &__wrapper {
    min-width: 140px;
    display: flex;
    justify-content: space-around;
    @media (min-width: 1000px), (max-width: 470px) {
      display: inline-block;
      margin-right: 16px;
    }
  }
  &:hover {
    color: $gray;
  }
  &__active {
    text-decoration: underline;
    color: $black;
  }
}
</style>
