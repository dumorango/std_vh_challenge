import React, { Component } from 'react';

import './HomeComponent.css';

import { ProductCard } from '../../product/components/ProductCard';
import {
    List
  } from 'rmwc/List';
import { Typography } from 'rmwc/Typography';
import { Elevation } from 'rmwc/Elevation';

import { CartContainer } from '../../cart';

import { StoreListItem } from '../../product/components/StoreListItem'

export class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }    
    render() {
        const { products = [], stores = [], onClickStore, onClickProduct } = this.props;
        return <div className="HomeComponent">    
            <Elevation z={1}>                                
                { !products.length && 
                    <List>
                        <Typography use="title">Stores</Typography>
                        {stores.map((store) => 
                            <StoreListItem key={`store-${store.id}`} store={store} onClick={this.onClickStore} />
                        )}
                    </List>
                }
                <List>
                    <Typography use="title">Products</Typography>
                    {products.map((product) => 
                        <ProductCard key={`product-card-${product.id}`} product={product} onClick={onClickProduct} />
                    )}
                </List>
            </Elevation>
            <CartContainer />
        </div>
    }
}
