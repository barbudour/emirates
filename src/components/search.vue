<template>
	<div class="search">
		<div class="search__content">
			<transition-group name="fade" enter-active-class="fadeIn" leave-active-class="fadeOutUp">
				<h1 class="search__title animated" id="title" key="categorytitle" v-if="!changeCategory" v-html="title"></h1>
				<h1 class="search__title animated"  key="typetitle" v-else v-html="titleTypes"></h1>
			</transition-group>
			<transition-group name="fade" enter-active-class="fadeIn" leave-active-class="fadeOutUp">
			<h2 class="search__lead animated" id="lead" key="leadcategory" v-if="!changeCategory" v-html="lead"></h2>
			<h2 class="search__lead animated" key="leadtype" v-else v-html="leadTypes"></h2>
			</transition-group>
			<transition-group name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
				<div class="search__categories animated" id="categories" key="categories" v-if="!changeCategory">
					<a class="search__category button category__first" @click="selectCategory" ref="category" v-for="(category, index) in categories" :category="category.key" v-bind:key="index">{{category.name}}</a>
				</div>
				<div class="search__categories animated" key="types" v-else>
					<a class="search__category button category__second" @click="selectType" v-show="selectCategory !== type.ban" v-for="(type, index) in types" :type="type.key" v-bind:key="index">{{type.name}}</a>
				</div>
			</transition-group>
			<div class="search__buttons" id="buttons">
				<transition-group name="fade" enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
				<!-- <a class="button__big button button__disable animated" id="totypes" key="types" @click="toTypes" v-if="!changeCategory">{{buttonSearch}}</a> -->
				<a class="button__big button button__disable animated" id="toflight" key="flight" @click="toFlight" v-show="changeCategory">{{buttonFlight}}</a>
				</transition-group>
				<a class="button__normal button" id="random" @click="toRandom">{{buttonRandom}}</a>
			</div>
		</div>
		<Social/>
		<transition-group name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut" mode="in-out">
			<video-bg class="animated" v-if="!changeCategory" key="video1" :sources="[require('../assets/video/emirates.mp4')]" :img="require('../assets/img/video.jpg')"/>
			<video-bg class="animated" v-else key="video2" :sources="[require('../assets/video/emirates2.mp4')]"/>
		</transition-group>
	</div>
</template>

<script>
import Social from '@/components/Social.vue';
import {TweenMax, Power4, TimelineMax} from "gsap/TweenMax";

