import React from 'react';

const GenrePaginationListButtons = ({
  currentPage,
  totalPages,
  handlePageNumberClick
}) => {
  const realPagesNumber = totalPages > 993 ? 500 : totalPages;

  return (
    <ul className="pagination-list">
      <li
        onClick={() => {
          const pageNumber =
            currentPage >= realPagesNumber - 4
              ? realPagesNumber - 4
              : currentPage;
          handlePageNumberClick(pageNumber);
        }}
      >
        <a className="pagination-link is-current" aria-current="page">
          {currentPage >= realPagesNumber - 4
            ? realPagesNumber - 4
            : currentPage}
        </a>
      </li>
      <li
        onClick={() => {
          const pageNumber =
            currentPage >= realPagesNumber - 3
              ? realPagesNumber - 3
              : currentPage + 1;
          handlePageNumberClick(pageNumber);
        }}
      >
        <a className="pagination-link">
          {currentPage >= realPagesNumber - 3
            ? realPagesNumber - 3
            : currentPage + 1}
        </a>
      </li>
      <li
        onClick={() => {
          const pageNumber =
            currentPage >= realPagesNumber - 1
              ? realPagesNumber - 2
              : currentPage + 2;
          handlePageNumberClick(pageNumber);
        }}
      >
        <a className="pagination-link">
          {currentPage >= realPagesNumber - 1
            ? realPagesNumber - 2
            : currentPage + 2}
        </a>
      </li>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <li
        onClick={() => {
          console.log(realPagesNumber);
          handlePageNumberClick(realPagesNumber);
        }}
      >
        <a className="pagination-link">{realPagesNumber}</a>
      </li>
    </ul>
  );
};

export default GenrePaginationListButtons;
