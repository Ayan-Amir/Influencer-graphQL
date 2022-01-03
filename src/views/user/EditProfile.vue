<template>
  <div class="editProfile container">
    <div class="row col-gap-60">
      <div class="col-md-6">
        <h1>Edit Profile</h1>
        <base-alerts />
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
            <div class="row">
              <div class="col-md-6">
                <base-input
                  placeholder="First Name"
                  type="text"
                  rules="required"
                  :value="editProfile.first_name"
                  v-model="editProfile.first_name"
                  name="First Name"
                />
              </div>
              <div class="col-md-6">
                <base-input
                  placeholder="Last Name"
                  type="text"
                  rules="required"
                  :value="editProfile.last_name"
                  v-model="editProfile.last_name"
                  name="Last Name"
                />
              </div>
            </div>
            <div class="row">
              <base-date-picker
                :value="editProfile.birthdate"
                v-model="editProfile.birthdate"
                name="DOB"
                rules="required"
              />
              <base-input
                placeholder="Change Password"
                type="password"
                rules="min:8"
                :value="password"
                v-model="password"
                name="Password"
              />
              <base-input
                placeholder="Confirm Change Password"
                type="password"
                rules="confirmed:Password|min:8"
                :value="retype"
                v-model="retype"
                name="Confirm Password"
              />
              <base-input
                placeholder="Address"
                type="text"
                :value="editProfile.address"
                v-model="editProfile.address"
                rules="required"
                name="Address"
              />
              <div class="form-group upload">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Add Profile Image"
                  @input="uploadImg"
                  rules="ext:jpg,png"
                />
                <span>Add Profile Images</span>
              </div>
              <div class="UploadImage"></div>

              <ul class="socialLinks">
                <li>
                  <router-link to="#" target="_blank">
                    <img
                      src="@/assets/images/svg/insta.svg"
                      class="img-fluid"
                      alt="Instagram"
                    />
                    Instagram
                  </router-link>
                </li>
                <li>
                  <router-link to="#" target="_blank">
                    <img
                      src="@/assets/images/svg/facebook.svg"
                      class="img-fluid"
                      alt="Facebook"
                    />
                    Facebook
                  </router-link>
                </li>
              </ul>
              <div class="button-row">
                <button
                  class="btn btn-primary"
                  :class="processing ? 'processing' : ''"
                >
                  {{ buttonText }}
                </button>
              </div>
            </div>
          </b-form>
        </validation-observer>
      </div>
      <div class="col-md-6 text-right">
        <div class="editProfile__image">
          <img
            src="@/assets/images/edit-profile.png"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  UPDATE_USER,
  UPDATE_PASSWORD,
  UPLOAD_IMAGE,
} from "@/graphql/user/mutations";
import { MESSAGES } from "@/_helpers/notifications";
import cloneDeep from "lodash/cloneDeep";

