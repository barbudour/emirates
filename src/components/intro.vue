<template>
	<div class="intro" v-bind:style="{ 'backgroundImage': 'url(../assets/img/maldives@2x.jpg)' }">
		<headBlock/>
		<div class="container intro__content">
			<div class="intro__subtitle">
				<p v-html="subtitle"></p>
			</div>
			<div class="intro__title">
				<h1 v-html="title"></h1>
			</div>
			<div class="intro__lead">
				<p v-html="lead"></p>
			</div>
		</div>
	</div>
</template>

<script>
import headBlock from '@/components/headBlock.vue';

// @ is an alias to /src
export default {
	name: "intro",
	props: {
		title: String,
		subtitle: String,
		lead: String,
		img: String
	},
	components: {
		headBlock
	},
	beforeCreate: function() {
		document.body.className = "longread";
	}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';

.intro {
	width: 100vw;
	min-height: 100vh;
	background: blue;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	&::after {
		content: '';
		width: 1px;
		height: vh(110);
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -0.5px;
		background: #ffffff;
	}

	&__subtitle {
		> p {
			font-size: vw(20);
			color: rgb(255, 255, 255);
			line-height: 1.5;
			margin: 0 auto vw(40);
			max-width: vw(600);
		}
	}

	&__title {
		> h1 {
			font-size: vw(100);
			color: rgb(255, 255, 255);
			text-transform: uppercase;
			margin: 0 0 vw(40);
		}
	}

	&__lead {
		> p {
			font-size: vw(24);
			color: rgb(255, 255, 255);
			line-height: 1.417;
			margin: 0;
		}
	}
}
</style>
