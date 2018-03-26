import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {cartActions} from "../cart";
import {ToolbarComponent} from "./components";
import { push } from 'react-router-redux';

class Toolbar extends Component {
    componentWillMount() {

    }
    render() {
        const { cart, goToCart, goToStores } = this.props;
        return <ToolbarComponent
            cart={cart}
            onClickCartIcon={goToCart}
            onClickStoreIcon={goToStores}
        />;
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        goToCart: cartActions.goToCart,
        goToStores: () => dispatch(push('/stores'))
    },
    dispatch
);

export const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(Toolbar);