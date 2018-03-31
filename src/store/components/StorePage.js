import React from 'react';
import { CartContainer } from "../../cart/index";
import { ProductContainer } from "../../product/index";

export const StorePage = ({ match }) => (
    <div style={{
        display: "grid",
        gridTemplateColumns: "auto 30rem",
        gridGap: "2rem"
    }}>
        <ProductContainer storeId={match.params.storeId}/>
        <CartContainer />
    </div>
);