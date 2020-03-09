import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/constants';


interface ActiveProp {
  active?: string;
}

export const SidebarWrap = styled.div<ActiveProp>`
  flex-shrink: 0;
  width: 300px;
  background: ${colors.bg_sidebar};
  box-shadow: 1px 0 5px rgba(57,73,76,.65);
  transition: width .4s;

  ${(props) => !props.active && `
    width: 100px;
  `}
`;

export const SidebarContent = styled.div`
  padding: 50px 0;
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  padding: 5px 20px;
  color: #ffffff;
  border-bottom: 1px solid ${colors.accent};
`;

export const SidebarHeaderTitle = styled.span`
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  font-size: 18px;
`;

export const SidebarToggle = styled(Icon)`
  cursor: pointer;
`;

export const SidebarCats = styled.div``;

export const SidebarCat = styled(Link)<ActiveProp>`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid ${colors.accent};
  transition: background .2s;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }

  &:last-child {
    border-bottom: 1px solid ${colors.accent};
  }

  ${(props) => props.active && `
    background: ${colors.accent_dark};
  `}
`;

export const SidebarCatTitle = styled.span`
  margin-left: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .8px;
`;
