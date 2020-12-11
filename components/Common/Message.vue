<template>
  <div :class="$style.message">
    <!-- Сообщение об успехе -->
    <span v-if="success === true"
      ><svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-check2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
      Товар {{ name }} добавлен в корзину</span
    >

    <!-- Сообщение о неудаче -->
    <span v-else
      ><svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-x"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      Товар {{ name }} уже в корзине</span
    >
  </div>
</template>

<script>
export default {
  props: ["success", "name"] // Получаем имя продукта и добавлен ли он уже в корзину
};
</script>

<style module lang="scss">
.message {
  position: fixed;
  top: 10px;
  width: calc(100% - 20px);
  max-width: 600px;
  left: 50%;
  transform: translateX(calc(-50% - 10px));
  padding: 16px;
  box-sizing: border-box;
  margin: 0 10px;
  border-radius: 8px;
  background-color: #fff;
  z-index: 30;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  span {
    display: flex;
    align-items: center;
    word-wrap: normal;
    svg {
      background-color: $black;
      border-radius: 50%;
      color: #fff;
      margin-right: 10px;
      min-width: 1.5em;
    }
  }
}
</style>
