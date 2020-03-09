import { Icon } from '@blueprintjs/core';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { categoriesMapping, mapPathToCategory, mapPathToPage, SidebarCategory } from '../../utils/mapping';
import { SidebarCat, SidebarCats, SidebarCatTitle, SidebarContent, SidebarHeader, SidebarHeaderTitle, SidebarToggle, SidebarWrap } from './styled';


const renderCategories = (categories: SidebarCategory[], currentPageCategory: string): JSX.Element => (
  <SidebarCats>
    {categories.map((category) => (
      <SidebarCat
        to={category.path}
        key={category.name}
        active={category.name === currentPageCategory ? 'true' : undefined}
      >
        <Icon icon={category.icon} />
        <SidebarCatTitle>{category.name}</SidebarCatTitle>
      </SidebarCat>
    ))}
  </SidebarCats>
);

const Sidebar = ({ location }: RouteComponentProps): JSX.Element => {
  const currentPage = mapPathToPage(location.pathname);
  const currentCategory = mapPathToCategory(location.pathname);
  const categories = categoriesMapping[currentPage];

  return (
    <SidebarWrap active="true">
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
          {categories && categories.length && renderCategories(categories, currentCategory)}
        </SidebarCats>
      </SidebarContent>
    </SidebarWrap>
  );
};


export default withRouter(Sidebar);
