<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'App',

	methods: {
		...mapActions({
			clearAlert: 'alert/clear',
		}),
	},
};
</script>

<style lang="scss"></style>
