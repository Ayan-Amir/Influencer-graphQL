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
				<div class="influencerCard__detail--fileUpload">
					<input type="file" />
					<!-- <img
						:src="require(`@/assets/images/svg/${influencer.icon}`)"
						class="img-fluid"
						alt=""
					/> -->
				</div>
			</div>
			<span>{{ influencer.subTitle }}</span>
			<div class="d-flex justify-content-between align-items-center">
				<ul>
					<li class="icon">
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
				<router-link to="influencer-detail" class="btn btn-primary"
					>From 1.000 RON</router-link
				>
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
		&--fileUpload {
			width: 40px;
			min-width: 40px;
			height: 40px;
			border-radius: 50%;
			background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg id='share' transform='translate(-0.083 0.324)'%3E%3Ccircle id='Ellipse_5_copy_2' data-name='Ellipse 5 copy 2' cx='20' cy='20' r='20' transform='translate(0.083 -0.324)' fill='%239637f1' opacity='0.078'/%3E%3Cg id='share-2' data-name='share' transform='translate(13.332 11.951)'%3E%3Cpath id='Path_104' data-name='Path 104' d='M8,.959V11.112' transform='translate(-1.248 -0.959)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.744'/%3E%3Cpath id='Path_105' data-name='Path 105' d='M8,.959l3.8,3.324' transform='translate(-1.248 -0.959)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.705'/%3E%3Cpath id='Path_106' data-name='Path 106' d='M4.25,4.284,8.048.959' transform='translate(-1.296 -0.959)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.705'/%3E%3Cpath id='Path_107' data-name='Path 107' d='M1.333,9.241v4.415A2.592,2.592,0,0,0,3.865,16.3H12.3a2.592,2.592,0,0,0,2.532-2.649V9.241' transform='translate(-1.333 -0.854)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.705'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
			background-repeat: no-repeat;
			overflow: hidden;
			cursor: pointer;
			transition: 0.3s ease-in-out;
			&:hover {
				opacity: 0.8;
			}
			input {
				opacity: 0;
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
			.icon {
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
