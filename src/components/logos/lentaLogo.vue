<template>
	<div class="logo__lenta">
		<div class="logo__main">
			<div class="logo__dark" :style="{ clip: 'rect(' + secondLogoBorderLineTop + 'px, auto, ' + secondLogoBorderLineBottom + 'px, auto)' }">
				<lentaDark/>
			</div>
			<div class="logo__normal" :style="{ clip: 'rect(' + firstLogoBorderLineTop + 'px, auto, ' + firstLogoBorderLineBottom + 'px, auto)' }">
				<lenta/>
			</div>
		</div>
		<span class="logo__subtitle">Спецпроект</span>
	</div>
</template>

<script>
import lenta from '@/assets/img/lenta-logo.svg';
import lentaDark from '@/assets/img/lenta-logoDark.svg';
import { qsAll, qs } from '@/helpers/index';

// @ is an alias to /src
export default {
	name: "lentaLogo",
	components: {
		lenta,
		lentaDark
	},
	data: () => {
		return {
			firstLogoBorderLineTop: 0,
			firstLogoBorderLineBottom: 0,
			secondLogoBorderLineTop: 0,
			secondLogoBorderLineBottom: 2000
		}
	},
	mounted() {
		window.addEventListener('scroll', () => {
		const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		const block = Array.from(qsAll('.section__item')).filter(block => {
			const {top, bottom} = block.getBoundingClientRect();
			const fixer = top > 0 ? top : 0;
			return bottom < (viewHeight + fixer) && bottom > 0;
		})[0];
		if (!block) {
			let isBottom =  window.pageYOffset  / document.documentElement.scrollHeight > 0.75;
			if (isBottom) {
				this.firstLogoBorderLineTop = 0;
				this.firstLogoBorderLineBottom = 2000;
			}
			document.querySelector('.logo__subtitle').classList.remove('dark');
		}
		if (block) {
			const { y: blockTop, bottom: blockBottom } = block.getBoundingClientRect();
			const { top: logoTop, bottom: logoHeight} = qs('.logo__normal').getBoundingClientRect();
			this.firstLogoBorderLineTop = blockBottom - logoTop < logoHeight  ?  blockBottom - logoTop : 0;
			this.firstLogoBorderLineBottom =  blockBottom - logoTop < logoHeight ? 2000 : blockTop - logoTop;
			this.secondLogoBorderLineTop = blockTop - logoTop > 0 ? blockTop - logoTop : 0;
			this.secondLogoBorderLineBottom =  blockBottom - logoTop  > 0 ? blockBottom - logoTop : 0;
			document.querySelector('.logo__subtitle').classList.add('dark');
		}
		});
	}
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_responsive.scss';

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
		transition: all 0.3s ease-in;

		@include mobile {
			font-size: vm(12);
		}

		&.dark {
			color: #333333;
		}
	}

	&__main {
		position: relative;
		width: vw(100);
		height: vw(17);
	}

	&__normal {
		position: absolute;
		top: 0;
		left: 0;
		width: vw(100);
		height: vw(17);

		.cls {
			&-1 {
				fill:#333333;
			}
		}
	}

	&__dark {
		position: absolute;
		top: 0;
		left: 0;
		width: vw(100);
		height: vw(17);

		.cls {
			&-1 {
				fill:#ffffff;
			}
		}
	}
}
</style>
