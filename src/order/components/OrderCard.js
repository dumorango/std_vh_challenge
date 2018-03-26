import React from 'react';
import {Card, CardAction, CardActions, Icon, ListDivider, SimpleListItem, Typography} from "rmwc";
import {CartItem} from "../../cart";

export const OrderCard = ({ order, onClickCancel }) => (
    <Card stroked style={{marginTop: '1rem'}}>
        <Typography
            use="subheading2"
            tag="div"
            style={{padding: '0.5rem 1rem'}}
            theme="text-secondary-on-background"
        >
            Order ID: {order.id}
        </Typography>
        <ListDivider />
        { order.orderItems.map( item =>
            <CartItem  key={`item-${item.product.id}`} item={item} onClick={() => null} showIcon={false}/>
        )}
        <ListDivider />
        <SimpleListItem graphic="timeline" text={`Status ${order.status}`} />
        <ListDivider />
        <SimpleListItem graphic="attach_money" text={`Total ${order.total}`} />
        <ListDivider />
        <CardActions fullBleed>
            <CardAction onClick={onClickCancel}>Cancel<Icon use="cancel"/></CardAction>
        </CardActions>
    </Card>
);
