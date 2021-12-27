<template>
	<div>
		<div v-if="isLoading">
			<base-skeleton-loader type="dashboard" :count="1"></base-skeleton-loader>
		</div>
		<div class="card profile" v-else>
			<div class="profile__image">
				<img :src="`${$config.IMG_HOST}/160x160/${user.avatar}`" alt="" class="img-fluid" />
			</div>
			<div class="profile__title">{{ user.first_name }} {{ user.last_name }}</div>
			<p class="profile__subTitle">
				{{ `${user.type == 0 ? 'influencer' : 'brand'}` }}
			</p>
			<div class="button-row">
				<router-link to="/user/edit-profile" class="btn btn-primary small">Edit Profile</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			isLoading: true,
		};
	},
	mounted() {
		setTimeout(() => {
			this.isLoading = false;
		}, 5000);
	},
	computed: {
		...mapGetters(['user']),
	},
};
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
