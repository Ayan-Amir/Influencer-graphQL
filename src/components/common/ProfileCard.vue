<template>
	<div>
		<div v-if="isLoading">
			<base-skeleton-loader type="dashboard" :count="1"></base-skeleton-loader>
		</div>
		<div class="card profile">
			<div class="profile__image">
				<img :src="`${$config.IMG_HOST}/160x160/${avatar}`" alt="" @load="onLoad" class="img-fluid" />
			</div>
			<div v-if="isLoading == false" class="profile__title">{{ firstName }} {{ lastName }}</div>
			<p v-if="isLoading == false" class="profile__subTitle">{{ subTitle }}</p>
			<div v-if="isLoading == false" class="button-row">
				<router-link to="/user/edit-profile" class="btn btn-primary small">Edit Profile</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLoading: true,
		};
	},
	methods: {
		onLoad() {
			this.isLoading = false;
		},
	},
	props: {
		firstName: String,
		lastName: String,
		subTitle: String,
		avatar: String,
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
