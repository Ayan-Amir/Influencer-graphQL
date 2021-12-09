<template>
	<div class="influencerCard card">
		<div class="influencerCard__image">
			<img
				:src="require(`@/assets/images/${influencer.image}`)"
				class="img-fluid"
				alt=""
			/>
		</div>
		<div class="influencerCard__detail">
			<div class="d-flex justify-content-between align-items-center">
				<h3 class="influencerCard__detail--title">
					{{ influencer.title }}
				</h3>
				<div class="influencerCard__detail--icon">
					<img
						:src="require(`@/assets/images/svg/${influencer.icon}`)"
						class="img-fluid"
						alt=""
					/>
				</div>
			</div>
			<span>{{ influencer.subTitle }}</span>
			<div class="d-flex justify-content-between align-items-center">
				<ul>
					<li class="logo">
						<img
							:src="
								require(`@/assets/images/svg/${influencer.logo}`)
							"
							alt=""
							class="img-fluid"
						/>
					</li>
					<li>
						{{ influencer.socialMedia }}
						<p>{{ influencer.popularity }}</p>
					</li>
				</ul>
				<a href="#" class="btn btn-primary">From 1.000 RON</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		influencer: {
			type: Object | Array,
		},
	},
};
</script>

<style lang="scss" scoped>
.influencerCard {
	margin-bottom: rem(20px);
	&__image {
		position: relative;
		overflow: hidden;
		img {
			width: 100%;
			transition: 0.5s ease-in-out all;
		}
		@media screen and (min-width: 1025px) {
			&:hover {
				cursor: pointer;
				img {
					transform: scale(1.2);
				}
			}
		}
	}
	&__detail {
		padding: rem(12px) rem(20px) rem(22px);
		&--title {
			font-size: rem(23px);
			color: var(--textPrimary);
			font-weight: 700;
			padding-right: 10px;
		}
		&--icon {
			width: 40px;
			min-width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			img {
				height: 100%;
				width: 100%;
			}
		}
		span {
			display: block;
			margin-top: -10px;
			font-size: rem(13px);
			color: #4c4f57;
			margin-bottom: 10px;
		}
		ul {
			list-style: none;
			display: flex;
			align-items: center;
			.logo {
				height: 38px;
				width: 38px;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 10px;
				img {
					height: 100%;
					width: 100%;
				}
			}
			li {
				font-size: 9px;
				color: #8998ac;
				p {
					margin: 0;
					font-size: rem(16px);
					font-weight: 500;
					color: #3b485a;
				}
			}
		}
		.btn.btn-primary {
			padding: 9px;
			font-size: 11px;
			width: auto;
			min-height: 37px;
			border-radius: 6px;
		}
	}
	@media screen and (max-width: 575px) {
		max-width: 375px;
		margin: auto auto rem(25px) auto;
	}
}
</style>
