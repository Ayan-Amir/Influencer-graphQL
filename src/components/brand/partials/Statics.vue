<template>
  <ul class="statistics">
    <li>
      <div class="icon">
        <img src="@/assets/images/svg/stat1.svg" class="img-fluid" alt="" />
      </div>
      <div>
        <p>Number of influencers</p>
        {{ campaignEstimate.influencers }}
      </div>
    </li>
    <li>
      <div class="icon">
        <img src="@/assets/images/svg/stat2.svg" class="img-fluid" alt="" />
      </div>
      <div>
        <p>Potential Reach</p>
        {{ campaignEstimate.reach }}
      </div>
    </li>
    <li>
      <div class="icon">
        <img src="@/assets/images/svg/stat3.svg" class="img-fluid" alt="" />
      </div>
      <div>
        <p>Potential Engagement</p>
        {{ campaignEstimate.engagement }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    campaignEstimate: {
      type: Array | Object,
      default: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  @include flex(center, space-between);
  margin-top: rem(20px);
  li {
    @include flex(center, start);
    font-size: rem(19px);
    font-weight: 500;
    margin: 0;
    @media screen and (min-width: 768px) {
      margin-bottom: rem(16px);
    }
    .icon {
      margin-right: rem(15px);
    }
    p {
      font-size: rem(11px);
      color: #8998ac;
      margin-bottom: 2px;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    li {
      &:not(:last-child) {
        margin-bottom: rem(20px);
      }
    }
  }
}
</style>
