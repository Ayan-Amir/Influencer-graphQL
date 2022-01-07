<template>
	<div>
		<div class="deals container">
			<div class="topHead">
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
			<div class="title centered">What are you offering for free to the local influencers?</div>
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
					<a href="#" class="btn btn-primary" @click="hideModal('createOffer')" v-b-modal.freeService
						>Free Service</a
					>
					<p>Ex: gym, entry, haircut, spa, salon etc.</p>
				</div>
			</div>
		</b-modal>
		<!-- modal End-->

		<!-- Free Service modal -->
		<b-modal ref="freeService" id="freeService" centered>
			<div class="title">Offer type</div>
			<p class="subTitle">What free Porduct are you offering?</p>
			<form>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Product Name*" value="Product Name*" />
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Product Value*" value="Product Value*" />
				</div>
				<div class="form-group">
					<label class="control-label">Product Description (obtional)</label>
					<textarea
						class="form-control"
						placeholder="Ex: Iwant you to talk about Local Influencer"
					></textarea>
				</div>
				<button type="button" class="btn btn-default full">Add an image for the offered product</button>
				<p>Will the influencer need to call you for a reservation</p>
				<ul class="checkbox list-unstyled">
					<li>
						<label>
							<input type="checkbox" name="delivery" />
							<span>No, don't call</span>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" name="location" />
							<span>Yes, call first</span>
						</label>
					</li>
				</ul>
				<p>How will the influencer get your offer?</p>
				<ul class="checkbox list-unstyled">
					<li>
						<label>
							<input type="checkbox" name="delivery" />
							<span>Home delivery to the influencer</span>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" name="location" />
							<span>Personal pick-up from our location</span>
						</label>
					</li>
				</ul>

				<p>Where Will this offer be a availiable?</p>
				<base-select :options="options" initialValue="Entry location" />
				<p>What do you want the influencer to include in the story?</p>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="@our instagram" value="@our instagram" />
				</div>
				<ul class="checkbox list-unstyled">
					<li>
						<label>
							<input type="checkbox" name="atmosphere" />
							<span>Our atmosphere</span>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" name="product" />
							<span>Our product</span>
						</label>
					</li>
				</ul>
				<!-- <div class="form-group">
					<input type="text" class="form-control" placeholder="Our atmosphere" value="Our atmosphere" />
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Our product" value="Our product" />
				</div> -->
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Other instruction for the local influencerz"
						value="Other instruction for the local influencerz"
					/>
				</div>
				<p>Can influencers accept the product immediately?</p>
				<ul class="checkbox list-unstyled">
					<li>
						<label>
							<input type="checkbox" name="delivery" />
							<span>Yes, of corse</span>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" name="location" />
							<span>No, I will chech an approve personally every influencer</span>
						</label>
					</li>
				</ul>
				<button type="button" class="btn btn-primary" @click="hideModal('freeService')" v-b-modal.task>
					continue
				</button>
			</form>
		</b-modal>
		<!-- modal End-->

		<!-- Task modal -->
		<b-modal ref="task" id="task" centered>
			<div class="title">Task</div>
			<p class="subTitle">How many influencers would you like to receive your free service/product.</p>
			<base-touch-spin sign="" :price="1" text=" Instagram story" />
			<p class="subTitle">What do you want the influencers to crate?</p>
			<div class="touch-spin">
				<base-touch-spin sign="" :price="1" text=" Instagram story" />
				<base-touch-spin sign="" :price="3" text=" Instagram posts" />
			</div>
			<div class="title">Target</div>
			<p class="subTitle">Choose the minimum number of followers for a local influencer</p>
			<p class="number">43.334</p>
			<h3>Local influencers available for you</h3>
			<p class="green">Advanced filters</p>
			<div class="d-flex align-items-center justify-content-between mb-15">
				<p class="heading m-0">Followers</p>
				<span class="range">{{ followers }}</span>
			</div>
			<!-- Rang slider -->
			<base-slider :min="1" :max="1000" :input="followers" @value="selectedValue" />
			<button type="button" class="btn btn-primary" @click="hideModal('task')" v-b-modal.filters>Finish</button>
		</b-modal>
		<!-- modal End-->

		<!-- filters modal -->
		<b-modal ref="filters" id="filters" centered>
			<div class="title">Filters</div>
			<h3>43.334<span>Local influencers available for you</span></h3>
			<div class="row">
				<div class="col-md-6">
					<base-select :options="gender" initialValue="Gender" />
				</div>
				<div class="col-md-6">
					<div class="d-flex align-items-center justify-content-between">
						<p class="heading m-0">Age</p>
						<span class="range">{{ priceStart }} - {{ priceEnd }}</span>
					</div>
					<!-- MultiRang slider -->
					<base-range-slider
						:min="1"
						:max="80"
						:start="priceStart"
						:end="priceEnd"
						@rangeValue="selectedRangeValue"
					/>
				</div>
			</div>
			<base-select :options="gender" initialValue="Gender" />
			<button type="button" class="btn btn-primary" @click="hideModal('filters')">Show Results</button>
		</b-modal>
		<!-- modal End-->
	</div>
