import { shallowMount } from '@vue/test-utils'
import CatWorld from '@/components/CatCard.vue'

describe('HelloWorld.vue', () => {
  const props = {
    name: 'Hank',
    img_src: 'imgsrc123',
    sex: 'Male',
    birthday: '01/01/2021',
    breed: 'Siamese',
    color: 'Cream',
    description: 'Hank is a lovely cat. You will love him. He is great!',
  };

  it('renders props when passed', () => {
    const wrapper = shallowMount(CatWorld, {
      props
    });
    expect(wrapper.props().name).toMatch(props.name);
    expect(wrapper.props().img_src).toMatch(props.img_src);
    expect(wrapper.props().sex).toMatch(props.sex);
    expect(wrapper.props().birthday).toMatch(props.birthday);
    expect(wrapper.props().breed).toMatch(props.breed);
    expect(wrapper.props().color).toMatch(props.color);
    expect(wrapper.props().description).toMatch(props.description);
  })
})
