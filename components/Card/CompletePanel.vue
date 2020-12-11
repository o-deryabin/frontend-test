<template>
  <!-- Компонент корзины с товарами -->
  <div>
    <!-- Список товаров -->
    <div :class="$style.panel__subtitle">Товары в корзине</div>
    <div :class="$style.panel__list">
      <!-- Компонент товаров -->
      <PanelItem v-for="(item, index) in getCard" :key="index" :item="item" />
    </div>
    <!-- Оформление заказа -->
    <div :class="$style.panel__subtitle">Оформить заказ</div>
    <!-- Форма с данными -->
    <form @submit.prevent="send">
      <div :class="$style.panel__list">
        <!-- Поле для ввода имени -->
        <input
          type="text"
          v-model="form.name"
          :class="[
            $style.panel__input,
            errors.name ? $style.panel__input_error : ''
          ]"
          placeholder="Ваше имя"
        />
        <!-- Поле для ввода телефона -->
        <input
          type="text"
          v-model="form.tel"
          :class="[
            $style.panel__input,
            errors.tel ? $style.panel__input_error : ''
          ]"
          v-mask="'+7 (###) ###-##-##'"
          placeholder="Телефон"
        />
        <!-- Поле для ввода адреса -->
        <input
          type="text"
          v-model="form.adress"
          :class="[
            $style.panel__input,
            errors.adress ? $style.panel__input_error : ''
          ]"
          placeholder="Адрес"
        />
      </div>
      <!-- Кнопка отправки -->
      <button :class="$style.panel__button" type="submit">
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data: () => ({
    form: {
      name: "",
      tel: "",
      adress: ""
    },
    errors: {
      name: "",
      tel: "",
      adress: ""
    }
  }),
  methods: {
    ...mapMutations({
      CLEAR_CARD: "card/CLEAR_CARD"
    }),
    // Отправка
    send() {
      // Валидация
      if (this.form.name.trim() === "") {
        this.errors.name = " Введите имя";
      } else if (this.form.tel.trim() === "") {
        this.errors.tel = " Введите телефон";
      } else if (this.form.adress.trim() === "") {
        this.errors.adress = " Введите адресс";
      } else {
        // Очистка корзины и переключеие компонента
        this.CLEAR_CARD();
        this.$emit("send");
      }
    }
  },
  computed: {
    ...mapGetters({
      getCard: "card/getCard"
    })
  }
};
</script>

<style module lang="scss">
@import "~/assets/scss/extends.scss";

.panel {
  &__subtitle {
    font-size: 18px;
    line-height: 23px;
    color: $gray;
  }
  &__list {
    transition: 0.3s;
  }
  &__input {
    background: $extra-gray-light;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    padding: 14px;
    font-size: 16px;
    line-height: 21px;
    border: none;
    margin-top: 16px;
    color: $black;
    &_error {
      &::placeholder {
        color: rgb(231, 28, 28) !important;
      }
    }
    &::placeholder {
      color: $gray-light;
    }
    &:focus {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
  &__button {
    @extend %panel-button;
  }
}
</style>
