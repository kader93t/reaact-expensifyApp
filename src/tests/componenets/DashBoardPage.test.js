import React from 'react'
import DashBoardPage from "../../components/DashBoardPage"
import { shallow } from "enzyme"

test('should render the DashBoardPage ', () => {
    const wrapper = shallow(<DashBoardPage />);
    expect(wrapper).toMatchSnapshot();
})
