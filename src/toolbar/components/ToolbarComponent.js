import React from 'react';

import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,    
    ToolbarTitle
  } from "rmwc/Toolbar";
  
export const ToolbarComponent = ({ session }) => (
  <Toolbar className="AppToolbar">
    <ToolbarRow>
      <ToolbarSection alignStart={true}>
        <ToolbarTitle>Skip the Dishes</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);