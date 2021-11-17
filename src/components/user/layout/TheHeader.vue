<template>
	<div>
		<BaseIcons />
		<!-- The Header -->
		<FixedHeader :threshold="70">
			<header role="banner">
				<div class="container">
					<div class="flex-row">
						<div class="left-side">
							<!--Mobile menu-icon -->
							<a href="#" class="menuIcon d-none show-on-lg">
								<svg-icon
									class="menu"
									icon-id="menuIcon"
									icon-viewbox="0 0 44 44"
								>
								</svg-icon>
								<svg-icon
									class="arrow"
									icon-id="arrowIcon"
									icon-viewbox="0 0 38 38"
								>
								</svg-icon>
							</a>
							<!-- logo -->
							<router-link to="#" class="logo">
								<img
									src="@/assets/images/svg/logo.svg"
									class="img-fluid"
									alt=" logo"
								/>
								<p>Create Campaign</p>
							</router-link>
						</div>
						<div class="middle-side hide-on-lg">
							<!-- search bar -->
							<form class="search no-label">
								<input
									type="text"
									class="form-control"
									placeholder="Search Everything"
								/>
							</form>
						</div>
						<div class="right-side hide-on-lg">
							<ul class="list-unstyled">
								<!-- New compaign & Pop up open Link -->
								<li>
									<router-link
										to="#"
										v-b-modal.introduction
										class="newCompaign"
									>
										New Campaign
									</router-link>
								</li>
								<!-- Notification -->
								<li class="notifaction_Wrapper">
									<a href="#" class="notification">
										<svg-icon
											icon-id="notiffication_icon"
											icon-viewbox="0 0 20 22"
										>
										</svg-icon>
										<span></span>
									</a>
								</li>
								<!-- Dropdown -->
								<li>
									<div>
										<b-dropdown
											size="lg"
											variant="link"
											toggle-class="text-decoration-none"
											no-caret
										>
											<template #button-content>
												Sandu Cosm
												<span
													><img
														src="@/assets/images/user-img.jpg"
														alt=""
														class="img-fluid"
												/></span>
												<svg-icon
													icon-id="dropdown"
													icon-viewbox="0 0 14.828 8.414"
												>
												</svg-icon>
											</template>
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
								</li>
							</ul>
						</div>
						<!-- Setting Icon on Responsive -->
						<div class="settingIcon d-none show-on-lg">
							<router-link to="#">
								<svg-icon
									icon-id="setting"
									icon-viewbox="0 0 23.469 25.246"
								>
								</svg-icon>
							</router-link>
						</div>
						<!-- Menu on mobile -->
						<nav class="d-none show-on-lg">
							<div>
								<!-- Mobile Search -->
								<div class="search">
									<input
										type="text"
										class="form-control"
										placeholder="Search Everything"
									/>
								</div>
								<!-- Mobile New compaign & Pop up open Link -->
								<router-link
									to="#"
									v-b-modal.introduction
									class="newCompaign"
								>
									New Campaign
								</router-link>
								<!-- Mobile Main links -->
								<ul class="mainLinks">
									<li>
										<router-link to="#">
											<svg-icon
												icon-id="Influencers"
												icon-viewbox="0 0 20.738 11.668"
											>
											</svg-icon>
											Influencers
										</router-link>
									</li>
									<li class="active">
										<router-link to="#">
											<svg-icon
												icon-id="compaign"
												icon-viewbox="0 0 14.788 13.238"
											>
											</svg-icon>
											Campaign
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
								<!-- Mobile Notification -->
								<a href="#" class="notification">
									<svg-icon
										icon-id="notiffication_icon-2"
										icon-viewbox="0 0 20 22.003"
									>
									</svg-icon>
									Notifications
									<span>4</span>
								</a>
							</div>
						</nav>
					</div>
				</div>
			</header>
		</FixedHeader>
		<!-- The Header -->

		<!-- Introduction modal -->
		<b-modal ref="my-modal" id="introduction" centered>
			<div class="title">Instruction</div>
			<p class="subTitle">
				What do you want the local Influencers to include in their
				posts?
			</p>
			<form>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="@Our lnstagram"
					/>
				</div>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="#Our hashtag"
					/>
				</div>
				<button type="button" class="btn btn-default full">
					Add images or videos
				</button>
				<div class="form-group">
					<label class="control-label"
						>Instructions and campaign details for influencers:
					</label>
					<textarea
						class="form-control"
						placeholder="Ex: Iwant you to talk about FameUp"
					></textarea>
				</div>
				<button
					type="button"
					class="btn btn-primary"
					@click="hideModal"
					v-b-modal.paymentMethod
				>
					continue
				</button>
			</form>
		</b-modal>
		<!-- modal End-->

		<!-- Payment Method modal -->
		<b-modal ref="my-modal2" id="paymentMethod" centered>
			<div class="title">Payment Method</div>
			<p class="subTitle">Card Details</p>
			<form>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Card Number"
					/>
				</div>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Expiry Date"
					/>
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="CVV" />
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group mt-0">
							<input
								type="text"
								class="form-control"
								placeholder="First name"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group mt-0">
							<input
								type="text"
								class="form-control"
								placeholder="Last name"
							/>
						</div>
					</div>
				</div>
				<button
					type="button"
					class="btn btn-primary"
					v-b-modal.invoicingDetail
					@click="hideModal2"
				>
					Conﬁrm Payment
				</button>
			</form>
		</b-modal>
		<!-- modal End-->

		<!-- Invocing Detail modal -->
		<b-modal ref="my-modal3" id="invoicingDetail" centered>
			<div class="title">Add invoicing details</div>
			<ul class="checkbox list-unstyled">
				<li>
					<label>
						<input type="checkbox" name="Individual" />
						<span>Individual?</span>
					</label>
				</li>
			</ul>
			<form>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Company name"
					/>
				</div>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="VAT number "
					/>
				</div>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Trade registration number"
					/>
				</div>
				<div class="form-group">
					<input
						type="email"
						class="form-control"
						placeholder="Email "
					/>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group mt-0">
							<input
								type="text"
								class="form-control"
								placeholder="Country"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group mt-0">
							<input
								type="text"
								class="form-control"
								placeholder="Locality"
							/>
						</div>
					</div>
				</div>
				<div class="form-group mt-0">
					<input
						type="text"
						class="form-control"
						placeholder="Address  "
					/>
				</div>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Post code  "
					/>
				</div>
				<p class="subTitle legal">
					Legal representative of the company
				</p>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group mt-0">
							<input
								type="text"
								class="form-control"
								placeholder="First name"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group mt-0">
							<input
								type="text"
								class="form-control"
								placeholder="Last name"
							/>
						</div>
					</div>
				</div>
				<button
					type="button"
					class="btn btn-primary"
					@click="hideModal3"
				>
					Save
				</button>
			</form>
		</b-modal>
		<!-- modal End-->
	</div>
