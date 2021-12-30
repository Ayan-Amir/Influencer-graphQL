<template>
	<div class="dashboard">
		<the-header />
		<main role="main">
			<div class="contentWrapper">
				<router-view />
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'DashboardLayout',
	components: {
		TheHeader: () => import(/* webpackChunkName: "socialLinks.chunk" */ '@/components/user/layout/TheHeader.vue'),
	},
};
</script>

<style lang="scss"></style>
