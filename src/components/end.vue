<template>
	<div class="section__item end">
		<div class="container end__content">
			<div class="end__title">
				<h2 v-html="title"></h2>
			</div>
			<div class="end__lead">
				<p v-html="lead"></p>
			</div>
			<div class="end__buttons">
				<a href="#" class="button button__big">{{buttonFlight}}</a>
			</div>
		</div>
	</div>
</template>

<script>

// @ is an alias to /src
export default {
	name: "end",
	props: {
		link: String
	},
	data: function () {
		return {
			title: 'Путешествуйте с Эмирейтс',
			lead: 'Перелет&nbsp;&mdash; важная часть путешествие. Говорят, что как корабль назовешь, так он и&nbsp;поплывет. Это справедливо и&nbsp;для начало вашего отдыха&nbsp;&mdash; каким он&nbsp;начнется, таким будет и&nbsp;весь его остаток. Авиакомпания Emirates ежедневно летает по&nbsp;вашему маршруту из&nbsp;городов России. Начните путешествие правильно вместе с&nbsp;Emirates.',
			buttonFlight: 'Полетели!'
		}
	},
	components: {
	}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';
@import '@/assets/styles/_buttons.scss';

.end {
	width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #000000;
	position: relative;

	&::after {
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: absolute;
		background-image: url('../assets/img/plane.jpg');
		background-size: cover;
		background-position: center;
		opacity: 0.8;

		@include retina {
			background-image: url('../assets/img/plane@2x.jpg');
			background-size: cover;
			background-position: center;
		}
	}

	> * {
		z-index: 1;
	}

	&__title {
		> h2 {
			font-size: vw(40);
			color: rgb(255, 255, 255);
			line-height: 1.5;
			margin: 0 0 vw(20);

			@include mobile {
				font-size: vm(50);
				line-height: 1.2;
				margin: 0 0 vm(30);
			}
		}
	}

	&__lead {
		> p {
			font-size: vw(16);
			color: rgb(255, 255, 255);
			line-height: 1.625;
			margin: 0 0 vw(50);
			max-width: vw(680);

			@include mobile {
				font-size: vm(28);
				line-height: 1.28;
				margin: 0 0 vm(65);
				max-width: initial;
			}
		}
	}
}
</style>
