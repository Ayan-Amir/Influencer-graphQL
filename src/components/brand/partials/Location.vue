<template>
	<b-card no-body class="location">
		<b-card-header header-tag="header" role="tab">
			<b-button block v-b-toggle.accordion-2 variant="info"
				><p>Location</p>
				Entire country</b-button
			>
		</b-card-header>
		<b-collapse
			id="accordion-2"
			@shown="show('accordion-2')"
			@hide="hide('accordion-2')"
			accordion="my-accordion"
			role="tabpanel"
		>
			<b-card-body>
				<!-- dropdown -->
				<template v-if="this.loaded">
					<base-select
						:data="locations"
						initialValue="Entire Country"
					/>
				</template>
			</b-card-body>
		</b-collapse>
	</b-card>
</template>

<script>
export default {
	data() {
		return {
			locations: [],
			loaded: true,
		};
	},
	methods: {
		show(id) {
			let input = document.querySelector(`#${id}`).closest('.card');
			input.classList.add('active');
		},
		hide(id) {
			let input = document.querySelector(`#${id}`).closest('.card');
			input.classList.remove('active');
		},
	},
	// apollo: {
	// 	locations: {
	// 		query: require('../../../graphql/locations.gql'),
	// 		update(data) {
	// 			this.loaded = true;
	// 			return data.campaignFilterLimits.locations;
	// 		},
	// 		error() {
	// 			this.loaded = false;
	// 		},
	// 	},
	// },
};
</script>

<style lang="scss" scoped></style>
