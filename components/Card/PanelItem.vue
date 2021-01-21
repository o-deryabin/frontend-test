<template>
  <!-- Компонент элемента продукта в корзине -->
  <div :class="[$style.panel__item, $style.item]">
    <!-- Картинка продкута-->
    <img
      :src="'https://frontend-test.idaproject.com' + item.photo"
      :class="$style.item__image"
      alt=""
    />
    <!-- Текст компонента-->
    <div :class="$style.item__text">
      <!-- Имя продкута -->
      <div :class="$style.item__name">{{ item.name }}</div>

      <!-- Цена продкута -->
      <div :class="$style.item__price">{{ item.price }} ₽</div>

      <!-- Рейтинг продкута -->
      <Rating :class="$style.item__rating" :rating="item.rating" />

      <!-- Кнопка удаления продукта из корзины -->
    </div>
    <div :class="$style.item__delete" @click="deleteItem(item.id)">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 10C6 9.44772 6.44772 9 7 9H25C25.5523 9 26 9.44772 26 10C26 10.5523 25.5523 11 25 11H7C6.44772 11 6 10.5523 6 10Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289C13.1054 7.48043 13 7.73478 13 8V9H19V8C19 7.73478 18.8946 7.48043 18.7071 7.29289C18.5196 7.10536 18.2652 7 18 7H14ZM21 9V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H14C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V9H9C8.44772 9 8 9.44772 8 10V24C8 24.7957 8.31607 25.5587 8.87868 26.1213C9.44129 26.6839 10.2043 27 11 27H21C21.7957 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V10C24 9.44772 23.5523 9 23 9H21ZM10 11V24C10 24.2652 10.1054 24.5196 10.2929 24.7071C10.4804 24.8946 10.7348 25 11 25H21C21.2652 25 21.5196 24.8946 21.7071 24.7071C21.8946 24.5196 22 24.2652 22 24V11H10Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 14C14.5523 14 15 14.4477 15 15V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V15C13 14.4477 13.4477 14 14 14Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 14C18.5523 14 19 14.4477 19 15V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V15C17 14.4477 17.4477 14 18 14Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["item"],
  methods: {
    ...mapMutations({
      DELETE_CARD_ITEM: "card/DELETE_CARD_ITEM"
    }),
    // Удаления продукта из корзины
    deleteItem(id) {
      this.DELETE_CARD_ITEM(id);
    }
  }
};
</script>

<style module lang="scss">
@import "~/assets/scss/extends.scss";

.item {
  width: 100%;
  height: 120px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-top: 12px;
  padding: 10px 15px;
  box-sizing: border-box;

  @extend %flex-space-between;
  @media (min-width: 460px) {
    padding: 15px 25px;
    font-size: 12px;
    line-height: 16px;
  }
  &:first-child {
    margin-top: 16px;
  }
  &:last-child {
    margin-bottom: 16px;
  }
  &__image {
    width: 70px;
    height: 90px;
    object-fit: cover;
  }

  &__text {
    width: 100%;
    max-width: 170px;
    align-self: flex-start;
    position: relative;
    height: 100%;
    font-size: 12px;
    line-height: 16px;
    @media (min-width: 460px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__name {
    color: $gray;
  }
  &__price {
    font-weight: bold;
    color: $black;
    margin-top: 6px;
  }
  &__rating {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__delete {
    svg {
      fill: $gray-light;
      &:hover {
        fill: $black;
      }
    }
  }
}
</style>
