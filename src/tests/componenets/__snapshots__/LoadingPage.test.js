import React from 'react';
import { shallow } from "enzyme";
import LoadingPage from "../../../components/LodingPage"

test('should render the loading page correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});
