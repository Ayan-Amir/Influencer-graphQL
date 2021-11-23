<template>
  <div class="notification container">
    <h1>Notification</h1>
    <h3>Today</h3>
    <div class="card notificationCard active">
      <div>
        <div class="notificationCard__image">
          <img src="@/assets/images/user.png" alt="" class="img-fluid" />
        </div>
        <div class="notificationCard__title">
          5 Min Ago
          <p>Your <span>Campaign 1</span> performs well.</p>
        </div>
      </div>
    </div>
    <div class="card notificationCard">
      <div>
        <div class="notificationCard__image">
          <img src="@/assets/images/user.png" alt="" class="img-fluid" />
        </div>
        <div class="notificationCard__title">
          1 Hour Ago
          <p><span>Dorian Popa</span> has sent you a message.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    activeCard: function () {
      let items = document.querySelectorAll(".notificationCard.card");
      console.log(items.length);
      items.forEach((item) => {
        item.addEventListener("click", () => {
          items.forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
        });
      });
    },
  },
  mounted() {
    this.activeCard();
  },
};
</script>

<style lang="scss" scoped>
.notification {
  h3 {
    margin-bottom: rem(16px);
  }
  .notificationCard {
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
    @media screen and (min-width: 1025px) {
      &:hover {
        border: 2px solid var(--primary);
      }
    }
    &.active {
      border: 2px solid var(--primary);
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
      p {
        display: block;
        font-size: rem(16px);
        font-weight: 400;
        color: var(--textPrimary);
        margin: 0;
        span {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
