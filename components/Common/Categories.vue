<template>
  <!-- Список катерорий -->
  <nav :class="$style.wrapper">
    <!-- Катерогии -->
    <nuxt-link
      v-for="(item, index) in getProductsCategories"
      :to="'/categories/' + item.id"
      :class="$style.category"
      :active-class="$style.active"
      :key="index"
    >
      {{ item.name }}
    </nuxt-link>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getProductsCategories: "product/getProductsCategories"
    })
  },
  methods: {
    ...mapActions({
      fetchProductCategories: "product/fetchProductCategories"
    })
  },
  async fetch() {
    // Загружаем категории
    await this.fetchProductCategories();
  }
};
</script>

<style module lang="scss">
.wrapper {
  min-width: 140px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 1000px), (max-width: 470px) {
    display: inline-block;
    margin-right: 16px;
  }
}

.category {
  display: block;
  line-height: 21px;
  margin-bottom: 16px;
  color: $gray-light;
  text-decoration: none;
  &:hover {
    color: $gray;
  }
}

.active {
  text-decoration: underline;
  color: $black;
}
</style>
