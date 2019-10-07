<template>
	<div id="container">
		<country :country="country"/>
	</div>
</template>

<script>
import country from '@/components/country.vue';

// @ is an alias to /src
export default {
	name: "vietnam2",
	data: function () {
		return {
			country: this.$store.state.countries[4]
		}
	},
	components: {
		country
	}
};
</script>

<style lang="scss" scoped>

</style>
