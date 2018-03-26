import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { StoreListComponent } from './components/StoreListComponent';

import { storeActions } from ".";

class Store extends Component {
    componentWillMount() {
        this.props.getAllStores();
    }
    render() {
        const { stores } = this.props;
        return <StoreListComponent stores={stores} onClickStore={this.props.goToStoreProducts} />
    }   
}

const mapStateToProps = (state) => ({       
    stores: state.menu.stores
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators(
    storeActions,
    dispatch
);
  
export const StoreContainer = connect(mapStateToProps, mapDispatchToProps)(Store);