// @flow
import React from 'react';

import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,    
    ToolbarTitle,
    ToolbarIcon
  } from "rmwc/Toolbar";
import type {Session} from "../../login/SessionModel";

type Props = {
    session: Session,
    onClickOrdersIcon: () => void,
    onClickStoreIcon: () => void,
    onClickLogout: () => void
}
export const ToolbarComponent = ({ session, onClickOrdersIcon, onClickStoreIcon, onClickLogout }: Props) => (
  <Toolbar className="AppToolbar">
    <ToolbarRow>
      <ToolbarSection alignStart={true}>
        <ToolbarTitle>Skip the Dishes</ToolbarTitle>
          { session && <ToolbarIcon use="home" onClick={onClickStoreIcon} /> }
      </ToolbarSection>
        {session &&
            <ToolbarSection alignEnd>
                <ToolbarIcon use="history" onClick={onClickOrdersIcon}/>
                <ToolbarIcon use="exit_to_app" onClick={onClickLogout}/>
            </ToolbarSection>
        }
    </ToolbarRow>
  </Toolbar>
);