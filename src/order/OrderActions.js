import { placeOrder } from './OrderService';
import { push } from 'react-router-redux';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';

const cartToOrder = (cart) => ({        
        // customerId it's fixed because it is not returned from the auth API
        customerId: 0,
        deliveryAddress: cart.deliveryAddress,
        contact: cart.contact,
        storeId: cart.storeId,
        orderItems: cart.items.map((cartItem) => ({
            quantity: cartItem.quantity,
            productId: cartItem.product.id,
            product: cartItem.product
        })),                  
        status: "WAITING"    
    }); 

export const orderActions = {
   placeOrder: (cart) => async (dispatch, getState) => {
        const order =  cartToOrder(cart);
        dispatch({ type: PLACE_ORDER_REQUEST, order });
        const newOrder = await placeOrder({order, session: getState().login.session});
        dispatch({ type: PLACE_ORDER_SUCCESS, order: newOrder });
        dispatch(push('/orders'));
   }   
}