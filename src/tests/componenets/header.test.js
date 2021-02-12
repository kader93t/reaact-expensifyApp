import React from 'react';
import { shallow } from "enzyme";
import { Header } from "./../../components/Header";

test("should render the header", () => {
    const wrapper = shallow(<Header signOut={ jest.fn() }/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call the signOut whene button clicked', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header signOut={startLogOut} />);
    wrapper.find("button").simulate("click");
    expect(startLogOut).toHaveBeenCalled();
});
