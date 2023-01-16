import { mount } from '@vue/test-utils';
import TestDome from './TestDome.vue';

test('测试TestDome', async () => {
  //expect(TestDome).toBeTruthy();

  const wrapper = mount(TestDome, {
    propsData: {
      count: 4,
    },
  });

  expect(wrapper.text()).toContain('4 x 2 = 8');
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.get('button').trigger('click');

  expect(wrapper.text()).toContain('4 x 3 = 12');

  await wrapper.get('button').trigger('click');

  expect(wrapper.text()).toContain('4 x 4 = 16');
});
