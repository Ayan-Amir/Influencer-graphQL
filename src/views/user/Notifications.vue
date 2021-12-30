<template>
  <div class="notification container">
    <h1>Notification</h1>
    <!-- <h3>Today</h3> -->
    <div v-if="$apollo.loading">
      <base-skeleton-loader
        type="notification"
        :count="8"
      ></base-skeleton-loader>
    </div>
    <div
      class="card notificationCard"
      v-for="notification in this.notifications"
      :key="notification.id"
    >
      <router-link :to="notification.url" v-if="notification.url != null">
      </router-link>
      <div>
        <div class="notificationCard__image">
          <img
            :src="`${$config.IMG_HOST}/50x50/${notification.image}`"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="notificationCard__title">
          {{ timeElapsed(notification.timestamp) }}
          <p>{{ notification.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NOTIFICATION } from "@/graphql/user/query";
export default {
  data() {
    return {
      notifications: [],
    };
  },
  apollo: {
    notifications: {
      query: NOTIFICATION,
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  h3 {
    margin-bottom: rem(16px);
  }
  .notificationCard {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: rem(13px) rem(25px);
    border-radius: 16px;
    margin-bottom: rem(15px);
    border: 2px solid transparent;
    transition: 0.4s ease all;
    cursor: pointer;
    a {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    @media screen and (min-width: 1025px) {
      &:hover {
        border: 2px solid var(--primary);
      }
    }
    > div {
      display: flex;
      align-items: flex-start;
    }
    &__image {
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 50%;
      flex: 0 0 50px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    &__title {
      font-size: rem(14px);
      font-weight: 400;
      margin-left: rem(18px);
      color: var(--textSecondary);
      flex: 1;
      p {
        display: block;
        font-size: rem(16px);
        font-weight: 400;
        color: var(--textPrimary);
        margin: 0;
        // @include truncate(1);
        span {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
