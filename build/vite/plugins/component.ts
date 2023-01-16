/**
 * @name  AutoRegistryComponents
 * @description 按需加载/ 自动引入组件,无需main.js 引入
 */
import Components from 'unplugin-vue-components/vite';
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
export const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'], // 指定公共组件模块。自动引入声明类型
    extensions: ['vue'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    importPathTransform: (v) => v,
    allowOverrides: false,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [VueUseComponentsResolver()], //ArcoResolver(),// TODO arco 按需注册组件需同时调试styleImport.ts 文件
  });
};
