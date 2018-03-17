
import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { HomeComponent } from './';
import { productActions } from '../product';
import { cartActions } from '../cart';

class Home extends Component {
    componentWillMount() {
        this.props.getAllStores();
    }   
    render()  {
        return <HomeComponent stores={this.props.stores} products={this.props.products} onClickProduct={this.props.addProduct} />; 
    }
}

const mapStateToProps = (state) => ({       
    stores: state.menu.stores
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators(
    { ...productActions, ...cartActions }, dispatch);
  
export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
