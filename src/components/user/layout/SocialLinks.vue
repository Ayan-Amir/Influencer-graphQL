<template>
	<ul class="socialLinks">
		<li v-for="item in linkItems" :key="item.index">
			<a href="#" target="_blank">
				<img
					:src="require(`@/assets/images/svg/${item.icon}`)"
					class="img-fluid"
					:alt="item.title"
				/>
				{{ item.title }}
			</a>
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
