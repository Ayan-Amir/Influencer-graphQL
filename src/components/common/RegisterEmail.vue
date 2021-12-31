<template>
  <div>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(registerUser)">
        <div v-if="currentStep == 'email'">
          <h1>Email</h1>
          <p class="subTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu
            tempor et tellus, lobortis interdu.
          </p>
          <base-input
            name="Email"
            className="email"
            placeholder="Email/Username"
            type="text"
            rules="required"
            v-model="authDetails.email"
          />
        </div>
        <div id="password" v-if="currentStep == 'password'">
          <h1>Password</h1>
          <p class="subTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu
            tempor et tellus, lobortis interdu.
          </p>
          <base-input
            name="Password"
            className="password"
            placeholder="Password"
            type="password"
            rules="required|min:8"
            v-model="authDetails.password"
          />
        </div>
        <base-alerts></base-alerts>
        <div class="button-row">
          <button
            type="submit"
            class="btn btn-primary large"
            :class="processing ? 'processing' : ''"
          >
            Continue
          </button>
        </div>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { CHECK_USERNAME } from "@/graphql/user/query";

export default {
  props: {
    userType: Number,
  },
  data() {
    return {
      authDetails: {
        email: "",
        password: "",
        type: 0,
      },
      currentStep: "email",
      processing: false,
    };
  },
  methods: {
    ...mapActions("alert", ["error", "clear"]),
    ...mapActions(["register"]),
    async registerUser() {
      if (this.currentStep == "email") {
        let alert = "";
        this.processing = true;
        const { data, error } = await this.$apollo.query({
          query: CHECK_USERNAME,
          variables: {
            email: this.authDetails.email,
          },
        });

        if (data.usernameAvailable.state == "fail") {
          alert = data.usernameAvailable.msg;
          let email = document.querySelector(".form-group.email input");
          email.classList.remove("is-valid");
          email.classList.add("is-invalid");
          this.processing = false;
        } else {
          this.processing = false;
          this.clear();
          this.currentStep = "password";
        }
        if (error) {
          alert = error.message;
        }
        if (alert != "") {
          this.error(alert);
        }
      } else {
        this.processing = true;
        this.authDetails.type = this.userType;
        this.register(this.authDetails);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  max-width: 440px;
  margin: 0;
}
.button-row {
  margin-top: rem(40px);
  justify-content: flex-start;
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
</style>
