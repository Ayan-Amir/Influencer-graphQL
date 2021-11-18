<template>
	<div class="profilePhoto">
		<input type="file" name="file" @change="upload" />
	</div>
</template>

<script>

export default {

	data() {
		
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
		},
	},
};
</script>

<style lang="scss" scoped>
.profilePhoto {
	position: relative;
	width: rem(167px);
	height: rem(167px);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 18px;
	overflow: hidden;
	background: #e8e8f0;
	border:2px solid transparent;
	transition: .5s ease all;
	@media screen and (min-width:1025px){
		&:hover{
			border-color:var(--primary);
		}
	}
	&::before {
		position: absolute;
		content: '';
		width:49px;
		height:49px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-image: url('../../assets/images/icons/plus-icon.png');
		background-repeat: no-repeat;
	}
	/deep/ img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		z-index:1;
	}
	input[type='file'] {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
		cursor: pointer;
		z-index:2;
	}
}
</style>
