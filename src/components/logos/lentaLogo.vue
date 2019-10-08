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
		text-align: left;

		@include mobile {
			top: vm(40);
			left: vm(40);
			width: vm(123);
		}
	}

	&__subtitle {
		font-size: vw(10);
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;

		@include mobile {
			font-size: vm(12);
		}
	}
}
</style>
