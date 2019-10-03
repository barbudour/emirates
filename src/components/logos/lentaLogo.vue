<template>
	<div class="logo__lenta">
		<lenta/>
		<span class="logo__subtitle">Спецпроект</span>
	</div>
</template>

<script>
import lenta from '@/assets/img/lenta-logo.svg';

// @ is an alias to /src
export default {
	name: "lentaLogo",
	components: {
		lenta
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';

.cls {
	&-1 {
		fill:#ffffff;
	}
}

.logo {
	&__lenta {
		position: absolute;
		top: vw(40);
		left: vw(40);
		width: vw(100);
	}

	&__subtitle {
		font-size: vw(10);
		font-family: "Helvetica Neue", "Arial";
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
	}
}
</style>
