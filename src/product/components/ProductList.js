import React from 'react';

import {ProductCard} from "./ProductCard";
import {List, Typography} from "rmwc";

export const ProductList = ({ products, onClickProduct })  => (
    <List>
        <Typography use="title">Products</Typography>
        {products.map((product) => 
            <ProductCard key={`product-card-${product.id}`} product={product} onClick={onClickProduct} />
        )}
    </List>
);

