<template>
	<div class="profile">
        <div class="row align-items-center justify-content-between">
            <div class="col-md-6">
                <h1>{{ title }}</h1>
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="First name"
                                />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <v-select
                             v-model="selected" :options="BirthDate"
                        />
                    </div>
                    <div class="form-group">
                        <v-select
                             v-model="selected1" :options="Gender"
                        />
                    </div>
                    <div class="button-row">
                        <router-link to="payment-details" class="btn btn-primary">
                            Save
                        </router-link>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <div class="image">
                    <img
                        src="@/assets/images/young-woman-with-smartphone.png"
                        class="img-fluid"
                        alt="young-woman-with-smartphone-img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: 'My Profile',
            selectedValue: null,
            BirthDate: [
                { value: null, text: '1/ 12 / 2020' },
                { value: 'a', text: '2/ 12 / 2020' },
                { value: 'b', text: '3/ 12 / 2020' },
            ],
            Gender: [
                { value: null, text: 'Male' },
                { value: 'a', text: 'Female' },
                { value: 'b', text: 'Other' },
            ]
		};
	},
};
</script>
<style lang="scss">
    .LoginRegister{
        .contentWrapper{
            padding-top:0 !important;
        }
        .profile{
            width:100%;
        }
    }
</style>
    