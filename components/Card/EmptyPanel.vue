<template>
  <div>
    <!-- Текст пустой корзины -->
    <div :class="$style.panel__text">
      Пока что вы ничего не добавили в корзину.
    </div>

    <!-- Кнопка закрытия корзины -->
    <button type="submit" :class="$style.panel__button" @click="$emit('panel')">
      Перейти к выбору
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style module lang="scss">
@import "~/assets/scss/extends.scss";

.panel {
  &__text {
    font-size: 22px;
    line-height: 28px;
  }
  &__button {
    @extend %panel-button;
  }
}
</style>
