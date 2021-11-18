<template>
	<ul class="socialLinks">
		<li v-for="item in linkItems" :key="item.index">
			<router-link :to="item.link" target="_blank">
				<img
					:src="require(`@/assets/images/svg/${item.icon}`)"
					class="img-fluid"
					:alt="item.title"
				/>
				{{ item.title }}
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			linkItems: [
				{
					index: 1,
					icon: 'google-icon.svg',
					title: 'Google',
					link: 'register/welcome',
				},
				{
					index: 2,
					icon: 'facebook-icon.svg',
					title: 'Facebook',
					link: 'register/welcome',
				},
				{
					index: 3,
					icon: 'ios-icon.svg',
					title: 'Apple',
					link: 'register/welcome',
				},
				{
					index: 4,
					icon: 'email-icon.svg',
					title: 'Email',
					link: '',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.socialLinks {
	list-style: none;
	@include flex(center, space-between);
	padding: 0;
	li {
		flex: 0 0 48%;
		max-width: 48%;
		margin-bottom: rem(16px);
		img {
			margin-right: 13px;
		}
		a {
			font-size: 14px;
			font-weight: 600;
			color: var(--textPrimary);
			border: 1px solid #aaaac3;
			border-radius: 50px;
			@include flex(center, center);
			padding: rem(18px) rem(10px);
			text-decoration: none;
			min-width: 213px;
			min-height: 65px;
			@media screen and (min-width: 1025px) {
				&:hover {
					border-color: var(--primary);
				}
			}
		}
	}
}
</style>
