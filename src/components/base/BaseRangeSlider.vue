<template>
  <div class="multiSelectSlider">
    <MultiRangeSlider
      :min="min"
      :max="max"
      :step="1"
      :ruler="false"
      :label="false"
      :minValue="start"
      :maxValue="end"
      @input="UpdateValues"
    />
  </div>
</template>

<script>
export default {
  props: {
    min: Number,
    max: Number,
    start: Number,
    end: Number,
  },
  components: {
    MultiRangeSlider: () =>
      import(
        /* webpackChunkName: "multiRangeSlider" */ "multi-range-slider-vue"
      ),
  },
  methods: {
    UpdateValues(e) {
      this.$emit("rangeValue", e.minValue, e.maxValue);
    },
  },
};
</script>

<style></style>
