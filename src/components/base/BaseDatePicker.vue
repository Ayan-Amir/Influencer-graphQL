<template>
	<div >
		<b-form-datepicker id="example-datepicker" v-model="value"></b-form-datepicker>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	
};
</script>

<style lang="scss" scoped>
	
	/deep/.b-form-datepicker {
				padding: 0 !important;
				border: 0 !important;
				background: #fff !important;
			.dropdown-menu{
				width:auto;
			}
			.btn-outline-secondary{
				&:hover{
					background:var(--primary) !important;
					color:#fff !important;
					svg{
						fill:var(--primary) !important;
					}
				}
			}
			.btn {
				justify-content: start !important;
			}
			.form-control.text-muted {
				color: var(--textPrimary) !important;
				opacity:.5 !important;
				font-size: rem(14px) !important;
				height: 42px;
				border-radius: 12px;
				padding: 12px 25px;
				font-weight: 300 !important;
				display: flex;
				align-items: center;
				&.active {
					outline: none;
					box-shadow: none;
				}
			}
			&.b-form-btn-label-control {
				button.h-auto {
					padding: 0;
					position: absolute;
					min-height:42px !important;
					width:100% !important;
					&:after{
						width: 9px;
						height: 14px;
						background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.765' height='13.441' viewBox='0 0 7.765 13.441'%3E%3Cpath id='Path_210' data-name='Path 210' d='M4871.166,592.811l5.351,5.225-5.351,5.388' transform='translate(-4869.752 -591.396)' fill='none' stroke='%239637f1' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A");
						background-repeat: no-repeat;
						right: 19px;
						top: 50%;
						transform: translateY(-50%) rotate(90deg);
						border: 0;
						position: absolute;
						margin: 0;
					}
					&:focus {
						outline: none;
					}
					svg {
						display: none;
					}
				}
			}
			&.b-form-btn-label-control.form-control>.dropdown-menu {
				padding: 0 !important;
				transform: none !important;
				right: auto !important;
				@media screen and (max-width: 1199px) {
					left: -100px !important;
				}
				@media screen and (max-width: 1025px) {
					left: -120px !important;
				}
				@media screen and (max-width: 575px) {
					left: -20px !important;
				}
			}
			&.b-form-btn-label-control.form-control>.form-control {
				color: var(--textPrimary) !important;
				opacity:.5 !important;
				font-size: rem(14px) !important;
				height: 42px;
				border-radius: 12px;
				padding: 12px;
				font-weight: 300 !important;
				&.active {
					outline: none;
					box-shadow: none;
				}
			}
			.btn.active {
				color: #fff;
			}
			.b-calendar-grid-body,
			.b-calendar-grid-weekdays {
				padding: 10px;
			}
			.b-calendar-header {
				margin: 0;
				.form-control {
					height: 35px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 0;
				}
			}
			.b-calendar-nav {
				background: linear-gradient( to bottom, white 8%, white 8%, #f2f4f8 100%);
				margin: 0;
				button {
					background-color: var(--textSecondary);
					height: 35px;
					&:not(:last-child) {
						margin-right: rem(5px);
						background-color: transparent !important;
					}
					&:last-child {
						background-color: transparent !important;
					}
				}
			}
			.b-calendar-grid {
				&.form-control {
					border-radius: 0;
				}
			}
			footer {
				display: none;
			}
			.b-calendar {
				.b-calendar-grid-body {
					.col[data-date] {
						.btn{
							display: block;
							min-height:auto !important;
							margin: 3px auto;
    						padding: 8px 7px;
							&:before{
								display: none;
							}
						}
					}
				}
			}
			.b-calendar-header{
				display: none;
			}
			bdi{
				display: none;
			}
}
</style>