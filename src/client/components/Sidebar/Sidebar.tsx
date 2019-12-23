import { Icon } from '@blueprintjs/core';
import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { categoriesMapping, SidebarCategory } from '../../utils/mapping';
import { SidebarCat, SidebarCats, SidebarCatTitle, SidebarContent, SidebarHeader, SidebarHeaderTitle, SidebarToggle, SidebarWrap } from './styled';
import { mapPathToPage } from '../../utils';


const renderCategories = (categories: SidebarCategory[]): JSX.Element => {
  const [activeCat, setActiveCat] = useState(categories[0].name);

  useEffect(() => {
    setActiveCat(categories[0].name);
  }, [categories]);

  return (
    <SidebarCats>
      {categories.map((category) => (
        <SidebarCat
          key={category.name}
          active={activeCat === category.name}
          onClick={(): void => setActiveCat(category.name)}
        >
          <Icon icon={category.icon} />
          <SidebarCatTitle>{category.name}</SidebarCatTitle>
        </SidebarCat>
      ))}
    </SidebarCats>
  );
};

// TOOD:
// replace path mapping with stored value
const Sidebar = ({ location }: RouteComponentProps): JSX.Element => {
  const currentPage = mapPathToPage(location.pathname);
  const categories = categoriesMapping[currentPage];

  return (
    <SidebarWrap active>
      <SidebarHeader>
        <SidebarToggle
          iconSize={24}
          icon="menu"
        />
        <SidebarHeaderTitle>
          Ghost CMS
        </SidebarHeaderTitle>
      </SidebarHeader>
      <SidebarContent>
        <SidebarCats>
          {categories && categories.length && renderCategories(categories)}
        </SidebarCats>
      </SidebarContent>
    </SidebarWrap>
  );
};


export default withRouter(Sidebar);
