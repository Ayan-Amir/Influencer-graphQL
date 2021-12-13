<template>
	<div class="dashboard container">
		<div class="topHead hide-on-lg">
			<ul class="mainLinks">
				<li class="active">
					<router-link to="/">
						<svg-icon
							icon-id="compaign"
							icon-viewbox="0 0 14.788 13.238"
						>
						</svg-icon>
						Campaign
					</router-link>
				</li>
				<li>
					<router-link to="/brand/influencers">
						<svg-icon
							icon-id="Influencers"
							icon-viewbox="0 0 20.738 11.668"
						>
						</svg-icon>
						Influencers
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<svg-icon
							icon-id="deal"
							icon-viewbox=" 0 0 14.788 13.238"
						>
						</svg-icon>
						Deal
					</router-link>
				</li>
			</ul>
			<base-select :options="options" initialValue="Active" />
		</div>
		<div class="row">
			<div class="col-lg-4">
				<profile-card title="Palas Mall" subTitle="Iasi" />
				<base-statictics
					:complete="complete"
					:response="response"
					:onTime="onTime"
				/>
			</div>
			<div class="col-lg-8">
				<base-select
					class="onMobile"
					:options="options"
					initialValue="Active"
				/>
				<campaign-card />
			</div>
		</div>
	</div>
</template>

<script>
import ProfileCard from '@/components/common/ProfileCard.vue';
import CampaignCard from '@/components/brand/CampaignCard.vue';

export default {
	components: { ProfileCard, CampaignCard },
	data() {
		return {
			options: [
				{ value: null, text: 'Please select an option' },
				{ value: 'a', text: 'This is First option' },
				{ value: 'b', text: 'Selected Option' },
			],
			complete: 51,
			response: 68,
			onTime: 95,
		};
	},
	mounted() {
		let items = document.querySelectorAll('.mainLinks li');
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
	.topHead {
		margin-bottom: rem(20px);
	}
	.onMobile {
		display: none;
		@media screen and (max-width: 767px) {
			display: block !important;
		}
	}
	/deep/ {
		.v-select-toggle {
			color: var(--textPrimary) !important;
			font-weight: 700 !important;
			height: 40px !important;
			min-width: 170px;
			padding-left: rem(16px);
			padding-right: rem(50px);
			@media screen and (max-width: 767px) {
				font-size: rem(18px);
			}
			.arrow-down {
				width: 16px;
				height: 8px;
				transform: translateY(-50%);
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14.828' height='8.414' viewBox='0 0 14.828 8.414'%3E%3Cg id='dropdown' transform='translate(0.414 0.414)'%3E%3Cpath id='Path_180' data-name='Path 180' d='M1,1,7,7l6-6' fill='none' stroke='%23c9ced6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
			}
		}
		.statistics__earning {
			display: block !important;
		}
	}
}
</style>
