<template>
  <b-card no-body class="location">
    <b-card-header header-tag="header" role="tab">
      <b-button block v-b-toggle.accordion-2 variant="info"
        ><p>Location</p>
        Entire country</b-button
      >
    </b-card-header>
    <b-collapse
      id="accordion-2"
      @shown="show('accordion-2')"
      @hide="hide('accordion-2')"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <!-- dropdown -->
        <base-select :options="locations" initialValue="Entire Country" />
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    locations: {
      type: Object | Array,
    },
  },
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
};
</script>

<style lang="scss" scoped></style>
