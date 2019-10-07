<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "colombia",
	data: function () {
		return {
			country: this.$store.state.countries[2]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss" scoped>

</style>
