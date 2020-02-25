import React, { useEffect } from 'react';
import { TableCell, TableRow, TableWrap } from './styled';
import { fixateElementHeight } from '../../utils';


interface ItemsTableProps {
  headers: string[];
  rows?: (string | number)[][];
}

const ItemsTable = ({ headers, rows = [] }: ItemsTableProps): JSX.Element => {
  useEffect(() => {
    fixateElementHeight('items-table');
  });

  return (
    <TableWrap id="items-table">
      <table>
        <thead>
          <TableRow>
            {headers.map((header) => <th key={header}>{header}</th>)}
          </TableRow>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow key={row[0]}>
              {row.map((cell) => <TableCell key={cell}>{cell}</TableCell>)}
            </TableRow>
          ))}
        </tbody>
      </table>
    </TableWrap>
  );
};

export default ItemsTable;
