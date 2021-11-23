<template>
	<div class="LoginRegister">
		<div class="container">
			<header role="banner">
				<div class="header__logo">
					<a href="#">
						<!-- logo for Desktop -->
						<img
							src="@/assets/images/svg/logo.svg"
							class="img-fluid hide-on-md"
							alt=" logo"
						/>
						<!-- logo for Mobile -->
						<img
							src="@/assets/images/svg/mob-logo.svg"
							class="img-fluid d-none show-on-md"
							alt=" logo"
						/>
					</a>
				</div>
			</header>
			<div class="contentWrapper">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.LoginRegister {
	min-height: 100vh;
	background: linear-gradient(90deg, #f3f3f6 50%, #be89f3 50%);
	// padding-bottom: rem(40px);
	@media screen and (max-width: 767px) {
		background: linear-gradient(0deg, #f3f3f6 64%, #be89f3 50%);
		padding-bottom: rem(15px);
	}
	header {
		padding: rem(45px) 0;
		padding-bottom: rem(25px);
		@media screen and (max-width: 767px) {
			padding-bottom: 10px;
			padding-top: rem(30px);
		}
	}
	.header__logo {
		color: red;
		/deep/ svg {
			width: 200px;
			height: auto;
			color: red;
		}
	}
	.container {
		@media screen and (min-width: 1200px) {
			max-width: 1110px !important;
		}
	}
	.contentWrapper {
		height: calc(100vh - 100px);
		@include flex(center, flex-start);
		padding-top: rem(35px);
		@media screen and (max-width: 767px) {
			> div {
				width: 100%;
			}
			padding-top: rem(20px);
			justify-content: center;
		}
	}
}
</style>
