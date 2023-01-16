import { App } from 'vue';
import SvgIcon from '/@/components/SvgIcon/index.vue';
// 注册全局组件
export const registerGlobalComp = (app: App<Element>) => {
  return app.component('SvgIcon', SvgIcon);
};
