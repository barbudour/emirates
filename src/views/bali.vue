<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "maldives",
	data: function () {
		return {
			country: this.$store.state.countries[1]
		}
	},
	components: {
		country
	}
};
</script>

<style scoped>

</style>
