<template>
  <ul class="socialLinks">
    <li class="socialLinks__item" v-for="link in socialLinks" :key="link.index">
      <div class="socialLinks__item--icon">
        <img
          :src="require(`@/assets/images/svg/${link.icon}`)"
          alt=""
          class="img-fluid"
        />
      </div>
      {{ link.title }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          index: 1,
          icon: "instagram.svg",
          title: "Instagram",
        },
        {
          index: 2,
          icon: "facebook.svg",
          title: "facebook",
        },
        {
          index: 3,
          icon: "tiktok.svg",
          title: "tiktok",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.socialLinks {
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: rem(22px);
  &__item {
    display: flex;
    align-items: center;
    margin-right: rem(30px);
    font-size: rem(13px);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--textPrimary);
    &--icon {
      margin-right: 10px;
    }
  }
}
</style>
