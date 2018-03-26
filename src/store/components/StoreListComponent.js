import React from 'react';
import {Elevation, List, Typography} from "rmwc";
import {StoreListItem} from "../../product/components/StoreListItem";

export const StoreListComponent = ({ stores = [], onClickStore }) => (
    <Elevation z={1}>                                      
        <List>
            <Typography use="title">Stores</Typography>
            {stores.map((store) => 
                <StoreListItem key={`store-${store.id}`} store={store} onClick={() => onClickStore(store)} />
            )}
        </List>                
    </Elevation>
);