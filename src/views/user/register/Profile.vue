<template>
	<div class="myProfile">
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
                             v-model="selected" :options="options"
                        />
                    </div>
                    <div class="button-row">
                        <button type="button" class="btn btn-primary">
                            Login to Continue
                        </button>
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
            options: [
            { value: null, text: 'Please select an option' },
            { value: 'a', text: 'This is First option' },
            { value: 'b', text: 'Selected Option' },
            ]
		};
	},
};
</script>
<style lang="scss">
.LoginRegister{
    .myProfile{
        .image{
            margin-left:-20px;
        }
        form{
            max-width:100%;
        }
        .form-control{
            height:42px;
            border-radius: 10px;
            padding-left:rem(15px);
        }
    }
}
    
</style>
    