import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, boxShadow } from '../../utils/constants';
import { FluidContent } from '../Utils/Content';

interface NavTabProps {
  active?: boolean;
}

export const HeaderWrap = styled.header`
  flex-shrink: 0;
  background: ${colors.accent};
  box-shadow: ${boxShadow.border};
`;

export const HeaderContent = styled(FluidContent)`
  display: flex;
  align-items: center;
  padding-left: 0;
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
    // box-shadow: inset 0 0 2px 2px rgba(0,0,0, .1);
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
