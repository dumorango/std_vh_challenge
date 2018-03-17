import axios from 'axios';

const orderUrl = 'Order'

export async function placeOrder({ order, session }) {
    return axios.post(orderUrl, order, {
        headers: {
            Authorization: `Bearer ${session}`
        }
    });
}
