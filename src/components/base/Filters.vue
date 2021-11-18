<template>
	<div class="filters">
		<!-- Dropdown -->
		<div class="dropdownWrapper">
			<b-dropdown text="Iasi" variant="white">
				<b-dropdown-item
					href="#"
					v-for="(list, index) in lists"
					:key="index + 1"
					>{{ list }}</b-dropdown-item
				>
			</b-dropdown>
			<b-dropdown text="All" variant="white">
				<b-dropdown-item
					href="#"
					v-for="(list, index) in lists2"
					:key="index + 1"
					>{{ list }}</b-dropdown-item
				>
			</b-dropdown>
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
import BaseSearch from './BaseSearch.vue';

export default {
	components: { BaseSearch },
	data() {
		return {
			lists: ['First Option', 'Second', 'Third'],
			lists2: ['First Option', 'Second', 'Third'],
		};
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
	.dropdownWrapper {
		@media screen and (max-width: 767px) {
			width: 100%;
			margin-bottom: rem(15px);
		}
		/deep/ {
			.dropdown {
				min-height: 40px;
				@media screen and (max-width: 767px) {
					width: 48%;
				}
				&:not(:last-child) {
					margin-right: rem(16px);
				}
				.dropdown-toggle {
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
