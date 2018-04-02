// @flow
import React from "react";
import {    
    ListItem,
    ListItemText,    
    ListItemGraphic,
    ListItemMeta
  } from 'rmwc/List';

import { Product } from '../';

type Props = {
    product: Product,
    onClickItem: (product: Product) => any
};

export const ProductCard = ({ product, onClickItem }: Props) => (
    <ListItem onClick={() => onClickItem(product)}>
        <ListItemGraphic>restaurant_menu</ListItemGraphic>
        <ListItemText>{product.name}</ListItemText>
        <ListItemMeta>add_shopping_cart</ListItemMeta>
    </ListItem>
);
