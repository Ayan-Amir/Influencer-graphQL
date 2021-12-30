<template>
  <div class="campaignCard card">
    <ul class="campaignCard__user">
      <span class="campaignCard__user--status"></span>
      <li class="campaignCard__user--icon">
        <img src="@/assets/images/icons/user.png" alt="" class="img-fluid" />
      </li>
      <li>
        Paid Campaign 1
        <span>Active</span>
        <span class="onMobile">Sep 10, 2021</span>
      </li>
    </ul>
    <ul class="campaignCard__date">
      <li>Sep 10, 2021</li>
      <li>
        <a href="#">0/95 Ron</a>
      </li>
    </ul>
    <router-link to="/brand/campaign-detail" class="abs-link"></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.campaignCard {
  position: relative;
  padding: rem(14px);
  padding-right: rem(20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px !important;
  &__user {
    display: flex;
    align-items: center;
    list-style: none;
    &--status {
      position: absolute;
      width: 14px;
      height: 14px;
      background: #24d694;
      border-radius: 50%;
      top: 50px;
      z-index: 1;
      left: 50px;
    }
    &--icon {
      position: relative;
      width: 50px;
      min-width: 50px;
      height: 50px;
      background: #d8b4fa;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: rem(15px);
      overflow: hidden;
      // img {
      // 	height: 100%;
      // 	width: 100%;
      // }
    }
    li {
      font-size: rem(18px);
      font-weight: 500;
      color: var(--textPrimary);
      span {
        display: block;
        color: var(--textSecondary);
        font-size: rem(14px);
        font-weight: 400;
      }
    }
  }
  &__date {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      font-size: rem(14px);
      font-weight: 400;
      color: var(--primary);
      padding: 0 rem(12px);
      a {
        font-weight: 700;
        color: var(--primary);
        position: relative;
        &::before {
          position: absolute;
          content: "";
          background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='13.538' height='23.913' viewBox='0 0 13.538 23.913'%3E%3Cpath id='Path_217' data-name='Path 217' d='M4871.167,592.811l9.916,9.683-9.916,9.987' transform='translate(-4869.045 -590.69)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          width: 14px;
          height: 24px;
          top: -1px;
          right: -15px;
          transition: 0.3s ease-in-out;
          @media screen and (max-width: 991px) {
            top: -3px;
          }
        }
        &:hover {
          opacity: 0.8;
          &::before {
            right: -20px;
          }
        }
      }
      &:first-child {
        position: relative;
        @media screen and (max-width: 991px) {
          display: none;
        }
        &::before {
          position: absolute;
          content: "";
          height: 60px;
          top: -20px;
          right: 0;
          background: #c9ced6;
          border: 1px solid #c9ced6;
          border-radius: 50px;
          overflow: hidden;
        }
      }
    }
  }
  .onMobile {
    display: none;
    font-size: rem(14px);
    color: var(--primary);
    @media screen and (max-width: 991px) {
      display: block !important;
    }
  }
}
</style>