</template>
<script>
import BaseIcons from '@/components/base/BaseSvgIcons.vue';
import FixedHeader from 'vue-fixed-header';
export default {
	components: {
		FixedHeader,
		BaseIcons,
	},
	methods: {
		menuIcon: function () {
			let item = document.querySelector('.menuIcon');
			item.addEventListener('click', () => {
				document.body.classList.toggle('menu-active');
				document
					.getElementsByTagName('html')[0]
					.classList.toggle('no-scroll');
			});
		},
		hideModal() {
			this.$refs['my-modal'].hide();
		},
		hideModal2() {
			this.$refs['my-modal2'].hide();
		},
		hideModal3() {
			this.$refs['my-modal3'].hide();
		},
	},
	mounted() {
		this.menuIcon();
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
header {
	background: #fff;
	display: flex;
	align-items: center;
	padding-top: rem(24px);
	padding-bottom: rem(24px);
	margin-bottom: rem(20px);
	position: fixed;
	width: 100%;
	z-index: 9;
	transition: 0.4s ease-in-out;
	/deep/.dropdown {
		.btn {
			background: transparent;
			padding: 0;
			font-size: rem(14px);
			font-weight: 600;
			color: #253858;
			display: flex;
			align-items: center;
			&:hover,
			&:focus,
			&:active {
				background: transparent !important;
				padding: 0 !important;
				box-shadow: none !important;
			}
			span {
				width: rem(50px);
				min-width: rem(50px);
				height: rem(50px);
				border-radius: 100%;
				background: #e8e8f0;
				display: inline-block;
				margin-left: 13px;
				margin-right: 20px;
				overflow: hidden;
				@media screen and (max-width: 1199px) {
					width: rem(35px);
					min-width: rem(35px);
					height: rem(35px);
					margin-right: 13px;
				}
			}
			svg {
				width: 12px;
				transition: 0.5s ease-in;
			}
		}
		.dropdown-menu {
			padding: 0;
			border: 2px solid var(--primary);
			width: 180px;
			li {
				margin: 0 !important;
				.dropdown-item {
					padding: rem(10px);
					color: var(--textPrimary);
					font-size: rem(14px);
					&:hover,
					&:focus,
					&:active {
						background: var(--primary);
						color: #fff;
					}
				}
			}
		}
		&.show {
			.btn {
				svg {
					transform: rotate(180deg);
				}
			}
		}
	}
	.flex-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		@media screen and (max-width: 991px) {
			justify-content: center;
		}
		.left-side {
			display: flex;
			align-items: center;
			flex: 0 0 260px;
			@media screen and (max-width: 1300px) {
				flex: 0 0 235px;
			}
			@media screen and (max-width: 991px) {
				flex: none;
			}
			.menuIcon {
				position: absolute;
				top: 52%;
				transform: translateY(-50%);
				left: 0;
				svg {
					width: 35px;
					&.arrow {
						display: none;
					}
				}
			}
			.logo {
				transition: 0.5s ease all;
				p {
					display: none;
					font-size: rem(24px);
					font-weight: 700;
					color: var(--textPrimary);
					margin: 0;
				}
				@media screen and (max-width: 991px) {
					img {
						display: none;
					}
					p {
						display: block;
					}
				}
			}
		}
		.middle-side {
			flex: 0 0 490px;
			padding: 0 rem(15px);
			@media screen and (max-width: 1199px) {
				flex: 0 0 300px;
			}
			@media screen and (max-width: 991px) {
				display: none;
			}
			form {
				input {
					background: #f9f9fb;
					padding: rem(12px) rem(24px);
					padding-left: 55px;
					border-radius: 6px;
					background-image: url("data:image/svg+xml,%0A%3Csvg id='search_icon' data-name='search icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath id='Path_167' data-name='Path 167' d='M12.864,11.321h-.813l-.288-.278a6.7,6.7,0,1,0-.72.72l.278.288v.813L16.467,18,18,16.467Zm-6.175,0A4.631,4.631,0,1,1,11.321,6.69,4.625,4.625,0,0,1,6.69,11.321Z' fill='%23d0d0dd'/%3E%3C/svg%3E%0A");
					background-repeat: no-repeat;
					background-position: 16px center;
					max-height: 52px;
					border: 2px solid transparent;
					color: var(--secondary);
					&::placeholder {
						color: var(--secondary);
					}
				}
			}
		}
		.right-side {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			ul {
				display: flex;
				align-items: center;
				margin-bottom: 0;
				li {
					&.notifaction_Wrapper {
						margin-right: rem(20px) !important;
						@media screen and (max-width: 1200px) {
							margin-right: rem(14px) !important;
						}
						@media screen and (max-width: 374px) {
							margin-right: rem(10px) !important;
						}
					}
					&:not(:last-child) {
						margin-right: rem(27px);
						@media screen and (max-width: 1200px) {
							margin-right: rem(18px);
						}
						@media screen and (max-width: 374px) {
							margin-right: rem(13px);
						}
					}

					.notification {
						position: relative;
						span {
							position: absolute;
							width: 6px;
							height: 6px;
							border-radius: 100%;
							background: #5357f7;
							right: 0;
						}
						svg {
							width: 20px;
							color: #c9ced6;
						}
						@media screen and (min-width: 1025px) {
							&:hover {
								svg {
									color: var(--primary);
								}
							}
						}
					}
					.newCompaign {
						background-image: url("data:image/svg+xml,%0A%3Csvg id='add_new_icon' data-name='add new icon' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath id='Path_168' data-name='Path 168' d='M16,9.143H9.143V16H6.857V9.143H0V6.857H6.857V0H9.143V6.857H16Z' fill='%239637f1'/%3E%3C/svg%3E%0A");
						background-repeat: no-repeat;
						background-position: 25px center;
						font-size: rem(14px);
						font-weight: 600;
						color: #9637f1;
						border: 1px solid #ccd4e0;
						border-radius: 8px;
						padding: rem(17px) rem(26px);
						padding-left: rem(55px);
						svg {
							fill: var(--primary);
						}
						@media screen and (max-width: 1199px) {
							padding: rem(14px) rem(20px);
							padding-left: rem(30px);
							background-position: 8px center;
						}
						@media screen and (min-width: 1025px) {
							&:hover {
								border-color: var(--primary);
							}
						}
					}
				}
			}
		}
	}
	nav {
		position: fixed;
		left: -200%;
		background: #f3f3f6;
		width: 100%;
		height: 100%;
		top: 55px;
		transition: all 0.5s ease;
		z-index: 999;
		margin-left: 0;
		padding: 0 rem(20px);
		padding-top: rem(20px);
		padding-bottom: 100px;
		overflow-y: auto;
		.search {
			input {
				background-color: #fff;
				padding: rem(12px) rem(24px);
				padding-left: 55px;
				border-radius: 6px;
				background-image: url("data:image/svg+xml,%0A%3Csvg id='search_icon' data-name='search icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath id='Path_167' data-name='Path 167' d='M12.864,11.321h-.813l-.288-.278a6.7,6.7,0,1,0-.72.72l.278.288v.813L16.467,18,18,16.467Zm-6.175,0A4.631,4.631,0,1,1,11.321,6.69,4.625,4.625,0,0,1,6.69,11.321Z' fill='%23d0d0dd'/%3E%3C/svg%3E%0A");
				background-repeat: no-repeat;
				background-position: 16px center;
				max-height: 52px;
				border: 2px solid transparent;

				color: var(--secondary);
				&::placeholder {
					color: var(--secondary);
				}
			}
		}
		.newCompaign {
			background-image: url("data:image/svg+xml,%0A%3Csvg id='add_new_icon' data-name='add new icon' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath id='Path_168' data-name='Path 168' d='M16,9.143H9.143V16H6.857V9.143H0V6.857H6.857V0H9.143V6.857H16Z' fill='%23253858'/%3E%3C/svg%3E%0A");
			background-repeat: no-repeat;
			background-position: 25px center;
			color: #253858;
			font-size: rem(20px);
			font-weight: 700;
			display: block;
			padding: 22px 0 22px 58px;
			border-bottom: 1px solid #d8d8d8;
			position: relative;
			&:after {
				content: '';
				position: absolute;
				width: 20px;
				height: 20px;
				background-repeat: no-repeat;
				background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.414' height='14.828' viewBox='0 0 8.414 14.828'%3E%3Cpath id='Path_934' data-name='Path 934' d='M1,1,7,7l6-6' transform='translate(0.414 14.414) rotate(-90)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}

			svg {
				fill: var(--primary);
			}
		}
		.notification {
			position: relative;
			display: flex;
			align-items: center;
			color: #253858;
			font-weight: 700;
			font-size: rem(20px);
			padding: 22px 0 22px 18px;
			border-bottom: 1px solid #d8d8d8;
			position: relative;
			&:after {
				content: '';
				position: absolute;
				width: 20px;
				height: 20px;
				background-repeat: no-repeat;
				background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.414' height='14.828' viewBox='0 0 8.414 14.828'%3E%3Cpath id='Path_934' data-name='Path 934' d='M1,1,7,7l6-6' transform='translate(0.414 14.414) rotate(-90)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
			span {
				position: absolute;
				width: 24px;
				height: 24px;
				border-radius: 100%;
				background: #9637f1;
				right: 40px;
				// display: flex;
				// align-items: center;
				// justify-content: center;
				@include flex(center, center);
				color: #fff;
				font-size: 12px;
				font-weight: 700;
			}
			svg {
				width: 20px;
				margin-right: rem(25px);
			}
		}
	}
	.checkbox {
		padding: 0;
	}

	&.vue-fixed-header--isFixed {
		box-shadow: -1px 6px 13px -6px rgba(0, 0, 0, 0.34);
		-webkit-box-shadow: -1px 6px 13px -6px rgba(0, 0, 0, 0.34);
		-moz-box-shadow: -1px 6px 13px -6px rgba(0, 0, 0, 0.34);
		padding-top: rem(15px);
		padding-bottom: rem(15px);
	}
	.settingIcon {
		position: absolute;
		right: 5px;
		top: 50%;
		transform: translateY(-50%);
		svg {
			width: 22px;
		}
	}
}
.menu-active {
	header {
		background: #f3f3f6;
		nav {
			top: 51px;
			left: 0px;
			transition: all 0.5s ease;
		}
		.menuIcon {
			svg {
				&.menu {
					display: none;
				}
				&.arrow {
					display: block !important;
				}
			}
		}
		.logo {
			img {
				display: block !important;
			}
			p {
				display: none !important;
			}
		}
	}
}

@media screen and (max-width: 991px) {
	.d-none-lg {
		display: none !important;
	}
	.show-on-lg {
		display: block !important;
	}
}
@media screen and (max-width: 575px) {
	.d-none-sm {
		display: none !important;
	}
	.show-on-sm {
		display: block !important;
	}
}
</style>
