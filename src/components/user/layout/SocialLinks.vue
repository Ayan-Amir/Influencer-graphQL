<template>
	<ul class="socialLinks">
		<li v-for="item in linkItems" :key="item.index">
			<router-link :to="item.link" target="_blank">
				<img
					:src="require(`@/assets/images/svg/${item.icon}`)"
					class="img-fluid"
					:alt="item.title"
				/>
				{{ item.title }}
			</router-link>
		</li>
	</ul>
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
					link:"register/welcome"
				},
				{
					index: 2,
					icon: 'facebook-icon.svg',
					title: 'Facebook',
					link:"register/welcome"
				},
				{
					index: 3,
					icon: 'ios-icon.svg',
					title: 'Apple',
					link:"register/welcome"
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
