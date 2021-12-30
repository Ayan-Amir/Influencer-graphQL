<template>
  <b-card no-body class="filters">
    <b-card-header header-tag="header" role="tab">
      <b-button block v-b-toggle.accordion-4 variant="info"
        ><p>Quality Filters</p>
        <span>All</span></b-button
      >
    </b-card-header>
    <b-collapse
      id="accordion-4"
      @shown="show('accordion-4')"
      @hide="hide('accordion-4')"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <div class="title"><span>0</span>Local influencers Available</div>
        <div class="row">
          <div class="col-md-6">
            <p>Minimum rating for influencers</p>
            <!-- rating -->
            <star-rating :rating="4" />
            <!-- rating -->
          </div>
          <!-- influencers -->
          <div class="col-md-6">
            <p>Collaborations made by influencers</p>
            <ul class="radio collaboration">
              <li>
                <label>
                  <input type="radio" name="radio" />
                  <span>1+</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="radio" />
                  <span>5+</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="radio" />
                  <span>10+</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
import StarRating from "./StarRating.vue";
export default {
  methods: {
    show(id) {
      let input = document.querySelector(`#${id}`).closest(".card");
      input.classList.add("active");
    },
    hide(id) {
      let input = document.querySelector(`#${id}`).closest(".card");
      input.classList.remove("active");
    },
  },
  props: {
    newCampaignFilters: {
      type: Array | Object,
      default: Array,
    },
  },
  components: { StarRating },
};
</script>

<style lang="scss" scoped>
.accordion {
  .card {
    &.filters {
      .title {
        font-size: rem(13px);
        margin-bottom: rem(12px);
        span {
          font-size: rem(18px);
        }
      }
      .row {
        p {
          color: #374966;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: rem(12px);
          font-size: rem(14px);
        }
      }
    }
  }
}
</style>
