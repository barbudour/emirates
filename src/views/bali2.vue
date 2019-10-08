<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "bali2",
	data: function () {
		return {
			country: this.$store.state.countries[13]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss" scoped>

</style>
