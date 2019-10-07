<template>
	<div :id="'country__'+country.id">
		<intro :image="country.image" :title="country.name" :subtitle="country.subtitle" :lead="country.lead"/>
		<contentCountry :contentCountry="country.content"/>
		<facts :facts="country.facts" :factsBg="country.factsbg"/>
		<end/>
	</div>
</template>

<script>
import intro from '@/components/intro.vue';
import contentCountry from '@/components/contentCountry.vue';
import facts from '@/components/facts.vue';
import end from '@/components/end.vue';

// @ is an alias to /src
export default {
	name: "country",
	props: {
		country: Object
	},
	components: {
		intro,
		contentCountry,
		facts,
		end
	}
};
</script>

<style scoped>

</style>
