<template>
	<div class="row justify-content-between">
		<div class="col-md-5">
			<h1>Welcome</h1>
			<p class="subTitle">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
				arcu tempor et tellus, lobortis interdu.
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
				<ul class="socialLinks">
					<li v-for="item in linkItems" :key="item.index">
						<a href="#" target="_blank">
							<img
								:src="
									require(`@/assets/images/svg/${item.icon}`)
								"
								class="img-fluid"
								:alt="item.title"
							/>
							{{ item.title }}
						</a>
					</li>
				</ul>
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
export default {
	data() {
		return {
			linkItems: [
				{
					index: 1,
					icon: 'google-icon.svg',
					title: 'Google',
				},
				{
					index: 2,
					icon: 'facebook-icon.svg',
					title: 'Facebook',
				},
				{
					index: 3,
					icon: 'ios-icon.svg',
					title: 'Apple',
				},
				{
					index: 4,
					icon: 'email-icon.svg',
					title: 'Email',
				},
			],
		};
	},
};
</script>

<style></style>
