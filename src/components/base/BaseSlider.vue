<template>
  <div>
    <vue-slider :min="min" :max="max" v-model="number" />
  </div>
</template>

<script>
import "vue-slider-component/theme/antd.css";
export default {
  data() {
    return {
      number: this.input,
    };
  },
  props: {
    min: Number,
    max: Number,
    input: Number,
  },
  components: {
    VueSlider: () =>
      import(/* webpackChunkName: "vueSlider" */ "vue-slider-component"),
  },
  watch: {
    number: function () {
      this.$emit("value", this.number);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ {
  .vue-slider {
    margin: 15px 0 20px 0;
    &:hover {
      .vue-slider-process {
        background: var(--bgColor);
      }
    }
  }
  .vue-slider-process {
    background: var(--primary) !important;
    border-radius: 1.5px;
  }
  .vue-slider-dot-handle {
    margin-top: -5px;
    background: #fff;
    box-shadow: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border: solid 2px var(--primary) !important;
  }
  .vue-slider:hover .vue-slider-rail {
    background: var(--bgColor);
  }
  .vue-slider-rail {
    height: 2px;
  }
  .vue-slider-dot-tooltip-inner {
    display: none;
  }
}
</style>
