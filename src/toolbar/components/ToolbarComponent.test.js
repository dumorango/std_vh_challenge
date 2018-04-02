import React from 'react';
import { shallow } from "enzyme";

import { ToolbarComponent } from "./ToolbarComponent";
import  {ToolbarIcon } from "rmwc";

describe('toolbar component', () => {
    const session = {};
    it('should render without session', () => {
        const component = shallow(<ToolbarComponent/>);
        const icons = component.find(ToolbarIcon);
        expect(icons.length).toBe(0)
    })
    it('shound render with session and call function props on click', () => {
        const onClickOrdersIcon = jest.fn();
        const onClickStoreIcon = jest.fn();
        const onClickLogout = jest.fn();
        const component = shallow(<ToolbarComponent
            session={session}
            onClickOrdersIcon={onClickOrdersIcon}
            onClickStoreIcon={onClickStoreIcon}
            onClickLogout={onClickLogout}
        />);
        const icons = component.find(ToolbarIcon);
        icons.forEach((icon) => icon.simulate('click'));
        expect(onClickOrdersIcon).toHaveBeenCalled();
        expect(onClickStoreIcon).toHaveBeenCalled();
        expect(onClickLogout).toHaveBeenCalled();
    })
});