<template>
  <div>
    <b-form-datepicker v-model="value"></b-form-datepicker>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  margin-bottom: 10px;
}
</style>
