<template>
	<div id="container">
		<headBlock/>
		<search/>
	</div>
</template>

<script>
import headBlock from '@/components/headBlock.vue';
import search from '@/components/search.vue';

// @ is an alias to /src
export default {
	name: "home",
	components: {
		headBlock,
		search
	},
	beforeCreate: function() {
		document.body.className = "home";
	}
};
</script>

<style scoped>

</style>
