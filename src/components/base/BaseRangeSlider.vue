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
import MultiRangeSlider from "multi-range-slider-vue";

export default {
  props: {
    min: Number,
    max: Number,
    start: Number,
    end: Number,
  },
  components: { MultiRangeSlider },
  methods: {
    UpdateValues(e) {
      this.$emit("rangeValue", e.minValue, e.maxValue);
    },
  },
};
</script>

<style></style>
