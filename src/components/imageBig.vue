<template>
	<div class="image__big">
		<img :src="image" alt="" :srcset="image+' 2x'">
	</div>
</template>

<script>

// @ is an alias to /src
export default {
	name: "imageBig",
	data: function () {
		return {
			image: 'https://via.placeholder.com/1440x900',
		}
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
