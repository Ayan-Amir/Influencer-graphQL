<template>
	<div class="row justify-content-between">
		<div class="col-md-5">
			<h1>{{ title }}</h1>
			<p class="subTitle">
				{{ subTitle }}
			</p>
			<div>
				<div class="pictureBox">
					<input type="file" name="file" @change="upload" />
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="image">
				<img
					src="@/assets/images/influencers-vloggers.png"
					class="img-fluid"
					alt="blogger-img"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import SocialLinks from '@/components/user/layout/SocialLinks.vue';
export default {
	data() {
		return {
			title: 'Welcome',
			subTitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
		};
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
	components: { SocialLinks },
};
</script>

<style lang="scss" scoped>
.pictureBox {
	position: relative;
	width: 167px;
	height: 167px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 18px;
	overflow: hidden;
	background: #e8e8f0;
	&::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-image: url('../../../assets/images/icons/plus-icon.png');
		background-repeat: no-repeat;
	}
	/deep/ img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	input[type='file'] {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
		cursor: pointer;
	}
}
</style>
