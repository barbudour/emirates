<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "dubai",
	data: function () {
		return {
			country: this.$store.state.countries[3]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss" scoped>

</style>
