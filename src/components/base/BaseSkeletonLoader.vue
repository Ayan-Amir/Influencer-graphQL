<template>
    <div class="skeleton">
        <div class="skeleton__offer" v-if="type='offer'">
            <div class="row">
                <div
                    class="col-xl-3 col-lg-4 col-sm-6"
                    v-for="(item, index) in count"
                    :key="index"
                >
                    <div class="offerCard card">
                        <div class="offerCard__image">
                            <vue-skeleton-loader
                                :width="300"
                                :height="300"
                                animation="fade"
                            />
                        </div>
                        <div class="offerCard__detail">
                            <div class="d-flex justify-content-between">
                                <vue-skeleton-loader
                                    animation="fade"
                                />
                            </div>
                            <div class="offerCard__detail--watcher">
                                <vue-skeleton-loader
                                    :width="100"
                                    :height="35"
                                    animation="fade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import VueSkeletonLoader from 'skeleton-loader-vue';
export default {
    props:{
        type: String,
        count: {
            type: Number,
            default: 3
        }
    },
    components:{
        VueSkeletonLoader
    }
}
</script>

<style lang="scss" scoped>
.profile {
  padding: rem(24px) rem(16px) rem(16px) rem(16px);
  border-radius: 12px !important;
  text-align: center;
  &__image {
    img {
      border-radius: 50%;
      overflow: hidden;
    }
    margin-bottom: rem(14px);
  }
  &__title {
    font-size: rem(18px);
    color: var(--textPrimary);
    font-weight: 700;
    margin-bottom: rem(4px);
  }
  &__subTitle {
    font-size: rem(16px);
    font-weight: 300;
    margin-bottom: rem(12px);
  }
  .button-row {
    margin: 0;
    .btn.btn-primary {
      font-size: rem(14px);
      padding-right: rem(24px);
      padding-left: rem(24px);
    }
  }
}
</style>