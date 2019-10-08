<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "vietnam",
	data: function () {
		return {
			country: this.$store.state.countries[12]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss" scoped>

</style>
