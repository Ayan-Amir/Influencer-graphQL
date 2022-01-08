<template>
	<div>
		<!-- createOffer modal -->
		<b-modal ref="offerType" id="createOffer" centered>
			<div class="title centered">What are you offering for free to the local influencers?</div>
			<div class="row">
				<div class="col-md-6">
					<div class="image">
						<img src="@/assets/images/product.png" alt="" class="img-fluid" />
					</div>
					<a href="javascript:void(0);" @click="offerType('product')" class="btn btn-primary">Free Product</a>
					<p>Ex: coffee, pizza, burger, bar etc..</p>
				</div>
				<div class="col-md-6">
					<div class="image">
						<img src="@/assets/images/service.png" alt="" class="img-fluid" />
					</div>
					<a href="javascript:void(0);" class="btn btn-primary" @click="offerType('service')" 
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
			<validation-observer ref="observer" v-slot="{ handleSubmit }">
                <b-form @submit.stop.prevent="handleSubmit(userLogin)">
                    <base-input
                        className=""
                        placeholder="Product Name*"
                        type="text"
                        :required="true"
                        v-model="newOffer.attributes.name"
                    />
                    <base-input
                        className=""
                        placeholder="Product Value*"
                        type="text"
                        :required="true"
                        v-model="newOffer.attributes.value"
                    />
                    <base-text-area label="Product Description (obtional)" :required="true" v-model="newOffer.attributes.decription"></base-text-area>
                    <!-- <div class="form-group mt-20">
                        <label class="control-label">Product Description (obtional)</label>
                        <textarea
                            class="form-control"
                            placeholder="Ex: Iwant you to talk about Local Influencer"
                        ></textarea>
                    </div> -->
                    <button type="button" class="btn btn-default full mb-2">Add an image for the offered product</button>
                    <base-radio-group label="Will the influencer need to call you for a reservation" name="needstocall" :options="needsToCall"></base-radio-group>
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
                    <vue-simple-suggest
                        v-model="chosen"
                        :list="simpleSuggestionList"
                        :styles="autoCompleteStyle"
                        :filter-by-query="true"
                        placeholder="Entry location"
                    />
                    <!-- <base-select :options="options" initialValue="Entry location" /> -->
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
                </b-form>
            </validation-observer>
		</b-modal>
		<!-- modal End-->

		<!-- Task modal -->
		<b-modal ref="task" id="task" centered>
			<div class="title">Task</div>
			<p class="subTitle">How many influencers would you like to receive your free service/product.</p>
			<base-touch-spin sign="" v-model="instaStory" :price="1" text=" Instagram story" />
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
import VueSimpleSuggest from 'vue-simple-suggest';
import 'vue-simple-suggest/dist/styles.css';
let now = new Date();
let timestamp = now.getTime();
export default {
	data() {
		return {
			chosen: '',
			instaStory: '',
			instaStory2: '',
			followers: 500,
			priceStart: 16,
			priceEnd: 65,
			autoCompleteStyle: {
				vueSimpleSuggest: 'position-relative',
				inputWrapper: '',
				defaultInput: 'form-control',
				suggestions: 'position-absolute list-group z-1000',
				suggestItem: 'list-group-item',
			},
			gender: [
				{ value: null, text: 'Gender' },
				{ value: 'a', text: 'Male' },
				{ value: 'b', text: 'Female' },
			],
            needsToCall:[
                {text: "No, don't call", value: 'false'},
                {text: 'Yes, call first', value: 'true'}
            ],
            newOffer:{
                type: null,
                mediaType: "instagram",
                attributes:{
                    name: null,
                    value: null,
                    description: null,
                    location: null,
                    total: 0,
                    expirationDate: timestamp,
                    followers: 0,
                    availability: 0,
                    needsToCall: false,
                    deliveryType: null,
                    deliveryLocations: null,
                    storiesTotal: 0,
                    storiesAccount: null,
                    storiesTypes: null,
                    storiesInstructions: null,
                    postsTotal: 0
                }
            }
		};
	},
	components: {
		VueSimpleSuggest,
	},
	methods: {
        offerType(type){
            this.newOffer.type=type
            this.$refs['offerType'].hide();
            this.$refs['freeService'].show();
            console.log(this.newOffer);
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
		simpleSuggestionList() {
			return ['New York', 'London', 'New orleans'];
		},
	},
};
</script>

<style lang="scss" scoped>
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
						line-height:1;
						margin-bottom:rem(17px);
					}
					&.heading {
						font-weight:400;
					}
					&.green {
						color: #24d694;
						font-weight: 500;
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
	.v-select {
		.v-select-toggle {
			border-radius: 8px;
			font-size: rem(14px);
			color: var(--textPrimary);
			font-weight: 400;
			border: 1px solid #ccd4e0 !important;
		}
	}
}
/deep/ {
	.vue-simple-suggest {
		.input-wrapper {
			position: relative;
			&::before {
				content: '';
				position: absolute;
				background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='19.152' height='23.939' viewBox='0 0 19.152 23.939'%3E%3Cpath id='Path_889' data-name='Path 889' d='M9.576,0A9.577,9.577,0,0,0,0,9.577C0,18.195,7.661,23.94,9.576,23.94s9.576-5.746,9.576-14.362A9.577,9.577,0,0,0,9.576,0Zm0,13.407a3.83,3.83,0,1,1,3.83-3.83A3.831,3.831,0,0,1,9.576,13.408Z' transform='translate(0 -0.001)' fill='%239637f1'/%3E%3C/svg%3E%0A");
				background-repeat: no-repeat;
				width: 20px;
				height: 24px;
				top: 50%;
				left: 7px;
				transform: translateY(-50%);
				z-index: 1;
			}
			&::after {
				content: '';
				position: absolute;
				width: 9px;
				height: 14px;
				background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.765' height='13.441' viewBox='0 0 7.765 13.441'%3E%3Cpath id='Path_210' data-name='Path 210' d='M4871.166,592.811l5.351,5.225-5.351,5.388' transform='translate(-4869.752 -591.396)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
				background-repeat: no-repeat;
				right: 19px;
				top: 50%;
				transform: translateY(-50%) rotate(90deg);
				position: absolute;
			}
			.form-control {
				padding-left: rem(32px);
			}
		}
		&.designed {
			.suggestions {
				border: 0;
				box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.24);
				-webkit-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.24);
				-moz-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.24);
				border-radius: 8px;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				.suggest-item {
					padding: 0.5rem 1.25rem;
					user-select: none;
					font-size: 0.875rem;
					font-weight: 600;
					line-height: 1.1;
					&.hover {
						background: var(--primary) !important;
					}
					span {
						font-size: 0.875rem;
						font-weight: 600;
					}
				}
			}
		}
	}
}
</style>
