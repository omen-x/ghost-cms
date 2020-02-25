import styled from 'styled-components';
import { colors } from '../../utils/constants';


export const TableWrap = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  
  th:first-child,
  td:first-child {
    width: 80px;
    text-align:center;
  }
  
  th {
    padding: 8px 20px;
    font-size: 22px;
    text-align: left;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.accent_light};
`;

export const TableCell = styled.td`
  padding: 8px 20px;
  border: 1px solid ${colors.accent_light};
`;
