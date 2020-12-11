<template>
  <!-- Обертка корзины -->
  <div :class="[$style.panel__wrapper]">
    <!-- Боковая панель -->
    <div :class="$style.panel">
      <!-- Верхняя часть панели -->
      <div :class="$style.panel__header">
        <!-- Заголовок -->
        <div :class="$style.panel__title">Корзина</div>
        <!-- Кнопка закрытия корзины -->
        <div @click="$emit('panel')">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <!-- Компонент, когда в корзине есть элементы -->
      <template v-if="getCard.length">
        <CompletePanel @send="send = true" />
      </template>

      <!-- Компонент, когда была совершена покупка  -->
      <template v-else-if="send">
        <SendPanel />
      </template>

      <!-- Компонент пустой корзины -->
      <template v-else>
        <EmptyPanel @panel="$emit('panel')" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    send: false
  }),
  computed: {
    ...mapGetters({
      getCard: "card/getCard"
    })
  },
  mounted() {}
};
</script>

<style module lang="scss">
@import "~/assets/scss/extends.scss";

.panel {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 460px;
  background-color: #fff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  z-index: 21;
  box-sizing: border-box;
  padding: 32px 28px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (min-width: 460px) {
    padding: 52px 48px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 20;
  }
  &__header {
    margin-bottom: 24px;
    @extend %flex-space-between;
  }
  &__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
  }
  &__button {
    background-color: #000;
    color: #fff;
  }
}
</style>
