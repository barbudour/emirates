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
			padding: 0 0 0 vw(80);
			
			@include mobile {
				padding: 0 0 vm(50);
			}

			> img {
				display: block;
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
