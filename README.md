## BitunixWeb 项目开发文档

<p align="left">
    <img src="https://img.shields.io/badge/-Vue3-34495e?logo=vue.j" />
    <img src="https://img.shields.io/badge/-Vite4.2-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript3.9-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-pnpm-F69220?logo=pnpm&logoColor=white" />
    <img src="https://img.shields.io/badge/-Axios-008fc7?logo=axios.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Prettier-ef9421?logo=Prettier&logoColor=white" alt="Prettier">
    <img src="https://img.shields.io/badge/-Less-1D365D?logo=less&logoColor=white" alt="Less">

</p>

基于 Vue3 + Vite4 + TypeScript4 + Node.js16 + ArcoDesign2(UI) + Less4... 主流前端技术栈搭建

> 技术栈版本说明： 参考 10+ 优质项目的最佳实践 ，在最新版本大版本中选择使用更多的稳定小版本

## 目录

- [vscode 插件及配置](#插件)
- [校验及规范](#规范)
  - [提交描述信息规范](#提交描述信息规范)
- [项目结构](#目录结构)
- [功能说明](#功能说明)
  - [JSX](#jsx)
  - [vite 插件管理](#plugins)
  - [pinia](#pinia)
  - [plop](#plop)
  - [svg](#svg)
  - [http](#http)
  - [router](#router)
  - [模拟请求](#mock)
  - [本地代理配置](#proxy)
- [构建编译](#build-setup)
- [依赖管理](#node_modules)
  - [依赖库说明](#依赖库说明)
  - [样式库说明](#UI)
- [浏览器支持](#浏览器支持)
- [扩展资料](#扩展资料)
- [项目文档](#项目文档)
  - [《 约定路由生成规则说明 》](#约定路由生成规则说明)


---

# 插件

> <font color = #00CDFF size=4 >写在前面：</font> vscode 第三方插件较多，应随时注意保持插件纯净，同类型工具类插件建议只保留官方（或下列推荐）插件，避免第三方插件带来 IDE 感知、语法提示、文件引用等出现冲突或意想不到的状况

vscode 必要插件

- 【Volar】 - TypeScript Vue Plugin （volar） / Vue Language Features（volar) 。<font color = #00CDFF size=4 >注意！</font>禁用 vetur，以及卸载其他 vue 相关的第三方插件
- 【ESlint】 - 作者 Microsoft。<font color = #00CDFF size=4 >注意！</font> 建议卸载其他 eslint 相关插件
- 【Prettier】 - Code formatter 作者 prettier。 <font color = #00CDFF size=4 >注意！</font> 建议卸载其他非官方的例如“prettier ESlint” 等 （ prettier ESlint 功能已经通过 vite 插件完成配置和调试 ）

vscode 推荐插件

- 【GitLens】
- 【Code Spell Checker】 单纯拼写检查，(已添加 vscode 工作区配置)
- 【i18n-ally】 作者 Lokalise ( 可视化多语言结果 )
- 【Stylelint】 作者 Stylelint
- 【Todo Tree】 快速查看代码中 TODO 注释
- 【UnoCSS】 (配合 UnoCSS 使用能直观看到样式效果)，
- 【EditorConfig for VS Code】 （ json 化 vscode 配置 ,利于同步）
- 【ESLint Chinese Rules】 提示时显示中文规则

浏览器插件

- Vue.js devtools 更好的状态管理，性能监控，路由管理等

# 规范

> [husky](https://github.com/typicode/husky) 与 [lint-staged](https://github.com/okonet/lint-staged) 完成提交时对暂存区代码的校验及修复

- 通过`pre-commit`实现 lint 检查、单元测试、代码格式化等。
- 配合 Git hooks 钩子（commit 前或提交前会自动执行：pre-commit => npm run lint:lint-staged）
- IDE 配置（`.editorconfig`）、
- ESLint 配置（`.eslintrc.js`  和  `.eslintignore`）、
- StyleLint 配置（`.stylelintrc`  和  `.stylelintignore`），详细请看对应的配置文件。

> 关闭代码规范

将  `src/`  目录分别加入  `.eslintignore`  和  `.stylelintignore`  进行忽略

> 关闭提交时修复

```typescript
// package.json

 "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write "
    ],
    "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
      "prettier --write--parser json"
    ],
    "package.json": [
      "prettier --write" // 关闭注释
    ],
    "*.vue": [
      "eslint --fix",
      "prettier --write "
    ],
    "*.{scss,less,html}": [
      "prettier --write "
    ]
  }
```

### 提交描述信息规范

> 基于前端更为通用的 Angular 的 Commit Message 规范

```typescript
'feat', // 新功能 feature
  'fix', // 修复 bug
  'docs', // 文档注释
  'style', // 代码格式(不影响代码运行的变动)
  'refactor', // 重构(既不增加新功能，也不是修复bug)
  'perf', // 性能优化
  'test', // 增加测试
  'chore', // 构建过程或辅助工具的变动
  'revert', // 回退
  'build'; // 打包
```

# 目录结构

> 更详细注释请前往对应文件查看

```
├── .husky               // git 提交时hooks执行脚本
├── build
│   ├── vite             // vite插件集合/本地代理
│   ├── constant         // 项目编译配置全局变量 ，mock 路径，端口等， vite.config 中导入使用
├── docs                 // 文档相关（框架变动日志，其他项目文档，changelog 待接入 ）
├── mock                 // mock数据
├── plop-tpls            // plop模板
├── public               // 不被编译的资源文件目录，原封不动放进dist 目录,不能被 import 导入，只能通过fetch 方式获取,例如完整独立的前端静态资源项目/不希望被改名字的静态资源，而assets会被合并压缩，更适用于全局的工具类js/css/图片/json 在组件中引入使用
├── src
│    ├── api             // api请求
│    ├── assets          // 资源依赖目录 全局的工具类js/css/图片/json
│    ├── components      // 业务通用组件（todo https://storybook.js.org/docs/react/get-started/introduction）
│    ├── directive       // 指令目录 （结合vueuse 二次封装使用）
│    ├── hooks           // 两个组件之间共享行为，常业务逻辑复用，参考 vue2 中mixin
│    ├── locale          // 本地语言包资源，i18n 插件 会关联该路径
│    ├── plugins         // 项目得扩展功能，router,pinia,i18n接入项目，全局组件注册等
│    ├── router          // 路由文件
│    ├── store           // 状态管理
│    ├── utils           // 工具类
│    ├── views           // 业务组建 （根据文件结构自动生成虚拟路由并注册）
│    ├── App.vue         // 根组件
│    ├── main.ts         // vue 入口文件
├── .d.ts                // 类型定义 （插件自动写入）
├── index.html           // SPA 单页面应用程序中唯一的 html 页面入口文件，vite在‘开发’过程中，以index.html为直接入口，并且会自动重新设置URL基础,注意区别 webpack打包的项目，其以main.ts为入口，而index.html则是放在public文件夹下，作为模板使用，在构建资源中，资源链接都会被自动注入index.html文件，可以使用<%=BASE_URL%>来插入内容。
├── tsconfig.json        // ts配置
└── vite.config.ts       // vite全局配置
```

# 功能说明

## jsx

> 可直接在 SFC 中使用 JSX 语法

```json
{
    ...
    "@vitejs/plugin-vue-jsx": "^1.3.10"
    ...
}
```

## plugins

> 为了方便管理插件，将所有的`config`统一放入`build/vite/plugins`里面，并且增加了统一环境变量管理，来区分动态开启插件。

```typescript
/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VitePluginCertificate from 'vite-plugin-mkcert';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { ConfigSvgIconsPlugin } from './svgIcons';
import { AutoImportDeps } from './autoImport';
import { ConfigMockPlugin } from './mock';
import { ConfigVisualizerConfig } from './visualizer';
import { ConfigCompressPlugin } from './compress';
import { ConfigPagesPlugin } from './pages';
import { ConfigRestartPlugin } from './restart';
import { ConfigProgressPlugin } from './progress';
import { ConfigImageminPlugin } from './imagemin';
import { ConfigUnocssPlugin } from './unocss';
// import { configStyleImportPlugin } from './styleImport';
import { AutoRegistryComponents } from './component';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // setup语法糖组件名支持
    vueSetupExtend(),
    // 提供https证书
    VitePluginCertificate({
      source: 'coding',
    }) as PluginOption,
  ];

  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps());

  // 自动生成路由
  vitePlugins.push(ConfigPagesPlugin());

  // 开启.gz压缩  rollup-plugin-gzip
  vitePlugins.push(ConfigCompressPlugin());

  // 监听配置文件改动重启
  vitePlugins.push(ConfigRestartPlugin());

  // 构建时显示进度条
  vitePlugins.push(ConfigProgressPlugin());

  // unocss
  vitePlugins.push(ConfigUnocssPlugin());

  // vite-plugin-svg-icons
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild));

  // vite-plugin-mock
  vitePlugins.push(ConfigMockPlugin(isBuild));

  // rollup-plugin-visualizer
  vitePlugins.push(ConfigVisualizerConfig());

  vitePlugins.push(ConfigImageminPlugin());

  // // arco-design 按需引入
  // vitePlugins.push(configStyleImportPlugin()); // TODO 待完善
  vitePlugins.push(AutoRegistryComponents());

  return vitePlugins;
}
```

> `vite.config.ts` 更利于维护

```typescript
import { createVitePlugins } from './config/vite/plugins'
...
return {
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    // plugins
    plugins: createVitePlugins(isBuild)
}
...
```

## pinia

> 下一代`vuex` 文件目录`src/store/index.ts`

```typescript
// 支持模块化，配合plop可以通过命令行一键生成
import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';
import { useUserStore } from './modules/user';
const pinia = createPinia();
export { useAppStore, useUserStore };
export default pinia;
```

> 创建文件`src/store/modules/user/index.ts`

```typescript
// 示例
import { defineStore } from 'pinia';
import piniaStore from '@/store';
export const useUserStore = defineStore(
  // 唯一ID
  'user',
  {
    state: () => ({}),
    getters: {},
    actions: {},
  },
);
```

## plop

> 命令创建组件及 store 自动生成文件，统一文件模版，提供二种预设模板`components`,`store`
>
> 1. 为便于维护，建议使用 plop 命令创建组件，避免手动创建。
> 2. 该命令会在你选择的目录结构下创建同名目录，目录中包含 `index.vue`
> 3. 创建业务组件时可选目录会忽略掉名为 components 的所有目录
> 4. 路由会根据 `/views` 下的目录名及该目录下的`.vue` 文件名或者 单个 `.vue` 后缀的文件名 生成对应文件层级结构的一级/多级路由
> 5. 路由生成时 会忽略最外层 components 目录及以下所文件

```shell
# 启动命令
pnpm run plop

? 请选择需要创建的模式： component - 创建组件
? 是否为全局组件 No
? 请选择组件创建目录 (Use arrow keys)
❯ src/views/home
  src/views/login
  src/views/login/333
```

## svg

> SVG 管理库 (已集成，无需安装)

```shell
# 安装svg依赖
pnpm add vite-plugin-svg-icons
```

> 配置`vite.config.ts`

```typescript
import viteSvgIcons from 'vite-plugin-svg-icons';
export default defineConfig({
plugins:[
...
 viteSvgIcons({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
  }),
]
...
})
```

> 对一个简单的`SvgIcon`组件进行了封装，可以直接读取文件下的`svg`，可以根据文件夹目录自动查找文件。

```html
<template>
  <svg aria-hidden="true" class="svg-icon-spin" :class="calsses">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: String,
      default: 'default',
    },
  });
  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
  const calsses = computed(() => {
    return {
      [`sdms-size-${props.size}`]: props.size,
    };
  });
  const fontSize = reactive({ default: '32px', small: '20px', large: '48px' });
</script>
```

> SVG 组件路径

```shell
# svg 文件路径 src/assets/icons/svg
# 组件路径 src/components/SvgIcon/index.vue
```

> 如何使用

```typescript
import SvgIcon from '/@/components/SvgIcon/index.vue';

// name = 固定svg-前缀 + 文件名
<SvgIcon name="svg-github" size="24" style="margin-right: 10px" />;
```

## http

> `axios`拦截器初步封装，请求调用等方法，区分了模块`index.ts`,`status.ts`,`type.ts`

```typescript
//封装src/api/user/index.ts
import request from '@utils/http/axios';
import { IResponse } from '@utils/http/axios/type';
import { ReqAuth, ReqParams, ResResult } from './type';
enum URL {
  login = '/v1/user/login',
  permission = '/v1/user/permission',
  userProfile = 'mock/api/userProfile',
}
const getUserProfile = async () => request<ReqAuth>({ url: URL.userProfile });
const login = async (data: ReqParams) => request({ url: URL.login, data });
const permission = async () => request<ReqAuth>({ url: URL.permission });
export default { getUserProfile, login, permission };
```

```typescript
//调用
import userApi from '@api/user';
// setup模式下组件可以直接引用
const res = await userApi.profile();
```

## router

> 支持`vue-router4.0`的模块化，通过检索 views 文件夹可自动生成路由，并支持动态路由 ,详情参考 [plop](#plop) 章节

```typescript
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import routes from 'virtual:generated-pages';

console.log(routes, '打印生成自动生成的路由');
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

## mock

> 使用`vite-plugin-mock`插件，目前自动区分和启停的环境配置

```javascript
// vite config
viteMockServe({
  ignore: /^\_/,
  mockPath: 'mock',
  localEnabled: !isBuild,
  prodEnabled: false,
  // https://github.com/anncwb/vite-plugin-mock/issues/9
  injectCode: `
       import { setupProdMockServer } from '../mock/_createProdMockServer';
       setupProdMockServer();
       `,
});
```

> 根目录下创建 `_createProductionServer.ts`文件,非`_`开头文件会被自动加载成 mock 文件

```typescript
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
// 批量加载
const modules = import.meta.globEager('./mock/*.ts');

const mockModules: Array<string> = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
```

## proxy

```typescript
// vite config
import proxy from '@config/vite/proxy';
export default defineConfig({
    ...
    server: {
        hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
        // 服务配置
        port: VITE_PORT, // 类型： number 指定服务器端口;
        open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
        cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
        host: '0.0.0.0', // IP配置，支持从IP启动
        proxy,
    }
    ...
})
```

```typescript
// proxy.ts
import { API_BASE_URL, API_TARGET_URL, MOCK_API_BASE_URL, MOCK_API_TARGET_URL } from '@config/constant';
import { ProxyOptions } from 'vite';
type ProxyTargetList = Record<string, ProxyOptions>;

const init: ProxyTargetList = {
  // test
  [API_BASE_URL]: {
    target: API_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
  },
  // mock
  [MOCK_API_BASE_URL]: {
    target: MOCK_API_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${MOCK_API_BASE_URL}`), '/api'),
  },
};

export default init;
```

# build-setup

> 安装及编译部署说明

```shell
# node: 16.0.0+
# pnpm: 7.20.0+

# 拉取仓库代码
git clone  x x x

# 进入项目文件夹
cd xxx

# 安装项目依赖
pnpm i

# 运行
pnpm dev

# 编译及打包
pnpm run build:dev
pnpm run build:pro

```

# node_modules

> 结合业务场景谨慎增加第三方依赖库，及时维护 `package.json` 版本，并增加说明

#### 依赖库说明

- [pnpm](https://pnpm.io/)替换 npm ,扁平化依赖安装，避免幽灵依赖安装，极大加快依赖安装速度及包大小，加快编译速度
- [mitt 全局事件监听库](https://github.com/developit/mitt)Vue3 官方推荐，替代 eventbus
- [vueuse](https://vueuse.org/)常用工具函数集，防抖截流函数等，也可以使用`lodash`
- [unocss](https:///)原子 css 引擎，属性化类名， 样式准化解决方案
- [Vue I18n](https://vue-i18n.intlify.dev/) 国际化
- [ViteSSG](https://github.com/antfu/vite-ssg)待集成 SEO 优化， Vue3 的服务器上生成，满足 seo 需求
- [Vitest](https://github.com/vitest-dev/vitest) 待集成 基于 Vite 的单元测试工具，目前迭代比较快。

#### UI

- [arco-design](https://github.com/arco-design/arco-design) 字节团队新出的 UI 框架,配置层面更为灵活，能快速响应深度定制化的主题需求。
  - arco 的主题包应用
  ```typescript
  // main.js 中引入已经pnpm i 的主题包样式文件，注意去掉默认样式文件引用
  import '@arco-themes/vue-bitunix-web/index.less';
  ```

# 浏览器支持

> 当前程序不支持 IE 浏览器

> 本地开发推荐使用`Chrome 80+` 或者 `Edge last version`

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

# 扩展资料

- [vue 中文文档](http://vue.dragonlm.com/guide/introduction.html#the-progressive-framework)
- [TypeScript 官方文档](https://www.typescriptlang.org/zh/docs/)
- [vite](https://vitejs.cn/config/)
- [pinia](https://pinia.vuejs.org/introduction.html)
- [vue-router4](https://next.router.vuejs.org/zh/introduction.html)
- [vueuse 的设计与实现](https://zhuanlan.zhihu.com/p/480313279)
- [在 vue3 下使用 ts](http://vue.dragonlm.com/guide/typescript/composition-api.html)
- [ArcoDesign 前端开发文档](https://arco.design/vue/docs/start)

# 项目文档

- #### [约定路由生成规则说明](./docs/约定路由生成规则说明.png)
