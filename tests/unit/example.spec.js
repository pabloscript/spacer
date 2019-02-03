import { shallowMount } from '@vue/test-utils';

describe('sample test', () => {
  it('renders props.msg when passed', () => {
    const comp = 'component';
    const msg = 'new message';
    const wrapper = shallowMount(comp, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
