import { ORDERS_FETCH_SUCCESS } from ".";

const intialState = [];

export function orderReducer(state = intialState, action) {
    switch (action.type) {
        case ORDERS_FETCH_SUCCESS:
            return action.orders;
        default:
            return state;
    }
}