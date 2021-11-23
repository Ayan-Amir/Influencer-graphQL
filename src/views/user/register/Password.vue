<template>
  <div class="password">
    <div class="row justify-content-between align-items-center">
      <div class="col-md-6">
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
            <router-link to="profile" class="btn btn-primary">
              Continue
            </router-link>
          </div>
        </b-form>
      </div>
      <div class="col-md-6">
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
import SocialLinks from "@/components/user/layout/SocialLinks.vue";
export default {
  data() {
    return {
      title: "Password",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.",
    };
  },
  components: { SocialLinks },
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
}
</style>
