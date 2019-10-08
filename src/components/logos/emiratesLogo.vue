<template>
	<div class="logo__emirates">
		<emirates/>
	</div>
</template>

<script>
import emirates from '@/assets/img/emirates-logo.svg';

// @ is an alias to /src
export default {
	name: "emiratesLogo",
	components: {
		emirates
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';

.cls {
	&-1 {
		fill:#d71920;
	}
	&-2 {
		fill:#ffffff;
	}
}

.logo {
	&__emirates {
		position: absolute;
		top: 0;
		right: vw(40);
		width: vw(80);

		@include mobile {
			top: vm(-22);
			right: vm(40);
			width: vm(92);
		}
	}
}
</style>