</template>

<script>
import { OFFERS_FILTERS } from '@/graphql/user/query';
export default {
	components: {
		DealCard: () => import(/* webpackChunkName: "dealCard" */ '@/components/brand/DealCard.vue'),
	},
	data() {
		return {
			offersFilters: [],
			filterLocations: [],
			filterCategories: [],
			followers: 500,
			priceStart: 16,
			priceEnd: 65,
			options: [
				{ value: null, text: 'Please select an option' },
				{ value: 'a', text: 'This is First option' },
				{ value: 'b', text: 'Selected Option' },
			],
			gender: [
				{ value: null, text: 'Gender' },
				{ value: 'a', text: 'Male' },
				{ value: 'b', text: 'Female' },
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
		hideModal(data) {
			this.$refs[data].hide();
		},
		selectedValue(e) {
			this.followers = e;
		},
		selectedRangeValue(start, end) {
			this.priceStart = start;
			this.priceEnd = end;
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
			@media screen and (max-width: 991px) {
				width: 100%;
				.d-flex {
					width: 100%;
					.form-group {
						width: 50%;
						&:not(:last-child) {
							margin-right: 10px;
						}
					}
				}
				.multiselect {
					margin: 0;
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
		@media screen and (max-width: 1350px) {
			flex-direction: column;
			align-items: start;
			&__left {
				justify-content: space-between;
				width: 100%;
				margin-top: rem(20px);
				@media screen and (min-width: 992px) {
					* {
						margin-bottom: 5px !important;
					}
				}
			}
		}
		@media screen and (max-width: 991px) {
			&__left {
				flex-direction: column;
				align-items: center;
				.mainLinks {
					flex-direction: row;
					flex-wrap: nowrap;
					width: 100%;
					margin-bottom: 10px;
					li {
						a {
							background: #fff;
							height: 40px;
							border-radius: 8px;
							text-align: center;
							display: block;
							&:after {
								display: none;
							}
						}
						&:not(:last-child) {
							margin-right: 10px;
						}
						&:last-child {
							margin: 0;
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
				&.centered {
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
	&#freeService {
		.modal-content {
			.modal-body {
				p {
					font-size: rem(16px);
					text-align: left;
					font-weight: 500;
					margin-bottom: 10px;
				}
				.checkbox {
					display: flex;
					justify-content: space-between;
					// align-items: center;
				}
				.btn.btn-primary {
					width: 100%;
					margin-top: rem(24px);
				}
				/deep/ {
					.v-select {
						.v-select-toggle {
							border-radius: 8px;
							font-size: rem(14px);
							color: var(--textPrimary);
							font-weight: 400;
							border: 1px solid #ccd4e0 !important;
							> div:first-child {
								padding-left: rem(32px);
								position: relative;
								&::before {
									content: '';
									position: absolute;
									background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.152' height='23.939' viewBox='0 0 19.152 23.939'%3E%3Cpath id='Path_889' data-name='Path 889' d='M9.576,0A9.577,9.577,0,0,0,0,9.577C0,18.195,7.661,23.94,9.576,23.94s9.576-5.746,9.576-14.362A9.577,9.577,0,0,0,9.576,0Zm0,13.407a3.83,3.83,0,1,1,3.83-3.83A3.831,3.831,0,0,1,9.576,13.408Z' transform='translate(0 -0.001)' fill='%239637f1'/%3E%3C/svg%3E%0A");
									background-repeat: no-repeat;
									width: 20px;
									height: 24px;
									top: 50%;
									left: 0;
									transform: translateY(-50%);
								}
							}
						}
					}
				}
			}
		}
		/deep/ {
			.v-select {
				.v-select-toggle {
					border-radius: 8px;
					font-size: rem(14px);
					color: var(--textPrimary);
					font-weight: 400;
					border: 1px solid #ccd4e0 !important;
					> div:first-child {
						padding-left: rem(32px);
						position: relative;
						&::before {
							content: '';
							position: absolute;
							background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.152' height='23.939' viewBox='0 0 19.152 23.939'%3E%3Cpath id='Path_889' data-name='Path 889' d='M9.576,0A9.577,9.577,0,0,0,0,9.577C0,18.195,7.661,23.94,9.576,23.94s9.576-5.746,9.576-14.362A9.577,9.577,0,0,0,9.576,0Zm0,13.407a3.83,3.83,0,1,1,3.83-3.83A3.831,3.831,0,0,1,9.576,13.408Z' transform='translate(0 -0.001)' fill='%239637f1'/%3E%3C/svg%3E%0A");
							background-repeat: no-repeat;
							width: 20px;
							height: 24px;
							top: 50%;
							left: 0;
							transform: translateY(-50%);
						}
					}
				}
			}
		}
	}
	&#task {
		.modal-content {
			.modal-body {
				p {
					font-size: rem(16px);
					text-align: left;
					font-weight: 500;
					margin-bottom: 10px;
					&.number {
						font-size: rem(35px);
						font-weight: 700;
					}
					&.green {
						color: #24d694;
						font-weight: 700;
					}
				}
				h3 {
					font-size: rem(25px);
					font-weight: 700;
					font-family: $primary-font;
				}
				.touch-spin {
					display: flex;
					align-items: center;
					margin: rem(20px) 0;
					@media screen and (max-width: 500px) {
						flex-wrap: wrap;
						// align-items: flex-start;
						flex-direction: column;
					}
					div {
						margin: 0;
						&:first-child {
							margin-right: rem(28px);
							@media screen and (max-width: 500px) {
								margin: 0 0 rem(16px) 0;
							}
						}
					}
				}
				.btn.btn-primary {
					width: 100%;
					margin-top: rem(24px);
				}
			}
		}
	}
	&#filters {
		h3 {
			font-size: rem(35px);
			font-weight: 700;
			display: flex;
			align-items: center;
			span {
				font-size: rem(25px);
				margin-left: 8px;
			}
		}
		.btn.btn-primary {
			width: 100%;
			margin-top: rem(24px);
		}
	}
}
/deep/ {
	.quantityToggle {
		input {
			padding: 0 !important;
			width: 180px;
			font-size: rem(14px);
			font-weight: 400;
			color: var(--primary);
			background: transparent;
			height: 28px;
			@media screen and (max-width: 991px) {
				width: 150px;
			}
		}
		button {
			width: 23px;
			height: 23px;
			min-width: 23px;
			border-width: 2px;
			background: #fff;
			&.decrement {
				&:before {
					background: url(../../assets/images/icons/minus.png) center center no-repeat;
					width: 11px;
					height: 4px;
				}
			}
			&.increament {
				&:before {
					background: url(../../assets/images/icons/pluss.png) center center no-repeat;
					width: 10px;
					height: 17px;
				}
			}
		}
	}
	.v-select {
		.v-select-toggle {
			border-radius: 8px;
			font-size: rem(14px);
			color: var(--textPrimary);
			font-weight: 400;
			border: 1px solid #ccd4e0 !important;
		}
	}

	// .v-select {
	// 	.v-select-toggle {
	// 		border-radius: 8px;
	// 		font-size: rem(14px);
	// 		color: var(--textPrimary);
	// 		font-weight: 400;
	// 		border: 1px solid #ccd4e0 !important;
	// 		> div:first-child {
	// 			padding-left: rem(32px);
	// 			position: relative;
	// 			&::before {
	// 				content: '';
	// 				position: absolute;
	// 				background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.152' height='23.939' viewBox='0 0 19.152 23.939'%3E%3Cpath id='Path_889' data-name='Path 889' d='M9.576,0A9.577,9.577,0,0,0,0,9.577C0,18.195,7.661,23.94,9.576,23.94s9.576-5.746,9.576-14.362A9.577,9.577,0,0,0,9.576,0Zm0,13.407a3.83,3.83,0,1,1,3.83-3.83A3.831,3.831,0,0,1,9.576,13.408Z' transform='translate(0 -0.001)' fill='%239637f1'/%3E%3C/svg%3E%0A");
	// 				background-repeat: no-repeat;
	// 				width: 20px;
	// 				height: 24px;
	// 				top: 50%;
	// 				left: 0;
	// 				transform: translateY(-50%);
	// 			}
	// 		}
	// 	}
	// }
}
</style>
