<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "seychelles",
	data: function () {
		return {
			country: this.$store.state.countries[10]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss">
@import '@/assets/styles/_responsive.scss';

.seychelles__surf {
	float: right;
	margin: 0 vw(-40) vw(40) vw(40);

	@include mobile {
		float: initial;
		margin: initial;
		max-width: 100%;
	}
}

.seychelles__quote {
	@include desktop {
		margin-top: 0!important;
	}
}
</style>
