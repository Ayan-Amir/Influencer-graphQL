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
		TheHeader: () => import(/* webpackChunkName: "theHeader" */ '@/components/layout/TheHeader2.vue'),
	},
};
</script>

<style lang="scss"></style>
