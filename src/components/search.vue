<template>
	<div class="search">
		<div class="search__content">
			<h1 class="search__title">{{title}}</h1>
			<h2 class="search__lead">{{lead}}</h2>
			<div class="search__categories">
				<a class="search__category button" v-for="(category, index) in categories" :key="index" href="#">{{category.name}}</a>
			</div>
			<div class="search__buttons">
				<a href="#" class="button__big button">{{buttonSearch}}</a>
				<a href="#" class="button__normal button">{{buttonRandom}}</a>
			</div>
		</div>
		<!-- <Social/> -->
	</div>
</template>

<script>
// import Social from '@/components/Social.vue';

// @ is an alias to /src
export default {
	name: "search",
	data: function () {
		return {
			title: 'Генератор новой жизни',
			lead: 'Какой у вас повод для того, чтобы отправиться в путешествие?',
			buttonSearch: 'Далее',
			buttonRandom: 'Полететь наугад',
			categories: [
				{name: 'Свадьба'},
				{name: 'Переезд'},
				{name: 'Новая работа'},
				{name: 'Просто хочу отдохнуть'}
			]
		}
	},
	components: {
		// Social
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';
@import '@/assets/styles/_buttons.scss';

.search {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(37, 55, 75, 0.5);
	background-image: url('../assets/img/search-bg.jpg');
	background-size: cover;
	background-position: center;

	&__title {
		font-size: vw(50);
		font-family: "Helvetica Neue", "Arial";
		color: rgb(255, 255, 255);
		text-transform: uppercase;
		text-align: center;
		font-weight: 500;
		margin: 0 0 vw(50);
	}

	&__lead {
		font-size: vw(20);
		font-family: "Helvetica Neue", "Arial";
		color: rgb(255, 255, 255);
		text-transform: uppercase;
		text-align: center;
		font-weight: 500;
		margin: 0 0 vw(25);
	}

	&__categories {
		display: flex;
		justify-content: center;
		margin-bottom: vw(40);
	}

	&__category {
		margin: 0 vw(10);
		padding: vw(18);
		border-radius: vw(5);
		background-color: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #ffffff;
		font-family: "Helvetica Neue", "Arial";
		font-size: vw(16);
		font-weight: 400;
		transition: all 0.2s ease-in-out;

		&:hover {
			background: #ffffff;
			border-color: #ffffff;
			color: #d6181f;
		}
	}

	&__buttons {
		display: flex;
		flex-direction: column;
		align-items: center;

		> .button__big {
			margin-bottom: vw(30);
		}
	}
}
</style>
