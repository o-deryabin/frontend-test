<template>
  <div>{{ price }} ₽</div>
</template>

<script>
export default {
  props: ["price"],
  data: () => ({
    i: 0,
    mask: []
  }),
  mounted() {
    // this.mask = this.price.toString().split("");
    // for (let i = this.mask.length; i > 0; i++) {
    //   if (this.mask[i] != 0 && this.mask[i] % 3 == 0) {
    //     this.mask[i] = `${this.mask[i]} `;
    //     console.log(123);
    //   }
    // }
    // this.mask = this.mask.join("");
    // console.log(this.mask);
  }
};
</script>

<style></style>
