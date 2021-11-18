<template>
	<div class="row justify-content-between">
		<div class="col-md-5">
			<h1>{{ title }}</h1>
			<p class="subTitle">
				{{ subTitle }}
			</p>
			<form>
				<div class="form-group userName">
					<input
						type="text"
						class="form-control"
						placeholder="Username"
					/>
				</div>
				<div class="form-group email">
					<input
						type="text"
						class="form-control"
						placeholder="Email"
					/>
				</div>
				<div class="button-row">
					<button type="button" class="btn btn-primary">
						Login to Continue
					</button>
				</div>
				<div class="or"><span>or</span></div>
				<social-links />
			</form>
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
	components: { SocialLinks },
};
</script>

<style></style>
