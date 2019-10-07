<template>
	<div id="contentCountry">
		<div id="content__item" v-for="(contentItem, index) in contentCountry" :key="index">
			<textBlock v-if="contentItem.type === 'text'" :text="contentItem.inner"/>
			<imageBig v-else-if="contentItem.type === 'image'" :image="contentItem"/>
		</div>
	</div>
</template>

<script>
import textBlock from '@/components/textBlock.vue';
import imageBig from '@/components/imageBig.vue';

// @ is an alias to /src
export default {
	name: "contentCountry",
	props: {
		contentCountry: Array
	},
	components: {
		textBlock,
		imageBig
	}
};
</script>

<style scoped>

</style>
