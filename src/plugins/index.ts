// 从main.js 拆分

import type { App } from 'vue';
import { registerGlobalComp } from './globalComp';
import router from '/@/router';
import piniaStore from '/@/store';
import i18n from '/@/locale';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-themes/vue-bitunix-web/index.less';
import '/@/styles/index.less'; // 项目内样式
import '/@/styles/reset.less'; // 项目重置样式
import 'uno.css';
import 'virtual:svg-icons-register'; // SVG管理
export function initialApp(app: App<Element>) {
  return registerGlobalComp(app).use(ArcoVue).use(ArcoVueIcon).use(router).use(i18n).use(piniaStore);
}
