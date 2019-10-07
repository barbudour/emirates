<template>
	<div class="image__big">
		<img :src="image.content" alt="" :srcset="image.content+' 2x'">
	</div>
</template>

<script>

// @ is an alias to /src
export default {
	name: "imageBig",
	props: {
		image: Array
	}
};
</script>
<style lang="scss" scoped>
.image {
	&__big {
		width: 100vw;

		> img {
			width: 100%;
			display: block;
		}
	}
}
</style>
