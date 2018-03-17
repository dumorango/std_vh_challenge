import React from 'react';

import { Typography } from 'rmwc/Typography';
import { Card, CardPrimaryAction, CardActions, CardAction } from 'rmwc/Card';
import { List, ListItem } from 'rmwc/List';

import { Form, Control } from 'react-redux-form';

import { CartItem } from './CartItem';

import { TextFieldControl } from '../../commons/TextFieldControl';

const MODEL = "cartForm"

export const CartComponent = ({ cart = { items : []}, onClickRemoveItem, onClickPlaceOrder }) => (
    <Card>
        <CardPrimaryAction>
            <div style={{padding: '1rem'}}>
                <Typography use="title">Cart</Typography>
                <List>
                    {
                        cart.items && 
                        cart.items.map( item => 
                            <CartItem key={`item-${item.product.id}`} item={item} onClick={onClickRemoveItem}/>
                        )
                    }   
                    <ListItem>
                        <Typography use="subheading2">Order Total $ {cart.total}</Typography>
                    </ ListItem>    
                </ List>     
                <Form model={MODEL} >            
            <Control.input
                required
                type="text"
                model=".deliveryAddress"
                label="Delivery Address"  
                component={TextFieldControl}              
            />
            <Control.input
                required
                type="text"
                model=".contact"
                label="Contact"                
                component={TextFieldControl}              
            />                    
        </Form>                                            
            </div>   
        </CardPrimaryAction>   

        <CardActions fullBleed> 
                   
                <CardAction onClick={onClickPlaceOrder}>Order</CardAction>            
        </CardActions>    

    </Card>
);