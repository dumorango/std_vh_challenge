import axios from 'axios';

const orderUrl = '/Order';

export const placeOrder = async (order) => axios.post(orderUrl, order);

export const getAllOrders = async () => {
    const result = await axios.get(`${orderUrl}/customer`);
    return result.data;
};

export const cancelOrder = async (order) => console.log(`Cancelling order ${order.id}`);