<template>
  <div>
    <!-- Шапка -->
    <Header @panel="isActivePanel = !isActivePanel" />
    <main :class="$style.wrapper" class="container">
      <Nuxt />
    </main>

    <!-- Корзина -->
    <transition name="panel">
      <Panel v-if="isActivePanel" @panel="isActivePanel = !isActivePanel" />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    isActivePanel: false
  }),
  methods: {
    ...mapActions({
      fetchCard: "card/fetchCard"
    })
  },
  mounted() {
    this.fetchCard();
  }
};
</script>

<style module lang="scss">
html {
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.wrapper {
  margin-top: 70px;
  position: relative;
}
</style>
