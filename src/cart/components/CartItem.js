import React from 'react';
import { ListItem, ListItemGraphic, ListItemText, ListItemMeta } from 'rmwc/List';

export const CartItem = ({ item, onClick }) => (
    <ListItem onClick={() => onClick(item)}>
        <ListItemGraphic>cart</ListItemGraphic>
        <ListItemText>{item.product.name} x {item.quantity}</ListItemText>
        <ListItemMeta>remove</ListItemMeta>
    </ListItem>
);