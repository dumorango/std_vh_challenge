import React from 'react';

import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,    
    ToolbarTitle,
    ToolbarIcon
  } from "rmwc/Toolbar";

import { CartToolbarIcon } from "../../cart/components/CartToolbarIcon";
  
export const ToolbarComponent = ({ session, onClickCartIcon, onClickStoreIcon }) => (
  <Toolbar className="AppToolbar">
    <ToolbarRow>
      <ToolbarSection alignStart={true}>
        <ToolbarTitle>Skip the Dishes</ToolbarTitle>
        <ToolbarIcon use="home" onClick={onClickStoreIcon} />
      </ToolbarSection>
      <ToolbarSection alignEnd>
        <CartToolbarIcon onClick={onClickCartIcon}/>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);