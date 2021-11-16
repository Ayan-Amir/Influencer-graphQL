<template>
	<div class="contentWrapper influencerActive">
		<div class="container">
			<div class="row col-gap-40 profile">
				<div class="col-md-4">
					<div class="card">
						<div class="profile__image">
							<img
								src="@/assets/images/profile-image.png"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="profile__title">Ruby Von Rails</div>
						<p class="profile__subTitle">Influencer</p>
						<div class="button-row">
							<a href="#" class="btn btn-primary">Edit Profile</a>
						</div>
					</div>
					<div class="profile__seeStatistic">
						<p>See earnings statistics</p>
					</div>
					<div class="profile__statistic"></div>
				</div>
				<div class="col-md-8">
					<div>
						<b-tabs content-class="mt-3">
							<b-tab title="Active"
								><p>I'm the first tab</p></b-tab
							>
							<b-tab title="Revision"
								><p>I'm the second tab</p></b-tab
							>
							<b-tab title="Completed" active
								><base-shoping-card :cardData="cardData"
							/></b-tab>
						</b-tabs>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseShopingCard from '@/components/base/BaseShopingCard.vue';
export default {
	data() {
		return {
			cardData: [
				{
					index: 0,
					icon: 'brand-logo.svg',
					title: 'Palas Mall',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
				{
					index: 1,
					icon: 'brand-logo.svg',
					title: '5 TO GO',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
				{
					index: 2,
					icon: 'brand-logo.svg',
					title: 'Shop Online',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
				{
					index: 3,
					icon: 'brand-logo.svg',
					title: 'Pizza Papa',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
				{
					index: 4,
					icon: 'brand-logo.svg',
					title: 'Gsm Iasi',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
				{
					index: 5,
					icon: 'brand-logo.svg',
					title: 'Beer Zone',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
				{
					index: 6,
					icon: 'brand-logo.svg',
					title: 'Liria',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
				{
					index: 7,
					icon: 'brand-logo.svg',
					title: 'Camping',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: false,
					isPrice: true,
					price: '$250',
				},
			],
		};
	},
	components: { BaseShopingCard },
};
</script>

<style lang="scss" scoped>
.influencerActive {
	.card {
		padding: rem(24px) rem(16px) rem(16px) rem(16px);
		border: 0;
		border-radius: 10px;
		text-align: center;
	}
	.profile {
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
		&__seeStatistic {
			border-radius: 10px;
			margin: rem(16px) 0;
			padding: rem(16px) rem(14px);
			background: #fff;
			cursor: pointer;
			&:hover {
				p {
					&::before {
						content: '';
						right: -5px;
					}
				}
			}
			p {
				font-size: rem(16px);
				margin: 0;
				position: relative;

				&::before {
					transition: 0.5s ease all;
					position: absolute;
					content: '';
					width: 16px;
					height: 16px;
					background-image: url(../../assets/images/icons/Icon.png);
					top: 50%;
					right: 0;
					background-repeat: no-repeat;
					transform: translateY(-50%);
				}
			}
		}
		&__statistic {
			padding: rem(16px) rem(28px);
			border-radius: 10px;
			background: #fff;
		}
	}
	/deep/ {
		.tabs {
			.nav.nav-tabs {
				border: 0;
				margin-bottom: rem(18px);
				.nav-item {
					border: 0;
					&:not(:last-child) {
						margin-right: rem(13px);
					}
					.nav-link {
						padding: rem(9px);
						font-weight: 700;
						font-size: rem(14px);
						min-width: 120px;
						text-align: center;
						background: #fff;
						color: var(--textPrimary);
						border: 0;
						border-radius: 6px;
						&.active {
							background: var(--primary);
							color: #fff;
						}
					}
				}
			}
		}
		.tab-content {
			.card {
				cursor: pointer;
			}
		}
	}
}
</style>
