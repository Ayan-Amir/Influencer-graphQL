<template>
	<div id="app">
		<the-header />
		<main role="main">
			<router-view />
		</main>
	</div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
export default {
	name: 'App',
	components: {
		TheHeader,
	},
};
</script>

<style lang="scss"></style>
