<template>
	<div class="quantityToggle">
		<button :disabled="value == 1 ? true : false" @click="decrement" class="decrement"></button>
		<input type="text" :value="`${sign}${value}${text}`" readonly />
		<button class="increament" @click="increment">&#xff0b;</button>
	</div>
</template>

<script>
export default {
	props: {
		price: [String, Number],
		text: String,
		sign: String,
	},
	data() {
		return {
			value: this.price,
		};
	},
	mounted() {},
	methods: {
		increment() {
			this.value++;
			this.$emit('input', String(this.value));
		},
		decrement() {
			if (this.value > 1) {
				this.value--;
				this.$emit('input', String(this.value));
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.quantityToggle {
	display: flex;
	align-items: center;
	margin: rem(20px) 0;
	@media screen and (max-width: 767px) {
		justify-content: space-around;
		margin: rem(20px) 0;
	}
	input {
		width: 135px;
		padding: 0 !important;
		border: 0 !important;
		text-align: center;
		font-size: rem(14px);
		font-weight: 400;
		color: var(--textPrimary);
		background: transparent;
		height: 28px;
		outline: none !important;
	}
	button {
		position: relative;
		padding: 0;
		width: 24px;
		height: 24px;
		min-width: 24px;
		border: 2px solid var(--primary);
		border-radius: 50%;
		background: #fff;
		cursor: pointer;
		// transition: all 0.5s ease;
		font-size: 0;
		&:before {
			content: '';
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
		&.decrement {
			&:before {
				background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='minus' class='svg-inline--fa fa-minus fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='rgba(150, 55, 241, 1)' d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'%3E%3C/path%3E%3C/svg%3E");
				background-repeat: no-repeat;
				width: 11px;
				height: 12px;
			}
		}
		&.increament {
			&:before {
				background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='plus' class='svg-inline--fa fa-plus fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='rgba(150, 55, 241, 1)' d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'%3E%3C/path%3E%3C/svg%3E");
				background-repeat: no-repeat;
				width: 12px;
				height: 14px;
			}
		}
		@media screen and (min-width: 1025px) {
			&:hover {
				background: var(--primary);
				color: #fff;
				&.decrement {
					&:before {
						background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='minus' class='svg-inline--fa fa-minus fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='white' d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'%3E%3C/path%3E%3C/svg%3E");
						background-repeat: no-repeat;
					}
				}
				&.increament {
					&:before {
						background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='plus' class='svg-inline--fa fa-plus fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='white' d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'%3E%3C/path%3E%3C/svg%3E");
						background-repeat: no-repeat;
					}
				}
			}
		}
	}
}
</style>
