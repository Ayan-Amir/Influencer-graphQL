<template>
  <div class="profile">
    <div class="row align-items-center justify-content-between">
      <div class="col-md-6">
        <h1>{{ title }}</h1>
        <b-form>
          <div class="row">
            <div class="col-md-6">
              <base-input placeholder="First Name" type="text" />
            </div>
            <div class="col-md-6">
              <base-input placeholder="last Name" type="text" />
            </div>
          </div>
          <base-date-picker />
          <base-select :options="Gender" :selected="selected" />
          <div class="button-row">
            <router-link to="payment-details" class="btn btn-primary">
              Save
            </router-link>
          </div>
        </b-form>
      </div>
      <div class="col-md-6">
        <div class="image">
          <img
            src="@/assets/images/young-woman-with-smartphone.png"
            class="img-fluid"
            alt="young-woman-with-smartphone-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "My Profile",
      selected: { value: "null", text: "Male" },
      Gender: [
        { value: null, text: "Male" },
        { value: "a", text: "Female" },
        { value: "b", text: "Other" },
      ],
    };
  },
};
</script>
<style lang="scss">
.LoginRegister {
  .contentWrapper {
    padding-top: 0 !important;
  }
  .profile {
    width: 100%;
  }
}
</style>
