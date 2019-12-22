import React, { useState } from 'react';
import { SidebarContent, SidebarHeader, SidebarHeaderTitle, SidebarToggle, SidebarWrap } from './styled';


const Sidebar = (): JSX.Element => {
  const [active] = useState(true);

  return (
    <SidebarWrap active={active}>
      <SidebarHeader>
        <SidebarToggle
          iconSize={24}
          icon="menu"
        />
        <SidebarHeaderTitle>
          Ghost CMS
        </SidebarHeaderTitle>
      </SidebarHeader>
      <SidebarContent />
    </SidebarWrap>
  );
};


export default Sidebar;
