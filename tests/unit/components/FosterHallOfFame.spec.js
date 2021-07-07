import { shallowMount } from '@vue/test-utils'
import FosterWorld from '@/components/FosterHallOfFame.vue'

describe('HelloWorld.vue', () => {
  const props = {
    msg: 'Message',
  };

  it('renders props when passed', () => {
    const wrapper = shallowMount(FosterWorld, {
      props
    });
    expect(wrapper.props().msg).toMatch(props.msg);
  })
})
