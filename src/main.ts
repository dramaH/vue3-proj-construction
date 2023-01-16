import { createApp } from 'vue';
import App from './App.vue';

import { initialApp } from './plugins';

const app = createApp(App);
initialApp(app).mount('#app'); // 初始应用app所需插件
