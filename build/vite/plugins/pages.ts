/**
 * @name ConfigPagesPlugin
 * @description src/views动态生成路由  https://github.com/dramaH/vite-plugin-pages
 * @example  src/views/users.vue -> /users
 */
import Pages from 'vite-plugin-pages';
export const ConfigPagesPlugin = () => {
  return Pages({
    pagesDir: [{ dir: 'src/views', baseRoute: '' }],
    extensions: ['vue', 'md'],
    exclude: ['**/components'], // components 目录下的所有
    nuxtStyle: true,
    importMode: 'async',
    // importMode(path){   // 可以根据路由判断是否需要懒加载
    //   return path.includes('ex') ? 'async' : 'sync'
    // }:
    routeBlockLang: 'json5',
  });
};
