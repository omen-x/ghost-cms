import React from 'react';
import { PaginationLink, PaginationWrap } from './styled';


interface Props {
  pagesCount: number;
  activePage: string;
  navigateToPage: (page: string) => void;
}

const Pagination = ({ pagesCount, activePage, navigateToPage }: Props): JSX.Element => {
  if (pagesCount < 2) return <div />;

  return (
    <PaginationWrap>
      {Array(pagesCount).fill('').map((e, i) => (
        <PaginationLink
          key={i}
          active={`${(i + 1)}` === activePage}
          onClick={(): void => navigateToPage(`${i + 1}`)}
        >
          {i + 1}
        </PaginationLink>
      ))}
    </PaginationWrap>
  );
};


export default Pagination;
