<template>
  <div class="business">
    <div class="row justify-content-between col-gap-40">
      <div class="col-md-5">
        <h1>
          Details about <br />
          your business
        </h1>
        <div class="business__detail">
          <div class="business__detail--logo">
            <div class="profileUpload">
              <input type="file" name="file" @change="upload" />
            </div>
            <p class="subTitle">Add the logo of your business</p>
          </div>
          <div class="business__detail--location">
            <div class="profileUpload">
              <!-- <input type="file" name="file" @change="upload" /> -->
            </div>
            <p class="subTitle">Add the location of <br />your business</p>
          </div>
        </div>
        <div class="button-row">
          <router-link to="/user" class="btn btn-primary large"
            >Continue</router-link
          >
        </div>
        <p class="subTitle">
          By continuing you accept our
          <span>Terms and Conditions and Privacy Policy </span>
        </p>
      </div>
      <div class="col-md-7">
        <div class="image">
          <img
            src="@/assets/images/profile-img.png"
            class="img-fluid"
            alt="profile-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    upload: function (e) {
      let wrapper = e.target.parentNode;
      wrapper.classList.add("upload");
      let img = wrapper.querySelector("img");
      if (img) {
        img.remove();
      }
      img = document.createElement("img");
      img.src = URL.createObjectURL(e.target.files[0]);
      wrapper.appendChild(img);
    },
  },
};
</script>

<style lang="scss">
.LoginRegister {
  .contentWrapper {
    padding-top: 0 !important;
  }
  .business {
    &__detail {
      display: flex;
      &--logo {
        flex: 0 0 150px;
        // max-width: 150px;
        margin-right: rem(20px);
      }
      &--location {
        .profileUpload {
          &::before {
            width: 60px !important;
            height: 76px !important;
            background-image: url("../../../assets/images/icons/location.png") !important;
            background-repeat: no-repeat;
          }
        }
      }
      .profileUpload {
        margin: rem(25px) 0 rem(15px) 0;
        position: relative;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        overflow: hidden;
        background: #e8e8f0;
        border: 2px solid transparent;
        transition: 0.5s ease all;
        @media screen and (min-width: 1025px) {
          &:hover {
            border-color: var(--primary);
          }
        }
        &::before {
          position: absolute;
          content: "";
          width: 79px;
          height: 83px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: url("../../../assets/images/icons/house.png");
          background-repeat: no-repeat;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
        }
        input[type="file"] {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          cursor: pointer;
          z-index: 2;
        }
      }
    }
    .subTitle {
      margin-top: rem(16px);
      margin-bottom: 6px;
      font-size: rem(16px);
      span {
        display: block;
        font-weight: 700;
      }
    }
    @media screen and (max-width: 1700px) {
      .image {
        img {
          max-width: 540px;
        }
      }
    }
    @media screen and (max-width: 1400px) {
      .image {
        img {
          max-width: 475px;
        }
      }
    }
    @media screen and (max-width: 991px) {
      .image {
        img {
          max-width: 100%;
        }
      }
    }
    @media screen and (max-width: 767px) {
      .button-row {
        justify-content: start;
      }
    }
  }
}
</style>
