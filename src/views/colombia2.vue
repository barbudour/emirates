<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "colombia2",
	data: function () {
		return {
			country: this.$store.state.countries[7]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss" scoped>

</style>
