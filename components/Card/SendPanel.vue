<template>
  <!-- Компонент отправки -->
  <div :class="$style.panel__send">
    <!-- Картинка  -->
    <img :class="$style.panel__emoji" :src="'/ok.png'" alt="" />

    <!-- Текст -->
    <div>
      <div :class="$style.panel__title">Заявка успешно отправлена</div>
      <div :class="$style.panel__subtitle">
        Вскоре наш менеджер свяжется с Вами
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module lang="scss">
@import "~/assets/scss/extends.scss";

.panel {
  &__send {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    text-align: center;
    flex-direction: column;
    @extend %flex-center;
  }
  &__emoji {
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
  }
  &__subtitle {
    font-size: 16px;
    line-height: 21px;
    color: $gray;
  }
}
</style>
