import React from 'react';

const PaginationButtonsComponent = ({
  handleNextPageClick,
  handlePrevPageClick,
  totalPages,
  currentPage
}) => (
  <div className="buttons pagination is-rounded">
    <button
      className="buttons--prev pagination-previous"
      disabled={currentPage === 1}
      onClick={handlePrevPageClick}
    >
      Previous Page
    </button>
    <button
      className="buttons--next pagination-next"
      disabled={totalPages <= currentPage}
      onClick={handleNextPageClick}
    >
      Next Page
    </button>
  </div>
);

export default PaginationButtonsComponent;
