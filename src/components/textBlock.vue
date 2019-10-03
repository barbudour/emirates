<template>
	<div class="text">
		<div class="container text__content">
			<p v-html="content"></p>
			<img src="../assets/img/maldives-1.jpg" alt="" srcset="../assets/img/maldives-1@2x.jpg 2x">
			<p v-html="content"></p>
		</div>
	</div>
</template>

<script>

// @ is an alias to /src
export default {
	name: "textBlock",
	data: function () {
		return {
			image: 'maldives-1',
			content: 'Национальная кухня Мальдивских островов испытала на&nbsp;себя влияние арабской и&nbsp;индийской культур. В&nbsp;ее&nbsp;основе лежат три базовых ингредиента: рис, морская рыба и&nbsp;кокосовый орех. Очень популярен карри. В&nbsp;качестве десерта идут белые кокосовые палочки (здесь их&nbsp;называют &laquo;бонди&raquo;) и&nbsp;фруктовые салаты. Самый популярный на&nbsp;островах напиток&nbsp;&mdash; зеленый чай в&nbsp;сочетании с&nbsp;большим количеством молока и&nbsp;сахара.'
		}
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';

.text {
	padding: vw(95) 0 vw(90);

	&__content {
		margin: auto;
	
		> p {
			font-size: vw(18);
			color: rgb(51, 51, 51);
			line-height: 1.667;
			margin: 0 0;

			&:not(:last-child) {
				margin: 0 0 vw(90);
			}
		}

		> img {
			width: 100%;
			margin: 0 0;

			&:not(:last-child) {
				margin: 0 0 vw(95);
			}
		}
	}
}
</style>
