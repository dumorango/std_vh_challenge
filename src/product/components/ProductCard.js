import React from "react";
import {    
    ListItem,
    ListItemText,    
    ListItemGraphic,
    ListItemMeta
  } from 'rmwc/List';

export const ProductCard = ({ product, onClick }) => (
    <ListItem onClick={() => onClick(product)}>
        <ListItemGraphic>restaurant_menu</ListItemGraphic>
        <ListItemText>{product.name}</ListItemText>
        <ListItemMeta>add_shopping_cart</ListItemMeta>
    </ListItem>
);
