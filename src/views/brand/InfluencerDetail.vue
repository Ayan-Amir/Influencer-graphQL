<template>
  <div>
    <div class="container">
      <div class="influencerDetail">
        <div class="influencerDetail__left">
          <div class="influencerDetail__left--image onDesktop">
            <img src="@/assets/images/iPhone-12.png" alt="" class="img-fluid" />
          </div>
          <!-- hide on Desktop -->

          <div class="onMobile">
            <ul>
              <li class="influencerDetail__left--icon">
                <img
                  src="@/assets/images/iPhone-12.png"
                  alt=""
                  class="img-fluid"
                />
              </li>
              <li>
                <h1>Dorian Hâtz Popa</h1>
                <span class="influencerDetail__right--subTitle">Bucharest</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="influencerDetail__right">
          <!-- hide on Mobile -->
          <div class="onDesktop">
            <h1>Dorian Hâtz Popa</h1>
            <span class="influencerDetail__right--subTitle">Bucharest</span>
          </div>
          <div class="row">
            <div
              class="col-6 col-xl-3"
              v-for="item in socialMedia"
              :key="item.id"
            >
              <social-media :socialMedia="item" />
            </div>
          </div>
          <ul class="influencerDetail__right--hashtags">
            <li><a href="#">#newpost.</a></li>
            <li><a href="#">#influencer.</a></li>
            <li><a href="#">#blogger.</a></li>
            <li><a href="#">#digitalmarketing.</a></li>
            <li><a href="#">#fashionblogger.</a></li>
          </ul>
          <p>
            Dorian Hâtz Popa August 7, 1988, Constanța, Romanian vlogger,
            composer, dancer and singer. He became known in 2011, with his
            appearance in the series Bet with life with his colleagues from Lala
            Band, where he played Andrei Anghel, a series that received the
            award for “best debut” at the VIP Awards Gala.
          </p>
          <div class="influencerDetail__right--btnWrapper">
            <h2>Price: 1.000 RON</h2>
            <div class="inline-btns onDesktop">
              <a href="#" class="btn btn-primary" v-b-modal.introduction>Buy</a>
              <a href="#" class="btn btn-primary">Message</a>
            </div>
            <div class="inline-btns onMobile">
              <a href="#" class="btn btn-primary">Buy Offer</a>
            </div>
          </div>
          <h2 class="onMobile">Recent Campaigns</h2>
          <div class="d-flex align-items-center mt-3">
            <div class="influencerDetail__right--icon">
              <img
                src="@/assets/images/icons/avatar.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <span>Sep 10, 2021</span>
          </div>
          <div class="row mt-3">
            <div class="col-md-4">
              <influencer-detail-gallery />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Introduction modal -->
    <b-modal ref="introduction" id="introduction" centered>
      <div class="title">Instruction</div>
      <p class="subTitle">
        What do you want the local Influencers to include in their posts?
      </p>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="@Our lnstagram"
          />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="#Our hashtag" />
        </div>
        <button type="button" class="btn btn-default full">
          Add images or videos
        </button>
        <div class="form-group">
          <label class="control-label"
            >Instructions and campaign details for influencers:
          </label>
          <textarea
            class="form-control"
            placeholder="Ex: Iwant you to talk about FameUp"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          @click="hideModal"
          v-b-modal.paymentMethod
        >
          continue
        </button>
      </form>
    </b-modal>
    <!-- modal End-->

    <!-- Payment Method modal -->
    <b-modal ref="paymentMethod" id="paymentMethod" centered>
      <div class="title">Payment Method</div>
      <p class="subTitle">Card Details</p>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Card Number" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Expiry Date" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="CVV" />
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mt-0">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mt-0">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          v-b-modal.invoicingDetail
          @click="hideModal2"
        >
          Conﬁrm Payment
        </button>
      </form>
    </b-modal>
    <!-- modal End-->

    <!-- Invocing Detail modal -->
    <b-modal ref="invoicingDetail" id="invoicingDetail" centered>
      <div class="title">Add invoicing details</div>
      <ul class="checkbox list-unstyled">
        <li>
          <label>
            <input type="checkbox" name="Individual" />
            <span>Individual?</span>
          </label>
        </li>
      </ul>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Company name" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="VAT number " />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Trade registration number"
          />
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email " />
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mt-0">
              <input type="text" class="form-control" placeholder="Country" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mt-0">
              <input type="text" class="form-control" placeholder="Locality" />
            </div>
          </div>
        </div>
        <div class="form-group mt-0">
          <input type="text" class="form-control" placeholder="Address  " />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Post code  " />
        </div>
        <p class="subTitle legal">Legal representative of the company</p>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mt-0">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mt-0">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="hideModal3">
          Save
        </button>
      </form>
    </b-modal>
    <!-- modal End-->
  </div>
