import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Header from './index.vue';
describe('header组件测试集合', () => {
  it('组件挂载', () => {
    const wrapper = shallowMount(Header, {});
    expect(wrapper.find('.header-wrapper').exists()).toBe(true);
  });
});
