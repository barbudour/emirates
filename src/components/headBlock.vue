<template>
	<div class="header">
		<lentaLogo/>
		<emiratesLogo/>
	</div>
</template>

<script>
import lentaLogo from '@/components/logos/lentaLogo.vue';
import emiratesLogo from '@/components/logos/emiratesLogo.vue';

// @ is an alias to /src
export default {
	name: "headBlock",
	components: {
		lentaLogo,
		emiratesLogo
	}
};
</script>
<style lang="scss" scoped>

</style>
