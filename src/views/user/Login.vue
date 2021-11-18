<template>
	<div class="row">
		<div class="col-md-6">
			<h1>Welcome</h1>
			<p class="subTitle">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
				arcu tempor et tellus, lobortis interdu.
			</p>
			<form>
				<div class="form-group userName">
					<input
						type="text"
						class="form-control"
						placeholder="Username"
					/>
				</div>
				<div class="form-group email">
					<input
						type="text"
						class="form-control"
						placeholder="Email"
					/>
				</div>
				<div class="button-row">
					<button type="button" class="btn btn-primary">
						Login to Continue
					</button>
				</div>
				<div class="or"><span>or</span></div>
				<ul class="socialLinks">
					<li>
						<a href="#" target="_blank">
							<img
								src="@/assets/images/svg/google-icon.svg"
								class="img-fluid"
								alt="google"
							/>
							Google
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img
								src="@/assets/images/svg/facebook-icon.svg"
								class="img-fluid"
								alt="google"
							/>
							Facebook
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img
								src="@/assets/images/svg/ios-icon.svg"
								class="img-fluid"
								alt="google"
							/>
							Apple
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img
								src="@/assets/images/svg/email-icon.svg"
								class="img-fluid"
								alt="google"
							/>
							Email
						</a>
					</li>
				</ul>
			</form>
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
</template>

<script>
export default {};
</script>

<style></style>
