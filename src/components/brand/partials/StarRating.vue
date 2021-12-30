<template>
  <div>
    <star-rating
      :rating="rating"
      active-color="#9637F1"
      inactive-color="#DABDF7"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: this.rating,
    };
  },
  props: {
    rating: Number,
    title: String,
  },
};
</script>

<style></style>
