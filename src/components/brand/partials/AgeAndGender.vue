<template>
	<b-card class="active" no-body>
		<b-card-header header-tag="header" role="tab">
			<b-button block v-b-toggle.accordion-1 variant="info"
				><p>Age and gender</p>
				A{{ ageStart }}
				-
				{{ ageEnd }}+ I All</b-button
			>
		</b-card-header>
		<b-collapse
			id="accordion-1"
			@shown="show('accordion-1')"
			@hide="hide('accordion-1')"
			visible
			accordion="my-accordion"
			role="tabpanel"
		>
			<b-card-body>
				<!-- radio buttopns -->
				<ul class="radio age">
					<li v-for="i in gender" :key="i.id">
						<label>
							<input type="radio" name="radio" />
							<span>{{ i.name }}</span>
						</label>
					</li>
				</ul>
				<!--End  radio buttopns -->
				<!-- Rang slider -->
				<div
					class="
						d-flex
						align-items-center
						justify-content-between
						mb-15
					"
				>
					<p class="heading m-0">Age</p>
					<span class="range"
						>{{ initialValue }} - {{ endValue }}</span
					>
				</div>
				<div class="multiSelectSlider customPadding">
					<base-range-slider
						:min="1"
						:max="80"
						:start="ageStart"
						:end="ageEnd"
						@rangeValue="selectedRangeValue"
					/>
				</div>
			</b-card-body>
		</b-collapse>
	</b-card>
</template>

<script>
export default {
	data() {
		return {
			initialValue: '18',
			endValue: '65',
			lstgender: [],
		};
	},
	props: {
		ageStart: Number,
		ageEnd: Number,
		gender: {
			type: Object | Array,
		},
	},
	methods: {
		UpdateAgeValue(e) {
			this.ageStart = e.minValue;
			this.ageEnd = e.maxValue;
		},
		show(id) {
			let input = document.querySelector(`#${id}`).closest('.card');
			input.classList.add('active');
		},
		hide(id) {
			let input = document.querySelector(`#${id}`).closest('.card');
			input.classList.remove('active');
		},
		selectedRangeValue(start, end) {
			this.initialValue = start;
			this.endValue = end;
		},
	},
};
</script>

<style lang="scss" scoped></style>
