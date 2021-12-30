<template>
  <div class="verification">
    <div class="row align-items-center justify-content-between col-gap-90">
      <div class="col-md-6">
        <h1>
          Your <br />
          verification <br />
          code is :
        </h1>
        <base-input placeholder="Code" type="text" />
        <div class="button-row">
          <router-link to="password" class="btn btn-primary large"
            >Continue</router-link
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="image">
          <img
            src="@/assets/images/Securitylogo.png"
            class="img-fluid"
            alt="Securitylogo-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.LoginRegister {
  .verification {
    @media screen and (max-width: 1600px) {
      .image {
        img {
          max-width: 480px;
        }
      }
    }
    @media screen and (max-width: 1300px) {
      .image {
        img {
          max-width: 375px;
        }
      }
    }
    @media screen and (max-width: 767px) {
      .image {
        img {
          max-width: 325px;
        }
      }
    }
    .form-control {
      height: 76px;
    }
  }
}
</style>
