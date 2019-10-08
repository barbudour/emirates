<template>
	<div class="image__big" :style="{ 'background-image': 'url('+require('../assets/img/'+image+'@2x.jpg')+')', 'background-position': '50% '+position.length ? position : 50+'%' }">
	</div>
</template>

<script>

// @ is an alias to /src
export default {
	name: "imageBig",
	props: {
		image: String,
		position: String
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';

.image {
	&__big {
		display: block;
		width: 100vw;
		height: vw(720);
		background-size: cover;
		background-position: center;

		@include mobile {
			height: vm(360);
		}
	}
}
</style>
