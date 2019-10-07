<template>
	<div class="facts">
		<div class="container facts__content">
			<div class="facts__item" v-for="(fact, index) in facts" :key="index">
				<div class="facts__item-icon">
					<img :src="fact.icon" alt="" :srcset="fact.icon">
				</div>
				<div class="facts__item-text" v-html="fact.text"></div>
			</div>
		</div>
		<div class="facts__bg" :style="{ 'background-image': 'url('+require('../assets/img/'+factsBg+'@2x.jpg')+')' }"></div>
	</div>
</template>

<script>

// @ is an alias to /src
export default {
	name: "facts",
	props: {
		facts: Array,
		factsBg: String
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';
.facts {
	position: relative;
	background: #000000;

	&__bg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
		background-position: center;
		opacity: 0.75;
	}

	&__content {
		position: relative;
		margin: auto;
		padding: vw(115) 0 vw(120);
		z-index: 1;
	}

	&__item {
		padding: 0 vw(120);
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:not(:last-child) {
			margin: 0 0 vw(80);
		}

		&-icon {
			padding: 0 0 0 vw(80);
			> img {
				display: block;
			}
		}

		&-text {
			max-width: vw(375);
			font-size: vw(16);
			color: rgb(255, 255, 255);
			line-height: 1.5;
		}

		&:nth-of-type(2n) {
			flex-direction: row-reverse;

			& div:first-child {
				padding: 0 vw(80) 0 0;
			}

			& div:last-child {
				text-align: right;
			}
		}
	}
}
</style>