</template>

<script>
export default {
  components: {
    SocialMedia: () =>
      import(
        /* webpackChunkName: "socialMedia" */ "@/components/brand/SocialMedia.vue"
      ),
    InfluencerDetailGallery: () =>
      import(
        /* webpackChunkName: "influencerDetailGallery" */ "@/components/brand/InfluencerDetailGallery.vue"
      ),
  },
  methods: {
    hideModal() {
      this.$refs["introduction"].hide();
    },
    hideModal2() {
      this.$refs["paymentMethod"].hide();
    },
    hideModal3() {
      this.$refs["invoicingDetail"].hide();
    },
  },
  data() {
    return {
      socialMedia: [
        {
          id: 1,
          icon: "socialLogo.svg",
          title: "Instagram",
          subTitle: "2.000.000",
        },
        {
          id: 2,
          icon: "socialLogo.svg",
          title: "Instagram",
          subTitle: "2.000.000",
        },
        {
          id: 3,
          icon: "socialLogo.svg",
          title: "Instagram",
          subTitle: "2.000.000",
        },
        {
          id: 4,
          icon: "socialLogo.svg",
          title: "Instagram",
          subTitle: "2.000.000",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.influencerDetail {
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  &__left {
    flex: 0 0 450px;
    max-width: 450px;
    margin-right: rem(32px);
    @media screen and (max-width: 1199px) {
      flex: 0 0 265px;
      max-width: 265px;
    }
    @media screen and (max-width: 991px) {
      flex: 0 0 215px;
      max-width: 215px;
    }
    @media screen and (max-width: 767px) {
      // margin: auto;
      max-width: 100%;
      flex: 100%;
    }
    &--icon {
      width: 100px;
      min-width: 100px;
      height: 100px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: rem(18px);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__right {
    flex: 1;
    margin-top: rem(32px);
    h1 {
      margin-bottom: rem(6px);
    }
    &--subTitle {
      display: block;
      font-size: rem(18px) !important;
      font-weight: 500 !important;
      color: var(--textPrimary) !important;
      font-family: $secondary-font;
      margin-bottom: rem(18px);
    }
    &--socialMedia {
      list-style: none;
      display: flex;
      align-items: center;
      padding: rem(14px) rem(12px);
      background: #fff;
      border-radius: 12px;
      @media screen and (max-width: 1199px) {
        margin-bottom: rem(20px) !important;
      }
      .icon {
        height: 39px;
        width: 39px;
        min-width: 39px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      li {
        font-size: 11px;
        color: #8998ac;
        p {
          margin: 0;
          font-size: rem(18px);
          font-weight: 500;
          color: #3b485a;
        }
      }
    }
    &--hashtags {
      margin: rem(12px) 0 rem(8px) 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 1199px) {
        margin-top: 0;
      }
      li {
        margin-right: 6px;
        margin-bottom: 6px;
        a {
          font-size: rem(18px);
          font-weight: 500;
          color: var(--textPrimary);
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    &--btnWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: rem(16px);
      h2 {
        margin: 0;
      }
      @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: rem(24px);
        h2 {
          margin-bottom: rem(16px);
        }
      }
    }
    p {
      font-size: rem(14px);
      font-family: $secondary-font;
      margin-bottom: rem(28px);
    }
    h2 {
      font-size: rem(27px);
    }
    .inline-btns {
      display: flex;
      .btn.btn-primary {
        min-height: 40px;
        width: 120px;
        padding: 10px;
        font-size: rem(14px);
        border-radius: 6px;
        &:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
    &--icon {
      height: 50px;
      width: 50px;
      background: #1997cc;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 11px;
    }
    span {
      font-size: rem(14px);
      font-weight: 600;
      color: var(--primary);
    }
  }
  .onDesktop {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  .onMobile {
    display: none;
    @media screen and (max-width: 767px) {
      display: block !important;
    }
    ul {
      list-style: none;
      display: flex;
      align-items: center;
    }
  }
}
</style>
