<template>
  <header :class="$style.header">
    <div class="container" :class="$style.header__container">
      <!-- Заголовок -->
      <div :class="$style.header__title">TestList</div>

      <!-- Корзина -->
      <div :class="$style.header__card" @click="$emit('panel')">
        <!-- Счетчик элементов к корзине -->
        <div v-if="getCard.length" :class="$style.header__counter">
          {{ getCard.length }}
        </div>

        <!-- Svg корзины -->
        <Card width="32" height="32" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getCard: "card/getCard"
    })
  }
};
</script>

<style module lang="scss">
@import "~/assets/scss/extends.scss";
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px 0;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  &__container {
    @extend %flex-space-between;
  }
  &__title {
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    color: $gray;
  }
  &__card {
    cursor: pointer;
    position: relative;
    svg {
      color: $black;
    }
  }
  &__counter {
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
    color: #fff;
    background: $gray;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0;
    @extend %flex-center;
  }
}
</style>
