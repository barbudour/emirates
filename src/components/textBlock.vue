<template>
	<div class="text">
		<div class="container text__content">
			<div :class="'text__item '+item.type" v-for="(item, index) in text" :key="index">
				<p v-if="item.type === 't'" v-html="item.content"></p>
				<img v-else-if="item.type === 'i' && !item.small" :src="require('../assets/img/'+item.content+'.jpg')" :srcset="require('../assets/img/'+item.content+'@2x.jpg')+' 2x'">
				<!-- <img class="small" v-else-if="item.type === 'i' && item.small" :src="require('../assets/img/'+item.content+'.jpg')" :srcset="require('../assets/img/'+item.content+'@2x.jpg')+' 2x'"> -->
			</div>
		</div>
	</div>
</template>

<script>

// @ is an alias to /src
export default {
	name: "textBlock",
	props: {
		text: Array
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';

.text {
	padding: vw(95) 0 vw(90);

	&__content {
		margin: auto;
	
		p {
			position: relative;
			display: inline-block;
			font-size: vw(18);
			color: rgb(51, 51, 51);
			line-height: 1.667;
			margin: 0 0;

			&:not(:last-child) {
				margin: 0 0 vw(90);
			}

			> blockquote:first-child {
				margin-top: 0!important;
			}
		}

		blockquote {
			font-size: vw(30);
			color: rgb(51, 51, 51);
			font-weight: bold;
			font-style: italic;
			line-height: 1.333;
		}
	}

	&__item {
		img {
			width: 100%;
			max-width: 100%;
			margin: 0 0;
			display: block;
		}
		&.i:not(:last-child) {
				margin-bottom: vw(95);
		}
		&.i:not(:first-child) {
				margin-top: vw(95);
		}
	}
}
</style>
