import React from 'react';
import { Icon } from '@blueprintjs/core';
import { HeaderWrap, Nav, NavTab, NavTabTitle, LogOut, LogOutText, HeaderContent } from './styled';


const Header = (): JSX.Element => (
  <HeaderWrap>
    <HeaderContent>
      <Nav>
        <NavTab to="/" activeClassName="active" exact>
          <Icon icon="dashboard" />
          <NavTabTitle>Dashboard</NavTabTitle>
        </NavTab>
        <NavTab to="/inventory" activeClassName="active">
          <Icon icon="database" />
          <NavTabTitle>Inventory</NavTabTitle>
        </NavTab>
      </Nav>
      <LogOut>
        <Icon icon="log-out" />
        <LogOutText>Log Out</LogOutText>
      </LogOut>
    </HeaderContent>
  </HeaderWrap>
);


export default Header;
