<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "maldives3",
	data: function () {
		return {
			country: this.$store.state.countries[5]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss">
@import '@/assets/styles/_responsive.scss';

.maldives3__quote {
	@include desktop {
		margin-top: 0!important;
	}
}
</style>
