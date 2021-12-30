<template>
  <div class="discoverDetailDeleivery container">
    <div class="row">
      <div class="col-md-6">
        <div class="orderID">{{ orderId }}</div>
        <div class="pageHead">
          <div class="d-flex align-items-center">
            <div class="pageHead__icon">
              <img
                src="@/assets/images/svg/palasLogo.svg"
                alt=""
                class="img-fluid"
              />
            </div>
            <h1>{{ title }}</h1>
          </div>

          <span class="pageHead__price">{{ price }}</span>
        </div>
        <base-social-link />
        <p>
          {{ desc }}
        </p>

        <a href="#" class="btn btn-primary small">Delivery</a>
        <div class="delivery">
          <h3>You delivered:</h3>
          <span class="delivery__date">{{ deliveryDate }}</span>
          <!-- <deleivery-images /> -->
        </div>
        <div class="revision">
          <h3>Revision</h3>
          <p>
            {{ desc }}
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="image">
          <img
            src="@/assets/images/discoveryDetailDeleivery.png"
            alt=""
            class="img-fluid"
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
      title: "Palas Mall",
      price: "$250",
      deliveryDate: "Sep 10, 2021",
      orderId: "Order #FO1446167081",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    };
  },

  components: {
    // DeleiveryImages: () =>
    // 	import(/* webpackChunkName: "deleiveryImages.chunk" */ '@/components/user/partials/DeleiveryImages.vue'),
  },
};
</script>

<style lang="scss" scoped>
.discoverDetailDeleivery {
  .orderID {
    font-size: rem(20px);
    font-weight: 700;
    color: var(--textPrimary);
    margin-bottom: rem(30px);
  }
  p {
    font-family: $secondary-font;
  }
  h3 {
    font-size: rem(18px);
    font-weight: 500;
    color: var(--textPrimary);
    margin-bottom: rem(6px);
  }
  .btn.btn-primary {
    font-size: rem(14px);
    font-weight: 700;
    border-radius: 6px;
    padding-left: rem(42px);
    padding-right: rem(42px);
  }
  .delivery {
    margin-top: rem(20px);
    &__date {
      color: var(--primary);
      font-size: rem(14px);
      font-weight: 600;
    }
    > .row {
      margin-top: rem(20px);
    }
  }
  .revision {
    margin-top: rem(24px);
    h3 {
      margin-bottom: rem(18px);
    }
  }
  .image {
    overflow: hidden;
    border-radius: 30px;
    @media screen and (min-width: 768px) {
      margin-top: rem(20px);
    }
  }
  @media screen and (max-width: 767px) {
    > .row {
      flex-direction: column-reverse;
    }
    .image {
      margin-bottom: rem(18px);
    }
  }
  @media screen and (max-width: 575px) {
    .btn {
      width: 100%;
    }
  }
}
</style>
