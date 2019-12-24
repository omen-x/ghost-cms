import { Icon } from '@blueprintjs/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { setPageCategory as setPageCategoryAction } from '../../services/navigation/actions';
import { mapPathToPage } from '../../utils';
import { categoriesMapping, SidebarCategory } from '../../utils/mapping';
import { SidebarCat, SidebarCats, SidebarCatTitle, SidebarContent, SidebarHeader, SidebarHeaderTitle, SidebarToggle, SidebarWrap } from './styled';
import { AppState } from '../../app/reducer';
import { currentPageCategorySelector } from '../../services/navigation/selectors';


interface Props extends RouteComponentProps {
  currentPageCategory: string;
  setPageCategory: (s: string) => void;
}

const renderCategories = (categories: SidebarCategory[], setPageCategory: (s: string) => void, currentPageCategory: string): JSX.Element => {
  useEffect(() => {
    setPageCategory(categories[0].name);
  }, [categories]);

  return (
    <SidebarCats>
      {categories.map((category) => (
        <SidebarCat
          key={category.name}
          active={category.name === currentPageCategory}
          onClick={(): void => setPageCategory(category.name)}
        >
          <Icon icon={category.icon} />
          <SidebarCatTitle>{category.name}</SidebarCatTitle>
        </SidebarCat>
      ))}
    </SidebarCats>
  );
};

const Sidebar = ({ location, setPageCategory, currentPageCategory }: Props): JSX.Element => {
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
          {categories && categories.length && renderCategories(categories, setPageCategory, currentPageCategory)}
        </SidebarCats>
      </SidebarContent>
    </SidebarWrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentPageCategory: currentPageCategorySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ReturnType<typeof setPageCategoryAction>>) => ({
  setPageCategory: (category: string) => dispatch(setPageCategoryAction(category)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
