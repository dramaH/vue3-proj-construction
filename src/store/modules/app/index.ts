import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';

export const useAppStore = defineStore(
  // 唯一ID元素
  'app',
  {
    state: () => ({
      title: 'bitunix',
      h1: 'bitunix',
      theme: '',
    }),
    getters: {},
    actions: {
      // Change theme color
      toggleTheme(dark: boolean) {
        if (dark) {
          this.theme = 'dark';
          document.documentElement.classList.add('dark');
        } else {
          this.theme = 'light';
          document.documentElement.classList.remove('dark');
        }
      },
    },
    persist: {
      key: 'theme',
      storage: localStorage,
      paths: ['theme'],
    },
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}
