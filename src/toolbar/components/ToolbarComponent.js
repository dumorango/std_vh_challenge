import React from 'react';

import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,    
    ToolbarTitle,
    ToolbarIcon
  } from "rmwc/Toolbar";

export const ToolbarComponent = ({ session, onClickOrdersIcon, onClickStoreIcon, onClickLogout }) => (
  <Toolbar className="AppToolbar">
    <ToolbarRow>
      <ToolbarSection alignStart={true}>
        <ToolbarTitle>Skip the Dishes</ToolbarTitle>
        <ToolbarIcon use="home" onClick={onClickStoreIcon} />
      </ToolbarSection>
      <ToolbarSection alignEnd>
          <ToolbarIcon use="history" onClick={onClickOrdersIcon}/>
          <ToolbarIcon use="exit_to_app" onClick={onClickLogout}/>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);