export default {
  data() {
    return {
      processing: false,
      editProfile: {},
      password: null,
      retype: null,
      image: null,
      buttonText: "Save",
      data: {
        firstName: "",
        lastName: "",
        birthdate: "",
        address: "",
      },
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.setUser();
  },
  watch: {
    user() {
      this.setUser();
    },
  },
  methods: {
    ...mapActions(["setUser"]),
    ...mapActions(["updateUser"]),

    setUser() {
      this.editProfile = cloneDeep(this.user);
    },
    uploadImg(data) {
      this.image = data.target.files[0];
    },
    onSubmit() {
      this.processing = true;
      (this.data.firstName = this.editProfile.first_name),
        (this.data.lastName = this.editProfile.last_name),
        (this.data.birthdate = this.editProfile.birth_date),
        (this.data.address = this.editProfile.address);
      this.updateProfile();
    },
    async updateProfile() {
      if (this.password != null) {
        this.buttonText = "Updating Password...";
        await this.$apollo
          .mutate({
            mutation: UPDATE_PASSWORD,
            variables: {
              password: this.password,
              retype: this.retype,
            },
          })
          .then((data) => {
            if (data) {
              if (data.data.updatePassword.state == "success") {
                this.updateUserInfo();
              }
            }
          })
          .catch((e) => {
            this.handleError(e);
            this.processing = false;
          });
      } else {
        this.updateUserInfo();
      }
    },
    async updateProfileImage() {
      if (this.image != null) {
        console.log("enter");
        this.buttonText = "Uploading Image...";
        await this.$apollo
          .mutate({
            mutation: UPLOAD_IMAGE,
            variables: {
              image: this.image,
            },
          })
          .then((data) => {
            if (data.data.uploadProfile.value != null) {
              this.$store.state.auth.user.avatar =
                data.data.uploadProfile.value;
            }
          })
          .catch((e) => {
            this.handleError(e);
          });
      }
    },
    async updateUserInfo() {
      await this.updateProfileImage();
      this.buttonText = "Updating Info...";
      await this.$apollo
        .mutate({
          mutation: UPDATE_USER,
          variables: this.data,
        })
        .then((data) => {
          if (data) {
            if (data.data.updateUser.state == "success") {
              this.$store.commit("alert/success", MESSAGES.SUCCESS);
              this.updateUser();
            } else {
              this.$store.commit("alert/error", data.data.updateUser.state);
            }
          }
          this.buttonText = "Save";
          this.processing = false;
        })
        .catch((e) => {
          this.handleError(e);
          this.processing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.invalid-feedback {
  position: static !important;
}
.editProfile {
  .UploadImage {
    overflow: hidden;
    text-align: center;
    @include flex(center, center);
    /deep/img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 100%;
      margin: 10px;
      @media screen and (max-width: 767px) {
        width: 150px;
        height: 150px;
      }
    }
  }
  h1 {
    font-size: rem(20px);
    margin-bottom: rem(16px);
  }
  form {
    max-width: 100%;
  }
  .form-control {
    padding: rem(14px) rem(10px);
    border: 1px solid #caced5;
    border-radius: 4px;
    font-size: rem(16px);
    font-weight: 400;
    color: var(--textPrimary);
    &::placeholder {
      opacity: 0.8;
    }
    &:focus {
      border: 1px solid var(--primary) !important;
    }
  }
  .socialLinks {
    list-style: none;
    @include flex(center, space-between);
    padding: 0 10px;
    li {
      flex: 0 0 48%;
      max-width: 48%;
      margin-bottom: 12px;
      img {
        margin-right: 13px;
      }
      a {
        font-size: 14px;
        font-weight: 600;
        color: var(--textPrimary);
        border: 1px solid #caced5;
        border-radius: 50px;
        @include flex(center, center);
        padding: rem(18px) rem(10px);
        text-decoration: none;
        min-width: 213px;
        min-height: 65px;
        background-color: #fff;
        img {
          width: 21px;
          height: 21px;
        }
        @media screen and (min-width: 1025px) {
          &:hover {
            border-color: var(--primary);
          }
        }
      }
    }
    @media screen and (max-width: 991px) {
      li {
        a {
          min-width: auto;
        }
      }
    }
    @media screen and (max-width: 575px) {
      li {
        flex: 0 0 100%;
        max-width: 100%;
        a {
          min-height: 55px;
        }
      }
    }
  }
  .button-row {
    margin-top: 0;
    padding: 0 10px;
    .btn {
      width: 100%;
    }
  }
  .form-group {
    &.upload {
      background: #e8e8f0;
      border-radius: 8px;
      height: 52px;
      position: relative;
      margin: 0;
      width: 96%;
      margin: auto;
      margin-bottom: 11px;
      transition: 0.4s ease all;
      span {
        position: absolute;
        font-size: rem(20px);
        font-weight: 600;
        color: var(--textPrimary);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        @media screen and (max-width: 767px) {
          font-size: rem(18px);
        }
      }
      input {
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 2;
      }
      @media screen and (min-width: 1025px) {
        &:hover {
          background: var(--primary);
          span {
            color: #fff;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    > .row {
      flex-direction: column-reverse;
    }
    &__image {
      max-width: 300px;
      margin: auto auto rem(30px) auto;
    }
  }
}
/deep/ {
  .b-form-btn-label-control {
    border-radius: 4px;
    border: 1px solid #ced4da !important;
  }
  .b-form-datepicker.b-form-btn-label-control.form-control > .form-control {
    border-radius: 8px;
    color: var(--textPrimary) !important;
    font-size: rem(16px) !important;
    font-weight: 400 !important;
    padding-left: rem(24px);
  }
  .b-form-datepicker .form-control.text-muted {
    opacity: 0.8;
  }
}
</style>
