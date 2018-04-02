import React from "react";
import { shallow } from "enzyme";
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

import {ToolbarContainer, ToolbarInnerComponent} from "./ToolbarContainer";
import { ToolbarComponent } from "./components";

describe('toolbar container', () => {
    const goToOrders = jest.fn();
    const goToStores = jest.fn();
    const onClickLogout = jest.fn();

    const component = shallow(<ToolbarInnerComponent
        goToOrders={goToOrders}
        goToStores={goToStores}
        logout={onClickLogout}
    />);
    it('should render container', () => {
        const store = mockStore({ login: { session : 'session' } });
        shallow(<ToolbarContainer store={store}/>);
    });
    it('should render toolbar component passing down props', () => {
        const child = component.find(ToolbarComponent);
        expect(child.props()).toEqual({
            onClickOrdersIcon: goToOrders,
            onClickStoreIcon: goToStores,
            onClickLogout: onClickLogout
        })
    });
});