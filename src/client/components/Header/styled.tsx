import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils/constants';
import { Content } from '../Utils/Content';

interface NavTabProps {
  active?: boolean;
}

export const HeaderWrap = styled.header`
  background: ${colors.accent};
`;

export const HeaderContent = styled(Content)`
  display: flex;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  align-items: shrink;
`;

export const NavTab = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  min-width: 100px;
  padding: 15px 20px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color .2s;
  font-weight: 500;

  &:hover {
    background: ${colors.accent_hover};
    color: #ffffff;
  }

  &.active {
    pointer-events: none;
    background: ${colors.accent_dark};
  }

`;

export const NavTabTitle = styled.span`
  margin-left: 10px;
`;

export const LogOut = styled.span`
  margin-left: auto;
  cursor: pointer;
  color: #ffffff;
`;

export const LogOutText = styled.span`
  margin-left: 7px;

  &:hover {
    text-decoration: underline;
  }
`;
