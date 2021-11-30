<template>
	<div class="filters">
		<!-- Dropdown -->
		<div class="d-flex">
			<div class="form-group">
				<v-select :options="filters.locations" v-model="locate" />
			</div>

			<div class="form-group">
				<v-select :options="filters.categories" v-model="category" />
			</div>
		</div>
		<!-- Search -->
		<div class="search">
			<form>
				<div class="form-group">
					<input
						type="text "
						class="form-control"
						placeholder="Search.."
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			locate: '',
			location: '',
			category: '',
		};
	},
	props: {
		filters: {
			type: Object | Array,
		},
		selected: String,
	},
	watch: {
		locate: function () {
			this.$emit('locationvalue', this.locate);
		},
		category: function () {
			this.$emit('categoryvalue', this.category);
		},
	},
	mounted() {
		// this.locate = this.filters.default.locations[0];
	},
};
</script>

<style lang="scss" scoped>
.filters {
	@include flex(center, space-between);
	padding-top: rem(10px);
	margin-bottom: rem(30px);
	@media screen and (max-width: 767px) {
		margin-bottom: rem(15px);
	}
	/deep/ {
		.v-select {
			margin-right: rem(16px);
			.v-select-toggle {
				position: relative;
				// width: 120px;
				width: 185px;
				min-width: 40px;
				align-items: center;
				justify-content: center;
				font-size: rem(14px) !important;
				color: var(--textPrimary) !important;
				font-weight: 700 !important;
				&::after {
					width: 8px;
					height: 14px;
					border: 0;
					background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.765' height='13.441' viewBox='0 0 7.765 13.441'%3E%3Cpath id='Path_210' data-name='Path 210' d='M4871.166,592.811l5.351,5.225-5.351,5.388' transform='translate(-4869.752 -591.396)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
					background-repeat: no-repeat;
					transform: rotate(90deg);
					position: relative;
					right: -10px;
				}
			}
			.v-dropdown-container {
				width: 160px;
				border-radius: 4px !important;
				ul {
					padding: 0;
					border: 2px solid var(--primary);
					width: 100%;
					border-radius: 4px !important;
					li {
						padding: 13px;
						color: var(--textPrimary);
						font-size: rem(14px);
						border: 0 !important;
					}
				}
			}
			&:hover {
				@media screen and (min-width: 1025px) {
					.v-select-toggle {
						opacity: 0.8;
					}
				}
			}
		}
	}
	.search {
		@media screen and (max-width: 767px) {
			width: 100%;
		}
		.form-group {
			margin: 0;
			input {
				background: #dedee5;
				padding: rem(12px) rem(24px);
				padding-left: 45px;
				border-radius: 8px;
				background-image: url("data:image/svg+xml,%0A%3Csvg id='search_icon' data-name='search icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath id='Path_167' data-name='Path 167' d='M12.864,11.321h-.813l-.288-.278a6.7,6.7,0,1,0-.72.72l.278.288v.813L16.467,18,18,16.467Zm-6.175,0A4.631,4.631,0,1,1,11.321,6.69,4.625,4.625,0,0,1,6.69,11.321Z' fill='%23A1A1A5'/%3E%3C/svg%3E%0A");
				background-repeat: no-repeat;
				background-position: 16px center;
				max-height: 40px;
				border: 2px solid transparent;
				color: rgba(82, 82, 82, 1);
				min-width: 350px;
				&::placeholder {
					color: rgba(82, 82, 82, 0.5);
				}
			}
		}
	}
}
</style>
