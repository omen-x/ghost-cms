import styled from 'styled-components';
import { Button } from '@blueprintjs/core';


export const PaginationWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const PaginationLink = styled(Button)`
  font-size: 18px;
  margin: 0 4px;
  padding: 8px 12px;
  
  ${(props) => props.active && `
    pointer-events: none; 
  `}
`;
