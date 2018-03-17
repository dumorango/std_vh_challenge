
import React from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { CartComponent } from './';
import { cartActions } from '../cart';
import { orderActions } from '../order';

const Cart = ({ removeItem, placeOrder, cart }) => 
    <CartComponent 
        cart={cart} 
        onClickRemoveItem={removeItem} 
        onClickPlaceOrder={() => placeOrder(cart)} 
    />; 

const getTotal = cart => cart.items
    .map((item) => item.product.price * item.quantity)
    .reduce((acc, itemTotal) => acc + itemTotal , 0);

const withTotal = cart => ({...cart, total: Number(getTotal(cart)).toFixed(2)});

const mapStateToProps = (state) => ({
    cart: withTotal({...state.cart, ...state.cartForm })    
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {...cartActions, placeOrder: orderActions.placeOrder }, 
    dispatch);
  
export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
