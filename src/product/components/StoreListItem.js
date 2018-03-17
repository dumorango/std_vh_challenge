import React from "react";
import {    
    ListItem,
    ListItemText,    
    ListItemGraphic,
    ListItemMeta
  } from 'rmwc/List';

export const StoreListItem = ({ store, onClick }) => (
    <ListItem onClick={() => onClick(store)}>
        <ListItemGraphic>restaurant</ListItemGraphic>
        <ListItemText>{store.name}</ListItemText>
        <ListItemMeta>add</ListItemMeta>
    </ListItem>
);
