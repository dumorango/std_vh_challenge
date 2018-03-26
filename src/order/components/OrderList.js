import React from 'react';
import {OrderCard} from "./OrderCard";

export const OrderList = ({ orders }) => {
    return orders.map((order) => <OrderCard key={`order-${order.id}`} order={order} />);
};