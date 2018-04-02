// @flow
import React from 'react';

import {ProductCard} from "./ProductCard";
import {List, Typography} from "rmwc";
import type {Product} from "../ProductModel";

type Props = {
    products: Array<Product>,
    onClickProduct: (product: Product) => any
};

export const ProductList = ({ products, onClickProduct }: Props)  => (
    <List>
        <Typography use="title">Products</Typography>
        {products.map((product) =>
            <ProductCard key={`product-card-${product.id}`} product={product} onClickItem={onClickProduct} />
        )}
    </List>
);

