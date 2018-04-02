import React from 'react';
import {shallow} from "enzyme";

import {ProductComponent, ProductContainer} from "./ProductContainer";
import {ProductList} from "./components";

describe('product component', () => {
    const getAllProducts = jest.fn();
    const products = [{
        id: 1
    }];
    const addProduct = jest.fn();

    const component = shallow(<ProductComponent
        getAllProducts={getAllProducts}
        products={products}
        addProduct={addProduct}
    />);
    it('should render the ProductList with properties', () => {
        const productList = component.find(ProductList);
        expect(productList.props()).toEqual({
            products,
            onClickProduct: addProduct
        })
    });
    it('should call getAllProducts at mount', () => {
        expect(getAllProducts).toHaveBeenCalled();
    });
});