<template>
	<div class="contentWrapper discoverDetail">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<div class="image">
						<img
							src="@/assets/images/palasMall.png"
							alt=""
							class="img-fluid"
						/>
					</div>
				</div>
				<div class="col-md-7">
					<div class="discoverDetail__info">
						<div class="discoverDetail__info--logo">
							<img
								src="@/assets/images/svg/palasLogo.svg"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="discoverDetail__info--title">
							<h1>Palas Mall</h1>
							<p>Iasi</p>
						</div>
					</div>
					<ul>
						<li v-for="(item, id) in listing" :key="id + 1">
							{{ item }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			listing: [
				'1. Ask for an offer',
				'2. Talk to us to establish the details',
				'3. Post a video story / picture on your Instagram account with our product and tag our page @ magic.bath.hombs',
				'4. Post a video story / picture on your Instagram account with our product and tag our page @ magic.bath.bombs',
				'5. Post a video story / picture on your Instagram account with our product and tag our page @ magic.bath.hombs',
				'6. Post a video story / photo on your Instagram account with the atmosphere of our location and tag our page @ magic.bath.bombs',
				'7. Post a video story / photo on your Instagram account with the atmosphere of our location and tag our page @ magic.bath.bombs',
				'8. Post a video story / photo on your Instagram account with the atmosphere of our location and tag our page @ magic.bath.bombs',
				'9. After at least 20 hours, take a screenshot of your posts and upload them to FameUp',
			],
		};
	},
	components: {},
};
</script>

<style lang="scss" scoped>
.discoverDetail {
	&.contentWrapper {
		@media screen and (min-width: 992px) {
			padding-top: rem(150px);
		}
	}
	.image {
		border-radius: 30px;
		overflow: hidden;
		@media screen and (max-width: 767px) {
			margin-bottom: rem(20px);
		}
	}
	&__info {
		display: flex;
		align-items: center;
		margin-bottom: rem(18px);
		&--logo {
			width: 77px;
			height: 77px;
			border-radius: 50%;
			overflow: hidden;
			img {
				height: 100%;
				width: 100%;
			}
		}
		&--title {
			margin-left: rem(16px);
			h1 {
				margin: 0;
			}
			p {
				font-size: rem(18px);
				font-weight: 500;
				color: var(--textPrimary);
				margin: 0;
			}
		}
	}
	ul {
		list-style: none;
		li {
			color: var(--textSecondary);
			font-size: rem(15px);
			font-weight: 400;
			font-family: $secondary-font;
		}
	}
}
</style>
