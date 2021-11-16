<template>
	<div class="contentWrapper influencerActive">
		<div class="container">
			<div class="row col-gap-40 profile">
				<div class="col-md-4">
					<div class="card">
						<div class="profile__image">
							<img
								src="@/assets/images/profile-image.png"
								alt=""
								class="img-fluid"
							/>
						</div>
						<div class="profile__title">Ruby Von Rails</div>
						<p class="profile__subTitle">Influencer</p>
						<div class="button-row">
							<a href="#" class="btn btn-primary">Edit Profile</a>
						</div>
					</div>
					<div class="profile__seeStatistic">
						<p>See earnings statistics</p>
					</div>
					<div class="profile__statistic"></div>
				</div>
				<div class="col-md-8">right</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {},
};
</script>

<style lang="scss" scoped>
.influencerActive {
	.card {
		padding: rem(24px) rem(16px) rem(16px) rem(16px);
		border: 0;
		border-radius: 10px;
		text-align: center;
	}
	.profile {
		&__image {
			img {
				border-radius: 50%;
				overflow: hidden;
			}
			margin-bottom: rem(14px);
		}
		&__title {
			font-size: rem(18px);
			color: var(--textPrimary);
			font-weight: 700;
			margin-bottom: rem(4px);
		}
		&__subTitle {
			font-size: rem(16px);
			font-weight: 300;
			margin-bottom: rem(12px);
		}
		.button-row {
			margin: 0;
			.btn.btn-primary {
				font-size: rem(14px);
				padding-right: rem(24px);
				padding-left: rem(24px);
			}
		}
		&__seeStatistic {
			border-radius: 10px;
			margin: rem(16px) 0;
			padding: rem(16px) rem(14px);
			background: #fff;
			cursor: pointer;
			&:hover {
				p {
					&::before {
						content: '';
						right: -5px;
					}
				}
			}
			p {
				font-size: rem(16px);
				margin: 0;
				position: relative;

				&::before {
					transition: 0.5s ease all;
					position: absolute;
					content: '';
					width: 16px;
					height: 16px;
					background-image: url(../../assets/images/icons/Icon.png);
					top: 50%;
					right: 0;
					background-repeat: no-repeat;
					transform: translateY(-50%);
				}
			}
		}
		&__statistic {
			padding: rem(16px) rem(28px);
			border-radius: 10px;
			background: #fff;
		}
	}
}
</style>
