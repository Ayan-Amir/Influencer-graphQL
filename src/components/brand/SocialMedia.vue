<template>
  <ul class="socialMedia">
    <li class="socialMedia__icon">
      <img
        :src="require(`@/assets/images/svg/${socialMedia.icon}`)"
        alt=""
        class="img-fluid"
      />
    </li>
    <li>
      {{ socialMedia.title }}
      <p>{{ socialMedia.subTitle }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    socialMedia: [Object, Array],
  },
};
</script>

<style lang="scss" scoped>
.socialMedia {
  list-style: none;
  display: flex;
  align-items: center;
  padding: rem(14px) rem(12px);
  background: #fff;
  border-radius: 12px;
  @media screen and (max-width: 1199px) {
    margin-bottom: rem(16px) !important;
  }
  &__icon {
    height: 39px;
    width: 39px;
    min-width: 39px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  li {
    font-size: 11px;
    color: #8998ac;
    p {
      margin: 0;
      font-size: rem(18px);
      font-weight: 500;
      color: #3b485a;
    }
  }
}
</style>
