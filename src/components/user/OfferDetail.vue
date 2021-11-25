<template>
	<div>
		<div
			class="offers__details"
			v-for="(detail, i) in details"
			:key="i + 1"
		>
			<p>{{ detail.title }}</p>
			<h2>{{ detail.description }}</h2>
			<gallery v-if="detail.gallery" :gallery="details" />
			<h3>2. One video/phone story with our product</h3>
			<span>Tap to view examples:</span>
			<gallery />
			<h3>Follow the steps:</h3>
			<ul>
				<li>1. Ask for an offer</li>
				<li>2. Talk to us to establish the details</li>
				<li>
					3. Post a video story / picture on your Instagram account
					with our product and tag our page @ magic.bath.hombs
				</li>
				<li>
					4. Post a video story / picture on your Instagram account
					with our product and tag our page @ magic.bath.bombs
				</li>
				<li>
					5. Post a video story / picture on your Instagram account
					with our product and tag our page @ magic.bath.bombs
				</li>
				<li>
					6. Post a video story / picture on your Instagram account
					with our product and tag our page @ magic.bath.bombs
				</li>
				<li>
					7. Post a video story / picture on your Instagram account
					with our product and tag our page @ magic.bath.bombs
				</li>
				<li>
					8. Post a video story / picture on your Instagram account
					with our product and tag our page @ magic.bath.bombs
				</li>
				<li>
					9. After at least 20 hours, take a screenshot of your posts
					and upload them to FameUp
				</li>
			</ul>
			<router-link to="#" class="btn btn-primary"
				>Request offer
			</router-link>
		</div>
	</div>
</template>

<script>
import Gallery from './partials/Gallery.vue';
export default {
	components: { Gallery },
	props: {
		details: Array,
	},
};
</script>

<style lang="scss" scoped>
.offers {
	p {
		font-size: rem(18px);
		font-weight: 500;
		color: var(--textPrimary);
		font-family: $secondary-font;
		margin: 0;
	}
	span {
		font-size: rem(15px);
		color: #77838f;
		font-family: $secondary-font;
	}
	h2 {
		font-size: rem(25px);
		color: var(--primary);
		font-family: $secondary-font;
		font-weight: 600;
		margin: 10px 0;
	}
	h3 {
		font-weight: 500;
	}
	ul {
		list-style: none;
		margin-bottom: rem(24px);
		li {
			font-family: $secondary-font;
			font-size: rem(15px);
			font-weight: 400;
			color: #77838f;
			line-height: 1.4;
		}
	}
}
</style>
