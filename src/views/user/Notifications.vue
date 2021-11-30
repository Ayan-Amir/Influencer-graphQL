<template>
	<div class="notification container">
		<h1>Notification</h1>
		<h3>Today</h3>
		<div v-if="$apollo.loading">
			<base-skeleton-loader
				type="notification"
				:count="8"
			></base-skeleton-loader>
		</div>
		<router-link
			to=""
			v-for="notification in this.notifications"
			:key="notification.id"
		>
			<div class="card notificationCard">
				<div>
					<div class="notificationCard__image">
						<img
							:src="`${$config.IMG_HOST}/50x50/${notification.image}`"
							alt=""
							class="img-fluid"
						/>
					</div>
					<div class="notificationCard__title">
						{{ hhmmss(notification.timestamp) }} Ago
						<p>{{ notification.title }}</p>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			notifications: [],
		};
	},
	apollo: {
		notifications: {
			query: require('../../graphql/notifications.gql'),
		},
	},
	methods: {
		activeCard: function () {
			let items = document.querySelectorAll('.notificationCard.card');
			items.forEach((item) => {
				items[0].classList.add('active');
				item.addEventListener('click', () => {
					items.forEach((i) => i.classList.remove('active'));
					item.classList.add('active');
				});
			});
		},
		hhmmss: function (value) {
			const sec = parseInt(value, 10);
			let month = Math.floor((sec % 31536000) / 2628000);
			let d = Math.floor(((sec % 31536000) % 2628000) / 86400);
			let h = Math.floor((((sec % 31536000) % 2628000) % 86400) / 3600);
			let m = Math.floor((((sec % 31536000) % 86400) % 3600) / 60);

			let monthDisplay =
				month > 0
					? month + (month == 1 ? ' month, ' : ' months, ')
					: '';
			let dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
			let hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
			let mDisplay =
				m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes ') : '';
			return monthDisplay + dDisplay + hDisplay + mDisplay;
		},
	},
	mounted() {
		this.activeCard();
	},
};
</script>

<style lang="scss" scoped>
.notification {
	h3 {
		margin-bottom: rem(16px);
	}
	.notificationCard {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: rem(13px) rem(25px);
		border-radius: 16px;
		margin-bottom: rem(15px);
		border: 2px solid transparent;
		transition: 0.4s ease all;
		cursor: pointer;
		@media screen and (min-width: 1025px) {
			&:hover {
				border: 2px solid var(--primary);
			}
		}
		&.active {
			border: 2px solid var(--primary);
		}
		> div {
			display: flex;
			align-items: flex-start;
		}
		&__image {
			width: 50px;
			height: 50px;
			overflow: hidden;
			border-radius: 50%;
			flex: 0 0 50px;
			img {
				height: 100%;
				width: 100%;
			}
		}
		&__title {
			font-size: rem(14px);
			font-weight: 400;
			margin-left: rem(18px);
			color: var(--textSecondary);
			flex: 1;
			p {
				display: block;
				font-size: rem(16px);
				font-weight: 400;
				color: var(--textPrimary);
				margin: 0;
				@include truncate(1);
				span {
					font-weight: 500;
				}
			}
		}
	}
}
</style>
