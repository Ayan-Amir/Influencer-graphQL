<template>
	<div class="welcome">
        <div class="row justify-content-between">
            <div class="col-md-5">
                <h1>{{ title }}</h1>
                <p class="alertMessage">
                    {{message}}
                </p>
                <p class="subTitle">
                    {{ subTitle }}
                </p>
                <div class="button-row">
                    <a href="#" class="btn btn-primary">Ok, let’s do it</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="image">
                    <img
                        src="@/assets/images/influencers-vloggers.png"
                        class="img-fluid"
                        alt="blogger-img"
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
			title: 'Hi Rusu Anda',
			subTitle:'For us to send you money and set-up your bank account, you need to provide some personal details and accept our influencer agreement. Please have your identity card ready. ',
            message:'We value your privacy and we’ll always keep your personal data safe and secure.'
		};
	},
};
</script>

<style></style>
