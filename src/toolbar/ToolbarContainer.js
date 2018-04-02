// @flow
import React from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {ToolbarComponent} from "./components";
import { push } from 'react-router-redux';
import {Routes} from "../Routes";
import {loginActions} from "../login";

type Props = {
    goToOrders: () => void,
    goToStores: () => void,
    logout: () => void,
    session: string
}

export const ToolbarInnerComponent = ({ session, goToOrders, goToStores, logout }: Props) => (
        <ToolbarComponent
            onClickOrdersIcon={goToOrders}
            onClickStoreIcon={goToStores}
            onClickLogout={logout}
            session={session}
        />
);

const mapStateToProps = (state) => ({
    session: state.login.session
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        goToOrders: () => push(Routes.ORDERS),
        goToStores: () => push(Routes.STORES),
        logout: loginActions.logout
    },
    dispatch
);

export const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(ToolbarInnerComponent);