// @ is an alias to /src
export default {
	name: "search",
	data: function () {
		return {
			title: 'Генератор новой&nbsp;жизни',
			titleTypes: '&nbsp;',
			lead: 'Какой у вас повод для того, чтобы отправиться в путешествие?',
			leadTypes: 'С кем вы отправитесь в путешествия?',
			buttonSearch: 'Далее',
			buttonFlight: 'Полетели!',
			buttonRandom: 'Полететь наугад',
			categories: [
				{key: 'A', name: 'Свадьба'},
				{key: 'B', name: 'Переезд'},
				{key: 'C', name: 'Новая работа'},
				{key: 'D', name: 'День рождения'}
			],
			types: [
				{key: '1', name: 'С семьей', ban: 'D'},
				{key: '2', name: 'С друзьями', ban: ''},
				{key: '3', name: 'В одиночку', ban: 'A'},
				{key: '4', name: 'Со второй половинкой', ban: ''}
			],
			selectedCategory: null,
			changeCategory: false
		}
	},
	components: {
		Social
	},
	methods: {
		selectCategory: function (event) {
			var selected = event.target.getAttribute('category');
			this.$store.state.options.reason = selected;
			this.selectCategory = selected;
			for (var item of document.querySelectorAll('.category__first')) {
				item.classList.remove('active');
			}
			event.target.classList.add("active");
			// document.querySelector('#totypes').classList.remove("button__disable");
			this.changeCategory = !this.changeCategory;
		},
		toTypes: function () {
			if (this.$store.state.options.reason != null) {
				this.changeCategory = !this.changeCategory;
			} else {
				return false;
			}
		},
		enter: function (el, done) {
				TweenMax.from(el, 0.3, {autoAlpha: 0, onComplete: done});
		},
		leave: function (el, done) {
				TweenMax.to(el, 0.3, {autoAlpha: 0, onComplete: done});
		},
		selectType: function (event) {
			var selected = event.target.getAttribute('type');
			this.$store.state.options.who = selected;
			for (var item of document.querySelectorAll('.category__second')) {
				item.classList.remove('active');
			}
			event.target.classList.add("active");
			document.querySelector('#toflight').classList.remove("button__disable");
		},
		toFlight: function () {
			if (this.$store.state.options.reason != null && this.$store.state.options.who != null) {
				var flightFinish = this.$store.state.options.reason + this.$store.state.options.who;
				this.$router.push({ name: flightFinish});
				this.$store.state.options.reason = null;
				this.$store.state.options.who = null;
			} else {
				return false;
			}
		},
		toRandom: function () {
			this.$router.push({ name: 'random'});
		}
	},
	mounted() {
		var header = document.querySelector('.header'),
			titleSearch = document.querySelector('#title'),
			leadSearch = document.querySelector('#lead'),
			categoriesSearch = document.querySelector('#categories'),
			buttonsSearch = document.querySelector('#buttons');
			// typesSearch = document.querySelector('#totypes'),
			// randomSearch = document.querySelector('#random')

		var centerElementsDuration = 1.5;

		var tlIntro = new TimelineMax();
			tlIntro.from(header, 1.5, {autoAlpha: 0, ease: Power4.easeOut})
					.from(titleSearch, centerElementsDuration, {autoAlpha: 0, y: '-30px', ease: Power4.easeOut}, 0.75)
					.from(leadSearch, centerElementsDuration, {autoAlpha: 0, ease: Power4.easeOut}, 0.75)
					.from(categoriesSearch, centerElementsDuration, {autoAlpha: 0, ease: Power4.easeOut}, 0.75)
					.from(buttonsSearch, centerElementsDuration, {autoAlpha: 0, y: '30px', ease: Power4.easeOut}, 0.75)
					// .from(typesSearch, centerElementsDuration, {autoAlpha: 0, y: '30px', ease: Power4.easeOut}, 0.75)
					// .from(randomSearch, centerElementsDuration, {autoAlpha: 0, delay: 0.375, y: '30px', ease: Power4.easeOut}, 0.75)
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
	background: #25374b;
	// background-image: url('../assets/img/search-bg.jpg');
	background-size: cover;
	background-position: center;
	overflow: hidden;

	&__content {
		max-width: vm(560);
		z-index: 1;
	}

	&__title {
		font-size: vw(50);
		color: rgb(255, 255, 255);
		text-transform: uppercase;
		text-align: center;
		font-weight: 500;
		margin: 0 0 vw(50);

		@include mobile {
			font-size: vm(50);
			margin: 0 0 vm(25);
		}
	}

	&__lead {
		font-size: vw(20);
		color: rgb(255, 255, 255);
		text-transform: uppercase;
		text-align: center;
		font-weight: 500;
		margin: 0 0 vw(25);

		@include mobile {
			font-size: vm(20);
			margin: 0 0 vm(5);
			line-height: 1.25;
		}
	}

	&__categories {
		display: flex;
		justify-content: center;
		margin-bottom: vw(40);

		@include mobile {
			margin-bottom: vm(40);
			flex-wrap: wrap;
		}
	}

	&__category {
		margin: 0 vw(10);
		padding: vw(18);
		border-radius: vw(5);
		background-color: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #ffffff;
		font-size: vw(16);
		font-weight: 400;
		transition: all 0.2s ease-in-out;

		@include mobile {
			margin: vm(20) vm(20);
			padding: vm(25);
			border-radius: vm(5);
			font-size: vm(24);

			&:nth-child(1) {
				order: 1;
			}

			&:nth-child(2) {
				order: 4;
			}

			&:nth-child(3) {
				order: 3;
			}

			&:nth-child(4) {
				order: 2;
			}
		}

		&:hover {
			background: #ffffff;
			border-color: #ffffff;
			color: #d6181f;
		}

		&.active {
			background: #ffffff;
			border-color: #ffffff;
			color: #d6181f;
		}
	}

	&__buttons {
		display: flex;
		flex-direction: column;
		align-items: center;

		> .button__normal {
			margin-top: vw(30);

			@include mobile {
				margin-top: vm(25);
			}
		}

		> span {
			width: 100%;
			text-align: center;

			> a {
				// opacity: 0;
			}
		}

		> * {
			transition: initial;
		}
	}
}

.fade-leave-active, .fade-leave-to, .fade-enter {
	position: absolute;
}

.fade-enter {
	animation-delay: 0.3s;
}

.VideoBg {
	top: 0;
	left: 0;
	width: 100vw;
    opacity: 0.5;
    position: absolute;
}

.social {
	z-index: 1;
}
</style>
