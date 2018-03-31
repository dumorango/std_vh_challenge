import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {ToolbarComponent} from "./components";
import { push } from 'react-router-redux';
import {Routes} from "../App";
import {loginActions} from "../login";

class Toolbar extends Component {
    componentWillMount() {

    }
    render() {
        const { goToOrders, goToStores, logout } = this.props;
        return <ToolbarComponent
            onClickOrdersIcon={goToOrders}
            onClickStoreIcon={goToStores}
            onClickLogout={logout}
        />;
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        goToOrders: () => push(Routes.ORDERS),
        goToStores: () => push(Routes.STORES),
        logout: loginActions.logout
    },
    dispatch
);

export const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(Toolbar);