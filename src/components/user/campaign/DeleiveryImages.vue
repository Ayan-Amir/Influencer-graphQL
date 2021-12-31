<template>
  <div class="row">
    <div class="col-lg-4 col-md-5 col-6" v-for="img in images" :key="img.id">
      <div class="image">
        <img
          v-lazy="`${$config.IMG_HOST}/190x330/${img.value}`"
          alt=""
          width="100%"
          height="330px"
          class="img-fluid"
        />
        <button
          @click="submit(img.id, $event)"
          aria-label="Remove Delivery"
          v-if="state == 'active'"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { REMOVE_DELIVERY } from "@/graphql/user/mutations";

export default {
  props: {
    images: Array,
    state: String,
  },
  methods: {
    async submit(id, event) {
      event.target.classList.add("processing");
      await this.deleteAction(id, event)
        .then(() => {
          event.target.classList.remove("processing");
        })
        .catch((event) => {
          event.target.classList.remove("processing");
        });
    },
    deleteAction(id, event) {
      this.$apollo
        .mutate({
          mutation: REMOVE_DELIVERY,
          variables: {
            id: parseInt(id),
          },
        })
        .then((data) => {
          if (data) {
            if (data.data.removeDelivery.state == "success") {
              let parentEle = event.target.parentNode.closest(".row div");
              parentEle.classList.add("d-none");
            }
          }
        })
        .catch((e) => {
          this.handleError(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.row > div {
  margin-bottom: rem(24px);
}
.image {
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  @include flex(center, center);
  height: 100%;
  // img {
  // 	width: 100%;
  // }
  button {
    position: absolute;
    background: #fff;
    border-radius: 50%;
    right: 12px;
    top: 10px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    color: var(--primary);
    &:hover {
      opacity: 0.7;
    }
    &:after {
      position: absolute;
      content: "";
      background: url("../../../assets/images/svg/trash.svg") center center
        no-repeat;
      background-size: 50%;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &.processing {
      pointer-events: none;
      &:after {
        background: url("../../../assets/images/svg/loading-spin.svg") center
          center no-repeat;
        background-size: 70%;
      }
    }
    .cross {
      width: 15px;
      height: 15px;
      transition: 0.4s all;
    }
    &:hover {
      .cross {
        opacity: 0.8;
      }
    }
  }
}
</style>
