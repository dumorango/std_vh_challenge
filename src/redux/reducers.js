
import { createForms } from "react-redux-form";
import { combineReducers } from "redux";

import { loginReducer } from "../login";
import { storeReducer } from "../store";
import { cartReducer } from "../cart";
import { orderReducer } from "../order";

export const rootReducer = combineReducers({ 
    login: loginReducer,
    menu: storeReducer,
    cart:cartReducer,
    orders: orderReducer,
    ...createForms({
      credentials: {
        username: "",
        password: ""
      },
      cartForm: {
        deliveryAddress: "",
        contact: ""
      }      
    })
  });