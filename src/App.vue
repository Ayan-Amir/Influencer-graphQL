<template>
	<div id="app">
		<div class="">
			<div class="publicHeader"></div>
			<main role="main">
				<router-view />
			</main>
		</div>
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
