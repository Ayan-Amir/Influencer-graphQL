<template>
  <div class="contentBox">
    <div class="contentBox__head">Target</div>
    <div class="contentBox__body">
      <template v-if="this.loaded">
        <div class="contentBox__body--title">
          <span>{{ newCampaignFilters.followers }}</span>
          Local influencers availabe
        </div>
        <div class="d-flex align-items-center justify-content-between mb-15">
          <p class="heading m-0">Followers</p>
          <span class="range">{{ newCampaignFilters.followers }}</span>
        </div>
        <!-- Rang slider -->
        <base-slider
          :min="1"
          :max="2000"
          :input="newCampaignFilters.followers"
          @value="selectedValue"
        />
        <div class="d-flex align-items-center justify-content-between mb-15">
          <p class="heading m-0">Price rage / post</p>
          <span class="range"
            >{{ newCampaignFilters.priceStart }} -
            {{ newCampaignFilters.priceEnd }}</span
          >
        </div>
        <!-- MultiRang slider -->
        <base-range-slider
          :min="1"
          :max="60"
          :start="newCampaignFilters.priceStart"
          :end="newCampaignFilters.priceEnd"
          @rangeValue="selectedRangeValue"
        />
        <!-- rating -->
        <p class="heading">Rating</p>
        <star-rating :rating="4" />
        <!-- rating -->
      </template>
      <!-- Accordions -->
      <div class="accordion" role="tablist">
        <!-- (1 Age and Gender) -->
        <age-and-gender
          :ageStart="16"
          :ageEnd="65"
          :gender="newCampaignFilters.gender"
        />
        <!-- (2 Location) -->
        <location :locations="newCampaignFilters.locations" />
        <!-- (3 Interests) -->
        <interest :interests="newCampaignFilters.interests" />
        <!-- (4 Quality Filters) -->
        <filters :newCampaignFilters="newCampaignFilters" />
      </div>
      <!-- End Accordions -->
    </div>
  </div>
</template>

<script>
import { CAMPAIGN_FILTER } from "@/graphql/brand/query";

export default {
  components: {
    StarRating: () =>
      import(/* webpackChunkName: "starRating" */ "./partials/StarRating.vue"),
    AgeAndGender: () =>
      import(
        /* webpackChunkName: "ageAndGender" */ "@/components/brand/partials/AgeAndGender.vue"
      ),
    Location: () =>
      import(
        /* webpackChunkName: "location" */ "@/components/brand/partials/Location.vue"
      ),
    Interest: () =>
      import(
        /* webpackChunkName: "interest" */ "@/components/brand/partials/Interest.vue"
      ),
    Filters: () =>
      import(
        /* webpackChunkName: "filters" */ "@/components/brand/partials/Filters.vue"
      ),
  },
  data() {
    return {
      newCampaignFilters: [],
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
  },
  watch: {
    newCampaignFilters: {
      handler() {
        if (this.newCampaignFilters.location) {
          this.loaded = true;
        }
      },
    },
  },
  methods: {
    selectedValue(e) {
      this.newCampaignFilters.followers = e;
    },
    selectedRangeValue(start, end) {
      this.newCampaignFilters.priceStart = start;
      this.newCampaignFilters.priceEnd = end;
    },
  },
};
</script>

<style lang="scss" scoped></style>
