import React from 'react';
import {shallow} from "enzyme/build/index";
import {ProductList, ProductCard} from ".";

describe('product list', () => {
    const products = [{
        name: "product 1"
    }, {
        name : "product 2"
    }];
    const component = shallow(
        <ProductList products={products} />,
    );
    it('should render product card list', () => {
        expect(component.find(ProductCard)).toHaveLength(2);
    })
});


