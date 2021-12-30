<template>
  <div class="paymentDetail">
    <div class="row justify-content-between">
      <div class="col-lg-5 col-md-6">
        <h1>{{ title }}</h1>
        <p class="alertMessage">{{ message }}</p>
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="First Name" type="text" />
              </div>
              <div class="col-md-6">
                <base-input placeholder="Last Name" type="text" />
              </div>
            </div>
            <base-input placeholder="CNP" type="text" />

            <base-date-picker />

            <base-select :options="Gender" :selected="selected" />

            <base-input placeholder="Email" type="email" />

            <base-input placeholder="Phone" type="tell" />

            <div class="row">
              <div class="col-md-6">
                <base-select :options="Country" :selected="selectCountry" />
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <v-select :options="Locality" v-model="selectCity" />
                </div>
              </div>
            </div>
            <div class="button-row">
              <button type="submit" to="" class="btn btn-primary large">
                Save
              </button>
            </div>
          </b-form>
        </validation-observer>
      </div>
      <div class="col-lg-7 col-md-6">
        <div class="image">
          <img
            src="@/assets/images/payment-detail.png"
            class="img-fluid"
            alt="payment-detail.png-img"
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
      title: "Payment details",
      message: "You must use the data from your identity card.",
      selected: { value: "a", text: "Male" },
      Gender: [
        { value: "a", text: "Male" },
        { value: "b", text: "Female" },
        { value: "c", text: "Other" },
      ],
      selectCountry: { value: "a", text: "Pakistan" },
      Country: [
        { value: "a", text: "Pakistan" },
        { value: "b", text: "Kuwait" },
        { value: "c", text: "America" },
      ],
      selectCity: { value: "a", text: "Lahore" },
      Locality: [
        { value: "a", text: "Lahore" },
        { value: "b", text: "Kuwait" },
        { value: "c", text: "New york" },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("story-price");
    },
  },
};
</script>
<style lang="scss" scoped>
.LoginRegister {
  .paymentDetail {
    padding-top: rem(35px);
    width: 100%;
    h1 {
      margin-bottom: rem(28px);
    }
    p {
      margin-bottom: 10px;
    }
    .alertMessage {
      color: var(--warning);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='28' viewBox='0 0 27 28'%3E%3Cg id='Group_1341' data-name='Group 1341' transform='translate(-108 -329)'%3E%3Cg id='Component_1_1' data-name='Component 1 – 1' transform='translate(108 329)'%3E%3Cpath id='Polygon_1' data-name='Polygon 1' d='M11.74,3.259a2,2,0,0,1,3.52,0L25.407,22.05A2,2,0,0,1,23.647,25H3.353a2,2,0,0,1-1.76-2.95Z' fill='%23eeae2b'/%3E%3C/g%3E%3Ctext id='_' data-name='!' transform='translate(119 351)' fill='%23fff' font-size='18' font-family='NunitoSans-Bold, Nunito Sans' font-weight='700'%3E%3Ctspan x='0' y='0'%3E!%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E");
    }
    @media screen and (max-width: 767px) {
      .image {
        max-width: 450px;
      }
    }
  }
  .button-row {
    margin-top: 10px;
  }
}
</style>
