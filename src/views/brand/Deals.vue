<template>
	<div class="deals container">
		<div class="topHead hide-on-lg">
			<ul class="mainLinks">
				<li>
					<router-link to="/">
						<svg-icon icon-id="compaign" icon-viewbox="0 0 14.788 13.238"> </svg-icon>
						Campaign
					</router-link>
				</li>
				<li>
					<router-link to="/brand/influencers">
						<svg-icon icon-id="Influencers" icon-viewbox="0 0 20.738 11.668"> </svg-icon>
						Influencers
					</router-link>
				</li>
				<li class="active">
					<router-link to="/brand/deals">
						<svg-icon icon-id="deal" icon-viewbox=" 0 0 14.788 13.238"> </svg-icon>
						Deal
					</router-link>
				</li>
			</ul>
			<div>
				<base-filters
					v-if="$apollo.data.offersFilters"
					:filters="offersFilters"
					:isSeacrh="true"
					@locationvalue="locationValue"
					@categoryvalue="categoryValue"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-3 col-lg-4 col-sm-6" v-for="deal in deals" :key="deal.index">
				<deal-card :deal="deal" />
			</div>
		</div>
	</div>
</template>

<script>
import { OFFERS_FILTERS } from '@/graphql/user/query';
import DealCard from '@/components/brand/DealCard.vue';
export default {
	components: { DealCard },
	data() {
		return {
			offersFilters: [],
			filterLocations: [],
			filterCategories: [],
			options: [
				{ value: null, text: 'Please select an option' },
				{ value: 'a', text: 'This is First option' },
				{ value: 'b', text: 'Selected Option' },
			],
			deals: [
				{
					index: 1,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
				{
					index: 2,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
				{
					index: 3,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
				{
					index: 4,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
				{
					index: 5,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
				{
					index: 6,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
				{
					index: 7,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
				{
					index: 8,
					image: 'deals.png',
					time: '02 : 48 : 03',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					icon: 'waterDrop.svg',
				},
			],
			complete: 51,
			response: 68,
			onTime: 95,
		};
	},
	apollo: {
		offersFilters: {
			query: OFFERS_FILTERS,
			result(data) {
				if (data) {
					let newLocation = data.data.offersFilters.default.locations.map((item) => item.id);

					let newCategory = data.data.offersFilters.default.categories.map((item) => item.id);

					this.filterLocations = newLocation;
					this.filterCategories = newCategory;
				}
			},
		},
	},
	methods: {
		locationValue(data) {
			this.filterLocations = data;

			let newFilter = this.filterLocations.map((item) => item.id);
			if (this.filterLocations.length == 0) {
				this.filterLocations = null;
			} else {
				this.filterLocations = newFilter;
			}
		},
		categoryValue(data) {
			this.filterCategories = data;

			let newFilter = this.filterCategories.map((item) => item.id);

			if (this.filterCategories.length == 0) {
				this.filterCategories = null;
			} else {
				this.filterCategories = newFilter;
			}
		},
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
.deals {
	.topHead {
		margin-bottom: rem(18px);
	}
}
</style>
