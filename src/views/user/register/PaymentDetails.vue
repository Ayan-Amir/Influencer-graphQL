<template>
	<div class="paymentDetail">
        <div class="row justify-content-between">
            <div class="col-lg-5 col-md-6">
                <h1>{{ title }}</h1>
                <p class="alertMessage">{{message}}</p>
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
                        <input
                            type="text"
                            class="form-control"
                            placeholder="CNP"
                        />
                    </div>
                    <div class="form-group">
                        <v-select
                             v-model="selected" :options="BirthDate"
                        />
                    </div>
                    <div class="form-group">
                        <!-- Date Range Picker -->
                        <base-date-picker />
                    </div>
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="tell"
                            class="form-control"
                            placeholder="Phone"
                        />
                    </div>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <v-select
                                    v-model="selected" :options="Country"
                                />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                               <v-select
                                    v-model="selected" :options="Locality"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="button-row">
                        <router-link to="story-price" class="btn btn-primary">
                            Save
                        </router-link>
                    </div>
                </form>
            </div>
            <div class="col-lg-7 col-md-6">
                <div class="image">
                    <img
                        src="@/assets/images/payment-detail.png"
                        class="img-fluid"
                        alt="payment-detail.png-img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseDatePicker from '../../../components/base/BaseDatePicker.vue';
export default {
  components: { BaseDatePicker },
	data() {
		return {
			title: 'Payment details',
            message:'You must use the data from your identity card.',
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
            ],
            Country: [
                { value: null, text: 'Pakistan' },
                { value: 'a', text: 'Kuwait' },
                { value: 'b', text: 'America' },
            ],
            Locality: [
                { value: null, text: 'Newyork' },
                { value: 'a', text: 'peris' },
                { value: 'b', text: 'Newyork' },
            ]
		};
	},
};
</script>
<style lang="scss" scoped>
.LoginRegister{
    .paymentDetail{
        padding-top:rem(35px);
        width:100%;
        .alertMessage{
            color:var(--warning);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='28' viewBox='0 0 27 28'%3E%3Cg id='Group_1341' data-name='Group 1341' transform='translate(-108 -329)'%3E%3Cg id='Component_1_1' data-name='Component 1 – 1' transform='translate(108 329)'%3E%3Cpath id='Polygon_1' data-name='Polygon 1' d='M11.74,3.259a2,2,0,0,1,3.52,0L25.407,22.05A2,2,0,0,1,23.647,25H3.353a2,2,0,0,1-1.76-2.95Z' fill='%23eeae2b'/%3E%3C/g%3E%3Ctext id='_' data-name='!' transform='translate(119 351)' fill='%23fff' font-size='18' font-family='NunitoSans-Bold, Nunito Sans' font-weight='700'%3E%3Ctspan x='0' y='0'%3E!%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E");
        }
        @media screen and (max-width:767px){
            .image{
                max-width:450px;
            }
        }
    }
}
    
</style>
    