/**
 * @name Config
 * @description 项目编译配置全局变量 ，vite.config 拆分
 */

// 应用名
export const APP_TITLE = 'bitunix';

// 本地服务端口
export const VITE_PORT = 3000;

// prefix
export const API_PREFIX = '/api';

// serve
export const API_BASE_URL = '/api';
export const API_TARGET_URL = 'http://localhost:3000';

// mock
export const MOCK_API_BASE_URL = '/mock/api'; // 代理匹配路径
export const MOCK_API_TARGET_URL = 'http://localhost:3000';

// 包依赖分析
export const ANALYSIS = true;

// 是否支持Md渲染
export const MARKDOWN = true;

// 代码压缩
export const COMPRESSION = false;

// 删除 console
export const VITE_DROP_CONSOLE = true;
