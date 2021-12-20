<template>
	<validation-provider :name="name" mode="eager" :rules="rules" v-slot="{ valid, errors }">
		<b-form-group>
			<v-select
				placeholder="Gender"
				v-model="myGender"
				:options="options_arr"
				:state="errors[0] ? false : valid ? true : null"
			></v-select>
			<b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
		</b-form-group>
	</validation-provider>
</template>

<script>
export default {
	// props: {
	// 	options: Array,
	// 	initialValue: String,
	// },
	props: {
		value: [Number, String, Object],
		title: String,
		options: Array,
		rules: String,
		name: String,
		myGender: Object,
	},
	data() {
		return {
			// myGender: { value: null, text: 'Gender' },
			selectedValueData: null,
			selectedValue: null,
			options_arr: [],
			change: false,
		};
	},
	methods: {
		setOption() {
			this.options_arr = this.options;
		},
		setSelectedValue(val) {
			if (this.options_arr.length) {
				let valueObj = this.options_arr.find((option) => option.value == val);
				if (valueObj) {
					this.selectedValue = valueObj;
				} else {
					this.selectedValue = null;
				}
			} else {
				this.selectedValue = value;
			}
		},
	},
	created() {
		this.setOption();
		this.setSelectedValue(this.value);
	},
	computed: {},
	watch: {
		value: function (value) {
			this.setSelectedValue(value);
		},
		options: function () {
			this.setOption();
			this.setSelectedValue(this.value);
		},
		selectedValue: function () {
			this.$emit('input', this.selectedValue.value);
		},
	},
};
</script>

<style lang="scss" scoped></style>
