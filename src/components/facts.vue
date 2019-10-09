<template>
	<div class="section__item facts">
		<div class="container facts__content">
			<div class="facts__item" v-for="(fact, index) in facts" :key="index">
				<div class="facts__item-icon">
					<img :src="require('../assets/img/'+fact.icon+'.png')" :srcset="require('../assets/img/'+fact.icon+'@2x.png')+' 2x'" alt="">
				</div>
				<div class="facts__item-text" v-html="fact.text"></div>
			</div>
		</div>
		<div class="facts__bg" :style="{ 'background-image': 'url('+require('../assets/img/'+factsBg+'@2x.jpg')+')' }"></div>
	</div>
</template>

<script>
// import iconSurf from '@/assets/img/surf.svg';


// @ is an alias to /src
export default {
	name: "facts",
	props: {
		facts: Array,
		factsBg: String
	},
	components: {
		// iconSurf
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';
.facts {
	display: flex;
	position: relative;
	background: #000000;
	min-height: vw(660);

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

		@include mobile {
			padding: vm(100) 0 vm(95);
		}
	}

	&__item {
		padding: 0 vw(120);
		display: flex;
		align-items: center;
		justify-content: space-between;

		@include mobile {
			padding: initial;
			flex-direction: column;
			justify-content: initial;
			align-items: flex-start;
		}

		&:not(:last-child) {
			margin: 0 0 vw(80);

			@include mobile {
				margin: 0 0 vm(100);
			}
		}

		&-icon {
			width: vw(80);
			height: vw(80);
			padding: 0 0 0 vw(80);
			
			@include mobile {
				padding: 0 0 vm(50);
			}

			> img {
				display: block;
				max-width: 100%;
				max-height: 100%;
			}

			> svg {
				max-width: 100%;
				max-height: 100%;
			}
		}

		&-text {
			max-width: vw(375);
			font-size: vw(16);
			color: rgb(255, 255, 255);
			line-height: 1.5;

			@include mobile {
				max-width: initial;
				font-size: vm(28);
				line-height: 1.28;
			}
		}

		&:nth-of-type(2n) {
			flex-direction: row-reverse;

			@include mobile {
				flex-direction: column;
				align-items: flex-end;

			}

			& div:first-child {
				padding: 0 vw(80) 0 0;

				@include mobile {
					padding: 0 0 vm(50);
				}
			}

			& div:last-child {
				text-align: right;
			}
		}
	}
}
</style>
