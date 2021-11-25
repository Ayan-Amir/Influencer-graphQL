<template>
	<div class="offerDetail container">
		<div class="row col-gap-40 align-items-center mb-3">
			<div class="col-md-6">
				<div class="image">
					<img
						src="@/assets/images/offer.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-6">
				<h1>Extra 30% off any purchase</h1>
				<div class="offerDetail__purchase">
					<div class="offerDetail__purchase--brandLogo">
						<img
							src="@/assets/images/brandlogo/logo.png"
							alt=""
							class="img-fluid"
						/>
					</div>
					<p>FoodChef <span>Bucharest</span></p>
				</div>
				<span>Extra 30% off any purchase.</span>
				<div class="requestOffer">
					<router-link to="#" class="btn btn-primary"
						>Request offer
					</router-link>
					<div class="requestOffer__time">
						Ends in: 356 h
						<span>4 Left</span>
					</div>
				</div>
			</div>
		</div>
		<p>How to get this free offers?</p>
		<h2>Post 4 stories on your Instagram</h2>
		<h3>1. One video/phone story with our product</h3>
		<span>Tap to view examples:</span>
		<div class="row products">
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
		</div>
		<h3>2. One video/phone story with our product</h3>
		<span>Tap to view examples:</span>
		<div class="row products">
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-3">
				<div class="image">
					<img
						src="@/assets/images/offers.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
		</div>
		<h3>Follow the steps:</h3>
		<ul>
			<li>1. Ask for an offer</li>
			<li>2. Talk to us to establish the details</li>
			<li>
				3. Post a video story / picture on your Instagram account with
				our product and tag our page @ magic.bath.hombs
			</li>
			<li>
				4. Post a video story / picture on your Instagram account with
				our product and tag our page @ magic.bath.bombs
			</li>
			<li>
				4. Post a video story / picture on your Instagram account with
				our product and tag our page @ magic.bath.bombs
			</li>
			<li>
				4. Post a video story / picture on your Instagram account with
				our product and tag our page @ magic.bath.bombs
			</li>
			<li>
				4. Post a video story / picture on your Instagram account with
				our product and tag our page @ magic.bath.bombs
			</li>
			<li>
				4. Post a video story / picture on your Instagram account with
				our product and tag our page @ magic.bath.bombs
			</li>
			<li>
				9. After at least 20 hours, take a screenshot of your posts and
				upload them to FameUp
			</li>
		</ul>
		<router-link to="#" class="btn btn-primary">Request offer </router-link>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.offerDetail {
	.image {
		height: 225px;
		border-radius: 30px;
		overflow: hidden;
	}
	p {
		font-size: rem(18px);
		font-weight: 500;
		color: var(--textPrimary);
		font-family: $secondary-font;
		margin: 0;
	}
	span {
		font-size: rem(15px);
		color: #77838f;
		font-family: $secondary-font;
	}
	.products {
		margin: rem(18px) 0;
		.col-md-3 {
			padding-left: 0;
			padding-right: 0;
		}
		.image {
			height: 345px;
			width: 295px;
			border-radius: 28px;
		}
	}
	&__purchase {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		&--brandLogo {
			margin-right: 10px;
			width: 55px;
			height: 55px;
			border-radius: 50%;
			overflow: hidden;
		}
		p span {
			display: block;
			font-size: rem(14px);
			font-weight: 400;
			color: #9798b4;
			margin: 0;
		}
	}
	.btn.btn-primary {
		min-height: 40px;
		width: 142px;
		padding-top: 6px;
		padding-bottom: 8px;
		font-size: rem(14px);
		font-weight: 700;
		border-radius: 8px;
	}
	.requestOffer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: rem(18px);
		&__time {
			position: relative;
			font-family: $primary-font;
			font-size: rem(14px);
			color: #9798b4;
			span {
				color: #9798b4;
				margin-left: rem(22px);
			}
			&::before {
				content: '';
				position: absolute;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='time' width='16.141' height='16.141' viewBox='0 0 16.141 16.141'%3E%3Cpath id='Path_64' data-name='Path 64' d='M8.062,0a8.071,8.071,0,1,0,8.079,8.071A8.067,8.067,0,0,0,8.062,0Zm.008,14.527a6.456,6.456,0,1,1,6.456-6.456A6.455,6.455,0,0,1,8.071,14.527Zm.4-10.492H7.263V8.878L11.5,11.42l.605-.993L8.474,8.272Z' fill='%239798b4'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				height: 17px;
				width: 17px;
				top: 50%;
				transform: translateY(-50%);
				left: -24px;
			}
		}
	}
	h2 {
		font-size: rem(25px);
		color: var(--primary);
		font-family: $secondary-font;
		font-weight: 600;
		margin: 10px 0;
	}
	h3 {
		font-weight: 500;
	}
	ul {
		list-style: none;
		margin-bottom: rem(20px);
		li {
			font-family: $secondary-font;
			font-size: rem(15px);
			font-weight: 500;
			color: #77838f;
		}
	}
}
</style>
