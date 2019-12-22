import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import { colors } from '../../utils/constants';


interface SidebarProps {
  active?: boolean;
}

export const SidebarWrap = styled.div<SidebarProps>`
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
  padding: 20px;
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  padding: 5px 15px;
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
