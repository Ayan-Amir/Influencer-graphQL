<template>
  <div class="password">
    <div class="row justify-content-between align-items-center col-gap-70">
      <div class="col-xxl-5 col-md-6">
        <h1>{{ title }}</h1>
        <p class="subTitle">
          {{ subTitle }}
        </p>
        <b-form>
          <base-input
            className="password"
            placeholder="Password"
            type="password"
          />
          <div class="button-row">
            <router-link to="profile" class="btn btn-primary large">
              Continue
            </router-link>
          </div>
        </b-form>
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
  data() {
    return {
      title: "Password",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.",
    };
  },
  components: {
    SocialLinks: () =>
      import(
        /* webpackChunkName: "socialLinks.chunk" */ "@/components/common/SocialLinks.vue"
      ),
  },
};
</script>
<style lang="scss">
.LoginRegister {
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
  form {
    max-width: 440px;
    margin: 0;
  }
  .button-row {
    margin-top: rem(40px);
    // @include flex(center, center);
    @media screen and (max-width: 767px) {
      margin-top: rem(25px);
    }
  }
  .form-group {
    margin-bottom: rem(25px);
    @media screen and (max-width: 767px) {
      margin-bottom: rem(16px);
    }
  }
}
.password {
  .form-control {
    height: 4.75rem;
    padding-left: 90px;
  }
}
</style>
