<template>
  <b-form-group :class="className">
    <b-form-input
      :type="type"
      class="form-control"
      :placeholder="placeholder"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  props: {
    className: String,
    placeholder: String,
    type: String,
  },
};
</script>

<style></style>
