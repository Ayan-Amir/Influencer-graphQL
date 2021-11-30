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
							<a href="#" class="menuIcon d-none show-on-md">
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
							</router-link>
							<nav>
								<ul>
									<li>
										<router-link to="/user"
											>Dashboard</router-link
										>
									</li>
									<li>
										<router-link to="/user/offers"
											>Free offers</router-link
										>
									</li>
									<li>
										<router-link to="/user/discover"
											>Discover</router-link
										>
									</li>
								</ul>
							</nav>
						</div>
						<div class="right-side">
							<ul class="list-unstyled">
								<!-- Notification -->
								<li class="notifaction_Wrapper hide-on-md">
									<router-link
										to="/user/notifications"
										class="notification"
									>
										<svg-icon
											icon-id="notiffication_icon"
											icon-viewbox="0 0 20 22"
										>
										</svg-icon>
										<span></span>
									</router-link>
								</li>
								<!-- Dropdown -->
								<li class="hide-on-md">
									<router-link to="/user/edit-profile">
										<div class="userProfile">
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
										</div>
									</router-link>
								</li>
							</ul>
						</div>
						<!-- Setting Icon on Responsive -->
						<div class="settingIcon d-none show-on-md">
							<router-link to="#">
								<svg-icon
									icon-id="setting"
									icon-viewbox="0 0 23.469 25.246"
								>
								</svg-icon>
							</router-link>
						</div>
						<!-- Menu on mobile -->
						<nav class="d-none show-on-md">
							<div>
								<!-- Mobile Search -->
								<div class="search">
									<input
										type="text"
										class="form-control"
										placeholder="Search Everything"
									/>
								</div>
								<!-- Mobile Main links -->
								<ul>
									<li>
										<router-link to="#"
											>Dashboard</router-link
										>
									</li>
									<li>
										<router-link to="/user/free-offer"
											>Free offers</router-link
										>
									</li>
									<li>
										<router-link to="/user/discover"
											>Discover</router-link
										>
									</li>
								</ul>
								<!-- Mobile Notification -->
								<a href="#" class="notification">
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
						max-width: 160px;
					}
				}
				@media screen and (max-width: 767px) {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
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
						position: relative;
						&:after {
							content: '';
							position: absolute;
							height: rem(65px);
							width: 1px;
							background: #eff4f6;
							right: 0;
							top: 50%;
							transform: translateY(-50%);
						}
						margin-right: rem(15px) !important;
						padding-right: rem(20px);
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
			.userProfile {
				display: flex;
				align-items: center;
				font-weight: 500;
				color: var(--textPrimary);
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
		}
	}
	nav {
		ul {
			list-style: none;
			@include flex(center, start);
			margin-left: rem(55px);
			li {
				&:not(:last-child) {
					margin-right: rem(25px);
				}
				a {
					font-size: rem(14px);
					color: var(--textPrimary);
					font-weight: 600;
					@media screen and (min-width: 1025px) {
						&:hover {
							color: var(--primary);
						}
					}
					&.router-link-exact-active {
						color: var(--primary);
						font-weight: 900;
					}
				}
			}
			@media screen and (max-width: 991px) {
				margin-left: rem(35px);
			}
		}
	}
	@media screen and (max-width: 767px) {
		nav {
			position: fixed;
			left: -200%;
			background: #f3f3f6;
			width: 100%;
			height: 100%;
			top: 65px;
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
			.notification {
				position: relative;
				display: flex;
				align-items: center;
				color: #253858;
				font-weight: 700;
				font-size: rem(20px);
				padding: 20px 0;
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
			ul {
				flex-direction: column;
				align-items: flex-start;
				margin: 0;
				li {
					position: relative;
					padding: 20px 0;
					width: 100%;
					border-bottom: 1px solid #d8d8d8;
					&:not(:last-child) {
						margin: 0;
					}
					a {
						display: block;
						font-size: rem(20px);
						font-weight: 700;
					}
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
				}
			}
		}
	}
	.checkbox {
		padding: 0;
	}
	@media screen and (max-width: 767px) {
		padding-top: rem(50px);
		padding-bottom: rem(50px);
	}
	&.vue-fixed-header--isFixed {
		box-shadow: -1px 6px 13px -6px rgba(0, 0, 0, 0.34);
		-webkit-box-shadow: -1px 6px 13px -6px rgba(0, 0, 0, 0.34);
		-moz-box-shadow: -1px 6px 13px -6px rgba(0, 0, 0, 0.34);
		padding-top: rem(15px);
		padding-bottom: rem(15px);
		@media screen and (max-width: 767px) {
			padding-top: rem(35px);
			padding-bottom: rem(35px);
		}
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
	}
}

@media screen and (max-width: 767px) {
	.d-none-md {
		display: none !important;
	}
	.show-on-md {
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
