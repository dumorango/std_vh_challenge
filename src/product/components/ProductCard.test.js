
import React from 'react';
import {shallow} from 'enzyme';
import { ProductCard } from "./ProductCard";
import { ListItemText } from "rmwc";
import type {Product} from "../ProductModel";

describe('product cart', () => {
    const product: Product = {
        name: "product name"
    };
    const onClick = jest.fn();
    const component = shallow(
        <ProductCard product={product} onClickItem={onClick}/>,
    );
    it('should render product name text', () => {
        expect(component.find(ListItemText).render().text()).toEqual(product.name);
    });
    it('should call onClickItem function', () => {
        component.simulate('click');
        expect(onClick).toBeCalledWith(product);
    })
});
