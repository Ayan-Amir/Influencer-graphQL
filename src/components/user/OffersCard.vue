<template>
	<div class="offerCard card">
		<div class="offerCard__image">
			<img
				:src="`${$config.IMG_HOST}/304x206/${offer.image}`"
				class="img-fluid"
				alt=""
			/>
			<span class="timeValue">{{ time }}</span>
		</div>
		<div class="offerCard__detail">
			<div class="d-flex justify-content-between">
				<a href="#" class="offerCard__detail--title">{{
					offer.description
				}}</a>
				<div class="offerCard__detail--brandLogo">
					<img
						:src="`${$config.IMG_HOST}/40x40/${offer.logo}`"
						class="img-fluid"
						alt=""
					/>
				</div>
			</div>
			<div class="offerCard__detail--watcher">
				<router-link
					:to="`offer/${offer.id}/${name}`"
					class="btn btn-primary small"
				>
					<svg-icon
						class="arrow"
						icon-id="watch_icon"
						icon-viewbox="0 0 11.999 9"
					>
					</svg-icon>
					View Offer
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			time: '',
			name: this.offer.name,
		};
	},
	props: {
		offer: {
			type: Object | Array,
		},
	},
	methods: {
		hhmmss: function () {
			let value = this.offer.expirationDate;
			// let value = 72224564652;
			const sec = parseInt(value);
			let d = Math.floor(sec / (3600 * 24));
			let h = Math.floor((sec % (3600 * 24)) / 3600);
			let m = Math.floor((sec % 3600) / 60);
			let s = Math.floor(sec % 60);

			let dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
			let hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
			let mDisplay =
				m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
			let sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
			return dDisplay + hDisplay + mDisplay + sDisplay;
		},
		url: function () {
			let name = this.name.replace(' ', '-').toLowerCase();
			return name;
		},
	},
	mounted() {
		setInterval(() => {
			this.offer.expirationDate -= 1;
			this.hhmmss();
			this.time = document.querySelector('.timeValue').innerHTML =
				this.hhmmss();
		}, 1000);

		this.url();
		this.name = this.url();
	},
};
</script>

<style lang="scss" scoped>
.offerCard {
	$self: &;
	margin-bottom: rem(25px);
	&__image {
		position: relative;
		overflow: hidden;
		img {
			width: 100%;
			transition: 0.5s ease-in-out all;
		}
		span {
			position: absolute;
			color: #fff;
			bottom: 22px;
			left: 42px;
			&:before {
				content: '';
				position: absolute;
				width: 20px;
				height: 20px;
				background-image: url("data:image/svg+xml,%3Csvg id='time' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath id='Path_115' data-name='Path 115' d='M7.992,0A8,8,0,1,0,16,8,8,8,0,0,0,7.992,0ZM8,14.4A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4ZM8.4,4H7.2V8.8l4.2,2.52.6-.984L8.4,8.2Z' fill='%23fff'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				left: -25px;
				top: 50%;
				transform: translateY(-50%);
			}
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
		padding: rem(15px);
		padding-bottom: rem(22px);
		background: #fff;
		&--title {
			font-size: rem(17px);
			color: var(--textPrimary);
			font-weight: 700;
			line-height: 1.3;
			padding-right: 10px;
			@include truncate(2);
		}
		&--brandLogo {
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
		&--watcher {
			@include flex(center, space-between);
			padding-top: rem(15px);
			.btn {
				padding: 11px 15px;
				svg {
					width: 12px;
					margin-right: 7px;
				}
			}
		}
	}
	@media screen and (max-width: 575px) {
		max-width: 375px;
		margin: auto auto rem(25px) auto;
	}
}
</style>
