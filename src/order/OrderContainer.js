import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { orderActions } from ".";

import { OrderList } from "./components";

class Order extends Component {
    componentWillMount() {
        this.props.getAllOrders();
    }
    render() {
        const { orders = [], cancelOrder } = this.props;
        return <OrderList orders={orders} onClickCancel={cancelOrder} />
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    orderActions,
    dispatch
);

export const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);