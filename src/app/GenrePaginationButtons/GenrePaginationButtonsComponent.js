import React from 'react';

import GenrePaginationListButtons from './GenrePaginationListButtons';

const GenrePaginationButtonsComponent = ({
  handleNextPageClick,
  handlePrevPageClick,
  handlePageNumberClick,
  totalPages,
  currentPage
}) => (
  <div className="btn-pagination pagination is-centered is-rounded">
    <a
      className="btn-pagination-prev pagination-previous"
      disabled={currentPage === 1}
      onClick={handlePrevPageClick}
    >
      Previous Page
    </a>
    <a
      className="btn-pagination-next pagination-next"
      disabled={totalPages <= currentPage}
      onClick={handleNextPageClick}
    >
      Next Page
    </a>
    <GenrePaginationListButtons
      totalPages={totalPages}
      currentPage={currentPage}
      handlePageNumberClick={handlePageNumberClick}
    />
  </div>
);

export default GenrePaginationButtonsComponent;
