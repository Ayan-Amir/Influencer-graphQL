<template>
  <div class="password loginForm">
    <div class="row justify-content-between align-items-center col-gap-70">
      <div class="col-xxl-5 col-md-6">
        <register-email :user-type="1"></register-email>
      </div>
      <div class="col-xxl-7 col-md-6">
        <div class="image">
          <img
            src="@/assets/images/hi-to-followers.png"
            class="img-fluid"
            alt="hi-to-followers-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    RegisterEmail: () =>
      import(
        /* webpackChunkName: "registerEmail" */ "@/components/common/RegisterEmail.vue"
      ),
  },
};
</script>
<style lang="scss">
.LoginRegister {
  min-height: 100vh !important;
  .contentWrapper {
    padding-top: 0 !important;
  }
  @media screen and (max-width: 1600px) and (min-width: 992px) {
    .image {
      img {
        max-width: 450px;
      }
    }
  }
}
</style>
