import { Icon } from '@blueprintjs/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { setPageCategory as setPageCategoryAction } from '../../services/navigation/actions';
import { currentPageCategorySelector } from '../../services/navigation/selectors';
import { mapPathToPage } from '../../utils';
import { categoriesMapping, SidebarCategory } from '../../utils/mapping';
import { SidebarCat, SidebarCats, SidebarCatTitle, SidebarContent, SidebarHeader, SidebarHeaderTitle, SidebarToggle, SidebarWrap } from './styled';


const renderCategories = (categories: SidebarCategory[]): JSX.Element => {
  const currentPageCategory = useSelector(currentPageCategorySelector);
  const dispatch = useDispatch();
  const setPageCategory = (category: string) => dispatch(setPageCategoryAction(category));

  useEffect(() => {
    setPageCategory(categories[0].name);
  }, [categories]);

  return (
    <SidebarCats>
      {categories.map((category) => (
        <SidebarCat
          key={category.name}
          active={category.name === currentPageCategory}
          onClick={() => setPageCategory(category.name)}
        >
          <Icon icon={category.icon} />
          <SidebarCatTitle>{category.name}</SidebarCatTitle>
        </SidebarCat>
      ))}
    </SidebarCats>
  );
};

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
