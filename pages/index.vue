<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$router.push("/backpack"); // Редирект на страницу с рюкзаками
  }
};
</script>

<style module lang="scss">
.content {
  display: flex;
}
</style>
