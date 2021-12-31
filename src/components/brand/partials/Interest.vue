<template>
  <b-card no-body class="interest">
    <b-card-header header-tag="header" role="tab">
      <b-button block v-b-toggle.accordion-3 variant="info"
        ><p>Interests</p>
        <span>All</span></b-button
      >
    </b-card-header>
    <b-collapse
      id="accordion-3"
      @shown="show('accordion-3')"
      @hide="hide('accordion-3')"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <!-- interests checkbox -->
        <div class="checkboxWrapper">
          <base-smooth-scrollbar height="120px">
            <ul class="checkbox">
              <li v-for="int in interests" :key="int.index">
                <label>
                  <input type="checkbox" :name="int.value" />
                  <span>{{ int.value }}</span>
                </label>
              </li>
            </ul>
          </base-smooth-scrollbar>
        </div>
        <!-- End interests checkbox -->
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: {
    interests: [Object, Array],
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

<style lang="scss" scoped>
.accordion {
  .card {
    &.interest {
      .checkboxWrapper {
        border: 2px solid #ccd4e0;
        border-radius: 8px;
        overflow: hidden;
        .checkbox {
          list-style: none;
          padding: 0;
          overflow: hidden;

          li {
            &:not(:last-child) {
              border-bottom: 2px solid #ccd4e0;
            }
            label {
              width: 100%;
            }
            input[type="checkbox"] {
              + span {
                padding: 0;
                width: 100%;
                background: var(--white);
                padding: 10px;
                font-size: rem(14px);
                color: var(--textPrimary);
                &:after,
                &:before {
                  display: none !important;
                }
              }
              &:checked {
                + span {
                  background: var(--primary);
                  color: var(--white);
                }
              }
            }
            &:first-child {
              span {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
              }
            }
            &:last-child {
              span {
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
