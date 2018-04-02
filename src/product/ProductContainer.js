import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { productActions } from ".";

import { ProductList } from "./components";
import {cartActions} from "../cart";

export class ProductComponent extends Component {
    componentWillMount() {
        this.props.getAllProducts(this.props.storeId);
    }
    render() {
        const { products = [] } = this.props;
        return <ProductList products={products} onClickProduct={this.props.addProduct} />
    }
}

const mapStateToProps = (state) => ({
    products: state.menu.products
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        addProduct: cartActions.addProduct,
        getAllProducts: productActions.getAllProducts
    },
    dispatch
);

export const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductComponent);