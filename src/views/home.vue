<template>
	<div id="container">
		<search/>
	</div>
</template>

<script>
import search from '@/components/search.vue';

// @ is an alias to /src
export default {
	name: "home",
	components: {
		search
	},
	beforeCreate: function() {
		document.body.className = "home";
	}
};
</script>

<style scoped>

</style>
