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
import TheHeader from '@/components/user/layout/TheHeader.vue';
export default {
	name: 'DashboardLayout',
	components: {
		TheHeader,
	},
};
</script>

<style lang="scss"></style>
