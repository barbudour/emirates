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

<style lang="scss" scoped>

</style>
