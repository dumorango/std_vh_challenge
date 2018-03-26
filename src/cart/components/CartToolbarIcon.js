import React from 'react';

import { ToolbarIcon } from "rmwc";

export const CartToolbarIcon = ({ cart, onClick }) => (
    <ToolbarIcon use="shopping_cart" onClick={onClick}/>
);