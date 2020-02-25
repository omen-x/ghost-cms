import React from 'react';
import { TableCell, TableRow, TableWrap } from './styled';


interface ItemsTableProps {
  headers: string[];
  rows?: (string | number)[][];
}

function ItemsTable<T>({ headers, rows = [] }: ItemsTableProps): JSX.Element {
  return (
    <TableWrap>
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
    </TableWrap>
  );
}

export default ItemsTable;
