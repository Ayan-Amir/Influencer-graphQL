<template>
	<div class="dashboard container">
		<div class="topHead">
			<ul class="mainLinks hide-on-lg">
				<li>
					<router-link to="#">
						<svg-icon
							icon-id="compaign"
							icon-viewbox="0 0 14.788 13.238"
						>
						</svg-icon>
						Campaign
					</router-link>
				</li>
				<li class="active">
					<router-link to="#">
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
           <b-dropdown text="Active">
                <b-dropdown-item href="#"
                    >Action</b-dropdown-item
                >
                <b-dropdown-item href="#"
                    >Another action</b-dropdown-item
                >
                <b-dropdown-item href="#"
                    >Something else
                    here...</b-dropdown-item
                >
            </b-dropdown>
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
			<div class="col-lg-8"><campaign-card /></div>
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
			complete: 51,
			response: 68,
			onTime: 95,
		};
	},
};
</script>

<style lang="scss" scoped>
.dashboard {
	.topHead {
		margin-bottom: rem(20px);
	}
}
</style>
