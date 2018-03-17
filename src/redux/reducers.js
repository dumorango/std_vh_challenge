
import { createForms } from "react-redux-form";
import { combineReducers } from "redux";
import { loginReducer } from "../login";
import { productReducer } from "../product";
import { cartReducer } from "../cart";

export const rootReducer = combineReducers({ 
    login: loginReducer,
    menu: productReducer,
    cart:cartReducer,
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