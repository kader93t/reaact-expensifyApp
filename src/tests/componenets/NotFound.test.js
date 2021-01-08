import React from 'react';
import NotFound from "./../../components/NotFoundPage";
import { shallow } from "enzyme";

test('should render the not found page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
})
