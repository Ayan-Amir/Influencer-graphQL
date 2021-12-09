<template>
	<div class="container">
		<div class="influencerDetail">
			<div class="influencerDetail__left">
				<div class="influencerDetail__left--image">
					<img
						src="@/assets/images/iPhone-12.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="influencerDetail__right">
				<h1>Dorian Hâtz Popa</h1>
				<span class="influencerDetail__right--subTitle">Bucharest</span>
				<div class="row">
					<div class="col-md-6 col-xl-3">
						<ul class="influencerDetail__right--socialMedia">
							<li class="logo">
								<img
									src="@/assets/images/svg/socialLogo.svg"
									alt=""
									class="img-fluid"
								/>
							</li>
							<li>
								Instagram
								<p>2.000.000</p>
							</li>
						</ul>
					</div>
					<div class="col-md-6 col-xl-3">
						<ul class="influencerDetail__right--socialMedia">
							<li class="logo">
								<img
									src="@/assets/images/svg/socialLogo.svg"
									alt=""
									class="img-fluid"
								/>
							</li>
							<li>
								Instagram
								<p>2.000.000</p>
							</li>
						</ul>
					</div>
					<div class="col-md-6 col-xl-3">
						<ul class="influencerDetail__right--socialMedia">
							<li class="logo">
								<img
									src="@/assets/images/svg/socialLogo.svg"
									alt=""
									class="img-fluid"
								/>
							</li>
							<li>
								Instagram
								<p>2.000.000</p>
							</li>
						</ul>
					</div>
					<div class="col-md-6 col-xl-3">
						<ul class="influencerDetail__right--socialMedia">
							<li class="logo">
								<img
									src="@/assets/images/svg/socialLogo.svg"
									alt=""
									class="img-fluid"
								/>
							</li>
							<li>
								Instagram
								<p>2.000.000</p>
							</li>
						</ul>
					</div>
				</div>
				<ul class="influencerDetail__right--hashtags">
					<li>#newpost.</li>
					<li>#influencer.</li>
					<li>#blogger.</li>
					<li>#digitalmarketing.</li>
					<li>#fashionblogger.</li>
				</ul>
				<p>
					Dorian Hâtz Popa August 7, 1988, Constanța, Romanian
					vlogger, composer, dancer and singer. He became known in
					2011, with his appearance in the series Bet with life with
					his colleagues from Lala Band, where he played Andrei
					Anghel, a series that received the award for “best debut” at
					the VIP Awards Gala.
				</p>
				<div class="influencerDetail__right--btnWrapper">
					<h2>Price: 1.000 RON</h2>
					<div class="inline-btns">
						<a href="#" class="btn btn-primary">Buy</a>
						<a href="#" class="btn btn-primary">Message</a>
					</div>
				</div>
				<div class="d-flex align-items-center mt-3">
					<div class="icon">
						<img
							src="@/assets/images/icons/avatar.png"
							alt=""
							class="img-fluid"
						/>
					</div>
					<span>Sep 10, 2021</span>
				</div>
				<div class="row mt-3">
					<div class="col-md-8">
						<div class="image">
							<img
								src="@/assets/images/happyHopes.png"
								alt=""
								class="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.influencerDetail {
	display: flex;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
	&__left {
		flex: 0 0 450px;
		max-width: 450px;
		margin-right: rem(32px);
		@media screen and (max-width: 1199px) {
			flex: 0 0 265px;
			max-width: 265px;
		}
		@media screen and (max-width: 991px) {
			flex: 0 0 215px;
			max-width: 215px;
		}
		@media screen and (max-width: 767px) {
			margin: auto;
		}
	}
	&__right {
		flex: 1;
		margin-top: rem(32px);
		h1 {
			margin-bottom: rem(6px);
		}
		&--subTitle {
			display: block;
			font-size: rem(18px) !important;
			font-weight: 500 !important;
			color: var(--textPrimary) !important;
			font-family: $secondary-font;
			margin-bottom: rem(18px);
		}
		&--socialMedia {
			list-style: none;
			display: flex;
			align-items: center;
			padding: rem(14px) rem(12px);
			background: #fff;
			border-radius: 12px;
			@media screen and (max-width: 1199px) {
				margin-bottom: rem(20px) !important;
			}
			.logo {
				height: 39px;
				width: 39px;
				min-width: 39px;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 10px;
				img {
					height: 100%;
					width: 100%;
				}
			}
			li {
				font-size: 11px;
				color: #8998ac;
				p {
					margin: 0;
					font-size: rem(18px);
					font-weight: 500;
					color: #3b485a;
				}
			}
		}
		&--hashtags {
			margin: rem(12px) 0;
			list-style: none;
			display: flex;
			li {
				font-size: rem(18px);
				font-weight: 500;
				color: var(--textPrimary);
				margin-right: 6px;
			}
		}
		&--btnWrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			@media screen and (max-width: 500px) {
				flex-direction: column;
				h2 {
					margin-bottom: rem(16px);
				}
			}
		}
		p {
			font-size: rem(14px);
			font-family: $secondary-font;
			margin-bottom: rem(28px);
		}
		h2 {
			font-size: rem(27px);
		}
		.inline-btns {
			display: flex;
			.btn.btn-primary {
				min-height: 40px;
				width: 120px;
				padding: 10px;
				font-size: rem(14px);
				border-radius: 6px;
				&:not(:last-child) {
					margin-right: 8px;
				}
			}
		}
		.icon {
			height: 50px;
			width: 50px;
			background: #1997cc;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 11px;
		}
		span {
			font-size: rem(14px);
			font-weight: 600;
			color: var(--primary);
		}
	}
}
</style>
