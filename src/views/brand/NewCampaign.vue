<template>
  <div class="newCampaign">
    <div class="container">
      <navigation/>
      <div class="innerWrapper">
        <div class="row">
          <div class="col-lg-6">
            <!-- Target Section -->
            <campaign-target />
            <!-- Budget Section -->
            <campaign-budget />
          </div>
          <div class="col-lg-6">
            <!-- Audience Definition Section -->
            <campaign-audience-defination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    CampaignTarget: () =>
      import(
        /* webpackChunkName: "campaignTarget" */ "@/components/brand/CampaignTarget.vue"
      ),
    CampaignBudget: () =>
      import(
        /* webpackChunkName: "compaignBudget" */ "@/components/brand/CompaignBudget.vue"
      ),
    CampaignAudienceDefination: () =>
      import(
        /* webpackChunkName: "campaignAudienceDefination" */ "@/components/brand/CompaignAudienceDefination.vue"
      ),
      navigation: () =>
      import(
        /* webpackChunkName: "navigations" */ "@/components/brand/Navigation.vue"
      ),
  },
};
</script>

<style lang="scss" scoped>
.newCampaign {
  @media screen and (max-width: 991px) {
    .row {
      > div {
        &:first-child {
          margin-bottom: rem(17px);
        }
      }
    }
  }
}
</style>
