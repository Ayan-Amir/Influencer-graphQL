<template>
	<div v-if="alert.message != null" :class="'alert ' + alert.type">
		{{ alert.message }}
	</div>
</template>

<script>
export default {};
</script>

<style></style>
