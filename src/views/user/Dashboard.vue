<template>
	<div class="dashboard container">
		<div class="row">
			<div class="col-lg-4">
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
			<div class="col-lg-8">
				<div>
					<ul class="statesLinks">
						<li class="statesLinks__item">
							<a
								class="statesLinks__item--link"
								href="javascript:void(0)"
								@click="handleTab('active')"
								>Active</a
							>
						</li>
						<li class="statesLinks__item">
							<a
								class="statesLinks__item--link"
								href="javascript:void(0)"
								@click="handleTab('revision')"
								>Revision</a
							>
						</li>
						<li class="statesLinks__item">
							<a
								class="statesLinks__item--link"
								href="javascript:void(0)"
								@click="handleTab('completed')"
								>Completed</a
							>
						</li>
						<li class="statesLinks__item">
							<a
								class="statesLinks__item--link active"
								href="javascript:void(0)"
								@click="handleTab('pending')"
								>Pending</a
							>
						</li>
					</ul>
					<div v-if="$apollo.loading">
						<base-skeleton-loader
							type="discover"
							:count="8"
						></base-skeleton-loader>
					</div>
					<div v-if="norecord">No Record Found</div>
					<div class="campaigns" v-else>
						<compaign-card
							v-for="campaign in campaigns"
							:key="campaign.id"
							:campaign="campaign"
							:isApply="false"
							:islink="true"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompaignCard from '@/components/user/CompaignCard.vue';
import ProfileCard from '@/components/user/partials/ProfileCard.vue';
import { CAMPAIGN_SUBSCRIPTION } from '@/graphql/user/query';

export default {
	data() {
		return {
			campaigns: [],
			page: 1,
			subscription: 'pending',
			norecord: false,
			complete: 61,
			response: 68,
			onTime: 95,
		};
	},
	components: { CompaignCard, ProfileCard },
	apollo: {
		campaigns: {
			query: CAMPAIGN_SUBSCRIPTION,
			variables() {
				return {
					page: null,
					locations: null,
					categories: null,
					search: null,
					subscriptions: this.subscription,
				};
			},
			result(data) {
				if (data.data.campaigns.length == 0) {
					console.log(data.data.campaigns);
					this.subscription = null;
					this.norecord = true;
				} else {
					this.norecord = false;
				}
			},
		},
	},
	methods: {
		handleTab(data) {
			this.subscription = data;
			// console.log('data :', data);
		},
	},
	mounted() {
		let items = document.querySelectorAll('.statesLinks__item--link');
		items.forEach((item) => {
			item.addEventListener('click', () => {
				items.forEach((i) => i.classList.remove('active'));
				item.classList.add('active');
			});
		});
		// console.log('query :', this.campaigns[0].subscription);
	},
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
		@media screen and (max-width: 991px) {
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
	.statesLinks {
		list-style: none;
		display: flex;
		align-items: center;
		margin-bottom: rem(18px);
		&__item {
			background: #fff;
			margin-right: rem(13px);
			border-radius: 8px;
			overflow: hidden;
			@media screen and (max-width: 575px) {
				width: 23%;
			}
			&--link {
				display: flex;
				align-items: center;
				justify-content: center;
				min-height: 40px;
				min-width: 120px;
				padding: rem(9px);
				font-weight: 700;
				font-size: rem(14px);
				text-align: center;
				background: #fff;
				color: var(--textPrimary);
				&.active {
					background: var(--primary);
					color: #fff;
				}
				@media screen and (max-width: 575px) {
					min-width: auto;
				}
			}
			&:hover {
				@media screen and (min-width: 1025px) {
					a {
						opacity: 0.8;
					}
				}
			}
		}
	}
	/deep/ {
		.nav-item {
			@media screen and (max-width: 767px) {
				width: 22% !important;
			}
		}
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
