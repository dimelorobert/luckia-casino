<template>
<div class="bio">
   
   <form class="form">
		<!-- <div class="container-logo">
			<img class="logo animate__animated animate__pulse" src="../assets/beils-green.png" loading="lazy" alt="Logo" />
		</div> -->
		<h2 class="title">Contact</h2>

		<div class="flex-container-row">
			<div class="child-f-row">
				<label class="label" for="name">Full Name</label>
				<input
					id="name"
					class="input"
					type="text"
					placeholder="placeholder"
					autocomplete="off"
				/>
			</div>
		

		
			<div class="child-f-row">
				<label class="label" for="email">Email</label>
				<input
					id="email"
					class="input"
					type="email"
					placeholder="placeholder"
					autocomplete="off"
				/>
			</div>

			<div class="child-f-row">
				<label class="label" for="birthdate">Message</label>
				<textarea name="" id="message" cols="30" rows="10"></textarea>
			</div>
		</div>

		<div class="flex-container-row">
			<button class="button">Send it</button>
		</div>
	</form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bio {
   height: 30rem;
   width: 100%;
   background: url("../assets/preview.jpg");
   background-size: cover;
   background-position: top;
}

.form {
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   max-width: 512px;
}

.child-f-row {
   display: flex;
   flex-direction: column;
}

</style>