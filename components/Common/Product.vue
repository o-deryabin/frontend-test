<template>
  <!-- Компонент продукта -->
  <div :class="$style.product__item">
    <!-- Верхняя часть компонента продукта -->
    <div :class="$style.product__top">
      <!-- Рейтинг продукта-->
      <Rating :rating="item.rating" />

      <!-- Картинка продукта -->
      <img
        :class="$style.product__photo"
        :src="'https://frontend-test.idaproject.com' + item.photo"
        alt=""
      />

      <!-- Добавление в корзину -->
      <div
        :class="[
          $style.product__card,
          getCard.find(i => i.id === item.id) ? $style.product__card_active : ''
        ]"
        @click="setCard(item)"
      >
        <Card width="12" height="14" />
      </div>
    </div>

    <!-- Нижняя часть комрпонента продукта-->
    <div>
      <!-- Имя продукта -->
      <div :class="$style.product__name">{{ item.name }}</div>

      <!-- Цена продукта -->
      <div :class="$style.product__price">
        <!-- <MaskPrice :price="item.price" /> -->
        <MaskPrice :price="item.price" />
      </div>

      <!-- Сообщение об успехе или неудаче -->
      <transition name="message">
        <Message
          v-if="message.state"
          :name="message.name"
          :success="message.success"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["item"],
  data: () => ({
    message: {
      state: false,
      name: "",
      success: false
    }
  }),
  computed: {
    ...mapGetters({
      getCard: "card/getCard"
    })
  },
  methods: {
    ...mapMutations({
      SET_CARD_ITEM: "card/SET_CARD_ITEM"
    }),

    // Добавляем продукт в корзину
    setCard(item) {
      // Проверяем наличие этого продукта в корзине
      const tmp = this.getCard.find(i => i.id === item.id);

      if (!tmp) {
        // Если нет, то добавляем и выводим сообщение об успехе
        this.message = {
          state: true,
          name: item.name,
          success: true
        };

        this.SET_CARD_ITEM(item);
      } else {
        // Если есть, то выводим сообщение о неудаче
        this.message = {
          state: true,
          name: item.name
        };
      }

      // Через 2 секунды закрываем окно сообщений
      setTimeout(() => {
        this.message.state = false;
      }, 2000);
    }
  },
  mounted() {}
};
</script>

<style module lang="scss">
.product {
  &__item {
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    padding: 16px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__photo {
    width: 100px;
    object-fit: cover;
    @media (min-width: 767px) {
      max-width: 140px;
      height: 180px;
    }
  }
  &__card {
    height: fit-content;
    &_active {
      svg {
        fill: $black !important;
      }
    }
    svg {
      fill: #959dad;
      transition: 0.3s;
      &:hover {
        transform: scale(1.2);
        fill: $black;
      }
    }
  }
  &__name {
    font-size: 14px;
    line-height: 18px;
    color: $gray;
    margin: 16px 0 6px;
    white-space: nowrap;
  }
  &__price {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: $black;
  }
}
</style>
