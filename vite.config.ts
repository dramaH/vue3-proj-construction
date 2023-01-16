import { UserConfig, ConfigEnv } from 'vite';
import { createVitePlugins } from './build/vite/plugins';
import { resolve } from 'path';
import proxy from './build/vite/proxy';
import { VITE_PORT } from './build/constant';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir); // 指定文件解析根鹿筋
}

// 配置说明及参考官方文档 https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  let base: string;
  if (command === 'build') {
    // 区分运行环境 TODO:
    base = '/';
  } else {
    base = '/';
  }
  return {
    base,
    resolve: {
      // 使用别名
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
    plugins: createVitePlugins(isBuild),

    //  本地启动server 配置
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: VITE_PORT, // 类型： number 指定本地服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy, // build/vite/proxy.ts
    },

    test: {
      // jest like test api
      globals: true,
      // 模拟dom环境
      environment: 'happy-dom',
      // 支持tsx,jsx
      transformMode: {
        web: [/.[tj]sx$/],
      },
    },
  };
};
