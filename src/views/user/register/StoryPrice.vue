<template>
	<div class="storyPrice">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-5 col-md-6">
                <h1>{{ title }}</h1>
                <p class="alertMessage">
                    {{message}}
                </p>
                <div>
                    <base-touch-spin />
                </div>
                <p class="subTitle">
                    {{ subTitle }}
                </p>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="all" />
                        <span>My price is negotiable</span>
                    </label>
                </div>
                <div class="button-row">
                    <router-link to="profile-photo" class="btn btn-primary">Save</router-link>
                </div>
            </div>
            <div class="col-lg-7 col-md-6">
                <div class="image">
                    <img
                        src="@/assets/images/story-price.png"
                        class="img-fluid"
                        alt="story-price-img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTouchSpin from '../../../components/base/BaseTouchSpin.vue';
export default {
  components: { BaseTouchSpin },
	data() {
		return {
			title: 'Modify Story Price',
			subTitle:'We recommend choosing this price ',
            message:'More that 90% chances to receive deal proposals with this price'
		};
	},
};
</script>
<style lang="scss">
    .LoginRegister{
        .contentWrapper{
            padding-top: 0 !important;
        }
        .storyPrice{
            @media screen and (max-width:1850px){
                .image{
                    img{
                        max-width:440px;
                    }
                }
            }
            @media screen and (max-width:1400px){
                .image{
                    img{
                        max-width:385px;
                    }
                }
            }
            @media screen and (max-width:991px){
                .image{
                    img{
                        max-width:100%;
                    }
                }
            }
            @media screen and (max-width:767px){
                .button-row{
                    justify-content: start !important;
                }
            }
        }
    }
</style>

