<template>
	<ul class="socialLinks">
		<li v-for="item in linkItems" :key="item.index">
			<router-link :to="item.link">
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
			border-radius: 100px;
			@include flex(center, center);
			padding: rem(18px) rem(10px);
			text-decoration: none;
			min-width: 213px;
			min-height: 65px;
			position: relative;
			overflow: hidden;
			&:after {
				background: #9637f1;
				content: '';
				height: 155px;
				left: -75px;
				opacity: 0.1;
				position: absolute;
				top: -50px;
				transform: rotate(35deg);
				transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
				width: 50px;
				z-index: 1;
			}
			@media screen and (min-width: 1025px) {
				&:hover {
					border-color: var(--primary);
					&:after {
						left: 120%;
						transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
					}
				}
			}
		}
	}
	@media screen and (max-width: 1199px) and (min-width: 768px) {
		li {
			a {
				min-width: auto;
			}
		}
	}
	@media screen and (max-width: 767px) {
		li {
			a {
				min-height: 55px;
			}
		}
	}
	@media screen and (max-width: 575px) {
		li {
			a {
				min-width: auto;
			}
		}
	}
}
</style>
