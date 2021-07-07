import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/Home.vue'

describe('HelloWorld.vue', () => {
  const props = {
    msg: 'Message',
  };

  it('renders props when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      props
    });
    expect(wrapper.props().msg).toMatch(props.msg);
  })
})
