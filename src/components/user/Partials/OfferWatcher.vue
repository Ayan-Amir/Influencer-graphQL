<template>
  <div class="d-flex align-items-center">
    <ul>
      <li v-for="(data, i) in cardData.imageLists" :key="i + 1">
        <img
          v-if="data.img !== ''"
          :src="require(`@/assets/images/${data.img}`)"
          class="img-fluid"
          alt=""
        />
      </li>
    </ul>
    <span class="numbers">{{ cardData.number }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cardData: Object,
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  li {
    width: rem(32px);
    min-width: rem(32px);
    height: rem(32px);
    border-radius: 100%;
    background: #e8e8f0;
    border: 2px solid #fff;
    overflow: hidden;
    position: relative;
    &:not(:first-child) {
      margin-left: -10px;
    }
  }
}
.numbers {
  color: #4c4f57;
  font-size: rem(12px);
  font-weight: 600;
  margin-left: 5px;
  display: inline-block;
}
</style>
