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
		<base-search />
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
	@media screen and (max-width:767px){
		margin-bottom:rem(15px);
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
}
</style>
