<template>
  <div class="campaignDetail container" v-if="$apollo.data.campaign.image">
    <base-alerts />
    <div class="row align-items-center mb-3">
      <div class="col-md-6">
        <div class="image">
          <img
            v-lazy="`${$config.IMG_HOST}/629x230/${campaign.image}`"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="pageHead">
          <div class="d-flex align-items-center">
            <div class="pageHead__icon">
              <img
                v-lazy="`${$config.IMG_HOST}/55x55/${campaign.logo}`"
                alt=""
                class="img-fluid"
              />
            </div>
            <h1>{{ campaign.name }}</h1>
          </div>
          <span class="pageHead__price">
            {{ campaign.price }}
          </span>
        </div>
        <base-social-link />
        <p class="desc">{{ campaign.description }}</p>
        <div class="requestOffer">
          <button
            @click="onSubmit"
            :class="processing ? 'processing' : ''"
            class="btn btn-primary large"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
    <campaign-detail
      :processing="this.processing"
      :details="campaign.details"
      v-if="campaign.details"
    />
    <div class="button-row">
      <button
        @click="onSubmit"
        class="btn btn-primary"
        :class="processing ? 'processing' : ''"
      >
        Apply Now
      </button>
    </div>
  </div>
</template>

<script>
import { CAMPAIGN_DETAILS } from "@/graphql/user/query";
import { CAMPAIGN_SUBSCRIBE } from "@/graphql/user/mutations";

export default {
  data() {
    return {
      id: 0,
      campaign: [],
      processing: false,
    };
  },
  components: {
    CampaignDetail: () =>
      import(
        /* webpackChunkName: "campaignDetail" */ "@/components/user/common/Details.vue"
      ),
  },
  created() {
    this.id = parseInt(this.$route.params.id);
  },
  apollo: {
    campaign: {
      query: CAMPAIGN_DETAILS,
      variables() {
        return {
          id: parseInt(this.$route.params.id),
        };
      },
      error(e) {
        this.handleError(e);
      },
    },
  },
  methods: {
    async onSubmit() {
      this.processing = true;
      await this.updateDetail().then(() => {
        this.scrollTop();
        this.processing = false;
      });
    },
    scrollTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    async updateDetail() {
      this.processing = true;
      await this.$apollo
        .mutate({
          mutation: CAMPAIGN_SUBSCRIBE,
          variables: {
            idCampaign: parseInt(this.$route.params.id),
          },
        })
        .then((data) => {
          if (data) {
            if (data.data.campaignSubscribe.state == "success") {
              this.$store.commit("alert/success", MESSAGES.SUCCESS);
            }
          }
          this.processing = false;
        })
        .catch((e) => {
          this.handleError(e);
          this.processing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.campaignDetail {
  .pageHead {
    margin-bottom: rem(20px);
    &__icon {
      margin-right: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .desc {
    font-size: rem(15px);
    color: #77838f;
    font-family: $secondary-font;
  }
  .image {
    height: 225px;
    border-radius: 30px;
    overflow: hidden;
    @media screen and (max-width: 767px) {
      margin-bottom: rem(30px);
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  span {
    font-size: rem(15px);
    color: #77838f;
    font-family: $secondary-font;
  }
  .requestOffer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: rem(22px);
    &__time {
      position: relative;
      font-family: $primary-font;
      font-size: rem(14px);
      color: #9798b4;
      span {
        color: #9798b4;
        margin-left: rem(22px);
      }
      &::before {
        content: "";
        position: absolute;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='time' width='16.141' height='16.141' viewBox='0 0 16.141 16.141'%3E%3Cpath id='Path_64' data-name='Path 64' d='M8.062,0a8.071,8.071,0,1,0,8.079,8.071A8.067,8.067,0,0,0,8.062,0Zm.008,14.527a6.456,6.456,0,1,1,6.456-6.456A6.455,6.455,0,0,1,8.071,14.527Zm.4-10.492H7.263V8.878L11.5,11.42l.605-.993L8.474,8.272Z' fill='%239798b4'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        height: 17px;
        width: 17px;
        top: 50%;
        transform: translateY(-50%);
        left: -24px;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    .btn.btn-primary {
      min-height: 40px;
      width: 142px;
      padding-top: 6px;
      padding-bottom: 6px;
      font-size: rem(14px);
      font-weight: 700;
      border-radius: 6px;
    }
  }
  /deep/ {
    .socialLinks {
      margin-bottom: rem(18px);
    }
  }
}
</style>
