<template>
	<div class="password">
        <div class="row justify-content-between align-items-center">
            <div class="col-md-5">
                <h1>{{ title }}</h1>
                <p class="subTitle">
                    {{ subTitle }}
                </p>
                <form>
                    <div class="form-group password">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                        />
                    </div>
                    <div class="button-row">
                        <router-link to="profile" class="btn btn-primary">
                            Continue
                        </router-link>
                    </div>
                </form>
            </div>
            <div class="col-md-7">
                <div class="image">
                    <img
                        src="@/assets/images/hi-to-followers.png"
                        class="img-fluid"
                        alt="hi-to-followers-img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialLinks from '@/components/user/layout/SocialLinks.vue';
export default {
	data() {
		return {
			title: 'Password',
			subTitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
		};
	},
	components: { SocialLinks },
};
</script>
<style lang="scss" >
        .LoginRegister{
             .contentWrapper{
                 padding-top: 0 !important;
             }
        }
</style>
