import { shallowMount } from "@vue/test-utils";
import FormInput from '../FormInput.vue';


const factory = () => {
  return shallowMount(FormInput, {
  });
};

describe("FormInput", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});