<template> 
	<div>
		<div class="deals container">
			<div class="topHead ">
				<ul class="mainLinks hide-on-lg">
					<li>
						<router-link to="/brand">
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
				<div class="topHead__left">
					<ul class="mainLinks">
						<li class="active">
							<router-link to="">Deal List</router-link>
						</li>
						<li>
							<router-link to="" v-b-modal.createOffer>Create Free Offer</router-link>
						</li>
					</ul>
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

		<!-- createOffer modal -->
		<b-modal ref="createOffer" id="createOffer" centered>
			<div class="title">What are you offering for free to the local influencers?</div>
			<div class="row">
				<div class="col-md-6">
					<div class="image">
						<img src="@/assets/images/product.png" alt="" class="img-fluid" />
					</div>
					<a href="#" class="btn btn-primary">Free Product</a>
					<p>Ex: coffee, pizza, burger, bar etc..</p>
				</div>
				<div class="col-md-6">
					<div class="image">
						<img src="@/assets/images/service.png" alt="" class="img-fluid" />
					</div>
					<a href="#" class="btn btn-primary">Free Service</a>
					<p>Ex: gym, entry, haircut, spa, salon etc.</p>
				</div>
			</div>
		</b-modal>
		<!-- modal End-->
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
		let items = document.querySelectorAll('.topHead__left .mainLinks li');
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
	/deep/ {
		.filters {
			padding-top: 0;
			@media screen and (max-width:991px){
				width:100%;
				.d-flex{
					width:100%;
					.form-group{
						width:50%;
						&:not(:last-child){
							margin-right:10px;
						}
					}
				}
				.multiselect{
					margin:0;
				}
			}
		}
	}
	.topHead {
		margin-bottom: rem(18px);
		&__left {
			display: flex;
			align-items: center;
			.mainLinks {
				li:last-child {
					margin-right: 0.875rem;
				}
				a {
					padding-left: 12px;
					padding-right: 12px;
				}
			}
		}
		@media screen and (max-width:1350px){
			flex-direction: column;
			align-items: start;
			&__left{
				justify-content: space-between;
				width: 100%;
				margin-top: rem(20px);
				@media screen and (min-width:992px){
					*{
						margin-bottom:5px !important;
					}
				}
			}
		}
		@media screen and (max-width:991px){
			&__left{
				flex-direction: column;
				align-items: center;
				.mainLinks{
					flex-direction: row;
					flex-wrap: nowrap;
					width: 100%;
					margin-bottom:10px;
					li{
						a{
							background: #fff;
							height:40px;
							border-radius: 8px;
							text-align: center;
    						display: block;
							&:after{
								display:none;
							}
						}
						&:not(:last-child){
							margin-right:10px;
						}
					}
				}
			}
		}
	}
}
.modal {
	.modal-content {
		padding: rem(48px);
		.modal-body {
			.title {
				margin-left: auto;
				margin-right: auto;
				text-align: center;
				max-width: 285px;
				margin-bottom: rem(36px) !important;
				@media screen and (max-width: 575px) {
					max-width: 240px;
				}
				@media screen and (max-width: 575px) {
					max-width: 220px;
				}
			}
			.image {
				margin-bottom: rem(32px);
			}
			p {
				font-size: rem(14px);
				text-align: center;
				// margin: 0;
				margin-top: rem(16px);
				color: var(--textPrimary);
			}
			@media screen and (max-width: 767px) {
				.row > div {
					text-align: center;
				}
			}
		}
	}
}
</style>
