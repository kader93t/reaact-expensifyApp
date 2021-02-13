import { Login }  from "../../components/Login";
import { shallow } from "enzyme";
import React from 'react';

test('should render the login page correctly ', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
})

test("should call startlogin when button clicked", () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login login={startLogin} />);
    wrapper.find("button").simulate("Click");
    expect(startLogin).toHaveBeenCalled();

});