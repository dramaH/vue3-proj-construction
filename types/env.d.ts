// 全局声明.vue 组件文件， 让ts正确识别.vue 类型的文件，需在tsconfig.json => include{} 中配置
// /// <reference  types/path  > 用于声明文件间的依赖,可以理解为 import ,在“编译”过程中要引入的额外的文件,只能在文件顶部
// declare 全局顶层声明 （namespace / module / type） ，就是告诉TS编译器你担保这些变量和模块存在，并声明了相应类型， tsconfig.json-include中引入后，都可以直接引用而不用去import相应的变量或者类型 编译不会提示错误

/// <reference types="vite/client" />
/// <reference types="vitest" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
