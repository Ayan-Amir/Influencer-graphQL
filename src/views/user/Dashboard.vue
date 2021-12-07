<template>
	<div class="dashboard container">
		<div class="row">
			<div class="col-md-5 col-lg-4">
				<profile-card />
				<div class="dashboard__earningStatistic">
					<p>See earnings statistics</p>
				</div>
				<div class="dashboard__statistic">
					<div class="dashboard__statistic--counter">
						<base-progress-circle
							:progress="complete"
							color="#9637F1"
						/>
						Completion
					</div>
					<div class="dashboard__statistic--counter">
						<base-progress-circle
							:progress="response"
							color="#57B894"
						/>
						Respone Rate
					</div>
					<div class="dashboard__statistic--counter">
						<base-progress-circle
							:progress="onTime"
							color="#F70101"
						/>
						Job Ontime
					</div>
				</div>
			</div>
			<div class="col-md-7 col-lg-8">
				<div>
					<b-tabs content-class="mt-3">
						<b-tab title="Active"><p>I'm the first tab</p></b-tab>
						<b-tab title="Revision"
							><p>I'm the second tab</p></b-tab
						>
						<b-tab title="Completed" active>
							<discover-card
								v-for="campaign in myCampaignsSubscription"
								:key="campaign.id"
								:campaign="campaign"
								:isApply="false"
								:islink="true"
							/>
						</b-tab>
					</b-tabs>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DiscoverCard from '@/components/user/DiscoverCard.vue';
import ProfileCard from '@/components/user/partials/ProfileCard.vue';
import { CAMPAIGNS, COMPAIGN_SUBSCRIPTION } from '@/graphql/query';

export default {
	data() {
		return {
			campaigns: [],
			myCampaignsSubscription: [],
			page: 1,
			state: '',
			norecord: false,
			// cardData: [
			// 	{
			// 		index: 0,
			// 		icon: 'brand-logo.svg',
			// 		title: 'Palas Mall',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 		islink: true,
			// 		link: 'discover-detail-deleivery',
			// 		path: 'discover-detail-deleivery',
			// 	},
			// 	{
			// 		index: 1,
			// 		icon: 'brand-logo.svg',
			// 		title: '5 TO GO',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 	},
			// 	{
			// 		index: 2,
			// 		icon: 'brand-logo.svg',
			// 		title: 'Shop Online',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 	},
			// 	{
			// 		index: 3,
			// 		icon: 'brand-logo.svg',
			// 		title: 'Pizza Papa',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 	},
			// 	{
			// 		index: 4,
			// 		icon: 'brand-logo.svg',
			// 		title: 'Gsm Iasi',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 	},
			// 	{
			// 		index: 5,
			// 		icon: 'brand-logo.svg',
			// 		title: 'Beer Zone',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 	},
			// 	{
			// 		index: 6,
			// 		icon: 'brand-logo.svg',
			// 		title: 'Liria',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 	},
			// 	{
			// 		index: 7,
			// 		icon: 'brand-logo.svg',
			// 		title: 'Camping',
			// 		subTitle: 'Nullam convallis sollicitudin',
			// 		btn: 'Apply Now',
			// 		isDiscoverBtn: false,
			// 		price: '$250',
			// 	},
			// ],
			complete: 61,
			response: 68,
			onTime: 95,
		};
	},
	components: { DiscoverCard, ProfileCard },
	apollo: {
		campaigns: {
			query: CAMPAIGNS,
			variables() {
				return {
					page: this.page,
					// locations: this.filterLocations,
					// categories: this.filterCategories,
					// search: this.search,
				};
			},
			result(data) {
				if (data.data.campaigns.length == 0) {
					this.norecord = true;
				} else {
					this.norecord = false;
				}
			},
		},
		myCampaignsSubscription: {
			query: COMPAIGN_SUBSCRIPTION,
			variables() {
				return {
					page: this.page,
					state: this.state,
					// locations: this.filterLocations,
					// categories: this.filterCategories,
					// search: this.search,
				};
			},
		},
	},
	watch: {
		myCampaignsSubscription: {
			handler() {
				if (this.myCampaignsSubscription[0].state) {
					this.state = this.myCampaignsSubscription[0].state;
					console.log('state', this.state);
				}
			},
		},
	},
	// mounted() {
	// 	console.log('mounted', this.state);
	// },
};
</script>

<style lang="scss" scoped>
.dashboard {
	&__earningStatistic {
		border-radius: 12px;
		margin: rem(16px) 0;
		padding: rem(16px) rem(14px);
		background: #fff;
		cursor: pointer;
		@media screen and (min-width: 1025px) {
			&:hover {
				p {
					&::before {
						content: '';
						right: -5px;
					}
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
		@media screen and (max-width: 767px) {
			display: none;
		}
	}
	&__statistic {
		padding: rem(16px) rem(28px);
		border-radius: 12px;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media screen and (max-width: 1199px) {
			padding: rem(16px);
		}
		@media screen and (max-width: 767px) {
			margin: rem(12px) 0 rem(16px) 0;
			padding: rem(16px) rem(28px);
		}
		&--counter {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #8998ac;
			font-size: rem(14px);
			@media screen and (max-width: 1199px) {
				font-size: 12px;
			}
		}
	}
	/deep/ {
		.tab-content {
			.card {
				cursor: pointer;
			}
		}
		.ep-container {
			margin-bottom: rem(8px);
		}
	}
}
</style>
