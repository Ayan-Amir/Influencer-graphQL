<template>
	<validation-provider :name="name" mode="eager" :rules="rules" v-slot="{ valid, errors }">
		<b-form-group>
			<div class="profilePhoto">
				<b-form-file
					:state="errors[0] ? false : valid ? true : null"
					ref="file-input"
					class="mb-2"
					@change="upload"
				></b-form-file>
				<b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
			</div>
		</b-form-group>
	</validation-provider>
</template>

<script>
export default {
	props: {
		name: String,
		rules: String,
	},
	methods: {
		upload: function (e) {
			let wrapper = e.target.parentNode;
			wrapper.classList.add('upload');
			let img = wrapper.querySelector('img');
			if (img) {
				img.remove();
			}
			img = document.createElement('img');
			img.src = URL.createObjectURL(e.target.files[0]);
			wrapper.appendChild(img);
			this.$emit('input', e.target.files[0]);
		},
	},
};
</script>

<style lang="scss" scoped>
.profilePhoto {
	/deep/.custom-file {
		position: relative;
		width: rem(167px);
		height: rem(167px);
		border-radius: 18px;
		overflow: hidden;
		background: #e8e8f0;
		border: 2px solid transparent;
		transition: 0.5s ease all;
		@media screen and (min-width: 1025px) {
			&:hover {
				border-color: var(--primary);
			}
		}
		&::before {
			position: absolute;
			content: '';
			width: 59px;
			height: 145px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='59' height='134' viewBox='0 0 59 134'%3E%3Ctext id='_' data-name='+' transform='translate(0 99)' fill='%239637f1' font-size='98' font-family='NunitoSans-Black, Nunito Sans' font-weight='800'%3E%3Ctspan x='0' y='0'%3E+%3C/tspan%3E%3C/text%3E%3C/svg%3E%0A");
			background-repeat: no-repeat;
		}
		.custom-file-label {
			opacity: 0;
			visibility: hidden;
			display: none;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			z-index: 1;
			position: relative;
		}
		input[type='file'] {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			opacity: 0;
			cursor: pointer;
			z-index: 2 !important;
			span {
				display: none;
				opacity: 0;
			}
			&::-webkit-file-upload-button {
				opacity: 0;
				visibility: hidden;
				display: none;
			}
		}
	}
	.invalid-feedback {
		position: static !important;
	}
}
</style>
