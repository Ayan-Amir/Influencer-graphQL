<template>
  <div>
    <template v-if="this.loaded">
      <div class="contentBox">
        <div class="contentBox__head">Buget</div>
        <div class="contentBox__body">
          <div class="contentBox__body--title">
            <span>{{ campaignEstimate.buget }}</span
            >Total budget
          </div>
          <p class="contentBox__body--subTitle">
            {{ campaignEstimate.reach }} Estimated reach
          </p>

          <div class="d-flex align-items-center justify-content-between mb-15">
            <p class="heading m-0">Influncers</p>
            <span class="range">{{ newCampaignFilters.influencers }}</span>
          </div>

          <!-- Rang slider -->
          <base-slider
            :min="0"
            :max="1000"
            :input="newCampaignFilters.influencers"
            @value="selectedValue"
          />
          <!-- Rang slider -->
          <div class="d-flex align-items-center justify-content-between mb-15">
            <p class="heading m-0">Posts</p>
            <span class="range"> campaignEstimate.posts </span>
          </div>

          <!-- Rang slider -->
          <base-slider :min="0" :max="1000" :input="0" @value="selectedpost" />
          <!-- Rang slider -->
          <div class="button-row">
            <router-link to="" class="btn btn-primary full">Continue</router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { CAMPAIGN_FILTER, CAMPAIGN_ESTIMATE } from "@/graphql/brand/query";

export default {
  data() {
    return {
      newCampaignFilters: [],
      campaignEstimate: [],
      loaded: false,
    };
  },
  apollo: {
    newCampaignFilters: {
      query: CAMPAIGN_FILTER,
      update(data) {
        this.loaded = true;
        return data.newCampaignFilters;
      },
    },
    campaignEstimate: {
      query: CAMPAIGN_ESTIMATE,
    },
  },
  watch: {
    newCampaignFilters: {
      handler() {
        if (this.newCampaignFilters.influencers) {
          this.loaded = true;
        }
      },
    },
  },
  methods: {
    selectedValue(e) {
      this.newCampaignFilters.influencers = e;
    },
    selectedpost(e) {
      console.log(e);
      // this.newCampaignFilters.posts = e;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
    display: inline-flex;
    user-select: none;
    border: 0;
    line-height: 1;
    border-radius: 0;
    transition: all 0.5s ease;
    color: #fff;
    padding: rem(14px) rem(65px);
    border-radius: 16px;
    font-size: rem(20px);
    font-weight: 600;
    width: 270px;
    vertical-align: middle;
    position: relative;
}

</style>


