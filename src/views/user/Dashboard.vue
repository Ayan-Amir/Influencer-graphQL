<template>
	<div class="dashboard container">
		<div class="row">
			<div class="col-lg-4">
				<profile-card />
				<base-statictics :complete="user.completion" :response="user.responseRate" :onTime="user.jobOnTime" />
			</div>
			<div class="col-lg-8">
				<div>
					<ul class="statesLinks">
						<li class="statesLinks__item">
							<a
								class="statesLinks__item--link active"
								href="javascript:void(0)"
								@click="handleTab('active')"
								>Active</a
							>
						</li>
						<li class="statesLinks__item">
							<a class="statesLinks__item--link" href="javascript:void(0)" @click="handleTab('revision')"
								>Revision</a
							>
						</li>
						<li class="statesLinks__item">
							<a class="statesLinks__item--link" href="javascript:void(0)" @click="handleTab('completed')"
								>Completed</a
							>
						</li>
						<li class="statesLinks__item">
							<a class="statesLinks__item--link" href="javascript:void(0)" @click="handleTab('pending')"
								>Pending</a
							>
						</li>
					</ul>
					<div v-if="$apollo.loading">
						<base-skeleton-loader type="discover" :count="4"></base-skeleton-loader>
					</div>
					<div v-if="norecord">No Record Found</div>
					<div class="campaigns" v-if="!$apollo.loading && !norecord">
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
import { mapGetters } from 'vuex';
import CompaignCard from '@/components/user/CompaignCard.vue';
import ProfileCard from '@/components/common/ProfileCard.vue';
import { CAMPAIGN_SUBSCRIPTION } from '@/graphql/user/query';

export default {
	data() {
		return {
			campaigns: [],
			page: 1,
			subscription: 'active',
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
					this.norecord = true;
				} else {
					this.norecord = false;
				}
			},
		},
	},
	methods: {
		handleTab(data) {
			this.norecord = false;
			this.subscription = data;
		},
	},
	computed: {
		...mapGetters(['user']),
	},
	mounted() {
		let items = document.querySelectorAll('.statesLinks__item--link');
		items.forEach((item) => {
			item.addEventListener('click', () => {
				items.forEach((i) => i.classList.remove('active'));
				item.classList.add('active');
			});
		});
	},
};
</script>

<style lang="scss" scoped>
.dashboard {
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
}
</style>
