<template>
	<div id="container">
		<intro :img="alias" :title="title" subtitle="Семейный отдых, где можно найти романтику, <br>и&nbsp;при этом отдохнуть с&nbsp;детьми:" lead="Свадьба на&nbsp;Мальдивах&nbsp;&mdash; мечта, которая легко воплотить. В&nbsp;этом райском уголке есть все условия для комфортного и&nbsp;приятного отдыха не&nbsp;только для&nbsp;молодоженов, но&nbsp;и&nbsp;пар с&nbsp;детьми. Этому способствует развитая туристическая индустрия."/>
		<textBlock/>
		<imageBig/>
		<facts/>
		<end/>
	</div>
</template>

<script>
import intro from '@/components/intro.vue';
import textBlock from '@/components/textBlock.vue';
import imageBig from '@/components/imageBig.vue';
import facts from '@/components/facts.vue';
import end from '@/components/end.vue';

// @ is an alias to /src
export default {
	name: "maldives",
	data: function () {
		return {
			title: 'Мальдивы',
			alias: 'maldives'
		}
	},
	components: {
		intro,
		textBlock,
		imageBig,
		facts,
		end
	}
};
</script>

<style scoped>

</style>
