import { LocationQueryRaw, createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages'; // vite 路由自动生成插件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '../store';
import { isLogin } from '../utils/auth';

const extraRoute = [
  {
    path: '/index',
    redirect: '/',
  },
];
routes.push(...extraRoute);

console.log(routes);
//导入生成的路由数据
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const userStore = useUserStore();
  if (isLogin()) {
    if (userStore.role) {
      next();
    } else {
      try {
        await userStore.info();
        next();
      } catch (error) {
        await userStore.logout();
        next({
          name: 'login',
          query: {
            redirect: to.name,
            ...to.query,
          } as LocationQueryRaw,
        });
      }
    }
  } else {
    if (to.name === 'login') {
      next();
      return;
    }
    next({
      name: 'login',
      query: {
        redirect: to.name,
        ...to.query,
      } as LocationQueryRaw,
    });
  }
});

router.afterEach((_to) => {
  NProgress.done();
});

export default router;
