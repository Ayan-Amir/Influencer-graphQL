<template>
  <div class="statistics">
    <div class="statistics__earning">
      <p>See earnings statistics</p>
    </div>
    <div class="statistics__item">
      <div class="statistics__item--counter">
        <base-progress-circle :progress="complete" color="#9637F1" />
        Completion
      </div>
      <div class="statistics__item--counter">
        <base-progress-circle :progress="response" color="#57B894" />
        Respone Rate
      </div>
      <div class="statistics__item--counter">
        <base-progress-circle :progress="onTime" color="#F70101" />
        Job Ontime
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onTime: Number,
    complete: Number,
    response: Number,
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  &__earning {
    border-radius: 12px;
    margin: rem(16px) 0;
    padding: rem(16px) rem(14px);
    background: #fff;
    cursor: pointer;
    @media screen and (min-width: 1025px) {
      &:hover {
        p {
          &::before {
            content: "";
            right: -5px;
          }
        }
      }
    }
    p {
      font-size: rem(16px);
      margin: 0;
      position: relative;

      &::before {
        transition: 0.5s ease all;
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        background-image: url(../../assets/images/icons/Icon.png);
        top: 50%;
        right: 0;
        background-repeat: no-repeat;
        transform: translateY(-50%);
      }
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__item {
    padding: rem(16px) rem(28px);
    border-radius: 12px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1199px) {
      padding: rem(16px);
    }
    @media screen and (max-width: 991px) {
      margin: rem(12px) 0 rem(16px) 0;
      padding: rem(16px) rem(28px);
    }
    &--counter {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #8998ac;
      font-size: rem(14px);
      @media screen and (max-width: 1199px) {
        font-size: 12px;
      }
      .ep-container {
        margin-bottom: rem(12px);
      }
    }
  }
}
</style>
