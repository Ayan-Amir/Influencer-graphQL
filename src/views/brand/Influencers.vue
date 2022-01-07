<template>
  <div class="influencer">
    <div class="container">
      <div class="topHead">
        <navigation/>
        <base-filters
          v-if="$apollo.data.offersFilters"
          :filters="offersFilters"
          :isSeacrh="true"
          @locationvalue="locationValue"
          @categoryvalue="categoryValue"
        />
      </div>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-sm-6"
          v-for="influencer in cardData"
          :key="influencer.index"
        >
          <influencer-card :influencer="influencer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OFFERS_FILTERS } from "@/graphql/user/query";
export default {
  components: {
    InfluencerCard: () =>
      import(
        /* webpackChunkName: "influencerCard" */ "@/components/brand/InfluencerCard.vue"
      ),
      navigation: () =>
      import(
        /* webpackChunkName: "navigations" */ "@/components/brand/Navigation.vue"
      ),
  },
  data() {
    return {
      offersFilters: [],
      filterLocations: [],
      filterCategories: [],
      cardData: [
        {
          index: 1,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
        {
          index: 2,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
        {
          index: 3,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
        {
          index: 4,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
        {
          index: 5,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
        {
          index: 6,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
        {
          index: 7,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
        {
          index: 8,
          image: "influencer.png",
          title: "Dorian Popa",
          icon: "share.svg",
          subTitle: "Bucuresti",
          logo: "socialLogo.svg",
          socialMedia: "Instagram",
          popularity: "2.000.000",
        },
      ],
    };
  },
  apollo: {
    offersFilters: {
      query: OFFERS_FILTERS,
      result(data) {
        if (data) {
          let newLocation = data.data.offersFilters.default.locations.map(
            (item) => item.id
          );

          let newCategory = data.data.offersFilters.default.categories.map(
            (item) => item.id
          );

          this.filterLocations = newLocation;
          this.filterCategories = newCategory;
        }
      },
    },
  },
  methods: {
    locationValue(data) {
      this.filterLocations = data;

      let newFilter = this.filterLocations.map((item) => item.id);
      if (this.filterLocations.length == 0) {
        this.filterLocations = null;
      } else {
        this.filterLocations = newFilter;
      }
    },
    categoryValue(data) {
      this.filterCategories = data;

      let newFilter = this.filterCategories.map((item) => item.id);

      if (this.filterCategories.length == 0) {
        this.filterCategories = null;
      } else {
        this.filterCategories = newFilter;
      }
    },
  },
  mounted() {
    let items = document.querySelectorAll(".mainLinks li");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.influencer {
  /deep/ {
    .filters {
      margin-bottom: 0;
      padding-top:0;
      @media screen and (max-width:575px){
        width:100%;
        .d-flex{
          flex-direction: column;
          align-items: center;
          width: 100%;
          .form-group{
            &:not(:last-child){
              margin-bottom:rem(20px);
            }
          }
          .multiselect{
            margin:0;
            min-width: 300px;
          }
        }
      }
    }
  }
  .topHead {
    margin-bottom: rem(18px);
  }
}
</style>
