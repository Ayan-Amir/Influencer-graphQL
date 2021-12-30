<template>
  <div class="quantityToggle">
    <button
      :disabled="value == 1 ? true : false"
      @click="decrement"
      class="decrement"
    >
      &mdash;
    </button>
    <input type="text" :value="`${sign}${value}${text}`" readonly />
    <button class="increament" @click="increment">&#xff0b;</button>
  </div>
</template>

<script>
export default {
  props: {
    price: String,
    text: String,
    sign: String,
  },
  data() {
    return {
      value: this.price,
    };
  },
  mounted() {},
  methods: {
    increment() {
      this.value++;
      this.$emit("input", this.value);
    },
    decrement() {
      if (this.value > 1) {
        this.value--;
        this.$emit("input", this.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.quantityToggle {
  display: flex;
  align-items: center;
  margin: rem(20px) 0;
  @media screen and (max-width: 767px) {
    justify-content: space-around;
    margin: rem(20px) 0;
  }
  input {
    width: 220px;
    border: 0 !important;
    text-align: center;
    font-size: rem(52px);
    font-weight: 900;
    color: var(--primary);
    background: transparent;
    height: 45px;
    outline: none !important;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  button {
    width: 42px;
    height: 42px;
    min-width: 42px;
    border: 5px solid var(--primary);
    border-radius: 50%;
    font-size: rem(22px);
    color: var(--primary);
    font-weight: bold;
    transition: all 0.5s ease;
    font-size: 0;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &.decrement {
      &:before {
        background: url(../../assets/images/icons/minius.png) center center
          no-repeat;
        width: 12px;
        height: 5px;
      }
    }
    &.increament {
      &:before {
        background: url(../../assets/images/icons/plus.png) center center
          no-repeat;
        width: 17px;
        height: 17px;
      }
    }
    @media screen and (min-width: 1025px) {
      &:hover {
        background: var(--primary);
        color: #fff;
        &.decrement {
          &:before {
            background: url(../../assets/images/icons/minius-white.png) center
              center no-repeat;
            width: 12px;
            height: 5px;
          }
        }
        &.increament {
          &:before {
            background: url(../../assets/images/icons/plus-white.png) center
              center no-repeat;
            width: 17px;
            height: 17px;
          }
        }
      }
    }
  }
}
</style>
