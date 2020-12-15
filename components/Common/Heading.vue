<template>
  <div :class="$style.heading">
    <!-- Заголовок -->
    <div :class="$style.heading__title">Каталог</div>

    <!-- Сортировка -->
    <div :class="$style.heading__sort">
      Сортировать по:
      <span @click="menu = true">
        {{ sortValue }}
        <svg
          width="5"
          height="3"
          viewBox="0 0 5 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D" />
        </svg>
      </span>
      <transition name="menu">
        <div v-if="menu" :class="$style.heading__menu">
          <div @click="sortProduct(1)">По цене</div>
          <div @click="sortProduct(2)">По популярности</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    menu: false,
    sortValue: "цене",
    sort: {
      1: {
        name: "цене",
        value: "price"
      },
      2: {
        name: "популярности",
        value: "rating"
      }
    }
  }),
  methods: {
    ...mapMutations({
      SORT_PRODUCTS: "product/SORT_PRODUCTS"
    }),

    // Сорторовка продуктов
    sortProduct(value) {
      // Закрываем меню
      this.menu = false;

      // Изменяем критерий сортировки в верстке
      this.sortValue = this.sort[value].name;

      // Сортируем продукты
      this.SORT_PRODUCTS(this.sort[value].value);
    }
  },
  mounted() {}
};
</script>

<style module lang="scss">
@import "~/assets/scss/extends.scss";

.heading {
  padding: 30px 0 25px;
  @extend %flex-space-between;
  @media (max-width: 470px) {
    display: block;
    padding-bottom: 15px;
  }
  &__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: $black;
  }
  &__sort {
    color: $black;
    line-height: 21px;
    position: relative;
    span {
      color: $gray;
      cursor: pointer;
      margin-right: 9px;
      svg {
        margin-bottom: 3px;
      }
    }
  }
  &__menu {
    position: absolute;
    left: 0;
    right: 0;
    top: 26px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 8px 0;
    z-index: 5;
    div {
      padding: 4px 12px;
      color: $gray;
      transition: 0.2s;
      font-size: 14px;
      line-height: 18px;
      cursor: pointer;
      &:hover {
        background-color: $extra-gray-light;
        color: $black;
      }
    }
  }
}
</style>
